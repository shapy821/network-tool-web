// Default OUI entries (common vendors)
const defaultOuiLines = [
  "00-00-0C Cisco Systems",
  "00-01-42 Cisco Systems",
  "00-1A-2B Ayecom Technology Co., Ltd.",
  "00-1B-44 SanDisk Corporation",
  "00-1C-B3 Apple, Inc.",
  "00-1D-4F Adaptec",
  "00-1E-C9 Dell Inc.",
  "00-21-5C Intel Corporate",
  "00-23-32 Apple, Inc.",
  "00-24-36 Apple, Inc.",
  "00-25-00 Apple, Inc.",
  "00-26-08 Apple, Inc.",
  "00-26-BB Apple, Inc.",
  "00-50-56 VMware, Inc.",
  "00-0C-29 VMware, Inc.",
  "00-15-5D Microsoft Corporation",
  "00-17-FA Microsoft Corporation",
  "00-1D-D8 Microsoft Corporation",
  "00-22-48 Microsoft Corporation",
  "00-25-AE Microsoft Corporation",
  "08-00-27 PCS Systemtechnik GmbH (VirtualBox)",
  "08-00-20 Oracle Corporation",
  "08-00-2B Digital Equipment Corporation",
  "10-DD-B1 Apple, Inc.",
  "14-10-9F Apple, Inc.",
  "18-E7-F4 Apple, Inc.",
  "1C-1A-C0 Apple, Inc.",
  "20-C9-D0 Apple, Inc.",
  "24-A0-74 Apple, Inc.",
  "28-CF-E9 Apple, Inc.",
  "2C-BE-08 Apple, Inc.",
  "30-63-6B Apple, Inc.",
  "34-36-3B Apple, Inc.",
  "38-C9-86 Apple, Inc.",
  "3C-5A-B4 Google, Inc.",
  "3C-D9-2B Hewlett Packard",
  "40-6C-8F Apple, Inc.",
  "44-2A-60 Apple, Inc.",
  "48-60-BC Apple, Inc.",
  "4C-57-CA Apple, Inc.",
  "50-EA-D6 Apple, Inc.",
  "54-26-96 Apple, Inc.",
  "58-55-CA Apple, Inc.",
  "5C-59-48 Apple, Inc.",
  "60-03-08 Apple, Inc.",
  "64-20-0C Apple, Inc.",
  "68-5B-35 Apple, Inc.",
  "6C-40-08 Apple, Inc.",
  "6C-70-9F Apple, Inc.",
  "70-56-81 Apple, Inc.",
  "70-DE-E2 Apple, Inc.",
  "74-E1-B6 Apple, Inc.",
  "78-31-C1 Apple, Inc.",
  "78-CA-39 Apple, Inc.",
  "7C-6D-62 Apple, Inc.",
  "80-00-6E Apple, Inc.",
  "80-BE-05 Apple, Inc.",
  "84-38-35 Apple, Inc.",
  "84-78-8B Apple, Inc.",
  "88-63-DF Apple, Inc.",
  "88-E8-7F Apple, Inc.",
  "8C-00-6D Apple, Inc.",
  "8C-2D-AA Apple, Inc.",
  "8C-85-90 Apple, Inc.",
  "90-8D-6C Apple, Inc.",
  "90-B9-31 Apple, Inc.",
  "94-94-26 Apple, Inc.",
  "98-01-A7 Apple, Inc.",
  "98-D6-BB Apple, Inc.",
  "9C-20-7B Apple, Inc.",
  "9C-F3-87 Apple, Inc.",
  "A0-99-9B Apple, Inc.",
  "A4-5E-60 Apple, Inc.",
  "A4-D1-8C Apple, Inc.",
  "A8-66-7F Apple, Inc.",
  "A8-86-DD Apple, Inc.",
  "A8-BB-CF Apple, Inc.",
  "AC-29-3A Apple, Inc.",
  "AC-87-A3 Apple, Inc.",
  "B0-34-95 Apple, Inc.",
  "B0-65-BD Apple, Inc.",
  "B4-18-D1 Apple, Inc.",
  "B4-F0-AB Apple, Inc.",
  "B8-17-C2 Apple, Inc.",
  "B8-27-EB Raspberry Pi Foundation",
  "B8-78-2E Apple, Inc.",
  "B8-C1-11 Apple, Inc.",
  "B8-E8-56 Apple, Inc.",
  "BC-3B-AF Apple, Inc.",
  "BC-52-B7 Apple, Inc.",
  "BC-67-78 Apple, Inc.",
  "C0-63-94 Apple, Inc.",
  "C0-84-7A Apple, Inc.",
  "C4-2C-03 Apple, Inc.",
  "C8-2A-14 Apple, Inc.",
  "C8-69-CD Apple, Inc.",
  "C8-B5-B7 Apple, Inc.",
  "CC-08-E0 Apple, Inc.",
  "CC-78-5F Apple, Inc.",
  "D0-03-4B Apple, Inc.",
  "D0-4F-7E Apple, Inc.",
  "D4-61-9D Apple, Inc.",
  "D4-6A-6A Cisco Systems",
  "D4-F4-6F Apple, Inc.",
  "D8-00-4D Apple, Inc.",
  "D8-30-62 Apple, Inc.",
  "D8-96-95 Apple, Inc.",
  "D8-9E-3F Apple, Inc.",
  "D8-A2-5E Apple, Inc.",
  "DC-37-14 Apple, Inc.",
  "DC-56-E7 Apple, Inc.",
  "DC-86-D8 Apple, Inc.",
  "E0-5F-45 Apple, Inc.",
  "E0-C7-67 Apple, Inc.",
  "E0-F8-47 Apple, Inc.",
  "E4-25-E7 Apple, Inc.",
  "E4-8B-7F Apple, Inc.",
  "E4-C6-3D Apple, Inc.",
  "E8-06-88 Apple, Inc.",
  "E8-80-2E Apple, Inc.",
  "EC-35-86 Apple, Inc.",
  "EC-85-2F Apple, Inc.",
  "F0-18-98 Apple, Inc.",
  "F0-24-75 Apple, Inc.",
  "F0-4F-7C Apple, Inc.",
  "F0-99-BF Apple, Inc.",
  "F0-B4-79 Apple, Inc.",
  "F0-C1-F1 Apple, Inc.",
  "F0-D1-A9 Apple, Inc.",
  "F0-DB-F8 Apple, Inc.",
  "F4-0F-24 Apple, Inc.",
  "F4-1B-A1 Apple, Inc.",
  "F4-37-B7 Apple, Inc.",
  "F8-1E-DF Apple, Inc.",
  "F8-27-93 Apple, Inc.",
  "F8-62-14 Apple, Inc.",
  "FC-25-3F Apple, Inc.",
  "FC-34-97 Samsung Electronics Co.,Ltd",
  "FC-E9-98 Apple, Inc.",
  "00-04-4B Nvidia",
  "00-0D-4B Roku, Inc.",
  "00-1F-D0 Giga-Byte Technology Co.,Ltd.",
  "00-23-8E Hewlett Packard",
  "00-24-E8 Dell Inc.",
  "00-25-64 Dell Inc.",
  "00-26-B9 Dell Inc.",
  "00-50-F2 Microsoft Corporation",
  "00-E0-4C Realtek Semiconductor Corp.",
  "00-E0-66 ProMax Systems Inc.",
  "04-D4-C4 ASUSTek COMPUTER INC.",
  "08-62-66 ASUSTek COMPUTER INC.",
  "10-7B-44 ASUSTek COMPUTER INC.",
  "14-DA-E9 ASUSTek COMPUTER INC.",
  "18-31-BF ASUSTek COMPUTER INC.",
  "1C-6F-65 GIGA-BYTE TECHNOLOGY CO.,LTD.",
  "1C-B7-2C ASUSTek COMPUTER INC.",
  "20-CF-30 ASUSTek COMPUTER INC.",
  "24-4B-FE ASUSTek COMPUTER INC.",
  "2C-4D-54 ASUSTek COMPUTER INC.",
  "2C-56-DC ASUSTek COMPUTER INC.",
  "30-5A-3A ASUSTek COMPUTER INC.",
  "30-85-A9 ASUSTek COMPUTER INC.",
  "34-97-F6 ASUSTek COMPUTER INC.",
  "38-D5-47 ASUSTek COMPUTER INC.",
  "3C-97-0E Wistron InfoComm(Kunshan)Co.,Ltd.",
  "40-16-7E ASUSTek COMPUTER INC.",
  "40-B0-34 Hewlett Packard",
  "48-5B-39 ASUSTek COMPUTER INC.",
  "50-46-5D ASUSTek COMPUTER INC.",
  "50-EB-F6 ASUSTek COMPUTER INC.",
  "54-04-A6 ASUSTek COMPUTER INC.",
  "60-45-CB ASUSTek COMPUTER INC.",
  "6C-F0-49 GIGA-BYTE TECHNOLOGY CO.,LTD.",
  "70-8B-CD ASUSTek COMPUTER INC.",
  "74-D0-2B ASUSTek COMPUTER INC.",
  "78-24-AF ASUSTek COMPUTER INC.",
  "88-D7-F6 ASUSTek COMPUTER INC.",
  "90-E6-BA ASUSTek COMPUTER INC.",
  "94-DE-80 GIGA-BYTE TECHNOLOGY CO.,LTD.",
  "9C-5C-8E ASUSTek COMPUTER INC.",
  "A0-36-9F Intel Corporate",
  "AC-22-0B ASUSTek COMPUTER INC.",
  "B0-6E-BF ASUSTek COMPUTER INC.",
  "BC-EE-7B ASUSTek COMPUTER INC.",
  "C8-60-00 ASUSTek COMPUTER INC.",
  "D4-5D-64 ASUSTek COMPUTER INC.",
  "E0-3F-49 ASUSTek COMPUTER INC.",
  "E8-9C-25 ARRIS Group, Inc.",
  "EC-1A-59 Belkin International Inc.",
  "F0-79-59 ASUSTek COMPUTER INC.",
  "F4-6D-04 ASUSTek COMPUTER INC.",
  "F8-32-E4 ASUSTek COMPUTER INC.",
  "FC-34-97 ASRock Incorporation",
  "00-02-78 Samsung Electronics Co.,Ltd",
  "00-07-AB Samsung Electronics Co.,Ltd",
  "00-09-18 Samsung Electro-Mechanics",
  "00-0D-AE Samsung Electronics Co.,Ltd",
  "00-12-47 Samsung Electronics Co.,Ltd",
  "00-12-FB Samsung Electronics Co.,Ltd",
  "00-13-77 Samsung Electronics Co.,Ltd",
  "00-15-99 Samsung Electronics Co.,Ltd",
  "00-16-32 Samsung Electronics Co.,Ltd",
  "00-16-6B Samsung Electronics Co.,Ltd",
  "00-16-6C Samsung Electro-Mechanics",
  "00-17-C9 Samsung Electronics Co.,Ltd",
  "00-17-D5 Samsung Electro-Mechanics",
  "00-18-AF Samsung Electronics Co.,Ltd",
  "00-1A-8A Samsung Electronics Co.,Ltd",
  "00-1B-98 Samsung Electronics Co.,Ltd",
  "00-1C-43 Samsung Electronics Co.,Ltd",
  "00-1D-25 Samsung Electronics Co.,Ltd",
  "00-1D-F6 Samsung Electronics Co.,Ltd",
  "00-1E-7D Samsung Electronics Co.,Ltd",
  "00-1F-CC Samsung Electronics Co.,Ltd",
  "00-21-19 Samsung Electronics Co.,Ltd",
  "00-21-D1 Samsung Electronics Co.,Ltd",
  "00-23-39 Samsung Electronics Co.,Ltd",
  "00-23-99 Samsung Electronics Co.,Ltd",
  "00-24-54 Samsung Electronics Co.,Ltd",
  "00-24-90 Samsung Electronics Co.,Ltd",
  "00-24-91 Samsung Electronics Co.,Ltd",
  "00-25-66 Samsung Electronics Co.,Ltd",
  "00-25-67 Samsung Electronics Co.,Ltd",
  "00-26-37 Samsung Electronics Co.,Ltd",
  "00-26-5D Samsung Electronics Co.,Ltd",
  "00-E0-64 Samsung Electronics Co.,Ltd",
  "04-18-0F Samsung Electronics Co.,Ltd",
  "08-08-C2 Samsung Electronics Co.,Ltd",
  "08-D4-2B Samsung Electronics Co.,Ltd",
  "08-EE-8B Samsung Electronics Co.,Ltd",
  "08-FC-88 Samsung Electronics Co.,Ltd",
  "0C-14-20 Samsung Electronics Co.,Ltd",
  "0C-71-5D Samsung Electronics Co.,Ltd",
  "0C-89-10 Samsung Electronics Co.,Ltd",
  "10-1D-C0 Samsung Electronics Co.,Ltd",
  "10-77-B1 Samsung Electronics Co.,Ltd",
  "14-49-E0 Samsung Electronics Co.,Ltd",
  "14-89-FD Samsung Electronics Co.,Ltd",
  "18-22-7E Samsung Electronics Co.,Ltd",
  "18-3A-2D Samsung Electronics Co.,Ltd",
  "18-67-B0 Samsung Electronics Co.,Ltd",
  "18-E2-C2 Samsung Electronics Co.,Ltd",
  "1C-62-B8 Samsung Electronics Co.,Ltd",
  "1C-66-AA Samsung Electronics Co.,Ltd",
  "20-13-E0 Samsung Electronics Co.,Ltd",
  "20-64-32 Samsung Electronics Co.,Ltd",
  "24-4B-03 Samsung Electronics Co.,Ltd",
  "28-27-BF Samsung Electronics Co.,Ltd",
  "28-98-7B Samsung Electronics Co.,Ltd",
  "28-BA-B5 Samsung Electronics Co.,Ltd",
  "2C-AE-2B Samsung Electronics Co.,Ltd",
  "30-19-66 Samsung Electronics Co.,Ltd",
  "30-96-FB Samsung Electronics Co.,Ltd",
  "30-CD-A7 Samsung Electronics Co.,Ltd",
  "34-23-BA Samsung Electronics Co.,Ltd",
  "34-BE-00 Samsung Electronics Co.,Ltd",
  "34-C3-AC Samsung Electronics Co.,Ltd",
  "38-01-97 Samsung Electronics Co.,Ltd",
  "38-16-D1 Samsung Electronics Co.,Ltd",
  "38-2D-D1 Samsung Electronics Co.,Ltd",
  "3C-5A-37 Samsung Electronics Co.,Ltd",
  "3C-62-00 Samsung Electronics Co.,Ltd",
  "3C-8B-FE Samsung Electronics Co.,Ltd",
  "40-0E-85 Samsung Electronics Co.,Ltd",
  "44-4E-1A Samsung Electronics Co.,Ltd",
  "44-6D-6C Samsung Electronics Co.,Ltd",
  "44-78-3E Samsung Electronics Co.,Ltd",
  "48-44-F7 Samsung Electronics Co.,Ltd",
  "48-A0-74 Samsung Electronics Co.,Ltd",
  "4C-3C-16 Samsung Electronics Co.,Ltd",
  "4C-BC-A5 Samsung Electronics Co.,Ltd",
  "50-01-BB Samsung Electronics Co.,Ltd",
  "50-32-75 Samsung Electronics Co.,Ltd",
  "50-85-69 Samsung Electronics Co.,Ltd",
  "50-A4-C8 Samsung Electronics Co.,Ltd",
  "50-B7-C3 Samsung Electronics Co.,Ltd",
  "50-CC-F8 Samsung Electronics Co.,Ltd",
  "50-F0-D3 Samsung Electronics Co.,Ltd",
  "54-40-AD Samsung Electronics Co.,Ltd",
  "54-88-0E Samsung Electronics Co.,Ltd",
  "54-92-BE Samsung Electronics Co.,Ltd",
  "54-9B-12 Samsung Electronics Co.,Ltd",
  "58-C3-8B Samsung Electronics Co.,Ltd",
  "5C-0A-5B Samsung Electronics Co.,Ltd",
  "5C-2E-59 Samsung Electronics Co.,Ltd",
  "5C-3C-27 Samsung Electronics Co.,Ltd",
  "5C-A3-9D Samsung Electronics Co.,Ltd",
  "60-6B-BD Samsung Electronics Co.,Ltd",
  "60-A1-0A Samsung Electronics Co.,Ltd",
  "60-D0-A9 Samsung Electronics Co.,Ltd",
  "64-77-91 Samsung Electronics Co.,Ltd",
  "64-B3-10 Samsung Electronics Co.,Ltd",
  "68-27-37 Samsung Electronics Co.,Ltd",
  "68-48-98 Samsung Electronics Co.,Ltd",
  "68-EB-AE Samsung Electronics Co.,Ltd",
  "6C-2F-2C Samsung Electronics Co.,Ltd",
  "6C-8F-B5 Samsung Electronics Co.,Ltd",
  "6C-F3-73 Samsung Electronics Co.,Ltd",
  "70-28-8B Samsung Electronics Co.,Ltd",
  "70-F9-27 Samsung Electronics Co.,Ltd",
  "74-45-8A Samsung Electronics Co.,Ltd",
  "74-A5-28 Samsung Electronics Co.,Ltd",
  "78-1F-DB Samsung Electronics Co.,Ltd",
  "78-25-AD Samsung Electronics Co.,Ltd",
  "78-40-E4 Samsung Electronics Co.,Ltd",
  "78-47-1D Samsung Electronics Co.,Ltd",
  "78-52-1A Samsung Electronics Co.,Ltd",
  "78-AB-BB Samsung Electronics Co.,Ltd",
  "78-D6-F0 Samsung Electronics Co.,Ltd",
  "7C-0B-C6 Samsung Electronics Co.,Ltd",
  "7C-11-CB Samsung Electronics Co.,Ltd",
  "84-11-9E Samsung Electronics Co.,Ltd",
  "84-25-DB Samsung Electronics Co.,Ltd",
  "84-2E-27 Samsung Electronics Co.,Ltd",
  "84-38-38 Samsung Electronics Co.,Ltd",
  "84-55-A5 Samsung Electronics Co.,Ltd",
  "84-98-66 Samsung Electronics Co.,Ltd",
  "84-A4-66 Samsung Electronics Co.,Ltd",
  "88-32-9B Samsung Electronics Co.,Ltd",
  "88-9B-39 Samsung Electronics Co.,Ltd",
  "8C-71-F8 Samsung Electronics Co.,Ltd",
  "8C-77-12 Samsung Electronics Co.,Ltd",
  "90-00-DB Samsung Electronics Co.,Ltd",
  "90-18-7C Samsung Electronics Co.,Ltd",
  "94-01-C2 Samsung Electronics Co.,Ltd",
  "94-35-0A Samsung Electronics Co.,Ltd",
  "94-51-03 Samsung Electronics Co.,Ltd",
  "94-63-D1 Samsung Electronics Co.,Ltd",
  "94-B1-0A Samsung Electronics Co.,Ltd",
  "94-D7-71 Samsung Electronics Co.,Ltd",
  "98-0C-82 Samsung Electronics Co.,Ltd",
  "98-52-B1 Samsung Electronics Co.,Ltd",
  "9C-02-98 Samsung Electronics Co.,Ltd",
  "9C-3A-AF Samsung Electronics Co.,Ltd",
  "9C-65-B0 Samsung Electronics Co.,Ltd",
  "A0-0B-BA Samsung Electronics Co.,Ltd",
  "A0-82-1F Samsung Electronics Co.,Ltd",
  "A4-07-B6 Samsung Electronics Co.,Ltd",
  "A8-06-00 Samsung Electronics Co.,Ltd",
  "A8-16-B2 Samsung Electronics Co.,Ltd",
  "A8-7C-01 Samsung Electronics Co.,Ltd",
  "AC-36-13 Samsung Electronics Co.,Ltd",
  "AC-5F-3E Samsung Electronics Co.,Ltd",
  "B0-47-BF Samsung Electronics Co.,Ltd",
  "B0-72-BF Samsung Electronics Co.,Ltd",
  "B0-C5-59 Samsung Electronics Co.,Ltd",
  "B0-EC-71 Samsung Electronics Co.,Ltd",
  "B4-07-F9 Samsung Electronics Co.,Ltd",
  "B4-3A-28 Samsung Electronics Co.,Ltd",
  "B4-62-93 Samsung Electronics Co.,Ltd",
  "B4-79-A7 Samsung Electronics Co.,Ltd",
  "B8-5A-73 Samsung Electronics Co.,Ltd",
  "B8-C6-8E Samsung Electronics Co.,Ltd",
  "BC-14-85 Samsung Electronics Co.,Ltd",
  "BC-20-A4 Samsung Electronics Co.,Ltd",
  "BC-44-86 Samsung Electronics Co.,Ltd",
  "BC-72-B1 Samsung Electronics Co.,Ltd",
  "BC-79-AD Samsung Electronics Co.,Ltd",
  "BC-85-1F Samsung Electronics Co.,Ltd",
  "C0-97-27 Samsung Electronics Co.,Ltd",
  "C4-42-02 Samsung Electronics Co.,Ltd",
  "C4-50-06 Samsung Electronics Co.,Ltd",
  "C4-57-6E Samsung Electronics Co.,Ltd",
  "C4-62-EA Samsung Electronics Co.,Ltd",
  "C4-73-1E Samsung Electronics Co.,Ltd",
  "C8-19-F7 Samsung Electronics Co.,Ltd",
  "CC-07-AB Samsung Electronics Co.,Ltd",
  "D0-17-6A Samsung Electronics Co.,Ltd",
  "D0-22-BE Samsung Electronics Co.,Ltd",
  "D0-25-44 Samsung Electronics Co.,Ltd",
  "D0-59-E4 Samsung Electronics Co.,Ltd",
  "D0-66-7B Samsung Electronics Co.,Ltd",
  "D0-87-E2 Samsung Electronics Co.,Ltd",
  "D4-87-D8 Samsung Electronics Co.,Ltd",
  "D4-E8-B2 Samsung Electronics Co.,Ltd",
  "D8-57-EF Samsung Electronics Co.,Ltd",
  "D8-90-E8 Samsung Electronics Co.,Ltd",
  "DC-71-44 Samsung Electronics Co.,Ltd",
  "E4-12-1D Samsung Electronics Co.,Ltd",
  "E4-40-E2 Samsung Electronics Co.,Ltd",
  "E4-58-B8 Samsung Electronics Co.,Ltd",
  "E4-7C-F9 Samsung Electronics Co.,Ltd",
  "E4-92-FB Samsung Electronics Co.,Ltd",
  "E4-E0-C5 Samsung Electronics Co.,Ltd",
  "E8-03-9A Samsung Electronics Co.,Ltd",
  "E8-4E-84 Samsung Electronics Co.,Ltd",
  "EC-1F-72 Samsung Electronics Co.,Ltd",
  "EC-9B-F3 Samsung Electronics Co.,Ltd",
  "F0-25-B7 Samsung Electronics Co.,Ltd",
  "F0-5A-09 Samsung Electronics Co.,Ltd",
  "F0-6B-CA Samsung Electronics Co.,Ltd",
  "F0-72-8C Samsung Electronics Co.,Ltd",
  "F4-09-D8 Samsung Electronics Co.,Ltd",
  "F4-42-8F Samsung Electronics Co.,Ltd",
  "F4-7B-5E Samsung Electronics Co.,Ltd",
  "F8-04-2E Samsung Electronics Co.,Ltd",
  "F8-3F-51 Samsung Electronics Co.,Ltd",
  "F8-D0-BD Samsung Electronics Co.,Ltd",
  "FC-A1-3E Samsung Electronics Co.,Ltd"
];

