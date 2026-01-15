(function() {
  "use strict";

  // Default OUI entries
  var defaultOuiLines = [
    "00-00-0C Cisco Systems",
    "00-01-42 Cisco Systems",
    "00-1A-2B Ayecom Technology Co., Ltd.",
    "00-1B-44 SanDisk Corporation",
    "00-1C-B3 Apple, Inc.",
    "00-1D-4F Adaptec",
    "00-1E-C9 Dell Inc.",
    "00-21-5C Intel Corporate",
    "00-23-32 Apple, Inc.",
    "00-50-56 VMware, Inc.",
    "00-0C-29 VMware, Inc.",
    "00-15-5D Microsoft Corporation",
    "08-00-27 PCS Systemtechnik GmbH (VirtualBox)",
    "3C-5A-B4 Google, Inc.",
    "B8-27-EB Raspberry Pi Foundation",
    "D4-6A-6A Cisco Systems",
    "00-E0-4C Realtek Semiconductor Corp.",
    "04-D4-C4 ASUSTek COMPUTER INC.",
    "FC-34-97 Samsung Electronics Co.,Ltd",
    "00-02-78 Samsung Electronics Co.,Ltd",
    "00-04-4B Nvidia",
    "A0-36-9F Intel Corporate",
    "3C-D9-2B Hewlett Packard",
    "00-24-E8 Dell Inc.",
    "00-50-F2 Microsoft Corporation"
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
