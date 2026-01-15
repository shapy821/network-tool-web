const defaultOuiLines = [
  "00-1A-2B Acme Corp",
  "00-1B-44 Example Networks",
  "3C-5A-B4 Apple, Inc.",
  "FC-34-97 Samsung Electronics",
  "F4-0F-24 Google, Inc.",
  "B8-27-EB Raspberry Pi Foundation",
  "D4-6A-6A Cisco Systems",
];

const state = {
  ouiMap: new Map(),
  loadedCount: 0,
};

function normalizeMac(mac) {
  return mac
    .toUpperCase()
    .replace(/[^0-9A-F]/g, "")
    .slice(0, 12);
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

function showOuiStatus(message, isError = false) {
  const status = document.getElementById("ouiStatus");
  status.textContent = message;
  status.style.color = isError ? "#b42318" : "#0f5132";
}

function handleOuiLookup() {
  const macInput = document.getElementById("macInput").value.trim();
  const result = document.getElementById("macResult");

  if (!macInput) {
    result.textContent = "隢撓??MAC 雿???;
    return;
  }

  const normalized = normalizeMac(macInput);
  if (normalized.length < 6) {
    result.textContent = "MAC ?澆?銝迤蝣箝?;
    return;
  }

  const oui = normalized.slice(0, 6);
  const vendor = state.ouiMap.get(oui);

  if (vendor) {
    result.textContent = `OUI: ${oui}\n撱?: ${vendor}`;
  } else {
    result.textContent = `?曆??唳迨 OUI嚗?{oui}嚗?岫頛?湔??OUI 鞈??;
  }
}

function handleOuiLoad() {
  const text = document.getElementById("ouiTextarea").value.trim();
  if (!text) {
    showOuiStatus("隢?鞎潔? OUI 鞈???, true);
    return;
  }

  const lines = text.split(/\r?\n/);
  const count = loadOui(lines);
  showOuiStatus(`撌脰???${count} 蝑?OUI?);
}

function handleOuiFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const content = reader.result || "";
    document.getElementById("ouiTextarea").value = String(content).trim();
    showOuiStatus("瑼?撌脰????舫????亙閮擃?);
  };
  reader.readAsText(file);
}

function handleOuiReset() {
  loadOui(defaultOuiLines);
  showOuiStatus(`撌脤?閮剖撱箄???(${state.loadedCount} 蝑??);
}

function clearMacResult() {
  document.getElementById("macInput").value = "";
  document.getElementById("macResult").textContent = "";
}

function ipToInt(ip) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4) return null;
  for (const part of parts) {
    if (!Number.isInteger(part) || part < 0 || part > 255) return null;
  }
  return (
    (parts[0] << 24) >>> 0 |
    (parts[1] << 16) |
    (parts[2] << 8) |
    parts[3]
  ) >>> 0;
}

function intToIp(int) {
  return [
    (int >>> 24) & 255,
    (int >>> 16) & 255,
    (int >>> 8) & 255,
    int & 255,
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

  // Validate contiguous mask
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
    return { error: "IP ?澆?銝迤蝣箝? };
  }
  if (maskInt === null) {
    return { error: "Netmask ??CIDR ?澆?銝迤蝣箝? };
  }

  const network = ipInt & maskInt;
  const broadcast = network | (~maskInt >>> 0);
  const cidr = maskToCidr(maskInt);
  const hostCount = cidr === 32 ? 1 : Math.max(0, 2 ** (32 - cidr) - 2);
  const firstHost = cidr >= 31 ? network : network + 1;
  const lastHost = cidr >= 31 ? broadcast : broadcast - 1;
  const wildcard = (~maskInt) >>> 0;

  return {
    cidr,
    mask: intToIp(maskInt),
    network: intToIp(network),
    broadcast: intToIp(broadcast),
    firstHost: intToIp(firstHost),
    lastHost: intToIp(lastHost),
    hostCount,
    wildcard: intToIp(wildcard),
  };
}

function handleIpCalc() {
  const ipInput = document.getElementById("ipInput").value.trim();
  const maskInput = document.getElementById("maskInput").value.trim();
  const result = document.getElementById("ipResult");

  if (!ipInput || !maskInput) {
    result.textContent = "隢撓??IP ??Netmask/CIDR??;
    return;
  }

  const info = calcNetworkInfo(ipInput, maskInput);
  if (info.error) {
    result.textContent = info.error;
    return;
  }

  result.textContent = [
    `CIDR: /${info.cidr}`,
    `Netmask: ${info.mask}`,
    `Wildcard: ${info.wildcard}`,
    `Network: ${info.network}`,
    `Broadcast: ${info.broadcast}`,
    `Usable: ${info.firstHost} - ${info.lastHost}`,
    `Hosts: ${info.hostCount}`,
  ].join("\n");
}

function clearIpResult() {
  document.getElementById("ipInput").value = "";
  document.getElementById("maskInput").value = "";
  document.getElementById("ipResult").textContent = "";
}

function init() {
  loadOui(defaultOuiLines);
  showOuiStatus(`撌脰??亙撱?OUI (${state.loadedCount} 蝑??);

  document.getElementById("macLookupBtn").addEventListener("click", handleOuiLookup);
  document.getElementById("macClearBtn").addEventListener("click", clearMacResult);
  document.getElementById("ouiLoadBtn").addEventListener("click", handleOuiLoad);
  document.getElementById("ouiResetBtn").addEventListener("click", handleOuiReset);
  document.getElementById("ouiFile").addEventListener("change", handleOuiFile);

  document.getElementById("ipCalcBtn").addEventListener("click", handleIpCalc);
  document.getElementById("ipClearBtn").addEventListener("click", clearIpResult);
}

init();