const state = {
  ouiMap: new Map(),
  loadedCount: 0,
  lastMacResult: "",
  lastIpResult: "",
  selectedCidr: "/24",
  uploadedImage: null
};

// CIDR options data
const cidrOptions = [
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
// Theme Toggle
// ========================================
function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// ========================================
// OUI Functions
// ========================================
function normalizeMac(mac) {
  return mac.toUpperCase().replace(/[^0-9A-F]/g, "").slice(0, 12);
}

function normalizeOui(oui) {
  return oui.toUpperCase().replace(/[^0-9A-F]/g, "").slice(0, 6);
}

function parseOuiLines(lines) {
  const map = new Map();
  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) return;

    const match = line.match(/^([0-9A-Fa-f:-]{6,})\s+(.+)$/);
    if (!match) return;

    const key = normalizeOui(match[1]);
    const vendor = match[2].trim();
    if (key.length === 6 && vendor) {
      map.set(key, vendor);
    }
  });

  return map;
}

function loadOui(lines) {
  const map = parseOuiLines(lines);
  state.ouiMap = map;
  state.loadedCount = map.size;
  return map.size;
}

function handleOuiLookup() {
  const macInput = document.getElementById("macInput").value.trim();
  const result = document.getElementById("macResult");

  if (!macInput) {
    result.textContent = "Please enter a MAC address.";
    state.lastMacResult = "";
    return;
  }

  const normalized = normalizeMac(macInput);
  if (normalized.length < 6) {
    result.textContent = "Invalid MAC format.";
    state.lastMacResult = "";
    return;
  }

  const oui = normalized.slice(0, 6);
  const vendor = state.ouiMap.get(oui);

  const formattedOui = oui.match(/.{2}/g).join("-");

  if (vendor) {
    state.lastMacResult = "OUI: " + formattedOui + "\nVendor: " + vendor;
  } else {
    state.lastMacResult = "OUI " + formattedOui + " not found in database.";
  }
  result.textContent = state.lastMacResult;
}

