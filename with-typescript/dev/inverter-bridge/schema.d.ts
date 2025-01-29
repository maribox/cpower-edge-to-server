/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/solar_api/v1/GetInverterRealtimeData.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    Datacollection: "CommonInverterData" | "3PInverterData" | "CumulationInverterData";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return Inverter Realtime Data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_InverterData_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetInverterInfo.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return Inverter Info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_InverterInfo_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetPowerFlowRealtimeData.fcgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return powerflow realtime data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_PowerflowRealtimeData_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetActiveDeviceInfo.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return currently active external devices */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_ActiveDeviceInfo_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetMeterRealtimeData.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    Scope?: "Device" | "System";
                    DeviceId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return Meter Realtime Data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_MeterRealtimeData_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetOhmpilotRealtimeData.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    Scope?: "Device" | "System";
                    DeviceId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return Ohmpilot Realtime Data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_OhmpilotRealtimeData_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/solar_api/v1/GetStorageRealtimeData.cgi": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    Scope?: "Device" | "System";
                    DeviceId?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Return Storage Realtime Data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["T_StorageRealtimeData_FullStruct"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        T_InverterData_FullStruct: {
            Body: {
                Data: components["schemas"]["T_InverterDataSelector"];
            };
            Head: {
                RequestArguments?: {
                    Datacollection?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_InverterDataSelector: components["schemas"]["T_3PInverterData"] | components["schemas"]["T_CommonInverterData"] | components["schemas"]["T_CommonInverterData_NotRunning"] | components["schemas"]["T_CumulationInverterData"];
        T_MeterSelector: components["schemas"]["T_IME1Phase"] | components["schemas"]["T_IME3Phase"] | components["schemas"]["T_CCS"] | components["schemas"]["T_Gavacci1Phase"] | components["schemas"]["T_Gavacci3Phase"] | components["schemas"]["T_Generic"];
        T_3PInverterData: {
            IAC_L1: components["schemas"]["T_IAC_L1"];
            IAC_L2: components["schemas"]["T_IAC_L2"];
            IAC_L3: components["schemas"]["T_IAC_L3"];
            T_AMBIENT: components["schemas"]["T_T_AMBIENT"];
            UAC_L1: components["schemas"]["T_UAC_L1"];
            UAC_L2: components["schemas"]["T_UAC_L2"];
            UAC_L3: components["schemas"]["T_UAC_L3"];
        };
        T_IAC_L1: {
            Unit: string;
            Value: number;
        };
        T_IAC_L2: {
            Unit: string;
            Value: number;
        };
        T_IAC_L3: {
            Unit: string;
            Value: number;
        };
        T_T_AMBIENT: {
            Unit: string;
            Value: number;
        };
        T_UAC_L1: {
            Unit: string;
            Value: number;
        };
        T_UAC_L2: {
            Unit: string;
            Value: number;
        };
        T_UAC_L3: {
            Unit: string;
            Value: number;
        };
        T_CommonInverterData: {
            DAY_ENERGY: components["schemas"]["T_DAY_ENERGY"];
            DeviceStatus: components["schemas"]["T_DeviceStatus"];
            FAC: components["schemas"]["T_FAC"];
            IAC: components["schemas"]["T_IAC"];
            IDC: components["schemas"]["T_IDC"];
            IDC_2: components["schemas"]["T_IDC_2"];
            IDC_3: components["schemas"]["T_IDC_3"];
            PAC: components["schemas"]["T_PAC"];
            SAC: components["schemas"]["T_SAC"];
            TOTAL_ENERGY: components["schemas"]["T_TOTAL_ENERGY"];
            UAC: components["schemas"]["T_UAC"];
            UDC: components["schemas"]["T_UDC"];
            UDC_2: components["schemas"]["T_UDC_2"];
            UDC_3: components["schemas"]["T_UDC_3"];
            YEAR_ENERGY: components["schemas"]["T_YEAR_ENERGY"];
        };
        T_DAY_ENERGY: {
            Unit: string;
            Value: number;
        };
        T_DeviceStatus: {
            ErrorCode: number;
            InverterState: string;
            StatusCode: number;
        };
        T_FAC: {
            Unit: string;
            Value: number;
        };
        T_IAC: {
            Unit: string;
            Value: number;
        };
        T_IDC: {
            Unit: string;
            Value: number;
        };
        T_IDC_2: {
            Unit: string;
            Value: number;
        };
        T_IDC_3: {
            Unit: string;
            Value: number;
        };
        T_PAC: {
            Unit: string;
            Value: number;
        };
        T_SAC: {
            Unit: string;
            Value: number;
        };
        T_TOTAL_ENERGY: {
            Unit: string;
            Value: number;
        };
        T_UAC: {
            Unit: string;
            Value: number;
        };
        T_UDC: {
            Unit: string;
            Value: number;
        };
        T_UDC_2: {
            Unit: string;
            Value: number;
        };
        T_UDC_3: {
            Unit: string;
            Value: number;
        };
        T_YEAR_ENERGY: {
            Unit: string;
            Value: number;
        };
        T_CommonInverterData_NotRunning: {
            DAY_ENERGY: components["schemas"]["T_DAY_ENERGY"];
            DeviceStatus: components["schemas"]["T_DeviceStatus"];
            IAC: components["schemas"]["T_IAC"];
            IDC: components["schemas"]["T_IDC"];
            IDC_2: components["schemas"]["T_IDC_2"];
            IDC_3: components["schemas"]["T_IDC_3"];
            PAC: components["schemas"]["T_PAC"];
            SAC: components["schemas"]["T_SAC"];
            TOTAL_ENERGY: components["schemas"]["T_TOTAL_ENERGY"];
            UAC: components["schemas"]["T_UAC"];
            UDC: components["schemas"]["T_UDC"];
            UDC_2: components["schemas"]["T_UDC_2"];
            UDC_3: components["schemas"]["T_UDC_3"];
            YEAR_ENERGY: components["schemas"]["T_YEAR_ENERGY"];
        };
        T_CumulationInverterData: {
            DAY_ENERGY: components["schemas"]["T_DAY_ENERGY"];
            DeviceStatus: components["schemas"]["T_DeviceStatus"];
            PAC: components["schemas"]["T_PAC"];
            TOTAL_ENERGY: components["schemas"]["T_TOTAL_ENERGY"];
            YEAR_ENERGY: components["schemas"]["T_YEAR_ENERGY"];
        };
        T_InverterInfo_FullStruct: {
            Body: {
                Data: components["schemas"]["T_InverterInfo"];
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_InverterInfo: {
            1: components["schemas"]["T_1"];
        };
        T_1: {
            CustomName: string;
            DT: number;
            ErrorCode: number;
            PVPower: number;
            Show: number;
            StatusCode: number;
            InverterState: string;
            UniqueID: string;
        };
        T_MeterRealtimeData_FullStruct: {
            Body: {
                Data: components["schemas"]["T_MeterRealtimeData"];
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_MeterRealtimeData: {
            [key: string]: components["schemas"]["T_MeterSelector"];
        };
        T_Meter: {
            Details: components["schemas"]["T_Details"];
        };
        T_CCS: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Phase_2_Consumed: number;
            EnergyReal_WAC_Phase_2_Produced: number;
            EnergyReal_WAC_Phase_3_Consumed: number;
            EnergyReal_WAC_Phase_3_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
            Voltage_AC_Phase_Average: number;
        };
        T_Gavacci1Phase: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_Phase_1: number;
        };
        T_Gavacci3Phase: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
        };
        T_Generic: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Phase_2_Consumed: number;
            EnergyReal_WAC_Phase_2_Produced: number;
            EnergyReal_WAC_Phase_3_Consumed: number;
            EnergyReal_WAC_Phase_3_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
            Voltage_AC_Phase_Average: number;
        };
        T_IME1Phase: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Sum: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Phase_1_Consumed: number;
            EnergyReal_WAC_Phase_1_Produced: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_Phase_1: number;
        };
        T_IME3Phase: {
            Details: components["schemas"]["T_Details"];
            Current_AC_Phase_1: number;
            Current_AC_Phase_2: number;
            Current_AC_Phase_3: number;
            Enable: number;
            EnergyReactive_VArAC_Phase_1_Consumed: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
            EnergyReactive_VArAC_Sum_Consumed: number;
            EnergyReactive_VArAC_Sum_Produced: number;
            EnergyReal_WAC_Minus_Absolute: number;
            EnergyReal_WAC_Plus_Absolute: number;
            EnergyReal_WAC_Sum_Consumed: number;
            EnergyReal_WAC_Sum_Produced: number;
            Frequency_Phase_Average: number;
            Meter_Location_Current: number;
            PowerApparent_S_Phase_1: number;
            PowerApparent_S_Phase_2: number;
            PowerApparent_S_Phase_3: number;
            PowerApparent_S_Sum: number;
            PowerFactor_Phase_1: number;
            PowerFactor_Phase_2: number;
            PowerFactor_Phase_3: number;
            PowerFactor_Sum: number;
            PowerReactive_Q_Phase_1: number;
            PowerReactive_Q_Phase_2: number;
            PowerReactive_Q_Phase_3: number;
            PowerReactive_Q_Sum: number;
            PowerReal_P_Phase_1: number;
            PowerReal_P_Phase_2: number;
            PowerReal_P_Phase_3: number;
            PowerReal_P_Sum: number;
            Timestamp: number;
            Visible: number;
            Voltage_AC_PhaseToPhase_12: number;
            Voltage_AC_PhaseToPhase_23: number;
            Voltage_AC_PhaseToPhase_31: number;
            Voltage_AC_Phase_1: number;
            Voltage_AC_Phase_2: number;
            Voltage_AC_Phase_3: number;
        };
        T_Details: {
            Manufacturer: string;
            Serial: string;
            Model: string;
        };
        T_OhmpilotRealtimeData_FullStruct: {
            Body: {
                Data: components["schemas"]["T_OhmpilotRealtimeData"];
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_OhmpilotRealtimeData: {
            [key: string]: components["schemas"]["T_Ohmpilot"];
        };
        T_Ohmpilot: {
            Details: components["schemas"]["T_Details_Ohmpilot"];
            CodeOfState: number;
            EnergyReal_WAC_Sum_Consumed: number;
            PowerReal_PAC_Sum: number;
            Temperature_Channel_1: number;
            EnergyReactive_VArAC_Phase_1_Produced: number;
        };
        T_Details_Ohmpilot: {
            Manufacturer: string;
            Serial: string;
            Model: string;
            Hardware: string;
            Software: string;
        };
        T_StorageRealtimeData_FullStruct: {
            Body: {
                Data: components["schemas"]["T_StorageRealtimeData"];
            };
            Head: {
                RequestArguments?: {
                    Scope?: string;
                    DeviceId?: string;
                };
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_StorageRealtimeData: {
            [key: string]: components["schemas"]["T_Storage"];
        };
        T_Storage: {
            Controller: components["schemas"]["T_Controller"];
            Modules: unknown[];
        };
        T_Controller: {
            Details: components["schemas"]["T_Controller_Details"];
            Capacity_Maximum: number;
            Current_DC: number;
            DesignedCapacity: number;
            Enable: number;
            StateOfCharge_Relative: number;
            Status_BatteryCell: number;
            Temperature_Cell: number;
            TimeStamp: number;
            Voltage_DC: number;
        };
        T_Controller_Details: {
            Manufacturer: string;
            Serial: string;
            Model: string;
        };
        T_PowerflowRealtimeData_FullStruct: {
            Body: {
                Data: components["schemas"]["T_PowerFlowRealtimeData"];
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_PowerFlowRealtimeData: {
            inverters: components["schemas"]["T_inverters"];
            // manually corrected:
            Site: components["schemas"]["T_Site"];
        };
        T_inverters: {
            1: components["schemas"]["T_1_Powerflow"];
            Site: components["schemas"]["T_Site"];
            Version: string;
        };
        T_Site: {
            BackupMode: number;
            BatteryStandby: string;
            E_Day: number;
            E_Year: number;
            E_Total: number;
            Meter_Location: string;
            Mode: string;
            P_Akku: number;
            P_Grid: number;
            P_Load: number;
            P_PV: number;
            rel_Autonomy: number;
            rel_SelfConsumption: number;
        };
        T_1_Powerflow: {
            Battery_Mode: string;
            DT: number;
            E_Day: number;
            E_Year: number;
            E_Total: number;
            P: number;
            SOC: number;
        };
        T_ActiveDeviceInfo_FullStruct: {
            Body: {
                Data: components["schemas"]["T_Data"];
            };
            Head: {
                Status: {
                    Code: number;
                    Reason?: string;
                    UserMessage?: string;
                };
                TimeStamp: string;
            };
        };
        T_ActiveDeviceInfo_1: {
            DT: number;
            Serial: string;
        };
        T_Data: {
            Inverter: components["schemas"]["T_ActiveDeviceInfo_Inverter"];
            Meter: components["schemas"]["T_ActiveDeviceInfo_Meter"];
            Storage: components["schemas"]["T_ActiveDeviceInfo_Storage"];
            Ohmpilot: components["schemas"]["T_ActiveDeviceInfo_Ohmpilot"];
        };
        T_ActiveDeviceInfo_Inverter: {
            1: components["schemas"]["T_ActiveDeviceInfo_1"];
        };
        T_ActiveDeviceInfo_Meter: {
            [key: string]: components["schemas"]["T_Meter_MeterEntry"];
        };
        T_ActiveDeviceInfo_Storage: {
            [key: string]: components["schemas"]["T_Storage_StorageEntry"];
        };
        T_ActiveDeviceInfo_Ohmpilot: {
            [key: string]: components["schemas"]["T_Ohmpilot_OhmpilotEntry"];
        };
        T_Meter_MeterEntry: {
            DT: number;
            Serial: string;
        };
        T_Storage_StorageEntry: {
            DT: number;
            Serial: string;
        };
        T_Ohmpilot_OhmpilotEntry: {
            DT: number;
            Serial: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
