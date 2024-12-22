import "math"
e_in_data = from(bucket: "smart_meter_data")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r._measurement == "energy")
  |> filter(fn: (r) => r._field == "E_in")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)

e_in_initial = e_in_data
  |> group()
  |> sort(columns: ["_time"], desc:false)
  |> first()
  |> findRecord(fn: (key) => true, idx: 0)

// multiplying is done to round as otherwise a floating point error occurs sometimes when everything should be zero
e_in_data
  |> map(fn: (r) => ({
      r with _value: math.round(x: ((r._value - e_in_initial._value) * 1000000.0)) / 1000000.0
  }))
  |> yield(name:"e_in")


e_out_data = from(bucket: "smart_meter_data")
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r._measurement == "energy")
  |> filter(fn: (r) => r._field == "E_out")
  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)

e_out_initial = e_out_data
  |> group()
  |> sort(columns: ["_time"], desc:false)
  |> first()
  |> findRecord(fn: (key) => true, idx: 0)

e_out_data
  |> map(fn: (r) => ({
      r with _value: math.round(x: ((r._value - e_out_initial._value) * 1000000.0)) / 1000000.0
  }))
  |> yield(name:"e_out")