function clearMacResult() {
  document.getElementById("macInput").value = "";
  document.getElementById("macResult").textContent = "";
  state.lastMacResult = "";
}

// ========================================
// IP Calculator Functions
// ========================================
function ipToInt(ip) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4) return null;
  for (const part of parts) {
    if (!Number.isInteger(part) || part < 0 || part > 255) return null;
  }
  return ((parts[0] << 24) >>> 0 | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
}

function intToIp(int) {
  return [
    (int >>> 24) & 255,
    (int >>> 16) & 255,
    (int >>> 8) & 255,
    int & 255
  ].join(".");
}

function cidrToMask(cidr) {
  const bits = Number(cidr);
  if (!Number.isInteger(bits) || bits < 0 || bits > 32) return null;
  if (bits === 0) return 0;
  return (0xffffffff << (32 - bits)) >>> 0;
}

function parseMask(maskInput) {
  const trimmed = maskInput.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("/")) {
    return cidrToMask(trimmed.slice(1));
  }

  const maskInt = ipToInt(trimmed);
  if (maskInt === null) return null;

  const inverted = (~maskInt) >>> 0;
  if ((inverted + 1) & inverted) {
    return null;
  }

  return maskInt;
}

function maskToCidr(mask) {
  let count = 0;
  for (let i = 31; i >= 0; i--) {
    if (mask & (1 << i)) count += 1;
  }
  return count;
}

