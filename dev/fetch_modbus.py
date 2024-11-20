#!/usr/bin/python
import sys
import os
import time
import getopt
import socket
#import ConfigParser
import struct
import binascii

ipaddress = str(sys.argv[1])
from pymodbus.client.tcp import ModbusTcpClient 

def to_signed(val, bits):
    """Convert an unsigned integer to signed integer with specified bit-width."""
    if val & (1 << (bits - 1)):
        return val - (1 << bits)
    return val

client = ModbusTcpClient(ipaddress, port=1502)

prod = client.read_holding_registers(40083, 2)
netz = client.read_holding_registers(40206, 5)
storage = client.read_holding_registers(62836, 2)
storage_percent = client.read_holding_registers(62852, 2)

storage_status = client.read_holding_registers(57710, 2)
combined_32 = (storage_status.registers[1] << 16) | storage_status.registers[0]
float_value = struct.unpack('!f', struct.pack('!I', combined_32))[0]

#lifetime_export = client.read_holding_registers(57722, 4)
#combined_64 = (lifetime_export.registers[3] << 48) | (lifetime_export.registers[2] << 32) | (lifetime_export.registers[1] << 16) | lifetime_export.registers[0]

print(f"Produktion: {to_signed(prod.registers[0], 16)*(10**to_signed(prod.registers[1], 16))}W")
print(f"Netz: {to_signed(netz.registers[0], 16)*(10**to_signed(netz.registers[4], 16))}W")
print(f"Akkustrom: {to_signed(storage.registers[0], 16)*(10**to_signed(storage.registers[1], 16))}W")
print(f"Akkustand: {to_signed(storage_percent.registers[0], 16)*(10**to_signed(storage_percent.registers[1], 16))}%")
print(f"Akkuzustand: {float_value}")
