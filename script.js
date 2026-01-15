(function() {
  "use strict";

  // Default OUI entries (400+ common vendors)
  var defaultOuiLines = [
    // Cisco
    "00-00-0C Cisco Systems", "00-01-42 Cisco Systems", "00-01-43 Cisco Systems", "00-01-63 Cisco Systems",
    "00-01-64 Cisco Systems", "00-01-96 Cisco Systems", "00-01-97 Cisco Systems", "00-01-C7 Cisco Systems",
    "00-01-C9 Cisco Systems", "00-02-16 Cisco Systems", "00-02-17 Cisco Systems", "00-02-3D Cisco Systems",
    "00-02-4A Cisco Systems", "00-02-4B Cisco Systems", "00-02-7D Cisco Systems", "00-02-7E Cisco Systems",
    "00-02-B9 Cisco Systems", "00-02-BA Cisco Systems", "00-02-FC Cisco Systems", "00-02-FD Cisco Systems",
    "00-03-31 Cisco Systems", "00-03-32 Cisco Systems", "00-03-6B Cisco Systems", "00-03-6C Cisco Systems",
    "00-03-9F Cisco Systems", "00-03-A0 Cisco Systems", "00-03-E3 Cisco Systems", "00-03-E4 Cisco Systems",
    "00-03-FD Cisco Systems", "00-03-FE Cisco Systems", "D4-6A-6A Cisco Systems", "D4-6D-50 Cisco Systems",
    // Apple
    "00-03-93 Apple, Inc.", "00-05-02 Apple, Inc.", "00-0A-27 Apple, Inc.", "00-0A-95 Apple, Inc.",
    "00-0D-93 Apple, Inc.", "00-10-FA Apple, Inc.", "00-11-24 Apple, Inc.", "00-14-51 Apple, Inc.",
    "00-16-CB Apple, Inc.", "00-17-F2 Apple, Inc.", "00-19-E3 Apple, Inc.", "00-1B-63 Apple, Inc.",
    "00-1C-B3 Apple, Inc.", "00-1D-4F Apple, Inc.", "00-1E-52 Apple, Inc.", "00-1E-C2 Apple, Inc.",
    "00-1F-5B Apple, Inc.", "00-1F-F3 Apple, Inc.", "00-21-E9 Apple, Inc.", "00-22-41 Apple, Inc.",
    "00-23-12 Apple, Inc.", "00-23-32 Apple, Inc.", "00-23-6C Apple, Inc.", "00-23-DF Apple, Inc.",
    "00-24-36 Apple, Inc.", "00-25-00 Apple, Inc.", "00-25-4B Apple, Inc.", "00-25-BC Apple, Inc.",
    "00-26-08 Apple, Inc.", "00-26-4A Apple, Inc.", "00-26-B0 Apple, Inc.", "00-26-BB Apple, Inc.",
    "04-0C-CE Apple, Inc.", "04-15-52 Apple, Inc.", "04-1E-64 Apple, Inc.", "04-26-65 Apple, Inc.",
    "04-48-9A Apple, Inc.", "04-4B-ED Apple, Inc.", "04-52-F3 Apple, Inc.", "04-54-53 Apple, Inc.",
    "04-D3-CF Apple, Inc.", "04-DB-56 Apple, Inc.", "04-E5-36 Apple, Inc.", "04-F1-3E Apple, Inc.",
    "04-F7-E4 Apple, Inc.", "08-00-07 Apple, Inc.", "08-66-98 Apple, Inc.", "08-6D-41 Apple, Inc.",
    "08-70-45 Apple, Inc.", "08-74-02 Apple, Inc.", "10-1C-0C Apple, Inc.", "10-40-F3 Apple, Inc.",
    "10-41-7F Apple, Inc.", "10-93-E9 Apple, Inc.", "10-94-BB Apple, Inc.", "10-9A-DD Apple, Inc.",
    "10-DD-B1 Apple, Inc.", "14-10-9F Apple, Inc.", "14-5A-05 Apple, Inc.", "14-8F-C6 Apple, Inc.",
    "14-99-E2 Apple, Inc.", "14-BD-61 Apple, Inc.", "18-20-32 Apple, Inc.", "18-34-51 Apple, Inc.",
    "18-65-90 Apple, Inc.", "18-9E-FC Apple, Inc.", "18-AF-61 Apple, Inc.", "18-AF-8F Apple, Inc.",
    "18-E7-F4 Apple, Inc.", "18-EE-69 Apple, Inc.", "18-F6-43 Apple, Inc.", "1C-1A-C0 Apple, Inc.",
    "1C-36-BB Apple, Inc.", "1C-5C-F2 Apple, Inc.", "1C-91-48 Apple, Inc.", "1C-9E-46 Apple, Inc.",
    "1C-AB-A7 Apple, Inc.", "1C-E6-2B Apple, Inc.", "20-3C-AE Apple, Inc.", "20-78-F0 Apple, Inc.",
    "20-7D-74 Apple, Inc.", "20-9B-CD Apple, Inc.", "20-A2-E4 Apple, Inc.", "20-AB-37 Apple, Inc.",
    "20-C9-D0 Apple, Inc.", "24-1E-EB Apple, Inc.", "24-5B-A7 Apple, Inc.", "24-A0-74 Apple, Inc.",
    "24-AB-81 Apple, Inc.", "24-E3-14 Apple, Inc.", "24-F0-94 Apple, Inc.", "28-0B-5C Apple, Inc.",
    "28-37-37 Apple, Inc.", "28-5A-EB Apple, Inc.", "28-6A-B8 Apple, Inc.", "28-6A-BA Apple, Inc.",
    "28-A0-2B Apple, Inc.", "28-CF-DA Apple, Inc.", "28-CF-E9 Apple, Inc.", "28-E0-2C Apple, Inc.",
    "28-E1-4C Apple, Inc.", "28-E7-CF Apple, Inc.", "28-ED-6A Apple, Inc.", "28-F0-76 Apple, Inc.",
    "2C-1F-23 Apple, Inc.", "2C-33-61 Apple, Inc.", "2C-36-A0 Apple, Inc.", "2C-3E-CF Apple, Inc.",
    "2C-54-CF Apple, Inc.", "2C-61-F6 Apple, Inc.", "2C-B4-3A Apple, Inc.", "2C-BE-08 Apple, Inc.",
    "30-10-E4 Apple, Inc.", "30-35-AD Apple, Inc.", "30-63-6B Apple, Inc.", "30-90-AB Apple, Inc.",
    "30-F7-C5 Apple, Inc.", "34-08-BC Apple, Inc.", "34-12-98 Apple, Inc.", "34-15-9E Apple, Inc.",
    "34-36-3B Apple, Inc.", "34-51-C9 Apple, Inc.", "34-A3-95 Apple, Inc.", "34-AB-37 Apple, Inc.",
    "34-C0-59 Apple, Inc.", "34-E2-FD Apple, Inc.", "38-0F-4A Apple, Inc.", "38-48-4C Apple, Inc.",
    "38-71-DE Apple, Inc.", "38-89-2C Apple, Inc.", "38-8C-50 Apple, Inc.", "38-B5-4D Apple, Inc.",
    "38-C9-86 Apple, Inc.", "38-CA-DA Apple, Inc.", "3C-06-30 Apple, Inc.", "3C-07-71 Apple, Inc.",
    "3C-15-C2 Apple, Inc.", "3C-2E-F9 Apple, Inc.", "3C-2E-FF Apple, Inc.", "3C-AB-8E Apple, Inc.",
    "3C-D0-F8 Apple, Inc.", "3C-E0-72 Apple, Inc.", "40-30-04 Apple, Inc.", "40-33-1A Apple, Inc.",
    "40-3C-FC Apple, Inc.", "40-4D-7F Apple, Inc.", "40-6C-8F Apple, Inc.", "40-83-1D Apple, Inc.",
    "40-98-AD Apple, Inc.", "40-9C-28 Apple, Inc.", "40-A6-D9 Apple, Inc.", "40-B3-95 Apple, Inc.",
    "40-BC-60 Apple, Inc.", "40-CB-C0 Apple, Inc.", "40-D3-2D Apple, Inc.", "44-00-10 Apple, Inc.",
    "44-2A-60 Apple, Inc.", "44-4C-0C Apple, Inc.", "44-D8-84 Apple, Inc.", "44-FB-42 Apple, Inc.",
    "48-43-7C Apple, Inc.", "48-4B-AA Apple, Inc.", "48-60-BC Apple, Inc.", "48-74-6E Apple, Inc.",
    "48-A1-95 Apple, Inc.", "48-BF-6B Apple, Inc.", "48-D7-05 Apple, Inc.", "48-E9-F1 Apple, Inc.",
    "4C-32-75 Apple, Inc.", "4C-57-CA Apple, Inc.", "4C-74-BF Apple, Inc.", "4C-7C-5F Apple, Inc.",
    "4C-8D-79 Apple, Inc.", "4C-B1-99 Apple, Inc.", "50-32-37 Apple, Inc.", "50-7A-55 Apple, Inc.",
    "50-82-D5 Apple, Inc.", "50-A6-7F Apple, Inc.", "50-BC-96 Apple, Inc.", "50-EA-D6 Apple, Inc.",
    "54-26-96 Apple, Inc.", "54-4E-90 Apple, Inc.", "54-72-4F Apple, Inc.", "54-9F-13 Apple, Inc.",
    "54-AE-27 Apple, Inc.", "54-E4-3A Apple, Inc.", "54-EA-A8 Apple, Inc.", "58-1F-AA Apple, Inc.",
    "58-40-4E Apple, Inc.", "58-55-CA Apple, Inc.", "58-B0-35 Apple, Inc.", "5C-59-48 Apple, Inc.",
    "5C-8D-4E Apple, Inc.", "5C-95-AE Apple, Inc.", "5C-96-9D Apple, Inc.", "5C-97-F3 Apple, Inc.",
    "5C-F5-DA Apple, Inc.", "5C-F7-E6 Apple, Inc.", "5C-F9-38 Apple, Inc.", "60-03-08 Apple, Inc.",
    "60-33-4B Apple, Inc.", "60-69-44 Apple, Inc.", "60-92-17 Apple, Inc.", "60-C5-47 Apple, Inc.",
    "60-D9-C7 Apple, Inc.", "60-F4-45 Apple, Inc.", "60-F8-1D Apple, Inc.", "60-FA-CD Apple, Inc.",
    "60-FB-42 Apple, Inc.", "60-FE-C5 Apple, Inc.", "64-20-0C Apple, Inc.", "64-4B-F0 Apple, Inc.",
    "64-76-BA Apple, Inc.", "64-9A-BE Apple, Inc.", "64-A3-CB Apple, Inc.", "64-B0-A6 Apple, Inc.",
    "64-B9-E8 Apple, Inc.", "64-E6-82 Apple, Inc.", "68-09-27 Apple, Inc.", "68-5B-35 Apple, Inc.",
    "68-64-4B Apple, Inc.", "68-96-7B Apple, Inc.", "68-9C-70 Apple, Inc.", "68-A8-6D Apple, Inc.",
    "68-AB-1E Apple, Inc.", "68-AE-20 Apple, Inc.", "68-D9-3C Apple, Inc.", "68-DB-CA Apple, Inc.",
    "68-FB-7E Apple, Inc.", "68-FE-F7 Apple, Inc.", "6C-3E-6D Apple, Inc.", "6C-40-08 Apple, Inc.",
    "6C-4D-73 Apple, Inc.", "6C-70-9F Apple, Inc.", "6C-72-E7 Apple, Inc.", "6C-8D-C1 Apple, Inc.",
    "6C-94-F8 Apple, Inc.", "6C-AB-31 Apple, Inc.", "6C-C2-6B Apple, Inc.", "70-11-24 Apple, Inc.",
    "70-14-A6 Apple, Inc.", "70-3E-AC Apple, Inc.", "70-48-0F Apple, Inc.", "70-56-81 Apple, Inc.",
    "70-73-CB Apple, Inc.", "70-81-EB Apple, Inc.", "70-A2-B3 Apple, Inc.", "70-CD-60 Apple, Inc.",
    "70-DE-E2 Apple, Inc.", "70-E7-2C Apple, Inc.", "70-EC-E4 Apple, Inc.", "70-F0-87 Apple, Inc.",
    "74-1B-B2 Apple, Inc.", "74-81-14 Apple, Inc.", "74-8D-08 Apple, Inc.", "74-E1-B6 Apple, Inc.",
    "74-E2-F5 Apple, Inc.", "78-31-C1 Apple, Inc.", "78-3A-84 Apple, Inc.", "78-4F-43 Apple, Inc.",
    "78-6C-1C Apple, Inc.", "78-7B-8A Apple, Inc.", "78-88-6D Apple, Inc.", "78-9F-70 Apple, Inc.",
    "78-A3-E4 Apple, Inc.", "78-CA-39 Apple, Inc.", "78-D7-5F Apple, Inc.", "78-FD-94 Apple, Inc.",
    "7C-01-91 Apple, Inc.", "7C-04-D0 Apple, Inc.", "7C-11-BE Apple, Inc.", "7C-50-49 Apple, Inc.",
    "7C-5C-F8 Apple, Inc.", "7C-6D-62 Apple, Inc.", "7C-6D-F8 Apple, Inc.", "7C-C3-A1 Apple, Inc.",
    "7C-C5-37 Apple, Inc.", "7C-D1-C3 Apple, Inc.", "7C-F0-5F Apple, Inc.", "7C-FA-DF Apple, Inc.",
    "80-00-6E Apple, Inc.", "80-49-71 Apple, Inc.", "80-82-23 Apple, Inc.", "80-92-9F Apple, Inc.",
    "80-B0-3D Apple, Inc.", "80-BE-05 Apple, Inc.", "80-E6-50 Apple, Inc.", "80-EA-96 Apple, Inc.",
    "84-29-99 Apple, Inc.", "84-38-35 Apple, Inc.", "84-78-8B Apple, Inc.", "84-85-06 Apple, Inc.",
    "84-89-AD Apple, Inc.", "84-8E-0C Apple, Inc.", "84-A1-34 Apple, Inc.", "84-B1-53 Apple, Inc.",
    "84-FC-AC Apple, Inc.", "84-FC-FE Apple, Inc.", "88-1F-A1 Apple, Inc.", "88-53-95 Apple, Inc.",
    "88-63-DF Apple, Inc.", "88-66-A5 Apple, Inc.", "88-6B-6E Apple, Inc.", "88-C6-63 Apple, Inc.",
    "88-CB-87 Apple, Inc.", "88-E8-7F Apple, Inc.", "8C-00-6D Apple, Inc.", "8C-29-37 Apple, Inc.",
    "8C-2D-AA Apple, Inc.", "8C-58-77 Apple, Inc.", "8C-7B-9D Apple, Inc.", "8C-7C-92 Apple, Inc.",
    "8C-85-90 Apple, Inc.", "8C-8E-F2 Apple, Inc.", "8C-FA-BA Apple, Inc.", "90-27-E4 Apple, Inc.",
    "90-3C-92 Apple, Inc.", "90-60-F1 Apple, Inc.", "90-72-40 Apple, Inc.", "90-84-0D Apple, Inc.",
    "90-8D-6C Apple, Inc.", "90-B0-ED Apple, Inc.", "90-B2-1F Apple, Inc.", "90-B9-31 Apple, Inc.",
    "90-C1-C6 Apple, Inc.", "90-FD-61 Apple, Inc.", "94-94-26 Apple, Inc.", "94-BF-2D Apple, Inc.",
    "94-E9-6A Apple, Inc.", "94-F6-A3 Apple, Inc.", "98-01-A7 Apple, Inc.", "98-03-D8 Apple, Inc.",
    "98-10-E8 Apple, Inc.", "98-46-0A Apple, Inc.", "98-5A-EB Apple, Inc.", "98-9E-63 Apple, Inc.",
    "98-B8-E3 Apple, Inc.", "98-CA-33 Apple, Inc.", "98-D6-BB Apple, Inc.", "98-E0-D9 Apple, Inc.",
    "98-F0-AB Apple, Inc.", "98-FE-94 Apple, Inc.", "9C-04-EB Apple, Inc.", "9C-20-7B Apple, Inc.",
    "9C-29-3F Apple, Inc.", "9C-35-EB Apple, Inc.", "9C-4F-DA Apple, Inc.", "9C-84-BF Apple, Inc.",
    "9C-8B-A0 Apple, Inc.", "9C-E3-3F Apple, Inc.", "9C-F3-87 Apple, Inc.", "9C-F4-8E Apple, Inc.",
    "A0-18-28 Apple, Inc.", "A0-3B-E3 Apple, Inc.", "A0-4E-A7 Apple, Inc.", "A0-56-F3 Apple, Inc.",
    "A0-99-9B Apple, Inc.", "A0-D7-95 Apple, Inc.", "A0-ED-CD Apple, Inc.", "A4-5E-60 Apple, Inc.",
    "A4-67-06 Apple, Inc.", "A4-B1-97 Apple, Inc.", "A4-B8-05 Apple, Inc.", "A4-C3-61 Apple, Inc.",
    "A4-D1-8C Apple, Inc.", "A4-D1-D2 Apple, Inc.", "A4-E9-75 Apple, Inc.", "A4-F1-E8 Apple, Inc.",
    "A8-20-66 Apple, Inc.", "A8-51-5B Apple, Inc.", "A8-5B-78 Apple, Inc.", "A8-5C-2C Apple, Inc.",
    "A8-66-7F Apple, Inc.", "A8-86-DD Apple, Inc.", "A8-8E-24 Apple, Inc.", "A8-96-8A Apple, Inc.",
    "A8-BB-CF Apple, Inc.", "A8-FA-D8 Apple, Inc.", "AC-29-3A Apple, Inc.", "AC-3C-0B Apple, Inc.",
    "AC-61-EA Apple, Inc.", "AC-7F-3E Apple, Inc.", "AC-87-A3 Apple, Inc.", "AC-BC-32 Apple, Inc.",
    "AC-CF-5C Apple, Inc.", "AC-E4-B5 Apple, Inc.", "AC-FD-EC Apple, Inc.", "B0-19-C6 Apple, Inc.",
    "B0-34-95 Apple, Inc.", "B0-48-1A Apple, Inc.", "B0-65-BD Apple, Inc.", "B0-70-2D Apple, Inc.",
    "B0-9F-BA Apple, Inc.", "B4-18-D1 Apple, Inc.", "B4-4B-D2 Apple, Inc.", "B4-8B-19 Apple, Inc.",
    "B4-F0-AB Apple, Inc.", "B4-F6-1C Apple, Inc.", "B8-09-8A Apple, Inc.", "B8-17-C2 Apple, Inc.",
    "B8-27-EB Raspberry Pi Foundation", "B8-41-A4 Apple, Inc.", "B8-44-D9 Apple, Inc.",
    "B8-53-AC Apple, Inc.", "B8-5A-F7 Apple, Inc.", "B8-63-4D Apple, Inc.", "B8-78-2E Apple, Inc.",
    "B8-8D-12 Apple, Inc.", "B8-C1-11 Apple, Inc.", "B8-C7-5D Apple, Inc.", "B8-E8-56 Apple, Inc.",
    "B8-F6-B1 Apple, Inc.", "B8-FF-61 Apple, Inc.", "BC-3B-AF Apple, Inc.", "BC-4C-C4 Apple, Inc.",
    "BC-52-B7 Apple, Inc.", "BC-54-36 Apple, Inc.", "BC-67-78 Apple, Inc.", "BC-6C-21 Apple, Inc.",
    "BC-92-6B Apple, Inc.", "BC-A9-20 Apple, Inc.", "BC-D1-1F Apple, Inc.", "BC-EC-5D Apple, Inc.",
    "BC-FE-D9 Apple, Inc.", "C0-1A-DA Apple, Inc.", "C0-63-94 Apple, Inc.", "C0-84-7A Apple, Inc.",
    "C0-9F-42 Apple, Inc.", "C0-A5-3E Apple, Inc.", "C0-B6-58 Apple, Inc.", "C0-CC-F8 Apple, Inc.",
    "C0-CE-CD Apple, Inc.", "C0-D0-12 Apple, Inc.", "C0-F2-FB Apple, Inc.", "C4-2C-03 Apple, Inc.",
    "C4-B3-01 Apple, Inc.", "C8-1E-E7 Apple, Inc.", "C8-2A-14 Apple, Inc.", "C8-33-4B Apple, Inc.",
    "C8-69-CD Apple, Inc.", "C8-6F-1D Apple, Inc.", "C8-85-50 Apple, Inc.", "C8-B5-B7 Apple, Inc.",
    "C8-BC-C8 Apple, Inc.", "C8-D0-83 Apple, Inc.", "C8-E0-EB Apple, Inc.", "C8-F6-50 Apple, Inc.",
    "CC-08-E0 Apple, Inc.", "CC-08-FB Apple, Inc.", "CC-20-E8 Apple, Inc.", "CC-25-EF Apple, Inc.",
    "CC-29-F5 Apple, Inc.", "CC-44-63 Apple, Inc.", "CC-78-5F Apple, Inc.", "CC-C7-60 Apple, Inc.",
    "D0-03-4B Apple, Inc.", "D0-23-DB Apple, Inc.", "D0-25-98 Apple, Inc.", "D0-33-11 Apple, Inc.",
    "D0-4F-7E Apple, Inc.", "D0-A6-37 Apple, Inc.", "D0-C5-F3 Apple, Inc.", "D0-D2-B0 Apple, Inc.",
    "D0-E1-40 Apple, Inc.", "D4-61-9D Apple, Inc.", "D4-9A-20 Apple, Inc.", "D4-A3-3D Apple, Inc.",
    "D4-DC-CD Apple, Inc.", "D4-F4-6F Apple, Inc.", "D8-00-4D Apple, Inc.", "D8-1D-72 Apple, Inc.",
    "D8-30-62 Apple, Inc.", "D8-96-95 Apple, Inc.", "D8-9E-3F Apple, Inc.", "D8-A2-5E Apple, Inc.",
    "D8-BB-2C Apple, Inc.", "D8-CF-9C Apple, Inc.", "D8-D1-CB Apple, Inc.", "DC-08-56 Apple, Inc.",
    "DC-0C-5C Apple, Inc.", "DC-2B-2A Apple, Inc.", "DC-2B-61 Apple, Inc.", "DC-37-14 Apple, Inc.",
    "DC-41-5F Apple, Inc.", "DC-56-E7 Apple, Inc.", "DC-86-D8 Apple, Inc.", "DC-9B-9C Apple, Inc.",
    "DC-A4-CA Apple, Inc.", "DC-A9-04 Apple, Inc.", "E0-33-8E Apple, Inc.", "E0-5F-45 Apple, Inc.",
    "E0-66-78 Apple, Inc.", "E0-AC-CB Apple, Inc.", "E0-B5-2D Apple, Inc.", "E0-B9-BA Apple, Inc.",
    "E0-C7-67 Apple, Inc.", "E0-C9-7A Apple, Inc.", "E0-F5-C6 Apple, Inc.", "E0-F8-47 Apple, Inc.",
    "E4-25-E7 Apple, Inc.", "E4-8B-7F Apple, Inc.", "E4-98-D6 Apple, Inc.", "E4-9A-79 Apple, Inc.",
    "E4-9A-DC Apple, Inc.", "E4-C6-3D Apple, Inc.", "E4-CE-8F Apple, Inc.", "E4-E4-AB Apple, Inc.",
    "E8-04-0B Apple, Inc.", "E8-06-88 Apple, Inc.", "E8-80-2E Apple, Inc.", "E8-8D-28 Apple, Inc.",
    "E8-B2-AC Apple, Inc.", "EC-35-86 Apple, Inc.", "EC-85-2F Apple, Inc.", "F0-18-98 Apple, Inc.",
    "F0-24-75 Apple, Inc.", "F0-4F-7C Apple, Inc.", "F0-79-60 Apple, Inc.", "F0-99-BF Apple, Inc.",
    "F0-B4-79 Apple, Inc.", "F0-C1-F1 Apple, Inc.", "F0-CB-A1 Apple, Inc.", "F0-D1-A9 Apple, Inc.",
    "F0-DB-E2 Apple, Inc.", "F0-DB-F8 Apple, Inc.", "F0-DC-E2 Apple, Inc.", "F0-F6-1C Apple, Inc.",
    "F4-0F-24 Apple, Inc.", "F4-1B-A1 Apple, Inc.", "F4-37-B7 Apple, Inc.", "F4-5C-89 Apple, Inc.",
    "F4-F1-5A Apple, Inc.", "F4-F9-51 Apple, Inc.", "F8-1E-DF Apple, Inc.", "F8-27-93 Apple, Inc.",
    "F8-62-14 Apple, Inc.", "F8-95-EA Apple, Inc.", "F8-E9-4E Apple, Inc.", "FC-25-3F Apple, Inc.",
    "FC-D8-48 Apple, Inc.", "FC-E9-98 Apple, Inc.", "FC-FC-48 Apple, Inc.",
    // Samsung
    "00-02-78 Samsung", "00-07-AB Samsung", "00-09-18 Samsung", "00-0D-AE Samsung",
    "00-12-47 Samsung", "00-12-FB Samsung", "00-13-77 Samsung", "00-15-99 Samsung",
    "00-16-32 Samsung", "00-16-6B Samsung", "00-16-6C Samsung", "00-17-C9 Samsung",
    "00-17-D5 Samsung", "00-18-AF Samsung", "00-1A-8A Samsung", "00-1B-98 Samsung",
    "00-1C-43 Samsung", "00-1D-25 Samsung", "00-1D-F6 Samsung", "00-1E-7D Samsung",
    "00-1F-CC Samsung", "00-21-19 Samsung", "00-21-D1 Samsung", "00-23-39 Samsung",
    "00-23-99 Samsung", "00-24-54 Samsung", "00-24-90 Samsung", "00-24-91 Samsung",
    "00-25-66 Samsung", "00-25-67 Samsung", "00-26-37 Samsung", "00-26-5D Samsung",
    "04-18-0F Samsung", "08-08-C2 Samsung", "08-D4-2B Samsung", "08-EE-8B Samsung",
    "0C-14-20 Samsung", "0C-71-5D Samsung", "10-1D-C0 Samsung", "10-77-B1 Samsung",
    "14-49-E0 Samsung", "18-22-7E Samsung", "18-3A-2D Samsung", "18-67-B0 Samsung",
    "1C-62-B8 Samsung", "1C-66-AA Samsung", "20-13-E0 Samsung", "20-64-32 Samsung",
    "24-4B-03 Samsung", "28-27-BF Samsung", "28-98-7B Samsung", "28-BA-B5 Samsung",
    "2C-AE-2B Samsung", "30-19-66 Samsung", "30-96-FB Samsung", "30-CD-A7 Samsung",
    "34-23-BA Samsung", "34-BE-00 Samsung", "34-C3-AC Samsung", "38-01-97 Samsung",
    "38-16-D1 Samsung", "38-2D-D1 Samsung", "3C-5A-37 Samsung", "3C-62-00 Samsung",
    "40-0E-85 Samsung", "44-4E-1A Samsung", "44-6D-6C Samsung", "44-78-3E Samsung",
    "48-44-F7 Samsung", "48-A0-74 Samsung", "4C-3C-16 Samsung", "4C-BC-A5 Samsung",
    "50-01-BB Samsung", "50-32-75 Samsung", "50-85-69 Samsung", "50-A4-C8 Samsung",
    "50-CC-F8 Samsung", "50-F0-D3 Samsung", "54-40-AD Samsung", "54-88-0E Samsung",
    "54-92-BE Samsung", "58-C3-8B Samsung", "5C-0A-5B Samsung", "5C-2E-59 Samsung",
    "5C-3C-27 Samsung", "5C-A3-9D Samsung", "60-6B-BD Samsung", "60-A1-0A Samsung",
    "60-D0-A9 Samsung", "64-77-91 Samsung", "64-B3-10 Samsung", "68-27-37 Samsung",
    "68-48-98 Samsung", "68-EB-AE Samsung", "6C-2F-2C Samsung", "6C-8F-B5 Samsung",
    "70-28-8B Samsung", "70-F9-27 Samsung", "74-45-8A Samsung", "74-A5-28 Samsung",
    "78-1F-DB Samsung", "78-25-AD Samsung", "78-40-E4 Samsung", "78-47-1D Samsung",
    "78-52-1A Samsung", "78-AB-BB Samsung", "78-D6-F0 Samsung", "7C-0B-C6 Samsung",
    "84-11-9E Samsung", "84-25-DB Samsung", "84-2E-27 Samsung", "84-38-38 Samsung",
    "84-55-A5 Samsung", "84-98-66 Samsung", "88-32-9B Samsung", "88-9B-39 Samsung",
    "8C-71-F8 Samsung", "8C-77-12 Samsung", "90-00-DB Samsung", "90-18-7C Samsung",
    "94-01-C2 Samsung", "94-35-0A Samsung", "94-51-03 Samsung", "94-63-D1 Samsung",
    "98-0C-82 Samsung", "98-52-B1 Samsung", "9C-02-98 Samsung", "9C-3A-AF Samsung",
    "A0-0B-BA Samsung", "A0-82-1F Samsung", "A4-07-B6 Samsung", "A8-06-00 Samsung",
    "AC-36-13 Samsung", "AC-5F-3E Samsung", "B0-47-BF Samsung", "B0-72-BF Samsung",
    "B4-07-F9 Samsung", "B4-3A-28 Samsung", "B4-62-93 Samsung", "B4-79-A7 Samsung",
    "B8-5A-73 Samsung", "BC-14-85 Samsung", "BC-20-A4 Samsung", "BC-44-86 Samsung",
    "C0-97-27 Samsung", "C4-42-02 Samsung", "C4-50-06 Samsung", "C4-57-6E Samsung",
    "C8-19-F7 Samsung", "CC-07-AB Samsung", "D0-17-6A Samsung", "D0-22-BE Samsung",
    "D0-25-44 Samsung", "D0-59-E4 Samsung", "D4-87-D8 Samsung", "D4-E8-B2 Samsung",
    "D8-57-EF Samsung", "DC-71-44 Samsung", "E4-12-1D Samsung", "E4-40-E2 Samsung",
    "E4-58-B8 Samsung", "E8-03-9A Samsung", "E8-4E-84 Samsung", "EC-1F-72 Samsung",
    "F0-25-B7 Samsung", "F0-5A-09 Samsung", "F4-09-D8 Samsung", "F4-42-8F Samsung",
    "F8-04-2E Samsung", "F8-3F-51 Samsung", "FC-A1-3E Samsung", "FC-34-97 Samsung",
    // Microsoft / Xbox
    "00-15-5D Microsoft", "00-17-FA Microsoft", "00-1D-D8 Microsoft", "00-22-48 Microsoft",
    "00-25-AE Microsoft", "00-50-F2 Microsoft", "28-18-78 Microsoft", "30-59-B7 Microsoft",
    "48-50-73 Microsoft", "50-1A-C5 Microsoft", "58-82-A8 Microsoft", "60-45-BD Microsoft",
    "7C-1E-52 Microsoft", "7C-ED-8D Microsoft", "98-5F-D3 Microsoft", "B4-0E-DE Microsoft",
    "C8-3F-26 Microsoft", "D4-81-D7 Microsoft", "DC-B4-C4 Microsoft",
    // VMware / VirtualBox
    "00-50-56 VMware", "00-0C-29 VMware", "00-05-69 VMware", "00-1C-14 VMware",
    "00-1C-42 Parallels", "08-00-27 VirtualBox",
    // Intel
    "00-02-B3 Intel", "00-03-47 Intel", "00-04-23 Intel", "00-07-E9 Intel",
    "00-0C-F1 Intel", "00-0E-0C Intel", "00-0E-35 Intel", "00-11-11 Intel",
    "00-12-F0 Intel", "00-13-02 Intel", "00-13-20 Intel", "00-13-CE Intel",
    "00-13-E8 Intel", "00-15-00 Intel", "00-15-17 Intel", "00-16-6F Intel",
    "00-16-76 Intel", "00-16-EA Intel", "00-16-EB Intel", "00-18-DE Intel",
    "00-19-D1 Intel", "00-19-D2 Intel", "00-1B-21 Intel", "00-1B-77 Intel",
    "00-1C-BF Intel", "00-1C-C0 Intel", "00-1D-E0 Intel", "00-1D-E1 Intel",
    "00-1E-64 Intel", "00-1E-65 Intel", "00-1E-67 Intel", "00-1F-3B Intel",
    "00-1F-3C Intel", "00-21-5C Intel", "00-21-5D Intel", "00-21-6A Intel",
    "00-21-6B Intel", "00-22-FA Intel", "00-22-FB Intel", "00-24-D6 Intel",
    "00-24-D7 Intel", "00-26-C6 Intel", "00-26-C7 Intel", "00-27-10 Intel",
    "04-D4-C4 Intel", "18-03-73 Intel", "34-02-86 Intel", "40-A6-D9 Intel",
    "48-45-20 Intel", "4C-34-88 Intel", "58-94-6B Intel", "5C-51-4F Intel",
    "64-80-99 Intel", "68-05-CA Intel", "78-2B-CB Intel", "80-86-F2 Intel",
    "84-3A-4B Intel", "88-53-2E Intel", "8C-EC-4B Intel", "94-65-9C Intel",
    "98-4F-EE Intel", "A0-36-9F Intel", "A0-88-69 Intel", "A4-4C-C8 Intel",
    "A4-C4-94 Intel", "AC-7B-A1 Intel", "B4-B6-76 Intel", "B8-08-CF Intel",
    "BC-77-37 Intel", "C8-0A-A9 Intel", "CC-3D-82 Intel", "D0-50-99 Intel",
    "D4-3D-7E Intel", "D8-FC-93 Intel", "DC-53-60 Intel", "E8-B1-FC Intel",
    "F4-06-69 Intel", "FC-F8-AE Intel",
    // Google
    "00-1A-11 Google", "1C-F2-9A Google", "3C-5A-B4 Google", "54-60-09 Google",
    "94-EB-2C Google", "A4-77-33 Google", "D8-6C-63 Google", "F4-F5-D8 Google",
    "F4-F5-E8 Google", "F8-8F-CA Google",
    // Dell
    "00-06-5B Dell", "00-08-74 Dell", "00-0B-DB Dell", "00-0D-56 Dell",
    "00-0F-1F Dell", "00-11-43 Dell", "00-12-3F Dell", "00-13-72 Dell",
    "00-14-22 Dell", "00-15-C5 Dell", "00-18-8B Dell", "00-19-B9 Dell",
    "00-1A-A0 Dell", "00-1C-23 Dell", "00-1D-09 Dell", "00-1E-4F Dell",
    "00-1E-C9 Dell", "00-21-70 Dell", "00-21-9B Dell", "00-22-19 Dell",
    "00-23-AE Dell", "00-24-E8 Dell", "00-25-64 Dell", "00-26-B9 Dell",
    "14-18-77 Dell", "14-9E-CF Dell", "14-B3-1F Dell", "14-FE-B5 Dell",
    "18-03-73 Dell", "18-66-DA Dell", "18-A9-9B Dell", "18-DB-F2 Dell",
    "18-FB-7B Dell", "1C-40-24 Dell", "20-47-47 Dell", "24-6E-96 Dell",
    "24-B6-FD Dell", "28-F1-0E Dell", "34-17-EB Dell", "34-E6-D7 Dell",
    "44-A8-42 Dell", "4C-76-25 Dell", "50-9A-4C Dell", "54-9F-35 Dell",
    "5C-26-0A Dell", "5C-F9-DD Dell", "64-00-6A Dell", "74-86-7A Dell",
    "74-E6-E2 Dell", "78-2B-CB Dell", "80-18-44 Dell", "84-2B-2B Dell",
    "84-7B-EB Dell", "84-8F-69 Dell", "90-B1-1C Dell", "98-40-BB Dell",
    "98-90-96 Dell", "A4-1F-72 Dell", "A4-BA-DB Dell", "B0-83-FE Dell",
    "B4-E1-0F Dell", "B8-2A-72 Dell", "B8-AC-6F Dell", "B8-CA-3A Dell",
    "BC-30-5B Dell", "C8-1F-66 Dell", "D0-67-E5 Dell", "D4-81-D7 Dell",
    "D4-AE-52 Dell", "D4-BE-D9 Dell", "E0-DB-55 Dell", "EC-F4-BB Dell",
    "F0-1F-AF Dell", "F4-8E-38 Dell", "F8-B1-56 Dell", "F8-BC-12 Dell",
    "F8-DB-88 Dell",
    // HP
    "00-01-E6 HP", "00-01-E7 HP", "00-02-A5 HP", "00-04-EA HP",
    "00-08-02 HP", "00-08-83 HP", "00-0A-57 HP", "00-0B-CD HP",
    "00-0D-9D HP", "00-0E-7F HP", "00-0F-20 HP", "00-0F-61 HP",
    "00-10-83 HP", "00-10-E3 HP", "00-11-0A HP", "00-11-85 HP",
    "00-12-79 HP", "00-13-21 HP", "00-14-38 HP", "00-14-C2 HP",
    "00-15-60 HP", "00-16-35 HP", "00-17-08 HP", "00-17-A4 HP",
    "00-18-71 HP", "00-18-FE HP", "00-19-BB HP", "00-1A-4B HP",
    "00-1B-78 HP", "00-1C-2E HP", "00-1C-C4 HP", "00-1E-0B HP",
    "00-1F-29 HP", "00-1F-FE HP", "00-21-5A HP", "00-22-64 HP",
    "00-23-7D HP", "00-24-81 HP", "00-25-B3 HP", "00-26-55 HP",
    "00-30-6E HP", "00-30-C1 HP", "00-40-17 HP", "00-50-8B HP",
    "00-60-B0 HP", "00-80-A0 HP", "08-00-09 HP", "10-00-90 HP",
    "10-1F-74 HP", "10-60-4B HP", "14-02-EC HP", "14-58-D0 HP",
    "18-A9-05 HP", "1C-98-EC HP", "1C-C1-DE HP", "24-BE-05 HP",
    "28-80-23 HP", "28-92-4A HP", "2C-27-D7 HP", "2C-41-38 HP",
    "2C-44-FD HP", "2C-59-E5 HP", "2C-76-8A HP", "30-8D-99 HP",
    "30-E1-71 HP", "34-64-A9 HP", "38-63-BB HP", "38-EA-A7 HP",
    "3C-4A-92 HP", "3C-52-82 HP", "3C-A8-2A HP", "3C-D9-2B HP",
    "40-A8-F0 HP", "40-B0-34 HP", "44-1E-A1 HP", "44-31-92 HP",
    "48-0F-CF HP", "48-DF-37 HP", "4C-39-09 HP", "50-65-F3 HP",
    "58-20-B1 HP", "5C-B9-01 HP", "64-31-50 HP", "64-51-06 HP",
    "68-B5-99 HP", "6C-3B-E5 HP", "70-10-6F HP", "70-5A-0F HP",
    "74-46-A0 HP", "78-48-59 HP", "78-AC-C0 HP", "80-C1-6E HP",
    "84-34-97 HP", "88-51-FB HP", "8C-DC-D4 HP", "94-18-82 HP",
    "94-57-A5 HP", "98-4B-E1 HP", "98-E7-F4 HP", "9C-8E-99 HP",
    "9C-B6-54 HP", "A0-1D-48 HP", "A0-2B-B8 HP", "A0-48-1C HP",
    "A0-8C-FD HP", "A0-D3-C1 HP", "A4-5D-36 HP", "A8-B1-D4 HP",
    "AC-16-2D HP", "B0-5A-DA HP", "B4-39-D6 HP", "B4-99-BA HP",
    "B4-B5-2F HP", "B8-AF-67 HP", "BC-EA-FA HP", "C0-91-34 HP",
    "C4-34-6B HP", "C8-B5-AD HP", "C8-CB-B8 HP", "C8-D3-FF HP",
    "CC-3E-5F HP", "D0-7E-28 HP", "D4-85-64 HP", "D4-C9-EF HP",
    "D8-9D-67 HP", "D8-D3-85 HP", "DC-4A-3E HP", "E0-07-1B HP",
    "E4-11-5B HP", "E8-39-35 HP", "E8-F7-24 HP", "EC-8E-B5 HP",
    "EC-B1-D7 HP", "F0-62-81 HP", "F0-92-1C HP", "F4-39-09 HP",
    "F4-CE-46 HP", "FC-15-B4 HP", "FC-3F-DB HP",
    // ASUS
    "00-0C-6E ASUS", "00-0E-A6 ASUS", "00-11-2F ASUS", "00-11-D8 ASUS",
    "00-13-D4 ASUS", "00-15-F2 ASUS", "00-17-31 ASUS", "00-18-F3 ASUS",
    "00-1A-92 ASUS", "00-1B-FC ASUS", "00-1D-60 ASUS", "00-1E-8C ASUS",
    "00-1F-C6 ASUS", "00-22-15 ASUS", "00-23-54 ASUS", "00-24-8C ASUS",
    "00-25-22 ASUS", "00-26-18 ASUS", "04-92-26 ASUS", "04-D4-C4 ASUS",
    "08-60-6E ASUS", "08-62-66 ASUS", "10-7B-44 ASUS", "10-BF-48 ASUS",
    "10-C3-7B ASUS", "14-DA-E9 ASUS", "14-DD-A9 ASUS", "18-31-BF ASUS",
    "1C-87-2C ASUS", "1C-B7-2C ASUS", "20-CF-30 ASUS", "24-4B-FE ASUS",
    "2C-4D-54 ASUS", "2C-56-DC ASUS", "30-5A-3A ASUS", "30-85-A9 ASUS",
    "34-97-F6 ASUS", "38-2C-4A ASUS", "38-D5-47 ASUS", "3C-97-0E ASUS",
    "40-16-7E ASUS", "48-5B-39 ASUS", "4C-ED-FB ASUS", "50-46-5D ASUS",
    "50-EB-F6 ASUS", "54-04-A6 ASUS", "54-A0-50 ASUS", "60-45-CB ASUS",
    "6C-F0-49 ASUS", "70-4D-7B ASUS", "70-8B-CD ASUS", "74-D0-2B ASUS",
    "78-24-AF ASUS", "88-D7-F6 ASUS", "90-E6-BA ASUS", "9C-5C-8E ASUS",
    "AC-22-0B ASUS", "B0-6E-BF ASUS", "BC-EE-7B ASUS", "C8-60-00 ASUS",
    "D4-5D-64 ASUS", "E0-3F-49 ASUS", "E0-CB-4E ASUS", "F0-79-59 ASUS",
    "F4-6D-04 ASUS", "F8-32-E4 ASUS",
    // Realtek
    "00-00-E8 Realtek", "00-0C-E7 Realtek", "00-20-18 Realtek", "00-40-D0 Realtek",
    "00-60-52 Realtek", "00-E0-4C Realtek", "52-54-00 Realtek",
    // TP-Link
    "00-1D-0F TP-Link", "00-23-CD TP-Link", "00-27-19 TP-Link", "14-CC-20 TP-Link",
    "14-CF-92 TP-Link", "18-A6-F7 TP-Link", "1C-3B-F3 TP-Link", "20-DC-E6 TP-Link",
    "24-69-68 TP-Link", "30-B5-C2 TP-Link", "34-E8-94 TP-Link", "50-BD-5F TP-Link",
    "54-E6-FC TP-Link", "5C-89-9A TP-Link", "60-E3-27 TP-Link", "64-56-01 TP-Link",
    "64-66-B3 TP-Link", "64-70-02 TP-Link", "6C-B0-CE TP-Link", "70-4F-57 TP-Link",
    "74-DA-38 TP-Link", "78-44-76 TP-Link", "7C-8B-CA TP-Link", "84-16-F9 TP-Link",
    "88-25-93 TP-Link", "90-F6-52 TP-Link", "94-0C-6D TP-Link", "98-DA-C4 TP-Link",
    "A4-2B-B0 TP-Link", "A8-15-4D TP-Link", "AC-84-C6 TP-Link", "B0-4E-26 TP-Link",
    "B0-95-75 TP-Link", "B4-B0-24 TP-Link", "C0-25-E9 TP-Link", "C4-6E-1F TP-Link",
    "C8-3A-35 TP-Link", "D4-6E-0E TP-Link", "D8-07-B6 TP-Link", "E0-05-C5 TP-Link",
    "E4-D3-32 TP-Link", "E8-94-F6 TP-Link", "EC-08-6B TP-Link", "EC-17-2F TP-Link",
    "F4-EC-38 TP-Link", "F8-1A-67 TP-Link",
    // Netgear
    "00-09-5B Netgear", "00-0F-B5 Netgear", "00-14-6C Netgear", "00-18-4D Netgear",
    "00-1B-2F Netgear", "00-1E-2A Netgear", "00-1F-33 Netgear", "00-22-3F Netgear",
    "00-24-B2 Netgear", "00-26-F2 Netgear", "08-BD-43 Netgear", "10-0C-6B Netgear",
    "10-0D-7F Netgear", "20-0C-C8 Netgear", "20-4E-7F Netgear", "28-C6-8E Netgear",
    "2C-B0-5D Netgear", "30-46-9A Netgear", "38-94-ED Netgear", "44-94-FC Netgear",
    "4C-60-DE Netgear", "6C-B0-CE Netgear", "84-1B-5E Netgear", "8C-3B-AD Netgear",
    "9C-3D-CF Netgear", "A0-04-60 Netgear", "A0-21-B7 Netgear", "A4-2B-8C Netgear",
    "B0-7F-B9 Netgear", "B0-B9-8A Netgear", "C0-3F-0E Netgear", "C4-04-15 Netgear",
    "C4-3D-C7 Netgear", "CC-40-D0 Netgear", "E0-46-9A Netgear", "E0-91-F5 Netgear",
    "E4-F4-C6 Netgear", "F8-4F-57 Netgear",
    // Linksys
    "00-04-5A Linksys", "00-06-25 Linksys", "00-0C-41 Linksys", "00-0F-66 Linksys",
    "00-12-17 Linksys", "00-14-BF Linksys", "00-16-B6 Linksys", "00-18-39 Linksys",
    "00-18-F8 Linksys", "00-1A-70 Linksys", "00-1C-10 Linksys", "00-1D-7E Linksys",
    "00-1E-E5 Linksys", "00-21-29 Linksys", "00-22-6B Linksys", "00-23-69 Linksys",
    "00-25-9C Linksys", "14-91-82 Linksys", "20-AA-4B Linksys", "24-F5-A2 Linksys",
    "58-6D-8F Linksys", "68-7F-74 Linksys", "98-FC-11 Linksys", "C0-56-27 Linksys",
    "C8-D7-19 Linksys", "E8-9F-80 Linksys",
    // D-Link
    "00-05-5D D-Link", "00-0D-88 D-Link", "00-0F-3D D-Link", "00-11-95 D-Link",
    "00-13-46 D-Link", "00-15-E9 D-Link", "00-17-9A D-Link", "00-19-5B D-Link",
    "00-1B-11 D-Link", "00-1C-F0 D-Link", "00-1E-58 D-Link", "00-1F-D0 D-Link",
    "00-21-91 D-Link", "00-22-B0 D-Link", "00-24-01 D-Link", "00-26-5A D-Link",
    "00-50-BA D-Link", "00-55-CD D-Link", "14-D6-4D D-Link", "1C-7E-E5 D-Link",
    "28-10-7B D-Link", "34-08-04 D-Link", "3C-1E-04 D-Link", "5C-D9-98 D-Link",
    "78-54-2E D-Link", "84-C9-B2 D-Link", "90-94-E4 D-Link", "9C-D6-43 D-Link",
    "A0-AB-1B D-Link", "AC-F1-DF D-Link", "B8-A3-86 D-Link", "BC-F6-85 D-Link",
    "C0-A0-BB D-Link", "C4-A8-1D D-Link", "C8-BE-19 D-Link", "CC-B2-55 D-Link",
    "D8-FE-E3 D-Link", "E4-6F-13 D-Link", "E8-CC-18 D-Link", "F0-7D-68 D-Link",
    "FC-75-16 D-Link",
    // Nvidia
    "00-04-4B Nvidia", "48-B0-2D Nvidia",
    // Broadcom
    "00-10-18 Broadcom", "00-90-4C Broadcom",
    // Ubiquiti
    "00-15-6D Ubiquiti", "00-27-22 Ubiquiti", "04-18-D6 Ubiquiti", "18-E8-29 Ubiquiti",
    "24-A4-3C Ubiquiti", "44-D9-E7 Ubiquiti", "68-72-51 Ubiquiti", "74-83-C2 Ubiquiti",
    "78-8A-20 Ubiquiti", "80-2A-A8 Ubiquiti", "B4-FB-E4 Ubiquiti", "DC-9F-DB Ubiquiti",
    "F0-9F-C2 Ubiquiti", "FC-EC-DA Ubiquiti"
  ];

  var state = {
    ouiMap: {},
    selectedCidr: "/24",
    uploadedImage: null
  };

  var cidrOptions = [
    { cidr: "/8", mask: "255.0.0.0", hosts: "16M" },
    { cidr: "/9", mask: "255.128.0.0", hosts: "8M" },
    { cidr: "/10", mask: "255.192.0.0", hosts: "4M" },
    { cidr: "/11", mask: "255.224.0.0", hosts: "2M" },
    { cidr: "/12", mask: "255.240.0.0", hosts: "1M" },
    { cidr: "/13", mask: "255.248.0.0", hosts: "512K" },
    { cidr: "/14", mask: "255.252.0.0", hosts: "256K" },
    { cidr: "/15", mask: "255.254.0.0", hosts: "128K" },
    { cidr: "/16", mask: "255.255.0.0", hosts: "65K" },
    { cidr: "/17", mask: "255.255.128.0", hosts: "32K" },
    { cidr: "/18", mask: "255.255.192.0", hosts: "16K" },
    { cidr: "/19", mask: "255.255.224.0", hosts: "8K" },
    { cidr: "/20", mask: "255.255.240.0", hosts: "4K" },
    { cidr: "/21", mask: "255.255.248.0", hosts: "2K" },
    { cidr: "/22", mask: "255.255.252.0", hosts: "1K" },
    { cidr: "/23", mask: "255.255.254.0", hosts: "510" },
    { cidr: "/24", mask: "255.255.255.0", hosts: "254" },
    { cidr: "/25", mask: "255.255.255.128", hosts: "126" },
    { cidr: "/26", mask: "255.255.255.192", hosts: "62" },
    { cidr: "/27", mask: "255.255.255.224", hosts: "30" },
    { cidr: "/28", mask: "255.255.255.240", hosts: "14" },
    { cidr: "/29", mask: "255.255.255.248", hosts: "6" },
    { cidr: "/30", mask: "255.255.255.252", hosts: "2" },
    { cidr: "/31", mask: "255.255.255.254", hosts: "P2P" },
    { cidr: "/32", mask: "255.255.255.255", hosts: "1" }
  ];

  // ========================================
  // Theme
  // ========================================
  function initTheme() {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  // ========================================
  // OUI
  // ========================================
  function loadOui() {
    state.ouiMap = {};
    for (var i = 0; i < defaultOuiLines.length; i++) {
      var line = defaultOuiLines[i];
      var parts = line.match(/^([0-9A-Fa-f-]+)\s+(.+)$/);
      if (parts) {
        var key = parts[1].replace(/-/g, "").toUpperCase();
        state.ouiMap[key] = parts[2];
      }
    }
  }

  function lookupOui() {
    var input = document.getElementById("macInput");
    var result = document.getElementById("macResult");
    if (!input || !result) return;

    var mac = input.value.trim().toUpperCase().replace(/[^0-9A-F]/g, "");
    if (mac.length < 6) {
      result.textContent = "Please enter a valid MAC address.";
      return;
    }

    var oui = mac.substring(0, 6);
    var vendor = state.ouiMap[oui];
    var formatted = oui.match(/.{2}/g).join("-");

    if (vendor) {
      result.textContent = "OUI: " + formatted + "\nVendor: " + vendor;
    } else {
      result.textContent = "OUI: " + formatted + "\nVendor not found in database.";
    }
  }

  function clearMac() {
    var input = document.getElementById("macInput");
    var result = document.getElementById("macResult");
    if (input) input.value = "";
    if (result) result.textContent = "";
  }

  // ========================================
  // IP Calculator
  // ========================================
  function ipToInt(ip) {
    var parts = ip.split(".");
    if (parts.length !== 4) return null;
    var num = 0;
    for (var i = 0; i < 4; i++) {
      var p = parseInt(parts[i], 10);
      if (isNaN(p) || p < 0 || p > 255) return null;
      num = num * 256 + p;
    }
    return num >>> 0;
  }

  function intToIp(num) {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join(".");
  }

  function calculateIp() {
    var input = document.getElementById("ipInput");
    var result = document.getElementById("ipResult");
    if (!input || !result) return;

    var ip = input.value.trim();
    if (!ip) {
      result.textContent = "Please enter an IP address.";
      return;
    }

    var ipInt = ipToInt(ip);
    if (ipInt === null) {
      result.textContent = "Invalid IP address format.";
      return;
    }

    var cidrNum = parseInt(state.selectedCidr.substring(1), 10);
    var maskInt = cidrNum === 0 ? 0 : (0xFFFFFFFF << (32 - cidrNum)) >>> 0;
    var network = (ipInt & maskInt) >>> 0;
    var broadcast = (network | (~maskInt >>> 0)) >>> 0;
    var hostCount = cidrNum === 32 ? 1 : Math.pow(2, 32 - cidrNum) - 2;
    var firstHost = cidrNum >= 31 ? network : network + 1;
    var lastHost = cidrNum >= 31 ? broadcast : broadcast - 1;
    var wildcard = (~maskInt) >>> 0;

    result.textContent = 
      "CIDR:       /" + cidrNum + "\n" +
      "Netmask:    " + intToIp(maskInt) + "\n" +
      "Wildcard:   " + intToIp(wildcard) + "\n" +
      "Network:    " + intToIp(network) + "\n" +
      "Broadcast:  " + intToIp(broadcast) + "\n" +
      "Host Range: " + intToIp(firstHost) + " - " + intToIp(lastHost) + "\n" +
      "Total Hosts: " + hostCount;
  }

  function clearIp() {
    var input = document.getElementById("ipInput");
    var result = document.getElementById("ipResult");
    if (input) input.value = "";
    if (result) result.textContent = "";
    state.selectedCidr = "/24";
    updateCidrDisplay();
  }

  function exportIp() {
    var result = document.getElementById("ipResult");
    if (!result || !result.textContent) {
      alert("No result to export.");
      return;
    }
    var blob = new Blob([result.textContent], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "ip-calc-result.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  // ========================================
  // CIDR Select
  // ========================================
  function initCidrSelect() {
    var container = document.getElementById("maskOptions");
    var selected = document.getElementById("maskSelected");
    if (!container || !selected) return;

    // Build options
    for (var i = 0; i < cidrOptions.length; i++) {
      var opt = cidrOptions[i];
      var div = document.createElement("div");
      div.className = "select-item";
      div.setAttribute("data-cidr", opt.cidr);
      div.innerHTML = '<span class="cidr-badge">' + opt.cidr + '</span><span class="mask-detail">' + opt.mask + ' · ' + opt.hosts + ' hosts</span>';
      div.addEventListener("click", (function(c) {
        return function() {
          state.selectedCidr = c;
          updateCidrDisplay();
          closeCidrSelect();
          calculateIp();
        };
      })(opt.cidr));
      container.appendChild(div);
    }

    // Toggle
    selected.addEventListener("click", function(e) {
      e.stopPropagation();
      var isOpen = !container.classList.contains("select-hide");
      if (isOpen) {
        closeCidrSelect();
      } else {
        container.classList.remove("select-hide");
        selected.classList.add("active");
      }
    });

    document.addEventListener("click", closeCidrSelect);
    updateCidrDisplay();
  }

  function updateCidrDisplay() {
    var selected = document.getElementById("maskSelected");
    if (!selected) return;

    var opt = null;
    for (var i = 0; i < cidrOptions.length; i++) {
      if (cidrOptions[i].cidr === state.selectedCidr) {
        opt = cidrOptions[i];
        break;
      }
    }
    if (opt) {
      selected.innerHTML = '<span class="cidr-badge">' + opt.cidr + '</span><span class="mask-detail">' + opt.mask + ' · ' + opt.hosts + ' hosts</span>';
    }

    // Update selected class
    var items = document.querySelectorAll(".select-item");
    for (var j = 0; j < items.length; j++) {
      if (items[j].getAttribute("data-cidr") === state.selectedCidr) {
        items[j].classList.add("selected");
      } else {
        items[j].classList.remove("selected");
      }
    }
  }

  function closeCidrSelect() {
    var container = document.getElementById("maskOptions");
    var selected = document.getElementById("maskSelected");
    if (container) container.classList.add("select-hide");
    if (selected) selected.classList.remove("active");
  }

  // ========================================
  // Image Search
  // ========================================
  function initImageSearch() {
    var dropzone = document.getElementById("dropzone");
    var fileInput = document.getElementById("imageInput");
    var preview = document.getElementById("imagePreview");
    var previewImg = document.getElementById("previewImg");
    var removeBtn = document.getElementById("removeImage");
    var googleBtn = document.getElementById("searchGoogleBtn");
    var bingBtn = document.getElementById("searchBingBtn");

    if (!dropzone || !fileInput) return;

    // Click to select file
    dropzone.addEventListener("click", function() {
      fileInput.click();
    });

    // File selected
    fileInput.addEventListener("change", function() {
      if (fileInput.files && fileInput.files[0]) {
        loadImage(fileInput.files[0]);
      }
    });

    // Drag events
    dropzone.addEventListener("dragover", function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        var file = e.dataTransfer.files[0];
        if (file.type.indexOf("image") === 0) {
          loadImage(file);
        }
      }
    });

    // Remove image
    if (removeBtn) {
      removeBtn.addEventListener("click", function() {
        clearImagePreview();
      });
    }

    // Search buttons
    if (googleBtn) {
      googleBtn.addEventListener("click", function() {
        window.open("https://lens.google.com/", "_blank");
      });
    }
    if (bingBtn) {
      bingBtn.addEventListener("click", function() {
        window.open("https://www.bing.com/visualsearch", "_blank");
      });
    }
  }

  function loadImage(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      state.uploadedImage = e.target.result;
      showImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  function showImagePreview(dataUrl) {
    var dropzone = document.getElementById("dropzone");
    var preview = document.getElementById("imagePreview");
    var previewImg = document.getElementById("previewImg");
    var googleBtn = document.getElementById("searchGoogleBtn");
    var bingBtn = document.getElementById("searchBingBtn");

    if (previewImg) previewImg.src = dataUrl;
    if (dropzone) dropzone.style.display = "none";
    if (preview) preview.classList.remove("hidden");
    if (googleBtn) googleBtn.disabled = false;
    if (bingBtn) bingBtn.disabled = false;
  }

  function clearImagePreview() {
    var dropzone = document.getElementById("dropzone");
    var preview = document.getElementById("imagePreview");
    var previewImg = document.getElementById("previewImg");
    var fileInput = document.getElementById("imageInput");
    var googleBtn = document.getElementById("searchGoogleBtn");
    var bingBtn = document.getElementById("searchBingBtn");

    state.uploadedImage = null;
    if (previewImg) previewImg.src = "";
    if (fileInput) fileInput.value = "";
    if (dropzone) dropzone.style.display = "block";
    if (preview) preview.classList.add("hidden");
    if (googleBtn) googleBtn.disabled = true;
    if (bingBtn) bingBtn.disabled = true;
  }

  // ========================================
  // Init
  // ========================================
  function init() {
    // Theme
    initTheme();
    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
    }

    // OUI
    loadOui();
    var macLookupBtn = document.getElementById("macLookupBtn");
    var macClearBtn = document.getElementById("macClearBtn");
    var macInput = document.getElementById("macInput");

    if (macLookupBtn) macLookupBtn.addEventListener("click", lookupOui);
    if (macClearBtn) macClearBtn.addEventListener("click", clearMac);
    if (macInput) {
      macInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") lookupOui();
      });
    }

    // IP
    initCidrSelect();
    var ipCalcBtn = document.getElementById("ipCalcBtn");
    var ipClearBtn = document.getElementById("ipClearBtn");
    var ipExportBtn = document.getElementById("ipExportBtn");
    var ipInput = document.getElementById("ipInput");

    if (ipCalcBtn) ipCalcBtn.addEventListener("click", calculateIp);
    if (ipClearBtn) ipClearBtn.addEventListener("click", clearIp);
    if (ipExportBtn) ipExportBtn.addEventListener("click", exportIp);
    if (ipInput) {
      ipInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") calculateIp();
      });
    }

    // Image
    initImageSearch();

    console.log("Network Toolkit ready!");
  }

  // Run when ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