function calcNetworkInfo(ipStr, maskStr) {
  const ipInt = ipToInt(ipStr);
  const maskInt = parseMask(maskStr);

  if (ipInt === null) {
    return { error: "Invalid IP address format." };
  }
  if (maskInt === null) {
    return { error: "Invalid Netmask or CIDR format." };
  }

  const network = ipInt & maskInt;
  const broadcast = network | (~maskInt >>> 0);
  const cidr = maskToCidr(maskInt);
  const hostCount = cidr === 32 ? 1 : Math.max(0, 2 ** (32 - cidr) - 2);
  const firstHost = cidr >= 31 ? network : network + 1;
  const lastHost = cidr >= 31 ? broadcast : broadcast - 1;
  const wildcard = (~maskInt) >>> 0;

  return {
    cidr: cidr,
    mask: intToIp(maskInt),
    network: intToIp(network),
    broadcast: intToIp(broadcast),
    firstHost: intToIp(firstHost),
    lastHost: intToIp(lastHost),
    hostCount: hostCount,
    wildcard: intToIp(wildcard),
    ipBinary: intToIp(ipInt).split(".").map(function(n) { return Number(n).toString(2).padStart(8, "0"); }).join("."),
    maskBinary: intToIp(maskInt).split(".").map(function(n) { return Number(n).toString(2).padStart(8, "0"); }).join(".")
  };
}

