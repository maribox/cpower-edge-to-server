import "date"
import "math"
import "timezone"

option location = timezone.location(name: "Europe/Berlin")
mod_int = (v, div) => {
    quotient = math.floor(x: float(v: v) / float(v: div))
    remainder = int(v: float(v: v) - quotient * float(v: div))
    return remainder
}
entries = from(bucket: "smart_meter_data")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "energy")
  |> filter(fn: (r) => r["_field"] == "E_in" or r["_field"] == "E_out")
  |> aggregateWindow(every: 1h, fn: last, createEmpty: false)
  |> difference(columns: ["_value"])
  |> pivot(rowKey: ["_time"], columnKey: ["_field"], valueColumn: "_value")
  |> sort(columns: ["_time"])

n_entries = (entries
  |> count(column: "E_in")
  |> findRecord(
          fn: (key) => true,
          idx: 0,
      )).E_in

rest_entries = entries |> limit(n:n_entries - 1)
  |> map(fn: (r) => ({ r with hour: 
      string(v: mod_int(v: date.hour(t: r._time) - 1, div: 24))
      + " - " + 
      string(v: mod_int(v: (date.hour(t: r._time) - 0), div: 24) )  
    }))

last_entry = entries |> tail(n:1)
  |> map(fn: (r) => ({ r with hour: 
      string(v: mod_int(v: date.hour(t: r._time), div: 24))
      + " - " + 
      "now"
    }))

union(tables: [rest_entries, last_entry])
  |> map(fn: (r) => ({ r with E_in_minus_E_out: r.E_in - r.E_out }))
  |> drop(columns: ["_measurement", "_start", "_stop", "meter_number", "_time"])