function handleIpCalc() {
  const ipInput = document.getElementById("ipInput").value.trim();
  const maskInput = state.selectedCidr;
  const result = document.getElementById("ipResult");

  if (!ipInput) {
    result.textContent = "Please enter an IP address.";
    state.lastIpResult = "";
    return;
  }

  const info = calcNetworkInfo(ipInput, maskInput);
  if (info.error) {
    result.textContent = info.error;
    state.lastIpResult = "";
    return;
  }

  state.lastIpResult = "CIDR:       /" + info.cidr + "\n" +
    "Netmask:    " + info.mask + "\n" +
    "Wildcard:   " + info.wildcard + "\n" +
    "Network:    " + info.network + "\n" +
    "Broadcast:  " + info.broadcast + "\n" +
    "Host Range: " + info.firstHost + " - " + info.lastHost + "\n" +
    "Total Hosts: " + info.hostCount.toLocaleString() + "\n\n" +
    "IP Binary:   " + info.ipBinary + "\n" +
    "Mask Binary: " + info.maskBinary;
  result.textContent = state.lastIpResult;
}

function clearIpResult() {
  document.getElementById("ipInput").value = "";
  state.selectedCidr = "/24";
  updateSelectDisplay();
  document.getElementById("ipResult").textContent = "";
  state.lastIpResult = "";
}

function exportIpResult() {
  if (!state.lastIpResult) {
    alert("No result to export. Please perform a calculation first.");
    return;
  }
  downloadText("ip-calc-result.txt", state.lastIpResult);
}

// ========================================
// Custom Select Dropdown
// ========================================
function initCustomSelect() {
  const optionsContainer = document.getElementById("maskOptions");
  const selectedDisplay = document.getElementById("maskSelected");

  if (!optionsContainer || !selectedDisplay) return;

  // Build options
  cidrOptions.forEach(function(opt) {
    const item = document.createElement("div");
    item.className = "select-item" + (opt.cidr === state.selectedCidr ? " selected" : "");
    item.setAttribute("data-value", opt.cidr);
    item.innerHTML = '<span class="cidr-badge">' + opt.cidr + '</span>' +
      '<span class="mask-detail">' + opt.mask + ' · ' + opt.hosts + ' hosts</span>';
    item.addEventListener("click", function() {
      selectCidr(opt.cidr);
    });
    optionsContainer.appendChild(item);
  });

  // Toggle dropdown
  selectedDisplay.addEventListener("click", function(e) {
    e.stopPropagation();
    const isOpen = !optionsContainer.classList.contains("select-hide");
    closeAllSelects();
    if (!isOpen) {
      optionsContainer.classList.remove("select-hide");
      selectedDisplay.classList.add("active");
    }
  });

  // Close on outside click
  document.addEventListener("click", closeAllSelects);
}

function selectCidr(cidr) {
  state.selectedCidr = cidr;
  updateSelectDisplay();
  closeAllSelects();
  
  // Auto calculate if IP is entered
  const ipInput = document.getElementById("ipInput").value.trim();
  if (ipInput) {
    handleIpCalc();
  }
}

function updateSelectDisplay() {
  const opt = cidrOptions.find(function(o) { return o.cidr === state.selectedCidr; });
  const selectedDisplay = document.getElementById("maskSelected");
  if (!selectedDisplay || !opt) return;
  
  selectedDisplay.innerHTML = '<span class="cidr-badge">' + opt.cidr + '</span>' +
    '<span class="mask-detail">' + opt.mask + ' · ' + opt.hosts + ' hosts</span>';

  // Update selected state in options
  document.querySelectorAll(".select-item").forEach(function(item) {
    item.classList.toggle("selected", item.getAttribute("data-value") === state.selectedCidr);
  });
}

function closeAllSelects() {
  document.querySelectorAll(".select-items").forEach(function(el) { el.classList.add("select-hide"); });
  document.querySelectorAll(".select-selected").forEach(function(el) { el.classList.remove("active"); });
}

// ========================================
// Reverse Image Search
// ========================================
function initImageSearch() {
  const dropzone = document.getElementById("dropzone");
  const imageInput = document.getElementById("imageInput");
  const removeBtn = document.getElementById("removeImage");
  const searchGoogleBtn = document.getElementById("searchGoogleBtn");
  const searchBingBtn = document.getElementById("searchBingBtn");

  if (!dropzone || !imageInput) return;

  // Click to select
  dropzone.addEventListener("click", function() {
    imageInput.click();
  });

  // File input change
  imageInput.addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (file) handleImageFile(file);
  });

  // Drag and drop
  dropzone.addEventListener("dragover", function(e) {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", function(e) {
    e.preventDefault();
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", function(e) {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageFile(file);
    }
  });

  // Remove image
  if (removeBtn) {
    removeBtn.addEventListener("click", function() {
      clearImage();
    });
  }

  // Search buttons
  if (searchGoogleBtn) {
    searchGoogleBtn.addEventListener("click", function() {
      searchOnGoogle();
    });
  }
  if (searchBingBtn) {
    searchBingBtn.addEventListener("click", function() {
      searchOnBing();
    });
  }
}

function handleImageFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    state.uploadedImage = e.target.result;
    showImagePreview(e.target.result);
    enableSearchButtons();
  };
  reader.readAsDataURL(file);
}

function showImagePreview(dataUrl) {
  const dropzone = document.getElementById("dropzone");
  const imagePreview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");

  if (previewImg) previewImg.src = dataUrl;
  if (dropzone) dropzone.style.display = "none";
  if (imagePreview) imagePreview.classList.remove("hidden");
}

function clearImage() {
  const dropzone = document.getElementById("dropzone");
  const imagePreview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");
  const imageInput = document.getElementById("imageInput");

  state.uploadedImage = null;
  if (previewImg) previewImg.src = "";
  if (imageInput) imageInput.value = "";
  if (imagePreview) imagePreview.classList.add("hidden");
  if (dropzone) dropzone.style.display = "block";
  disableSearchButtons();
}

function enableSearchButtons() {
  const googleBtn = document.getElementById("searchGoogleBtn");
  const bingBtn = document.getElementById("searchBingBtn");
  if (googleBtn) googleBtn.disabled = false;
  if (bingBtn) bingBtn.disabled = false;
}

function disableSearchButtons() {
  const googleBtn = document.getElementById("searchGoogleBtn");
  const bingBtn = document.getElementById("searchBingBtn");
  if (googleBtn) googleBtn.disabled = true;
  if (bingBtn) bingBtn.disabled = true;
}

function searchOnGoogle() {
  if (!state.uploadedImage) return;
  window.open("https://lens.google.com/", "_blank");
}

function searchOnBing() {
  if (!state.uploadedImage) return;
  window.open("https://www.bing.com/visualsearch", "_blank");
}

// ========================================
// Export Helper
// ========================================
function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ========================================
// Initialization
// ========================================
function init() {
  // Theme
  initTheme();
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // OUI
  loadOui(defaultOuiLines);
  const macLookupBtn = document.getElementById("macLookupBtn");
  const macClearBtn = document.getElementById("macClearBtn");
  const macInput = document.getElementById("macInput");
  
  if (macLookupBtn) macLookupBtn.addEventListener("click", handleOuiLookup);
  if (macClearBtn) macClearBtn.addEventListener("click", clearMacResult);
  if (macInput) {
    macInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") handleOuiLookup();
    });
  }

  // IP Calculator
  initCustomSelect();
  const ipCalcBtn = document.getElementById("ipCalcBtn");
  const ipClearBtn = document.getElementById("ipClearBtn");
  const ipExportBtn = document.getElementById("ipExportBtn");
  const ipInput = document.getElementById("ipInput");

  if (ipCalcBtn) ipCalcBtn.addEventListener("click", handleIpCalc);
  if (ipClearBtn) ipClearBtn.addEventListener("click", clearIpResult);
  if (ipExportBtn) ipExportBtn.addEventListener("click", exportIpResult);
  if (ipInput) {
    ipInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") handleIpCalc();
    });
  }

  // Image Search
  initImageSearch();

  console.log("Network Toolkit initialized successfully");
}

// Run init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
