// FoneZone Modern Prototype Engine
// Dual-Portal: 1. Customer Storefront (FoneZone.com) | 2. Merchant & Ops Hub (Sahil Pathania & Hemant Verma)

const CATALOG = [
  {
    id: "fz-ip15pro",
    name: "iPhone 15 Pro 128GB Natural Titanium",
    model3d: "assets/iphone14_model.glb",
    category: "phone",
    brand: "apple",
    badge: "FLAGSHIP",
    image: "assets/iphone15pro_naturaltitanium.png",
    msrp: 134900,
    grades: {
      "A": { price: 84999, label: "Grade A (Pristine)", battery: 98, cycles: 84, desc: "Flawless condition. Zero micro-scratches on Ceramic Shield or Titanium. Apple OEM display." },
      "B": { price: 78999, label: "Grade B (Very Good)", battery: 92, cycles: 198, desc: "Pristine display. Minor hairline micro-abrasion on lower titanium bezel rim (invisible with case)." },
      "C": { price: 71999, label: "Grade C (Value Deal)", battery: 86, cycles: 340, desc: "Visible cosmetic scuffs on corners. 100% hardware certified, maximum savings." }
    },
    angles: {
      0: "assets/turntable_frame_0.png",
      45: "assets/turntable_frame_45.png",
      90: "assets/turntable_frame_90.png",
      135: "assets/turntable_frame_135.png",
      180: "assets/turntable_frame_180.png",
      225: "assets/turntable_frame_225.png",
      270: "assets/turntable_frame_270.png",
      315: "assets/turntable_frame_315.png",
      front: "assets/turntable_frame_0.png",
      back: "assets/turntable_frame_180.png",
      right: "assets/turntable_frame_right.png",
      left: "assets/turntable_frame_left.png",
      top: "assets/turntable_frame_top.png",
      bottom: "assets/turntable_frame_bottom.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "8 units available in Delhi Hub"
  },
  {
    id: "fz-ip14",
    name: "iPhone 14 128GB Blue",
    model3d: "assets/iphone14_model.glb",
    category: "phone",
    brand: "apple",
    badge: "BESTSELLER",
    image: "assets/iphone14_blue.png",
    msrp: 69900,
    grades: {
      "A": { price: 48999, label: "Grade A (Pristine)", battery: 96, cycles: 112, desc: "Scratch-free glass, like-new aerospace aluminum body. 100% battery performance." },
      "B": { price: 43999, label: "Grade B (Very Good)", battery: 91, cycles: 220, desc: "Light brush marks on side rails. Clean Super Retina display." },
      "C": { price: 38999, label: "Grade C (Value Deal)", battery: 85, cycles: 390, desc: "Minor cosmetic corner abrasions. Hardware and cameras tested 100%." }
    },
    angles: {
      0: "assets/turntable_frame_0.png",
      45: "assets/turntable_frame_45.png",
      90: "assets/turntable_frame_90.png",
      135: "assets/turntable_frame_135.png",
      180: "assets/turntable_frame_180.png",
      225: "assets/turntable_frame_225.png",
      270: "assets/turntable_frame_270.png",
      315: "assets/turntable_frame_315.png",
      front: "assets/turntable_frame_0.png",
      back: "assets/turntable_frame_180.png",
      right: "assets/turntable_frame_right.png",
      left: "assets/turntable_frame_left.png",
      top: "assets/turntable_frame_top.png",
      bottom: "assets/turntable_frame_bottom.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "14 units available in Mumbai Hub"
  },
  {
    id: "fz-s23ultra",
    name: "Samsung Galaxy S23 Ultra 5G 256GB Phantom Black",
    category: "phone",
    brand: "samsung",
    badge: "200MP CAM",
    image: "assets/samsung_s23_ultra.png",
    msrp: 124999,
    grades: {
      "A": { price: 67999, label: "Grade A (Pristine)", battery: 97, cycles: 92, desc: "Flawless Dynamic AMOLED 2X, S-Pen included, zero scratches on lenses." },
      "B": { price: 61999, label: "Grade B (Very Good)", battery: 90, cycles: 215, desc: "Minor hair scuffs on armor aluminum edge. Screen pristine." },
      "C": { price: 54999, label: "Grade C (Value Deal)", battery: 84, cycles: 360, desc: "Everyday wear on back cover. 100x zoom and hardware 100% verified." }
    },
    angles: {
      0: "assets/samsung_s23_ultra.png",
      45: "assets/samsung_s23_ultra.png",
      90: "assets/samsung_s23_ultra.png",
      180: "assets/samsung_s23_ultra.png",
      270: "assets/samsung_s23_ultra.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "6 units available in Bangalore Hub"
  },
  {
    id: "fz-ip13",
    name: "iPhone 13 128GB Starlight",
    model3d: "assets/iphone14_model.glb",
    category: "phone",
    brand: "apple",
    badge: "VALUE PICK",
    image: "assets/iphone13_starlight.png",
    msrp: 59900,
    grades: {
      "A": { price: 39999, label: "Grade A (Pristine)", battery: 95, cycles: 140, desc: "Original Ceramic Shield. Battery capacity 95%+. Flawless body." },
      "B": { price: 34999, label: "Grade B (Very Good)", battery: 89, cycles: 245, desc: "Micro scuffs around charging port. Screen 100% spotless." },
      "C": { price: 30999, label: "Grade C (Value Deal)", battery: 84, cycles: 410, desc: "Visible signs of handling. 100% genuine Apple components." }
    },
    angles: {
      0: "assets/iphone13_starlight.png",
      45: "assets/iphone13_starlight.png",
      90: "assets/iphone13_starlight.png",
      180: "assets/iphone13_starlight.png",
      270: "assets/iphone13_starlight.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "19 units available in Delhi Hub"
  },
  {
    id: "fz-ip11",
    name: "iPhone 11 64GB Black",
    model3d: "assets/iphone14_model.glb",
    category: "phone",
    brand: "apple",
    badge: "BUDGET HERO",
    image: "assets/iphone14_front.png",
    msrp: 49900,
    grades: {
      "A": { price: 19999, label: "Grade A (Pristine)", battery: 94, cycles: 165, desc: "Liquid Retina HD display. Zero scratches, pristine aluminum enclosure." },
      "B": { price: 17499, label: "Grade B (Very Good)", battery: 89, cycles: 280, desc: "Light pocket rub on corners. Display 100% spotless. 100% genuine parts." },
      "C": { price: 15499, label: "Grade C (Value Deal)", battery: 84, cycles: 390, desc: "Everyday cosmetic scuffs on frame. Dual cameras and Face ID 100% verified." }
    },
    angles: {
      0: "assets/iphone14_front.png",
      45: "assets/iphone14_blue.png",
      90: "assets/iphone14_side.png",
      180: "assets/iphone14_back.png",
      270: "assets/iphone14_side.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "12 units available in Delhi Hub"
  },
  {
    id: "fz-macbook-m2",
    name: "MacBook Air 13.6-inch M2 (8GB / 256GB SSD) Midnight",
    category: "macbook",
    brand: "apple",
    badge: "APPLE SILICON",
    image: "assets/macbookair_midnight.png",
    msrp: 114900,
    grades: {
      "A": { price: 78999, label: "Grade A (Pristine)", battery: 100, cycles: 24, desc: "Zero palm-rest glossing, Liquid Retina display 100% clean, MagSafe 3." },
      "B": { price: 71999, label: "Grade B (Very Good)", battery: 94, cycles: 120, desc: "Faint anodization wear on corner edge. Keyboard pristine." },
      "C": { price: 64999, label: "Grade C (Value Deal)", battery: 88, cycles: 210, desc: "Normal top lid scuffing. M2 benchmarked at 100% factory performance." }
    },
    angles: {
      0: "assets/macbookair_midnight.png",
      45: "assets/macbookair_midnight.png",
      90: "assets/macbookair_midnight.png",
      180: "assets/macbookair_midnight.png",
      270: "assets/macbookair_midnight.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "5 units available in Dubai Hub"
  },
  {
    id: "fz-ipad-10",
    name: "iPad 10th Gen 10.9-inch Wi-Fi 64GB Blue",
    category: "ipad",
    brand: "apple",
    badge: "ALL-SCREEN",
    image: "assets/ipad_10th_gen.png",
    msrp: 44900,
    grades: {
      "A": { price: 32999, label: "Grade A (Pristine)", battery: 99, cycles: 38, desc: "Liquid Retina display with True Tone. USB-C port tested." },
      "B": { price: 28999, label: "Grade B (Very Good)", battery: 92, cycles: 140, desc: "Light hairline marks on aluminum back. Display 100% flawless." },
      "C": { price: 24999, label: "Grade C (Value Deal)", battery: 86, cycles: 290, desc: "Corner paint scuffs. Hardware and stereo speakers 100% verified." }
    },
    angles: {
      0: "assets/ipad_10th_gen.png",
      45: "assets/ipad_10th_gen.png",
      90: "assets/ipad_10th_gen.png",
      180: "assets/ipad_10th_gen.png",
      270: "assets/ipad_10th_gen.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "9 units available in Delhi Hub"
  },
  {
    id: "fz-watch-ultra",
    name: "Apple Watch Ultra 49mm Titanium",
    category: "watch",
    brand: "apple",
    badge: "ADVENTURE",
    image: "assets/applewatch_ultra.png",
    msrp: 89900,
    grades: {
      "A": { price: 44999, label: "Grade A (Pristine)", battery: 99, cycles: 42, desc: "Aerospace Titanium case, scratch-free Sapphire crystal face." },
      "B": { price: 39499, label: "Grade B (Very Good)", battery: 93, cycles: 130, desc: "Light brush mark on titanium bezel rim. Clean display." },
      "C": { price: 34999, label: "Grade C (Value Deal)", battery: 87, cycles: 260, desc: "Visible outdoor adventure scuffs. Cellular and Action button 100%." }
    },
    angles: {
      0: "assets/applewatch_ultra.png",
      45: "assets/applewatch_ultra.png",
      90: "assets/applewatch_ultra.png",
      180: "assets/applewatch_ultra.png",
      270: "assets/applewatch_ultra.png"
    },
    warranty: "6 Months Comprehensive FoneZone Warranty",
    stock: "7 units available in Bangalore Hub"
  }
];

// Initial Simulated Orders for Merchant & Ops Hub (Sahil Pathania)
const INITIAL_ORDERS = [
  {
    id: "FZ-1049",
    name: "Rahul Sharma",
    phone: "+91 98102 43210",
    address: "3rd Floor, 1330-A, Govindpuri, Kalkaji",
    city: "New Delhi",
    pincode: "110019",
    product: "iPhone 15 Pro 128GB (Grade A)",
    amount: 84999,
    status: "unverified",
    risk: "High RTO Risk (First-time COD)",
    timestamp: "10 mins ago"
  },
  {
    id: "FZ-1048",
    name: "Pooja Verma",
    phone: "+91 98201 88321",
    address: "B-402, Sea Green Heights, Lokhandwala, Andheri W",
    city: "Mumbai",
    pincode: "400053",
    product: "Samsung Galaxy S23 Ultra (Grade A)",
    amount: 67999,
    status: "whatsapp_sent",
    risk: "Medium Risk (Awaiting OTP)",
    timestamp: "24 mins ago"
  },
  {
    id: "FZ-1047",
    name: "Vikram Malhotra",
    phone: "+91 98310 99412",
    address: "Flat 12B, Regency Park, 100ft Road, Indiranagar",
    city: "Bangalore",
    pincode: "560038",
    product: "iPhone 14 128GB (Grade B)",
    amount: 43999,
    status: "verified",
    risk: "Low Risk (Address OTP Confirmed)",
    timestamp: "45 mins ago"
  },
  {
    id: "FZ-1046",
    name: "Amitabh Sen",
    phone: "+91 97240 11928",
    address: "Block CF-184, Sector 1, Salt Lake City",
    city: "Kolkata",
    pincode: "700091",
    product: "MacBook Air M2 Midnight (Grade A)",
    amount: 78699,
    status: "prepaid",
    risk: "Zero Risk (Prepaid UPI via ₹300 Off)",
    timestamp: "1 hour ago"
  },
  {
    id: "FZ-1045",
    name: "Kavita Reddy",
    phone: "+91 99887 66554",
    address: "Plot 42, Road 10, Banjara Hills",
    city: "Hyderabad",
    pincode: "500034",
    product: "iPad 10th Gen Blue (Grade A)",
    amount: 32999,
    status: "unverified",
    risk: "High RTO Risk (Unconfirmed Doorstep)",
    timestamp: "2 hours ago"
  }
];

const state = {
  activePortal: "storefront",
  activeCategory: "all",
  activeSubFilter: "all",
  activeRegion: "IN",
  selectedProductGrades: {},
  searchQuery: "",
  
  // Cart & Wishlist
  cart: [],
  wishlist: [],

  // Theme State
  theme: "dark",

  // Shop by Budget Finder State
  budgetMax: 100000,
  videoVerifiedOnly: false,

  // 360 Inspector State (Flipkart & Amazon Standard)
  currentInspectProduct: null,
  currentInspectGrade: "A",
  currentInspectAngle: 0,
  activePerspective: "front",
  viewerMode: "3d", // "3d" or "photo"
  isAutoSpinning: false,
  autoSpinAnimFrame: null,
  isZoomLoupeActive: false,
  isZoomed: false,

  // Operations Dashboard State
  orders: [...INITIAL_ORDERS],
  selectedOrderId: "FZ-1049",
  queueFilter: "all",
  chatHistory: {}
};

// Initialize grades
CATALOG.forEach(p => {
  state.selectedProductGrades[p.id] = "A";
});


// ========================================================
// THEME ENGINE (LIGHT MODE & DARK MODE WITH DUAL SUPPORT)
// ========================================================
function initTheme() {
  const saved = localStorage.getItem("fz_theme") || "dark";
  state.theme = saved;
  applyTheme(saved);
}

function toggleTheme() {
  const next = state.theme === "dark" ? "light" : "dark";
  state.theme = next;
  applyTheme(next);
}

function applyTheme(theme) {
  state.theme = theme;
  const body = document.body;
  const html = document.documentElement;
  const iconTop = document.getElementById("themeToggleIcon");
  const labelTop = document.getElementById("themeToggleLabel");
  const mainLogo = document.getElementById("mainNavbarLogo");
  const footerLogo = document.getElementById("footerLogo");

  if (theme === "light") {
    body.classList.add("theme-light");
    body.classList.remove("bg-[#070A10]", "text-slate-100");
    body.classList.add("bg-[#F8FAFC]", "text-slate-900");
    html.classList.remove("dark");
    if (iconTop) iconTop.textContent = "🌙";
    if (labelTop) labelTop.textContent = "Dark Mode";
    if (mainLogo) mainLogo.src = "assets/fonezone_logo.png";
    if (footerLogo) footerLogo.src = "assets/fonezone_logo.png";
    localStorage.setItem("fz_theme", "light");
    showToast("☀️ Switched to Light Mode (Apple & BackMarket Clean E-Commerce)");
  } else {
    body.classList.remove("theme-light");
    body.classList.remove("bg-[#F8FAFC]", "text-slate-900");
    body.classList.add("bg-[#070A10]", "text-slate-100");
    html.classList.add("dark");
    if (iconTop) iconTop.textContent = "☀️";
    if (labelTop) labelTop.textContent = "Light Mode";
    if (mainLogo) mainLogo.src = "assets/fonezone_logo_white.png";
    if (footerLogo) footerLogo.src = "assets/fonezone_logo_white.png";
    localStorage.setItem("fz_theme", "dark");
    showToast("🌙 Switched to Dark Mode (High-Tech Midnight Aesthetic)");
  }
}

// Format currency
function formatMoney(amountINR) {
  if (state.activeRegion === "UAE") {
    const aed = Math.round(amountINR / 22.8);
    return "AED " + aed.toLocaleString();
  }
  return "₹" + amountINR.toLocaleString("en-IN");
}

/* ======================================================== */
/* 1. PORTAL SWITCHING & TOUR GUIDES                        */
/* ======================================================== */
function switchPortal(portal) {
  state.activePortal = portal;
  const storefrontEl = document.getElementById("storefrontPortal");
  const opsEl = document.getElementById("opsDashboardPortal");
  const tabStorefrontBtn = document.getElementById("tabStorefrontBtn");
  const tabOpsBtn = document.getElementById("tabOpsBtn");

  if (portal === "storefront") {
    storefrontEl.classList.remove("hidden");
    opsEl.classList.add("hidden");
    tabStorefrontBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all portal-tab-active flex items-center gap-1.5 cursor-pointer";
    tabOpsBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all portal-tab-inactive flex items-center gap-1.5 cursor-pointer";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    storefrontEl.classList.add("hidden");
    opsEl.classList.remove("hidden");
    tabStorefrontBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all portal-tab-inactive flex items-center gap-1.5 cursor-pointer";
    tabOpsBtn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all portal-tab-active flex items-center gap-1.5 cursor-pointer";
    renderOrdersTable();
    updateSelectedCustomerCard();
    renderWhatsAppChat();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function tourSpeedTest() {
  switchPortal("storefront");
  setCategory("phone");
  showToast("⚡ Sub-second Edge Latency: 0.08s (Filtered Refurbished Phones)");
}

function tourOpen360() {
  switchPortal("storefront");
  openInspector("fz-ip15pro");
}

function tourOpenWhatsApp() {
  switchPortal("ops");
  selectOrder("FZ-1049");
  showToast("📲 Opened Sahil's Anti-RTO Dispatcher for Rahul Sharma");
}

/* ======================================================== */
/* 2. CUSTOMER STOREFRONT & FULL CLICKABILITY ENGINE        */
/* ======================================================== */
const CATEGORY_CONFIG = {
  all: {
    title: "All Certified Pre-Owned Electronics",
    subtitle: "Explore certified iPhones, Galaxy flagships, MacBooks, iPads, and Smart Watches with warranty.",
    breadcrumb: "All Certified Devices",
    subFilters: [
      { id: "all", label: "All Items" },
      { id: "apple", label: "Apple Products" },
      { id: "samsung", label: "Samsung Galaxy" },
      { id: "under50k", label: "Under ₹50,000" }
    ]
  },
  phone: {
    title: "Certified Refurbished Smartphones",
    subtitle: "Premium pre-owned Apple iPhones & Samsung Galaxy flagships. Tested across 32 points.",
    breadcrumb: "Refurbished Phones",
    subFilters: [
      { id: "all", label: "All Phones" },
      { id: "apple", label: "Apple iPhones" },
      { id: "samsung", label: "Samsung Galaxy" },
      { id: "flagship", label: "Flagship Pro Tier" },
      { id: "under50k", label: "Under ₹50,000" }
    ]
  },
  macbook: {
    title: "Certified Refurbished MacBooks & Laptops",
    subtitle: "Apple Silicon M1 & M2 laptops with 100% certified battery life and pristine displays.",
    breadcrumb: "MacBooks & Laptops",
    subFilters: [
      { id: "all", label: "All MacBooks" },
      { id: "m2", label: "Apple M2 Series" },
      { id: "pristine", label: "Grade A Only" }
    ]
  },
  ipad: {
    title: "Certified Refurbished iPads & Tablets",
    subtitle: "All-screen Liquid Retina iPads tested with Apple Pencil and Magic Keyboard compatibility.",
    breadcrumb: "iPads & Tablets",
    subFilters: [
      { id: "all", label: "All iPads" },
      { id: "wifi", label: "Wi-Fi Only" },
      { id: "cellular", label: "Wi-Fi + Cellular" }
    ]
  },
  watch: {
    title: "Certified Smart Watches",
    subtitle: "Rugged Apple Watch Ultra and Series models with tested water resistance and battery health.",
    breadcrumb: "Smart Watches",
    subFilters: [
      { id: "all", label: "All Watches" },
      { id: "ultra", label: "Apple Watch Ultra" },
      { id: "cellular", label: "Cellular Enabled" }
    ]
  },
  accessories: {
    title: "Original Charging & Audio Accessories",
    subtitle: "Certified MagSafe chargers, fast charging bricks, and original protective cases.",
    breadcrumb: "Accessories & Audio",
    subFilters: [
      { id: "all", label: "All Accessories" },
      { id: "chargers", label: "Fast Chargers" },
      { id: "cases", label: "Cases & Glass" }
    ]
  }
};

function renderCatalog() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const conf = CATEGORY_CONFIG[state.activeCategory] || CATEGORY_CONFIG.all;

  // Update Breadcrumbs & Titles
  document.getElementById("breadcrumbCategory").textContent = conf.breadcrumb;
  document.getElementById("categoryTitle").querySelector("span").textContent = conf.title;
  document.getElementById("categorySubtitle").textContent = conf.subtitle;

  // Render Sub-Filter Chips
  renderSubFilters(conf.subFilters);

  // Filter Catalog
  const filtered = CATALOG.filter(p => {
    // Category match
    const matchesCat = state.activeCategory === "all" || p.category === state.activeCategory;
    
    // Sub-filter match
    let matchesSub = true;
    if (state.activeSubFilter === "apple") matchesSub = p.brand === "apple";
    else if (state.activeSubFilter === "samsung") matchesSub = p.brand === "samsung";
    else if (state.activeSubFilter === "under50k") matchesSub = p.grades["A"].price < 50000;
    else if (state.activeSubFilter === "flagship") matchesSub = p.badge === "FLAGSHIP" || p.badge === "200MP CAM";

    // Budget match: device has at least one grade within selected budget
    const minPrice = Math.min(...Object.values(p.grades).map(g => g.price));
    const matchesBudget = !state.budgetMax || (state.budgetMax >= 100000) || (minPrice <= state.budgetMax);

    // Search query match
    const matchesSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(state.searchQuery.toLowerCase());

    return matchesCat && matchesSub && matchesBudget && matchesSearch;
  });

  // Keep budget widget counters synchronized
  updateBudgetDisplayUI();

  const countBadge = document.getElementById("productCountBadge");
  if (countBadge) countBadge.textContent = `${filtered.length} devices`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
        <h3 class="text-base font-bold text-white">No certified products match "${state.searchQuery || state.activeSubFilter}"</h3>
        <p class="text-xs mt-1">Try selecting "All Items" or clearing your search term.</p>
        <button onclick="setCategory('all'); setSubFilter('all');" class="mt-3 px-4 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-xs cursor-pointer">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const currentGrade = state.selectedProductGrades[p.id] || "A";
    const gradeInfo = p.grades[currentGrade];
    const savings = p.msrp - gradeInfo.price;
    const savingsPct = Math.round((savings / p.msrp) * 100);
    const rating = p.brand === "apple" ? "4.9" : "4.8";
    const reviews = p.id === "fz-ip15pro" ? 218 : p.id === "fz-ip14" ? 342 : p.id === "fz-s23ultra" ? 186 : 124;

    return `
      <div class="fz-glass-card rounded-2xl overflow-hidden p-4 flex flex-col justify-between group cursor-pointer" onclick="openInspector('${p.id}')">
        <div>
          <!-- Top Badges -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono uppercase">
              ${p.badge}
            </span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${currentGrade === 'A' ? 'badge-grade-a' : currentGrade === 'B' ? 'badge-grade-b' : 'badge-grade-c'}">
              ${gradeInfo.label}
            </span>
          </div>

          <!-- Product Image Container with Cashify Video Proof Badge & Star Rating -->
          <div class="relative h-44 flex items-center justify-center p-2 mb-3 overflow-hidden rounded-xl bg-slate-950/40 border border-slate-800/60 group/img">
            
            <!-- Star Rating Overlay (Top-Left) -->
            <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-amber-400 text-[10px] font-bold flex items-center gap-1 z-10">
              <span>★ ${rating}</span>
              <span class="text-slate-400 text-[9px] font-normal">(${reviews})</span>
            </div>

            <!-- Cashify-Style "▶ Watch Video Proof" Badge Overlay (Top-Right) -->
            <button onclick="openVerificationVideo('${p.id}'); event.stopPropagation();" 
                    class="video-proof-badge absolute top-2 right-2 px-2.5 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-[10px] font-black flex items-center gap-1.5 shadow-lg shadow-red-600/40 transition-all hover:scale-105 cursor-pointer z-10"
                    title="Watch 32-point lab verification video for this device">
              <span class="w-3.5 h-3.5 rounded-full bg-white text-red-600 flex items-center justify-center text-[8px] font-black">▶</span>
              <span>Video Proof</span>
            </button>

            <!-- Main Product Image -->
            <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xl">
            
            <!-- Dual Hover Actions Bar: 360 Inspect & Video QA -->
            <div class="absolute bottom-1.5 inset-x-2 flex items-center justify-center gap-1.5 opacity-90 group-hover:opacity-100 transition-all">
              <button onclick="openInspector('${p.id}'); event.stopPropagation();" class="px-2.5 py-1 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white border border-slate-700 text-[10px] font-bold flex items-center gap-1 shadow-lg cursor-pointer transition-all">
                <span>🔍 360° Inspect</span>
              </button>
              <button onclick="openVerificationVideo('${p.id}'); event.stopPropagation();" class="px-2.5 py-1 rounded-full bg-slate-900/90 hover:bg-red-600 text-white border border-slate-700 text-[10px] font-bold flex items-center gap-1 shadow-lg cursor-pointer transition-all">
                <span>📹 Lab Video</span>
              </button>
            </div>
          </div>

          <!-- Product Title -->
          <h3 class="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1" title="${p.name}">
            ${p.name}
          </h3>

          <!-- Pointer 2: Certified Battery Health Chip -->
          <div class="mt-2 flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px]">
            <div class="flex items-center gap-1.5">
              <span class="text-xs">🔋</span>
              <span class="text-slate-300 font-medium">Battery Health:</span>
            </div>
            <span class="text-emerald-400 font-mono font-bold">${gradeInfo.battery}% (Certified)</span>
          </div>

          <!-- Grade Selector Pills -->
          <div class="mt-2.5" onclick="event.stopPropagation();">
            <div class="text-[10px] text-slate-400 font-semibold mb-1">Select Condition Grade:</div>
            <div class="grid grid-cols-3 gap-1.5">
              ${["A", "B", "C"].map(g => `
                <button 
                  onclick="setCardGrade('${p.id}', '${g}')"
                  class="py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${g === currentGrade ? (g === 'A' ? 'badge-grade-a ring-1 ring-emerald-400/50' : g === 'B' ? 'badge-grade-b ring-1 ring-indigo-400/50' : 'badge-grade-c ring-1 ring-amber-400/50') : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'}"
                >
                  Grade ${g}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Hemant Verma Modernization Guarantees -->
          <div class="mt-2.5 pt-2 border-t border-slate-800/60 grid grid-cols-2 gap-1 text-[9px] text-slate-300">
            <div class="flex items-center gap-1 p-1 rounded bg-slate-900/50 border border-slate-800" title="0 Hidden Dents Guarantee">
              <span class="text-emerald-400">📍</span>
              <span class="truncate">0-Dent Guarantee</span>
            </div>
            <div class="flex items-center gap-1 p-1 rounded bg-slate-900/50 border border-slate-800" title="WhatsApp OTP dispatch verification">
              <span class="text-green-400">💬</span>
              <span class="truncate">WhatsApp Anti-RTO</span>
            </div>
          </div>

          <!-- Price Display with Effective Savings -->
          <div class="mt-2.5 pt-2 border-t border-slate-800/60">
            <div class="flex items-baseline gap-2">
              <span class="text-base font-extrabold text-white">${formatMoney(gradeInfo.price)}</span>
              <span class="text-xs text-slate-500 line-through">${formatMoney(p.msrp)}</span>
              <span class="text-[10px] text-emerald-400 font-bold ml-auto bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Save ${savingsPct}%</span>
            </div>
            <div class="text-[10px] text-blue-400 font-medium mt-0.5 flex items-center justify-between">
              <span>💳 Flat ₹2,000 Off on UPI/Card</span>
              <span class="text-slate-400">Free Express Air</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons: 360 View, Add to Cart & Buy COD -->
        <div class="grid grid-cols-2 gap-2 mt-3 pt-2" onclick="event.stopPropagation();">
          <button onclick="addToCart('${p.id}')" class="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer">
            <span>🛒 Add to Cart</span>
          </button>
          <button onclick="buyProductCOD('${p.id}')" class="py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-md shadow-blue-600/20 transition-all cursor-pointer">
            <span>⚡ Buy COD</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderSubFilters(subFilters) {
  const row = document.getElementById("subFilterRow");
  if (!row) return;

  if (!subFilters || subFilters.length === 0) {
    row.innerHTML = "";
    return;
  }

  row.innerHTML = subFilters.map(f => {
    const isActive = state.activeSubFilter === f.id;
    return `
      <button 
        onclick="setSubFilter('${f.id}')" 
        class="px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}"
      >
        ${f.label}
      </button>
    `;
  }).join('');
}

function setSubFilter(subId) {
  state.activeSubFilter = subId;
  renderCatalog();
}

function setCategory(cat) {
  state.activeCategory = cat;
  state.activeSubFilter = "all";

  // Update navigation button active styles
  document.querySelectorAll(".cat-nav-btn").forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = "cat-nav-btn px-3.5 py-1.5 rounded-lg text-white bg-blue-600 font-bold cursor-pointer transition-all";
    } else {
      btn.className = "cat-nav-btn px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white font-medium cursor-pointer transition-all";
    }
  });

  renderCatalog();

  // Smooth scroll to catalog so user instantly sees category results
  const sec = document.getElementById("productCatalogSection");
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setCardGrade(productId, grade) {
  state.selectedProductGrades[productId] = grade;
  renderCatalog();
}

function setRegion(reg) {
  state.activeRegion = reg;
  const btnIn = document.getElementById("regionBtnIN");
  const btnUae = document.getElementById("regionBtnUAE");
  if (reg === "IN") {
    btnIn.className = "px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white cursor-pointer";
    btnUae.className = "px-2 py-0.5 rounded text-[11px] font-semibold text-slate-400 hover:text-white cursor-pointer";
  } else {
    btnUae.className = "px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white cursor-pointer";
    btnIn.className = "px-2 py-0.5 rounded text-[11px] font-semibold text-slate-400 hover:text-white cursor-pointer";
  }
  renderCatalog();
  updateCartDrawerUI();
}

/* ======================================================== */
/* 2.5 SHOP BY BUDGET FINDER (SMART PRICE SLIDER & PILLS)  */
/* ======================================================== */
function updateSliderTrackFill(val) {
  const slider = document.getElementById("budgetRangeSlider");
  if (!slider) return;
  const min = Number(slider.min) || 15000;
  const max = Number(slider.max) || 100000;
  const clamped = Math.max(min, Math.min(max, Number(val)));
  const percent = ((clamped - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right, #1E56D8 0%, #3B82F6 ${percent}%, #1E293B ${percent}%, #1E293B 100%)`;
}

function setQuickBudget(maxVal) {
  const numVal = Number(maxVal);
  state.budgetMax = numVal;

  const slider = document.getElementById("budgetRangeSlider");
  if (slider) {
    slider.value = numVal;
    updateSliderTrackFill(numVal);
  }

  // Highlight matching quick budget pill
  const btns = document.querySelectorAll(".quick-budget-btn");
  btns.forEach(btn => {
    const text = btn.textContent.trim();
    let isMatch = false;
    if (numVal <= 20000 && text.includes("Under ₹20k")) isMatch = true;
    else if (numVal > 20000 && numVal <= 35000 && text.includes("₹20k - ₹35k")) isMatch = true;
    else if (numVal > 35000 && numVal <= 50000 && text.includes("₹35k - ₹50k")) isMatch = true;
    else if (numVal > 50000 && numVal <= 75000 && text.includes("50k - ₹75k")) isMatch = true;
    else if (numVal >= 100000 && text.includes("All Budgets")) isMatch = true;

    if (isMatch) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else {
      btn.className = "quick-budget-btn px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-medium transition-all cursor-pointer";
    }
  });

  updateBudgetDisplayUI();
  renderCatalog();
}

function handleBudgetSlider(val) {
  const numVal = Number(val);
  state.budgetMax = numVal;

  const slider = document.getElementById("budgetRangeSlider");
  if (slider && slider.value != numVal) slider.value = numVal;

  updateSliderTrackFill(numVal);

  // Dynamic range-based pill highlighting
  const btns = document.querySelectorAll(".quick-budget-btn");
  btns.forEach(btn => {
    btn.className = "quick-budget-btn px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-medium transition-all cursor-pointer";
    const text = btn.textContent.trim();
    if (numVal <= 20000 && text.includes("Under ₹20k")) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 20000 && numVal <= 35000 && text.includes("₹20k - ₹35k")) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 35000 && numVal <= 50000 && text.includes("₹35k - ₹50k")) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 50000 && numVal <= 75000 && text.includes("50k - ₹75k")) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal >= 100000 && text.includes("All Budgets")) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    }
  });

  updateBudgetDisplayUI();
  renderCatalog();
}

function handleBudgetSliderInput(val) {
  handleBudgetSlider(val);
}

function initBudgetSlider() {
  const slider = document.getElementById("budgetRangeSlider");
  if (!slider) return;

  // Dual direct event listeners
  slider.oninput = (e) => handleBudgetSlider(e.target.value);
  slider.onchange = (e) => handleBudgetSlider(e.target.value);

  updateSliderTrackFill(slider.value || 100000);
}

// Global window exposure for inline attributes
window.handleBudgetSlider = handleBudgetSlider;
window.handleBudgetSliderInput = handleBudgetSlider;
window.setQuickBudget = setQuickBudget;
window.initBudgetSlider = initBudgetSlider;

function updateBudgetDisplayUI() {
  const displayVal = document.getElementById("budgetDisplayVal");
  if (displayVal) {
    if (state.budgetMax >= 100000) {
      displayVal.textContent = "All Budgets (₹1,00,000+)";
    } else {
      displayVal.textContent = `Up to ${formatMoney(state.budgetMax)}`;
    }
  }

  // Count matching devices
  const matching = CATALOG.filter(p => {
    if (!state.budgetMax || state.budgetMax >= 100000) return true;
    const minPrice = Math.min(...Object.values(p.grades).map(g => g.price));
    return minPrice <= state.budgetMax;
  });

  const countEl = document.getElementById("budgetMatchCount");
  if (countEl) countEl.textContent = `${matching.length} in-stock`;

  const savingsEl = document.getElementById("budgetSavingsCallout");
  if (savingsEl) {
    if (matching.length > 0) {
      let maxSavePct = 0;
      matching.forEach(p => {
        Object.values(p.grades).forEach(g => {
          const pct = Math.round(((p.msrp - g.price) / p.msrp) * 100);
          if (pct > maxSavePct) maxSavePct = pct;
        });
      });
      savingsEl.innerHTML = `<span>🔥 Save up to ${maxSavePct}% vs Brand New MRP</span>`;
    } else {
      savingsEl.innerHTML = `<span>Slide higher to explore certified flagships</span>`;
    }
  }
}

/* ======================================================== */
/* 3. SEARCH WITH LIVE SUGGESTIONS DROPDOWN                 */
/* ======================================================== */
function handleSearch(q) {
  state.searchQuery = q.trim();
  const dropdown = document.getElementById("searchSuggestionsDropdown");

  if (!state.searchQuery) {
    if (dropdown) dropdown.classList.add("hidden");
    renderCatalog();
    return;
  }

  // Filter matched products for dropdown
  const matches = CATALOG.filter(p => 
    p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  if (dropdown) {
    if (matches.length > 0) {
      dropdown.classList.remove("hidden");
      dropdown.innerHTML = matches.slice(0, 4).map(p => `
        <div onclick="selectSearchProduct('${p.id}')" class="p-2 flex items-center justify-between hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
          <div class="flex items-center gap-2.5">
            <img src="${p.image}" alt="${p.name}" class="w-8 h-8 object-contain">
            <div>
              <div class="font-bold text-white text-xs">${p.name}</div>
              <div class="text-[10px] text-slate-400">${p.grades["A"].label} • ${p.warranty}</div>
            </div>
          </div>
          <span class="text-emerald-400 font-bold font-mono text-xs">${formatMoney(p.grades["A"].price)}</span>
        </div>
      `).join('');
    } else {
      dropdown.classList.remove("hidden");
      dropdown.innerHTML = `<div class="p-3 text-center text-slate-400 text-xs">No matching certified devices found.</div>`;
    }
  }

  renderCatalog();
}

function handleSearchFocus() {
  if (state.searchQuery) {
    handleSearch(state.searchQuery);
  }
}

function selectSearchProduct(productId) {
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  if (dropdown) dropdown.classList.add("hidden");
  openInspector(productId);
}

function executeSearch() {
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  if (dropdown) dropdown.classList.add("hidden");
  renderCatalog();
  const sec = document.getElementById("productCatalogSection");
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Close search dropdown on clicking outside
document.addEventListener("click", (e) => {
  const searchInput = document.getElementById("storeSearchInput");
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  if (dropdown && !dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.classList.add("hidden");
  }
});

/* ======================================================== */
/* 4. CART & WISHLIST DRAWERS                               */
/* ======================================================== */
function addToCart(productId) {
  const p = CATALOG.find(item => item.id === productId);
  if (!p) return;

  const currentGrade = state.selectedProductGrades[productId] || "A";
  const gradeInfo = p.grades[currentGrade];

  const existing = state.cart.find(item => item.id === productId && item.grade === currentGrade);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: productId,
      name: p.name,
      image: p.image,
      grade: currentGrade,
      price: gradeInfo.price,
      qty: 1
    });
  }

  updateCartDrawerUI();
  openCartDrawer();
  showToast(`🛒 Added ${p.name} (Grade ${currentGrade}) to Cart!`);
}

function addToCartFromInspector() {
  if (!state.currentInspectProduct) return;
  addToCart(state.currentInspectProduct.id);
  if (state.hasCaseAddon) {
    const caseName = state.selectedCaseStyle === "clear" ? "Impact Clear Case" : state.selectedCaseStyle === "navy" ? "Navy Silicone Case" : "Slim Matte Black Case";
    state.cart.push({
      id: "case-" + Date.now(),
      name: `${caseName} for ${state.currentInspectProduct.name}`,
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&q=80",
      grade: "New OEM",
      price: 399,
      qty: 1
    });
    updateCartDrawerUI();
  }
  closeInspector();
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.remove("hidden");
  updateCartDrawerUI();
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.add("hidden");
}

function updateCartDrawerUI() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Badge counters
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.textContent = totalItems;
  const drawerCount = document.getElementById("cartDrawerCount");
  if (drawerCount) drawerCount.textContent = totalItems;

  const listEl = document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cartDrawerTotal");

  if (totalEl) totalEl.textContent = formatMoney(totalAmount);

  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <span class="text-3xl">🛒</span>
        <p class="font-bold text-white text-xs mt-2">Your cart is empty</p>
        <p class="text-[11px] text-slate-500 mt-1">Explore certified refurbished devices with 6M warranty.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = state.cart.map((item, idx) => `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 text-xs">
      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain bg-slate-950/60 p-1 rounded-lg">
      <div class="flex-1">
        <div class="font-bold text-white line-clamp-1">${item.name}</div>
        <div class="text-[10px] text-emerald-400 font-bold">Grade ${item.grade} Pristine • 6M Warranty</div>
        <div class="text-slate-300 font-mono mt-0.5">${formatMoney(item.price)} × ${item.qty}</div>
      </div>
      <button onclick="removeFromCart(${idx})" class="p-1 rounded-lg text-slate-500 hover:text-red-400 cursor-pointer" title="Remove">
        ✕
      </button>
    </div>
  `).join('');
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  updateCartDrawerUI();
}

function checkoutCartCOD() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  closeCartDrawer();
  const firstItem = state.cart[0];
  buyProductCOD(firstItem.id);
}

/* Track Order Modal */
function openTrackOrderModal() {
  document.getElementById("trackOrderModal").classList.remove("hidden");
  document.getElementById("trackOrderModal").classList.add("flex");
}

function closeTrackOrderModal() {
  document.getElementById("trackOrderModal").classList.add("hidden");
  document.getElementById("trackOrderModal").classList.remove("flex");
}

function searchTrackOrder() {
  const input = document.getElementById("trackInput").value || "FZ-1049";
  showToast(`🚚 Found tracking for #${input}: BlueDart AWB #FZ-BLUEDART-8821 in transit.`);
}

function openWishlistDrawer() {
  showToast("❤️ Saved to your FoneZone Wishlist! (1 Item)");
}

/* ======================================================== */
/* 5. WORKING 360° COSMETIC & MULTI-ANGLE INSPECTOR (FLIPKART/AMAZON) */
/* ======================================================== */
function openInspector(productId) {
  const p = CATALOG.find(item => item.id === productId) || CATALOG[0];
  state.currentInspectProduct = p;
  state.currentInspectGrade = state.selectedProductGrades[p.id] || "A";
  state.currentInspectAngle = 0;
  state.isZoomed = false;
  state.isZoomLoupeActive = false;

  const modal = document.getElementById("inspectorModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.getElementById("inspectModalProductName").textContent = p.name;
  const mv = document.getElementById("mainModelViewer");
  if (mv && p.model3d) mv.src = p.model3d;

  // Listen to camera-change on model-viewer to display dynamic multi-axis angles
  if (mv && !mv._hasCameraListener) {
    mv._hasCameraListener = true;
    mv.addEventListener("camera-change", () => {
      if (state.viewerMode !== "3d") return;
      try {
        const orbit = mv.getCameraOrbit();
        if (orbit) {
          const thetaDeg = Math.round(((orbit.theta * 180 / Math.PI) % 360 + 360) % 360);
          const phiDeg = Math.round(orbit.phi * 180 / Math.PI);
          const angleTag = document.getElementById("currentAngleTag");
          if (angleTag) {
            let side = "Front Display OLED";
            if (phiDeg <= 25) side = "Top Bezel (Looking Down)";
            else if (phiDeg >= 155) side = "Bottom Port & Speakers (Looking Up)";
            else if (thetaDeg >= 45 && thetaDeg < 135) side = "Front Display OLED";
            else if (thetaDeg >= 135 && thetaDeg < 225) side = "Right Titanium Rail";
            else if (thetaDeg >= 225 && thetaDeg < 315) side = "Rear Glass & Cameras";
            else side = "Left Volume Rail & Buttons";

            angleTag.textContent = `🌐 ${thetaDeg}° Orbit (${side}) • Pitch: ${phiDeg}°`;
          }
        }
      } catch (e) {}
    });
  }
  
  // Reset auto-spin switch in DOM
  const sw = document.getElementById("autoSpinToggle");
  if (sw) sw.checked = false;
  handleAutoSpinSwitch(false);

  // Reset degree scrubber
  const scrubber = document.getElementById("turntableDegreeScrubber");
  if (scrubber) scrubber.value = 0;

  // Default to 3D Orbit mode and snap to Front perspective
  setViewerMode("3d");
  setInspectPerspective("front");

  updateInspectGradeUI();
  updateInspectAngleUI();
  initTurntableDragging();
  initZoomLoupeEvents();
}

function closeInspector() {
  handleAutoSpinSwitch(false);
  if (state.autoSpinAnimFrame) {
    cancelAnimationFrame(state.autoSpinAnimFrame);
    state.autoSpinAnimFrame = null;
  }
  const modal = document.getElementById("inspectorModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  const loupe = document.getElementById("zoomLoupe");
  if (loupe) loupe.style.display = "none";
}

function setViewerMode(mode) {
  state.viewerMode = mode;
  const btn3d = document.getElementById("modeViewer3dBtn");
  const btnPhoto = document.getElementById("modeViewerPhotoBtn");
  const stage3d = document.getElementById("stage3DWrapper");
  const stagePhoto = document.getElementById("stagePhotoWrapper");

  if (mode === "3d") {
    if (btn3d) btn3d.className = "px-2.5 py-1 rounded-lg font-bold bg-blue-600 text-white cursor-pointer transition-all";
    if (btnPhoto) btnPhoto.className = "px-2.5 py-1 rounded-lg font-medium text-slate-400 hover:text-white cursor-pointer transition-all";
    if (stage3d) { stage3d.classList.remove("hidden"); stage3d.classList.add("flex"); }
    if (stagePhoto) { stagePhoto.classList.add("hidden"); stagePhoto.classList.remove("flex"); }

    const mv = document.getElementById("mainModelViewer");
    if (mv) {
      if (state.isAutoSpinning) {
        mv.setAttribute("auto-rotate", "");
        mv.setAttribute("rotation-per-second", "8deg");
      } else {
        mv.removeAttribute("auto-rotate");
      }
    }
  } else {
    if (btnPhoto) btnPhoto.className = "px-2.5 py-1 rounded-lg font-bold bg-blue-600 text-white cursor-pointer transition-all";
    if (btn3d) btn3d.className = "px-2.5 py-1 rounded-lg font-medium text-slate-400 hover:text-white cursor-pointer transition-all";
    if (stagePhoto) { stagePhoto.classList.remove("hidden"); stagePhoto.classList.add("flex"); }
    if (stage3d) { stage3d.classList.add("hidden"); stage3d.classList.remove("flex"); }
    updateInspectAngleUI();
  }
}

function setInspectPerspective(perspective) {
  // Stop auto spin when selecting a specific angle preset
  if (state.isAutoSpinning) {
    const sw = document.getElementById("autoSpinToggle");
    if (sw) sw.checked = false;
    handleAutoSpinSwitch(false);
  }

  state.activePerspective = perspective;

  // Highlight active button among the 6 presets
  const perspectiveBtns = {
    front: document.getElementById("btnPerspectiveFront"),
    back: document.getElementById("btnPerspectiveBack"),
    right: document.getElementById("btnPerspectiveRight"),
    left: document.getElementById("btnPerspectiveLeft"),
    top: document.getElementById("btnPerspectiveTop"),
    bottom: document.getElementById("btnPerspectiveBottom")
  };

  Object.entries(perspectiveBtns).forEach(([k, btn]) => {
    if (!btn) return;
    if (k === perspective) {
      btn.className = "perspective-btn active px-1.5 py-1 rounded bg-blue-600 text-white font-bold text-[10px] text-center shadow cursor-pointer";
    } else {
      btn.className = "perspective-btn px-1.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-[10px] text-center border border-slate-800 cursor-pointer";
    }
  });

  const mv = document.getElementById("mainModelViewer");

  // Spherical camera orbits: theta (horizontal yaw) phi (vertical pitch) radius
  const orbits = {
    front: { orbit: "90deg 90deg 105%", label: "90° Front Display Glass (OLED)", angle: 0, photoKey: "front", tip: "📱 Front: Super Retina OLED • 100% Scratch-Free" },
    back: { orbit: "270deg 90deg 105%", label: "270° Rear Matte Glass & Camera Pod", angle: 180, photoKey: "back", tip: "🔄 Back: Ceramic Matte Glass • Zero Cracks" },
    right: { orbit: "180deg 90deg 105%", label: "180° Right Titanium Rail & Power Button", angle: 90, photoKey: "right", tip: "➡️ Right: Precision Titanium Rails • Zero Dents" },
    left: { orbit: "0deg 90deg 105%", label: "0° Left Titanium Rail & Volume Buttons", angle: 270, photoKey: "left", tip: "⬅️ Left: Action Button & Volume Rockers 100% Intact" },
    top: { orbit: "90deg 12deg 95%", label: "Top Bezel & Microphones (Top-Down View)", angle: 0, photoKey: "top", tip: "⬆️ Top Edge: Inspected Bezel & Top Microphones" },
    bottom: { orbit: "90deg 168deg 95%", label: "Bottom Port, Speakers & Mic (Bottom-Up View)", angle: 90, photoKey: "bottom", tip: "⬇️ Bottom Edge: Tested USB-C Charging Port & Speakers" }
  };

  const target = orbits[perspective] || orbits.front;

  if (state.viewerMode === "3d" && mv) {
    mv.cameraOrbit = target.orbit;
    const dentHotspot = document.getElementById("modelHotspotDent");
    if (dentHotspot) {
      if ((state.currentInspectGrade === "B" || state.currentInspectGrade === "C") && (perspective === "right" || perspective === "bottom" || perspective === "back")) {
        dentHotspot.classList.remove("hidden");
      } else if (state.currentInspectGrade === "A") {
        dentHotspot.classList.add("hidden");
      }
    }
  } else {
    // Studio Photo Mode
    const imgEl = document.getElementById("inspectMainImg");
    const p = state.currentInspectProduct;
    if (imgEl && p && p.angles && p.angles[target.photoKey]) {
      imgEl.src = p.angles[target.photoKey];
      imgEl.style.transform = "none";
      state.currentInspectAngle = target.angle;
      const scrubber = document.getElementById("turntableDegreeScrubber");
      if (scrubber) scrubber.value = target.angle;
    } else {
      state.currentInspectAngle = target.angle;
      const scrubber = document.getElementById("turntableDegreeScrubber");
      if (scrubber) scrubber.value = target.angle;
      updateInspectAngleUI();
    }
  }

  const angleTag = document.getElementById("currentAngleTag");
  if (angleTag) {
    angleTag.textContent = target.label;
  }

  showToast(target.tip);
}

function handleAutoSpinSwitch(isChecked) {
  state.isAutoSpinning = isChecked;

  const mv = document.getElementById("mainModelViewer");
  if (mv) {
    if (isChecked) {
      mv.setAttribute("auto-rotate", "");
      mv.setAttribute("rotation-per-second", "8deg"); // Slower, silky smooth pace!
    } else {
      mv.removeAttribute("auto-rotate");
    }
  }

  // Smooth continuous requestAnimationFrame loop for Photo Mode & Scrubber sync
  if (state.autoSpinAnimFrame) {
    cancelAnimationFrame(state.autoSpinAnimFrame);
    state.autoSpinAnimFrame = null;
  }

  if (isChecked) {
    let lastTime = performance.now();
    const spinLoop = (now) => {
      if (!state.isAutoSpinning) return;
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      // 360 degrees in 20 seconds = 18 deg/sec, smooth & graceful
      state.currentInspectAngle = (state.currentInspectAngle + 18 * dt) % 360;
      const scrubber = document.getElementById("turntableDegreeScrubber");
      if (scrubber) scrubber.value = Math.round(state.currentInspectAngle);
      updateInspectAngleUI();
      state.autoSpinAnimFrame = requestAnimationFrame(spinLoop);
    };
    state.autoSpinAnimFrame = requestAnimationFrame(spinLoop);
  }
}

function handleDegreeScrubber(val) {
  const deg = parseFloat(val);
  state.currentInspectAngle = deg;

  // If user interacts with scrubber, stop auto-spin
  if (state.isAutoSpinning) {
    const sw = document.getElementById("autoSpinToggle");
    if (sw) sw.checked = false;
    handleAutoSpinSwitch(false);
  }

  if (state.viewerMode === "3d") {
    const mv = document.getElementById("mainModelViewer");
    if (mv) {
      const yaw = Math.round((90 + deg) % 360);
      mv.cameraOrbit = `${yaw}deg 90deg 105%`;
    }
  }

  updateInspectAngleUI();
}

function setInspectGrade(grade) {
  state.currentInspectGrade = grade;
  state.selectedProductGrades[state.currentInspectProduct.id] = grade;
  updateInspectGradeUI();
  renderCatalog();
}

function updateInspectGradeUI() {
  const p = state.currentInspectProduct;
  const g = state.currentInspectGrade;
  const gradeInfo = p.grades[g];

  // Update pills and labels
  const pill = document.getElementById("inspectGradePill");
  pill.textContent = gradeInfo.label;
  pill.className = `px-2 py-0.5 rounded-full text-[10px] font-bold ${g === 'A' ? 'badge-grade-a' : g === 'B' ? 'badge-grade-b' : 'badge-grade-c'}`;

  // Update buttons
  ["A", "B", "C"].forEach(gradeKey => {
    const btn = document.getElementById(`inspectGradeBtn${gradeKey}`);
    if (btn) {
      if (gradeKey === g) {
        btn.className = `p-2 rounded-xl text-xs font-bold ${g === 'A' ? 'badge-grade-a' : g === 'B' ? 'badge-grade-b' : 'badge-grade-c'} text-center ring-2 ring-blue-500/50 cursor-pointer`;
      } else {
        btn.className = "p-2 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 hover:text-white border border-slate-800 text-center cursor-pointer";
      }
    }
  });

  // Update Description
  const descEl = document.getElementById("inspectGradeDescText");
  if (descEl) descEl.textContent = gradeInfo.desc;

  // Update Battery
  const batPctEl = document.getElementById("inspectBatteryPercent");
  if (batPctEl) batPctEl.textContent = `${gradeInfo.battery}%`;
  const batBarEl = document.getElementById("inspectBatteryBar");
  if (batBarEl) batBarEl.style.width = `${gradeInfo.battery}%`;

  // Update Price
  const priceEl = document.getElementById("inspectPrice");
  if (priceEl) priceEl.textContent = formatMoney(gradeInfo.price);
  const msrpEl = document.getElementById("inspectMsrp");
  if (msrpEl) msrpEl.textContent = formatMoney(p.msrp);
  const savings = p.msrp - gradeInfo.price;
  const savingsEl = document.getElementById("inspectSavingsTag");
  if (savingsEl) {
    savingsEl.textContent = `Save ${formatMoney(savings)}`;
  }

  // Update Hotspots
  const bezelHotspot = document.getElementById("hotspotBezel");
  const frameHotspot = document.getElementById("hotspotFrame");
  const camHotspot = document.getElementById("hotspotCamera");

  if (bezelHotspot) bezelHotspot.style.display = "flex";
  if (frameHotspot) frameHotspot.style.display = g === "C" ? "flex" : (g === "B" ? "flex" : "none");
  if (camHotspot) camHotspot.style.display = "flex";

  // Update 3D Model Surface Anchored Hotspots
  const modelDentHotspot = document.getElementById("modelHotspotDent");
  if (modelDentHotspot) {
    if (g === "B" || g === "C") {
      modelDentHotspot.classList.remove("hidden");
    } else {
      modelDentHotspot.classList.add("hidden");
    }
  }

  // Update "Where is the Dent?" Cosmetic Transparency Map
  renderDentInspectorUI();
}

function setInspectAngle(angle) {
  // If user clicks preset, stop auto-spin
  if (state.isAutoSpinning) {
    const sw = document.getElementById("autoSpinToggle");
    if (sw) sw.checked = false;
    handleAutoSpinSwitch(false);
  }

  state.currentInspectAngle = angle;
  const scrubber = document.getElementById("turntableDegreeScrubber");
  if (scrubber) scrubber.value = angle;

  if (state.viewerMode === "3d") {
    const mv = document.getElementById("mainModelViewer");
    if (mv) {
      const yaw = Math.round((90 + angle) % 360);
      mv.cameraOrbit = `${yaw}deg 90deg 105%`;
    }
  }

  updateInspectAngleUI();
}

function updateInspectAngleUI() {
  const p = state.currentInspectProduct;
  if (!p) return;
  const deg = (state.currentInspectAngle % 360 + 360) % 360;
  const imgEl = document.getElementById("inspectMainImg");
  const angleTag = document.getElementById("currentAngleTag");

  let src = p.angles && p.angles[0] ? p.angles[0] : p.image;
  let label = `${Math.round(deg)}° Front Display Glass`;
  let flipX = false;
  let subtleTilt = 0;

  // Authentic 8-Frame Multi-Angle Turntable Mapping
  const frames = [0, 45, 90, 135, 180, 225, 270, 315];
  let closestAng = 0;
  let minDiff = 999;
  frames.forEach(f => {
    let diff = Math.min(Math.abs(deg - f), Math.abs(deg - (f + 360)), Math.abs(deg - (f - 360)));
    if (diff < minDiff) {
      minDiff = diff;
      closestAng = f;
    }
  });

  if (p.angles && p.angles[closestAng]) {
    src = p.angles[closestAng];
  } else {
    src = p.image;
  }

  const angleLabels = {
    0: "0° Front Display Glass (OLED)",
    45: "45° Hero Angle & Curvature",
    90: "90° Aerospace Rail & Buttons",
    135: "135° Back Chamfer & Lenses",
    180: "180° Rear Matte Glass & Camera Pod",
    225: "225° Back-Left Corner & Frame",
    270: "270° Volume Rails & Speaker Grille",
    315: "315° Front Bezel & Notch"
  };
  label = `${Math.round(deg)}° - ${angleLabels[closestAng] || "Inspected Angle"}`;

  if (imgEl) {
    imgEl.src = src;
    const transformStr = `perspective(700px) rotateY(${subtleTilt}deg) scaleX(${flipX ? -1 : 1})`;
    imgEl.style.transform = transformStr;
  }

  if (angleTag) {
    angleTag.textContent = label;
  }

  // Update turntable degree ring
  const ring = document.querySelector(".turntable-degree-ring");
  if (ring) {
    ring.style.transform = `rotate(${deg}deg)`;
  }

  // Update preset button active states
  const presetAngles = [0, 45, 90, 180];
  document.querySelectorAll(".angle-btn").forEach((btn, idx) => {
    const pAng = presetAngles[idx];
    const diff = Math.abs(deg - pAng);
    if (diff <= 20) {
      btn.className = "angle-btn px-2 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-[11px] text-center shadow cursor-pointer";
    } else {
      btn.className = "angle-btn px-2 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-[11px] text-center border border-slate-800 cursor-pointer";
    }
  });

  // Dynamic flaw pin update as angle turns
  renderDentInspectorUI();
}

/* ======================================================== */
/* "WHERE IS THE DENT?" RADICAL COSMETIC TRANSPARENCY ENGINE*/
/* ======================================================== */
function getDefaultFlawsForGrade(product, g) {
  if (g === "A") {
    return {
      dents: 0,
      scratches: 0,
      badgeText: "0 Dents · 100% Mint",
      summary: "Showroom Pristine condition. Zero scratches, zero dents, zero cosmetic defects.",
      screen: "100% Scratch-Free Guaranteed (Original OEM OLED Display)",
      frame: "Factory Flawless Rails, 0 Scuffs",
      backGlass: "Pristine, 0 Scratches or Marks",
      cameraLens: "Sapphire Crystal Rings, 0 Scratches",
      pins: []
    };
  } else if (g === "B") {
    return {
      dents: 1,
      scratches: 0,
      badgeText: "1 Micro Dent (0.8mm)",
      summary: "1 Minor 0.8mm cosmetic scuff on lower speaker bezel rail. Screen is 100% spotless.",
      screen: "100% Scratch-Free Guaranteed (Original OEM OLED Display)",
      frame: "0.8mm hairline cosmetic scuff on lower bezel rail (100% concealed by case)",
      backGlass: "Pristine Rear Glass, Zero Cracks",
      cameraLens: "100% Scratch-Free Sapphire Rings",
      pins: [
        {
          id: "flaw-b-bezel",
          angle: 90,
          label: "0.8mm Bezel Scuff",
          location: "Lower Right Speaker Bezel",
          type: "dent",
          severity: "0.8mm Hairline (Minor)",
          x: "54%",
          y: "84%",
          desc: "0.8mm hairline cosmetic surface mark on lower frame rail. Passes 100% structural rigidity test. Completely hidden inside any protective phone case."
        }
      ]
    };
  } else {
    return {
      dents: 2,
      scratches: 1,
      badgeText: "2 Minor Marks",
      summary: "2 minor cosmetic marks (Corner rail scuff + faint rear glass mark). Screen 100% intact.",
      screen: "100% Touch & TrueTone Functional (No cracks)",
      frame: "1.2mm Corner Rail Scuff on top-left edge (Angle: 45°)",
      backGlass: "Superficial surface hairline on rear glass (Angle: 180°)",
      cameraLens: "Tested 100% 4K clear lenses",
      pins: [
        {
          id: "flaw-c-corner",
          angle: 45,
          label: "1.2mm Corner Scuff",
          location: "Top-Left Corner Rail",
          type: "dent",
          severity: "1.2mm Surface Scuff",
          x: "36%",
          y: "22%",
          desc: "1.2mm minor corner scuff from daily use. Structurally 100% sealed and rigid."
        },
        {
          id: "flaw-c-back",
          angle: 180,
          label: "Back Glass Hairline",
          location: "Rear Matte Glass",
          type: "scratch",
          severity: "Superficial Hairline",
          x: "58%",
          y: "56%",
          desc: "Superficial surface hairline on rear glass. Invisible when phone is placed in a case."
        }
      ]
    };
  }
}

function renderDentInspectorUI() {
  const p = state.currentInspectProduct;
  const g = state.currentInspectGrade || "A";
  if (!p) return;

  const flaws = (p.flaws && p.flaws[g]) ? p.flaws[g] : getDefaultFlawsForGrade(p, g);
  const currentAngle = (state.currentInspectAngle % 360 + 360) % 360;

  // 1. Total Dent Count Badge
  const countBadge = document.getElementById("dentTotalCountBadge");
  if (countBadge) {
    if (flaws.dents === 0) {
      countBadge.textContent = "Total Dents: 0 (Flawless)";
      countBadge.className = "px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-black font-mono";
    } else if (flaws.dents === 1) {
      countBadge.textContent = `Total Dents: ${flaws.dents} (${flaws.pins[0]?.severity || '0.8mm Scuff'})`;
      countBadge.className = "px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-black font-mono";
    } else {
      countBadge.textContent = `Total Dents: ${flaws.dents} Marks (Grade C)`;
      countBadge.className = "px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[11px] font-black font-mono";
    }
  }

  // 2. Status Pill in Turntable (Top-left)
  const statusDot = document.getElementById("dentInspectorStatusDot");
  const statusText = document.getElementById("dentInspectorStatusText");
  if (statusDot && statusText) {
    if (flaws.dents === 0) {
      statusDot.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
      statusText.textContent = `Grade ${g}: 0 Dents · 100% Mint Ceramic & Titanium`;
    } else {
      statusDot.className = "w-2 h-2 rounded-full bg-amber-400 animate-pulse";
      statusText.textContent = `Grade ${g}: ${flaws.badgeText} • Radical Transparency`;
    }
  }

  // 3. Breakdown Table
  const auditContent = document.getElementById("dentAuditContent");
  if (auditContent) {
    if (flaws.dents === 0) {
      auditContent.innerHTML = `
        <div class="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 flex items-start gap-2">
          <span class="text-base">🛡️</span>
          <div>
            <div class="font-bold text-white text-xs">Zero Cosmetic Imperfections Guaranteed</div>
            <div class="text-[11px] text-emerald-400/90 mt-0.5">Every Grade A device is hand-selected with 0 scratches on display and 0 dents on metal rails.</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 text-[11px]">
          <div class="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
            <span class="text-slate-400 block text-[10px]">DISPLAY SCREEN:</span>
            <span class="font-bold text-white flex items-center gap-1"><span class="text-emerald-400">✓</span> 100% Scratch-Free OLED</span>
          </div>
          <div class="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
            <span class="text-slate-400 block text-[10px]">CHASSIS & RAILS:</span>
            <span class="font-bold text-white flex items-center gap-1"><span class="text-emerald-400">✓</span> 0 Dents · Like New</span>
          </div>
        </div>
      `;
    } else {
      let flawRows = "";
      flaws.pins.forEach((pin, idx) => {
        flawRows += `
          <div class="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/30 flex items-start justify-between gap-2">
            <div class="flex items-start gap-2">
              <span class="text-amber-400 text-sm font-bold">📍 #${idx + 1}</span>
              <div>
                <div class="font-bold text-white text-xs">${pin.location} (${pin.severity})</div>
                <div class="text-[11px] text-slate-300 mt-0.5">${pin.desc}</div>
              </div>
            </div>
            <button onclick="jumpToFlaw(${pin.angle}, '${pin.location}')" class="shrink-0 px-2 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] flex items-center gap-1 shadow cursor-pointer transition-colors">
              <span>🔍 ${pin.angle}° View</span>
            </button>
          </div>
        `;
      });
      auditContent.innerHTML = `
        <div class="text-[11px] text-slate-300 mb-1 leading-snug">
          <b>FoneZone Transparency Promise:</b> We disclose the exact millimeter location of every cosmetic flaw so there are zero surprises at doorstep.
        </div>
        ${flawRows}
        <div class="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] flex items-center justify-between">
          <span class="text-slate-400">DISPLAY SCREEN STATUS:</span>
          <span class="font-bold text-emerald-400 flex items-center gap-1"><span>✓</span> 100% Scratch-Free OLED</span>
        </div>
      `;
    }
  }

  // 4. Dent Action Buttons (Jump to Angle)
  const angleButtonsContainer = document.getElementById("dentAngleButtons");
  if (angleButtonsContainer) {
    if (flaws.pins && flaws.pins.length > 0) {
      let btns = "";
      flaws.pins.forEach((pin, i) => {
        btns += `
          <button onclick="jumpToFlaw(${pin.angle}, '${pin.location}')" class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold border border-amber-500/40 text-[10px] transition-all flex items-center gap-1 cursor-pointer">
            <span>🎯 View #${i+1} at ${pin.angle}°</span>
          </button>
        `;
      });
      angleButtonsContainer.innerHTML = btns;
    } else {
      angleButtonsContainer.innerHTML = `
        <span class="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
          <span>✓</span> 0 Dents on Any Angle
        </span>
      `;
    }
  }

  // 5. Dynamic Hotspot Pins on Phone Image
  renderDynamicFlawPins(flaws, currentAngle);
}

function renderDynamicFlawPins(flaws, currentAngle) {
  const container = document.getElementById("dentPinsOverlay");
  if (!container) return;

  if (!flaws || !flaws.pins || flaws.pins.length === 0) {
    container.innerHTML = `
      <div class="flaw-hotspot-pin top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" onclick="showHotspotTip('✨ Grade A Verification: Display & Chassis have 0 dents and 0 scratches.')" title="0 Dents Verified">
        <div class="flaw-pulse-emerald flaw-pulse-ring bg-emerald-500/40"></div>
        <div class="relative w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-black shadow-lg border-2 border-white">✓</div>
      </div>
    `;
    return;
  }

  let html = "";
  flaws.pins.forEach((pin, idx) => {
    const angleDiff = Math.min(
      Math.abs(currentAngle - pin.angle),
      Math.abs(currentAngle - (pin.angle + 360)),
      Math.abs(currentAngle - (pin.angle - 360))
    );
    const isNearby = angleDiff <= 45;

    if (isNearby) {
      html += `
        <div class="flaw-hotspot-pin" style="top: ${pin.y}; left: ${pin.x};" onclick="showHotspotTip('📍 Flaw #${idx+1} [${pin.location}]: ${pin.desc}')" title="${pin.label}">
          <div class="flaw-pulse-amber flaw-pulse-ring bg-amber-500/60"></div>
          <div class="relative w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shadow-2xl border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            📍
          </div>
          <div class="absolute left-8 top-0 whitespace-nowrap bg-slate-900/95 text-white border border-amber-500/60 px-2 py-0.5 rounded text-[10px] font-mono shadow-lg pointer-events-none">
            ${pin.severity}
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

function jumpToFlaw(angle, location) {
  if (state.isAutoSpinning) {
    const sw = document.getElementById("autoSpinToggle");
    if (sw) sw.checked = false;
    handleAutoSpinSwitch(false);
  }

  if (state.viewerMode === "3d") {
    const mv = document.getElementById("mainModelViewer");
    if (mv) {
      if (angle === 90) setInspectPerspective("right");
      else if (angle === 180) setInspectPerspective("back");
      else if (angle === 45) {
        mv.cameraOrbit = "45deg 80deg 105%";
        const angleTag = document.getElementById("currentAngleTag");
        if (angleTag) angleTag.textContent = "45° Top-Right Corner Rail";
      } else {
        mv.cameraOrbit = `${angle}deg 90deg 105%`;
      }
    }
  } else {
    setInspectAngle(angle);
  }

  showToast(`🎯 Rotated to ${angle}°: Inspecting ${location}. Cosmetic only, zero structural impact.`);

  setTimeout(() => {
    const pins = document.querySelectorAll(".flaw-hotspot-pin, .hotspot-3d-pin");
    pins.forEach(pin => {
      pin.classList.add("scale-125");
      setTimeout(() => pin.classList.remove("scale-125"), 600);
    });
  }, 100);
}

function initTurntableDragging() {
  const stage = document.getElementById("stagePhotoWrapper");
  if (!stage) return;

  let isDragging = false;
  let startX = 0;

  stage.onmousedown = (e) => {
    isDragging = true;
    startX = e.clientX;
    if (state.isAutoSpinning) {
      const sw = document.getElementById("autoSpinToggle");
      if (sw) sw.checked = false;
      handleAutoSpinSwitch(false);
    }
  };

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    startX = e.clientX;
    state.currentInspectAngle = (state.currentInspectAngle - delta * 0.8 + 360) % 360;
    const scrubber = document.getElementById("turntableDegreeScrubber");
    if (scrubber) scrubber.value = Math.round(state.currentInspectAngle);
    updateInspectAngleUI();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch support
  stage.ontouchstart = (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    if (state.isAutoSpinning) {
      const sw = document.getElementById("autoSpinToggle");
      if (sw) sw.checked = false;
      handleAutoSpinSwitch(false);
    }
  };

  stage.ontouchmove = (e) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    startX = e.touches[0].clientX;
    state.currentInspectAngle = (state.currentInspectAngle - delta * 0.8 + 360) % 360;
    const scrubber = document.getElementById("turntableDegreeScrubber");
    if (scrubber) scrubber.value = Math.round(state.currentInspectAngle);
    updateInspectAngleUI();
  };

  stage.ontouchend = () => {
    isDragging = false;
  };
}

// Flipkart / Amazon Style Zoom Magnifier Loupe
function toggleZoomLoupe() {
  state.isZoomLoupeActive = !state.isZoomLoupeActive;
  const btn = document.getElementById("zoomLoupeBtn");
  const label = document.getElementById("zoomLoupeLabel");
  const loupe = document.getElementById("zoomLoupe");

  if (state.isZoomLoupeActive) {
    if (label) label.textContent = "Zoom Loupe: ON";
    if (btn) btn.className = "px-2.5 py-1 rounded-xl bg-blue-600 text-white text-[11px] font-bold flex items-center gap-1 shadow cursor-pointer";
    showToast("🔍 2.5x Inspection Loupe active. Hover over device to inspect cosmetic finish.");
    // switch to photo mode for loupe inspection
    if (state.viewerMode !== "photo") setViewerMode("photo");
  } else {
    if (label) label.textContent = "Zoom Loupe: OFF";
    if (btn) btn.className = "px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-[11px] font-semibold flex items-center gap-1 cursor-pointer";
    if (loupe) loupe.style.display = "none";
  }
}

function initZoomLoupeEvents() {
  const stage = document.getElementById("stagePhotoWrapper");
  const img = document.getElementById("inspectMainImg");
  const loupe = document.getElementById("zoomLoupe");
  if (!stage || !img || !loupe) return;

  stage.onmousemove = (e) => {
    if (!state.isZoomLoupeActive) {
      loupe.style.display = "none";
      return;
    }

    const rect = img.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      loupe.style.display = "none";
      return;
    }

    loupe.style.display = "block";
    const loupeX = e.clientX - stageRect.left - loupe.offsetWidth / 2;
    const loupeY = e.clientY - stageRect.top - loupe.offsetHeight / 2;

    loupe.style.left = `${loupeX}px`;
    loupe.style.top = `${loupeY}px`;

    const zoom = 2.4;
    loupe.style.backgroundImage = `url('${img.src}')`;
    loupe.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
    loupe.style.backgroundPosition = `-${x * zoom - loupe.offsetWidth / 2}px -${y * zoom - loupe.offsetHeight / 2}px`;
  };

  stage.onmouseleave = () => {
    if (loupe) loupe.style.display = "none";
  };
}

function showHotspotTip(text) {
  showToast(`🔍 Refurbished Inspection: ${text}`);
}

function orderFromInspector() {
  const p = state.currentInspectProduct;
  closeInspector();
  if (p) {
    buyProductCOD(p.id);
    if (state.hasCaseAddon && state.orders.length > 0) {
      state.orders[0].product += " + Shockproof Case (₹399)";
      state.orders[0].amount += 399;
      renderOrdersTable();
    }
  }
}
/* 6. MERCHANT & OPS HUB (SAHIL'S ORDER QUEUE & WHATSAPP)   */
/* ======================================================== */
function buyProductCOD(productId) {
  const p = CATALOG.find(item => item.id === productId);
  if (!p) return;

  const currentGrade = state.selectedProductGrades[productId] || "A";
  const gradeInfo = p.grades[currentGrade];

  // Generate new order in the queue
  const newOrderId = "FZ-" + Math.floor(1050 + Math.random() * 50);
  const newOrder = {
    id: newOrderId,
    name: "Dr. Sandeep Mehta",
    phone: "+91 98401 22334",
    address: "Flat 4A, Green Park Extn",
    city: "New Delhi",
    pincode: "110016",
    product: `${p.name} (Grade ${currentGrade})`,
    amount: gradeInfo.price,
    status: "unverified",
    risk: "High RTO Risk (Unconfirmed Doorstep)",
    timestamp: "Just now"
  };

  state.orders.unshift(newOrder);
  state.selectedOrderId = newOrderId;

  showToast(`✅ COD Order placed! Switching to Merchant Ops Hub to verify...`);
  setTimeout(() => {
    switchPortal("ops");
  }, 900);
}

function renderOrdersTable() {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  const filtered = state.orders.filter(o => {
    if (state.queueFilter === "all") return true;
    if (state.queueFilter === "unverified") return o.status === "unverified" || o.status === "whatsapp_sent";
    if (state.queueFilter === "verified") return o.status === "verified";
    if (state.queueFilter === "prepaid") return o.status === "prepaid";
    return true;
  });

  document.getElementById("queueCount").textContent = `${filtered.length} orders`;

  tbody.innerHTML = filtered.map(order => {
    const isSelected = order.id === state.selectedOrderId;
    let statusBadge = '';
    if (order.status === 'unverified') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">🟡 Pending OTP</span>';
    } else if (order.status === 'whatsapp_sent') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">🔵 WhatsApp Sent</span>';
    } else if (order.status === 'verified') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">🟢 Verified COD</span>';
    } else if (order.status === 'prepaid') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">💎 Prepaid (₹300 Off)</span>';
    }

    return `
      <tr class="hover:bg-slate-800/40 cursor-pointer transition-colors ${isSelected ? 'bg-blue-950/40 border-l-2 border-blue-500' : ''}" onclick="selectOrder('${order.id}')">
        <td class="py-3 px-3">
          <div class="font-bold text-white flex items-center gap-1.5">
            <span>${order.name}</span>
            <span class="text-[10px] text-slate-500 font-mono">#${order.id}</span>
          </div>
          <div class="text-[11px] text-slate-400 font-mono">${order.phone} • ${order.city}</div>
        </td>
        <td class="py-3 px-3">
          <div class="text-white font-medium">${order.product}</div>
          <div class="text-emerald-400 font-bold font-mono">₹${order.amount.toLocaleString()} COD</div>
        </td>
        <td class="py-3 px-3 text-[11px] text-slate-300">
          ${order.risk}
        </td>
        <td class="py-3 px-3">
          ${statusBadge}
        </td>
        <td class="py-3 px-3 text-right">
          <button onclick="event.stopPropagation(); selectOrder('${order.id}'); dispatchWhatsAppVerification();" class="px-2.5 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-[10px] cursor-pointer">
            📲 Dispatch
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterQueue(q) {
  state.queueFilter = q;
  document.querySelectorAll(".q-filter-btn").forEach(btn => {
    if (btn.dataset.q === q) {
      btn.className = "q-filter-btn px-2.5 py-1 rounded bg-blue-600 text-white font-bold cursor-pointer";
    } else {
      btn.className = "q-filter-btn px-2.5 py-1 rounded text-slate-400 hover:text-white cursor-pointer";
    }
  });
  renderOrdersTable();
}

function selectOrder(orderId) {
  state.selectedOrderId = orderId;
  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
}

function updateSelectedCustomerCard() {
  const order = state.orders.find(o => o.id === state.selectedOrderId) || state.orders[0];
  if (!order) return;

  document.getElementById("selectedCustomerName").textContent = order.name;
  document.getElementById("selectedCustomerPhone").textContent = order.phone;
  document.getElementById("selectedCustomerCity").textContent = `${order.address}, ${order.city} (${order.pincode})`;
  document.getElementById("selectedCustomerItem").textContent = order.product;
  document.getElementById("selectedCustomerAmount").textContent = `₹${order.amount.toLocaleString()} COD`;

  const riskBadge = document.getElementById("selectedCustomerRiskBadge");
  riskBadge.textContent = order.risk;
}

function renderWhatsAppChat() {
  const container = document.getElementById("waChatHistory");
  if (!container) return;

  const order = state.orders.find(o => o.id === state.selectedOrderId) || state.orders[0];
  if (!order) return;

  const history = state.chatHistory[order.id] || [
    {
      sender: "system",
      text: `Namaste ${order.name} ji! 🙏\n\nWe have received your <b>Cash on Delivery (COD)</b> order for:\n📱 <b>${order.product}</b>\n💰 <b>₹${order.amount.toLocaleString()}</b>\n\n📍 <b>Delivery Address:</b>\n${order.address}, ${order.city} - ${order.pincode}\n\n⚠️ To prevent fake orders and courier return fees, please verify your order below.`,
      time: order.timestamp || "Just now",
      buttons: ["✅ Confirm Address & Dispatch", "⚡ Pay via UPI (Save ₹300)"]
    }
  ];

  state.chatHistory[order.id] = history;

  container.innerHTML = history.map(msg => {
    if (msg.sender === "system") {
      return `
        <div class="chat-bubble-in bg-[#202C33] text-slate-200 p-3 rounded-2xl rounded-tl-none shadow-md max-w-[90%] text-[11px] leading-relaxed border border-slate-700/60">
          <div class="text-[9px] text-emerald-400 font-bold mb-1">FoneZone Automated Dispatch ✓✓</div>
          <div>${msg.text.replace(/\n/g, '<br>')}</div>
          <div class="text-[9px] text-slate-500 text-right mt-1">${msg.time}</div>
        </div>
      `;
    } else {
      return `
        <div class="chat-bubble-in ml-auto bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[85%] text-[11px] leading-relaxed">
          <div>${msg.text.replace(/\n/g, '<br>')}</div>
          <div class="text-[9px] text-emerald-200 text-right mt-1">${msg.time} ✓✓</div>
        </div>
      `;
    }
  }).join('');

  container.scrollTop = container.scrollHeight;
}

function dispatchWhatsAppVerification() {
  const order = state.orders.find(o => o.id === state.selectedOrderId);
  if (!order) return;

  order.status = "whatsapp_sent";
  order.risk = "Medium Risk (Awaiting Customer OTP)";
  
  if (!state.chatHistory[order.id]) state.chatHistory[order.id] = [];
  state.chatHistory[order.id].push({
    sender: "system",
    text: `📲 <b>Action Required:</b> Please reply with 1 to confirm your address or tap below so our logistics partner (BlueDart) can generate the tracking airway bill.`,
    time: "Just now"
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`📲 WhatsApp verification dispatched to ${order.name} (${order.phone})`);
}

function dispatchPrepaidIncentive() {
  const order = state.orders.find(o => o.id === state.selectedOrderId);
  if (!order) return;

  const discounted = order.amount - 300;
  if (!state.chatHistory[order.id]) state.chatHistory[order.id] = [];
  state.chatHistory[order.id].push({
    sender: "system",
    text: `⚡ <b>Special VIP Offer for ${order.name}:</b>\nSwitch to Instant UPI Payment and pay only <b>₹${discounted.toLocaleString()}</b> (Flat ₹300 OFF)!\n\nScan & pay directly to FoneZone Verified Merchant account.`,
    time: "Just now"
  });

  renderWhatsAppChat();
  showToast(`⚡ Sent ₹300 Instant UPI Discount incentive to ${order.name}`);
}

function simulateCustomerConfirmAddress() {
  const order = state.orders.find(o => o.id === state.selectedOrderId);
  if (!order) return;

  order.status = "verified";
  order.risk = "Low Risk (Address OTP Confirmed)";

  if (!state.chatHistory[order.id]) state.chatHistory[order.id] = [];
  state.chatHistory[order.id].push({
    sender: "customer",
    text: "✅ Yes, address is 100% correct! I will be at home to pay COD. Please dispatch immediately.",
    time: "Just now"
  });

  state.chatHistory[order.id].push({
    sender: "system",
    text: `🎉 <b>Verified!</b> Airway Bill (AWB #FZ-BLUEDART-8821) generated. Estimated doorstep delivery in 48 hours.`,
    time: "Just now"
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`🟢 ${order.name} verified address via WhatsApp! Order marked Verified COD.`);
}

function simulateCustomerPrepayUPI() {
  const order = state.orders.find(o => o.id === state.selectedOrderId);
  if (!order) return;

  const discounted = order.amount - 300;
  order.amount = discounted;
  order.status = "prepaid";
  order.risk = "Zero Risk (Prepaid UPI via ₹300 Off)";

  if (!state.chatHistory[order.id]) state.chatHistory[order.id] = [];
  state.chatHistory[order.id].push({
    sender: "customer",
    text: `⚡ Paid ₹${discounted.toLocaleString()} via Google Pay UPI! Transaction ID: UPI-RZP-908129.`,
    time: "Just now"
  });

  state.chatHistory[order.id].push({
    sender: "system",
    text: `💎 <b>Payment Confirmed!</b> ₹${discounted.toLocaleString()} credited. Your ₹300 discount was applied. ZERO RTO risk order dispatched with Priority Express.`,
    time: "Just now"
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`💎 Order converted to Prepaid UPI! 0% RTO Risk achieved for ${order.name}.`);
}

function simulateIncomingOrder() {
  const names = ["Ananya Roy", "Rohan Kulkarni", "Deepak Nair", "Manoj Tiwari"];
  const cities = [
    { city: "Pune", pin: "411038", addr: "Kothrud, Paud Road" },
    { city: "Chandigarh", pin: "160017", addr: "Sector 17-C" },
    { city: "Jaipur", pin: "302001", addr: "C-Scheme, Ashok Nagar" }
  ];

  const pickName = names[Math.floor(Math.random() * names.length)];
  const pickLoc = cities[Math.floor(Math.random() * cities.length)];
  const pickProd = CATALOG[Math.floor(Math.random() * CATALOG.length)];

  const newId = "FZ-" + Math.floor(1055 + Math.random() * 40);
  const newOrder = {
    id: newId,
    name: pickName,
    phone: "+91 9" + Math.floor(100000000 + Math.random() * 900000000),
    address: pickLoc.addr,
    city: pickLoc.city,
    pincode: pickLoc.pin,
    product: `${pickProd.name} (Grade A)`,
    amount: pickProd.grades["A"].price,
    status: "unverified",
    risk: "High RTO Risk (Unconfirmed Doorstep)",
    timestamp: "Just now"
  };

  state.orders.unshift(newOrder);
  state.selectedOrderId = newId;

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`🔔 New Live COD Order Ingested: #${newId} from ${pickName} (${pickLoc.city})`);
}

function updateLogisticsCalc() {
  const slider = document.getElementById("calcOrdersSlider");
  const valLabel = document.getElementById("calcOrdersVal");
  const annualSavingsLabel = document.getElementById("calcAnnualSavings");

  if (!slider) return;

  const orders = parseInt(slider.value);
  valLabel.textContent = `${orders.toLocaleString()} orders / mo`;

  const monthlyAvoidedReturns = Math.round(orders * 0.212);
  const annualFreightSaved = monthlyAvoidedReturns * 350 * 12;

  annualSavingsLabel.textContent = `₹${annualFreightSaved.toLocaleString("en-IN")} / yr`;
}

/* ======================================================== */
/* 7. "ASK TO CEO" & UTILITIES                              */
/* ======================================================== */
function openCeoModal() {
  document.getElementById("ceoModal").classList.remove("hidden");
  document.getElementById("ceoModal").classList.add("flex");
}

function closeCeoModal() {
  document.getElementById("ceoModal").classList.add("hidden");
  document.getElementById("ceoModal").classList.remove("flex");
}

function submitCeoMessage() {
  const name = document.getElementById("ceoName").value || "Valued Client";
  closeCeoModal();
  showToast(`👑 Thank you ${name}. Your message was routed directly to Hemant Verma's executive inbox.`);
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const text = document.getElementById("toastMessage");
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

/* ======================================================== */
/* 7B. HERO CAROUSEL & PROMOTIONAL DEALS SUITE              */
/* ======================================================== */
let heroCurrentSlide = 0;
let heroCarouselTimer = null;
let heroHoverResumeTimer = null;
let heroIsAutoPlaying = true;
const HERO_SLIDE_DURATION_MS = 6000; // 6 seconds (delay of 5 to 7 seconds between slides)

function initHeroCarousel() {
  const track = document.getElementById("heroCarouselTrack");
  const container = document.getElementById("heroCarouselContainer");
  if (!track || !container) return;

  // Initialize UI layout
  updateHeroCarouselUI();

  // Start 6-second auto-slide cycle with animated progress bar
  if (heroIsAutoPlaying) {
    startHeroAutoSlide();
  }

  // Resilient Hover Management: pause momentarily, but auto-resume after 8s failsafe so it never gets stuck
  container.onmouseenter = () => {
    if (heroIsAutoPlaying) {
      pauseHeroAutoSlide(false);
      clearTimeout(heroHoverResumeTimer);
      heroHoverResumeTimer = setTimeout(() => {
        if (heroIsAutoPlaying) startHeroAutoSlide();
      }, 8000);
    }
  };

  container.onmouseleave = () => {
    clearTimeout(heroHoverResumeTimer);
    if (heroIsAutoPlaying) {
      startHeroAutoSlide();
    }
  };

  // Tab visibility change: ensure timers do not drift or pause indefinitely
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseHeroAutoSlide(false);
    } else {
      if (heroIsAutoPlaying) {
        startHeroAutoSlide();
      }
    }
  });

  // Live Countdown Timer for Deal of the Day
  initHeroDealTimer();

  window.addEventListener("resize", () => {
    updateHeroCarouselUI();
  });
}

function resetAndAnimateProgressBar() {
  const pBar = document.getElementById("heroProgressBar");
  if (!pBar) return;
  // Instantly reset to 0% width without transition
  pBar.style.transition = "none";
  pBar.style.width = "0%";
  // Force DOM reflow
  void pBar.offsetWidth;
  // Animate to 100% width smoothly over 6000ms
  pBar.style.transition = `width ${HERO_SLIDE_DURATION_MS}ms linear`;
  pBar.style.width = "100%";
}

function startHeroAutoSlide() {
  clearInterval(heroCarouselTimer);
  clearTimeout(heroHoverResumeTimer);
  resetAndAnimateProgressBar();

  heroCarouselTimer = setInterval(() => {
    nextHeroSlide(true);
  }, HERO_SLIDE_DURATION_MS);

  updatePlayPauseBtnUI(true);
}

function pauseHeroAutoSlide(isManual = false) {
  clearInterval(heroCarouselTimer);
  heroCarouselTimer = null;

  const pBar = document.getElementById("heroProgressBar");
  if (pBar) {
    const computedWidth = window.getComputedStyle(pBar).width;
    pBar.style.transition = "none";
    pBar.style.width = computedWidth;
  }

  if (isManual) {
    heroIsAutoPlaying = false;
    updatePlayPauseBtnUI(false);
  }
}

function toggleHeroAutoPlay() {
  heroIsAutoPlaying = !heroIsAutoPlaying;
  if (heroIsAutoPlaying) {
    startHeroAutoSlide();
    showToast("▶️ Hero banner auto-play running (6s delay)");
  } else {
    pauseHeroAutoSlide(true);
    showToast("⏸️ Hero banner auto-play paused");
  }
}

function updatePlayPauseBtnUI(isPlaying) {
  const icon = document.getElementById("heroPlayPauseIcon");
  const label = document.getElementById("heroPlayPauseLabel");
  if (icon) icon.textContent = isPlaying ? "⏸️" : "▶️";
  if (label) label.textContent = isPlaying ? "6s" : "Paused";
}

function updateHeroCarouselUI() {
  const track = document.getElementById("heroCarouselTrack");
  const container = document.getElementById("heroCarouselContainer");
  if (!track || !container) return;
  const slideWidth = container.offsetWidth;
  track.style.transform = `translateX(-${heroCurrentSlide * slideWidth}px)`;

  const dots = document.querySelectorAll(".hero-dot");
  dots.forEach((dot, idx) => {
    if (idx === heroCurrentSlide) {
      dot.className = "hero-dot w-7 h-2 rounded-full bg-blue-500 transition-all cursor-pointer shadow-sm";
    } else {
      dot.className = "hero-dot w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-400 transition-all cursor-pointer";
    }
  });
}

function nextHeroSlide(isAuto = false) {
  heroCurrentSlide = (heroCurrentSlide + 1) % 3;
  updateHeroCarouselUI();
  if (heroIsAutoPlaying) {
    startHeroAutoSlide();
  }
}

function prevHeroSlide() {
  heroCurrentSlide = (heroCurrentSlide - 1 + 3) % 3;
  updateHeroCarouselUI();
  if (heroIsAutoPlaying) {
    startHeroAutoSlide();
  }
}

function goToHeroSlide(idx) {
  heroCurrentSlide = idx;
  updateHeroCarouselUI();
  if (heroIsAutoPlaying) {
    startHeroAutoSlide();
  }
}

function initHeroDealTimer() {
  const timerEl = document.getElementById("heroDealTimer");
  if (!timerEl) return;

  let totalSeconds = 4 * 3600 + 18 * 60 + 32; // 4h 18m 32s
  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

function copyHeroCoupon(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).catch(() => {});
  }
  const btnText = document.getElementById("copyCouponBtnText");
  if (btnText) {
    const orig = btnText.textContent;
    btnText.textContent = "✓ Copied!";
    setTimeout(() => { btnText.textContent = orig; }, 2500);
  }
  showToast(`🎉 Coupon ${code} copied! Extra ₹2,000 discount unlocked at checkout.`);
}

window.nextHeroSlide = nextHeroSlide;
window.prevHeroSlide = prevHeroSlide;
window.goToHeroSlide = goToHeroSlide;
window.copyHeroCoupon = copyHeroCoupon;
window.initHeroCarousel = initHeroCarousel;
window.toggleHeroAutoPlay = toggleHeroAutoPlay;
window.startHeroAutoSlide = startHeroAutoSlide;
window.pauseHeroAutoSlide = pauseHeroAutoSlide;

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initBudgetSlider();
  initHeroCarousel();
  renderCatalog();
  renderOrdersTable();
  updateLogisticsCalc();
  updateCartDrawerUI();
  handleRoute();
});

/* ======================================================== */
/* 8. MULTI-PAGE CLIENT ROUTER & TAXONOMY FILTERING         */
/* ======================================================== */
const PAGE_ROUTES = {
  "#/": "view-home",
  "#/collections/all": "view-home",
  "#/pages/about-us": "view-about-us",
  "#/pages/frequently-asked-questions-faq": "view-faq",
  "#/pages/shipping-policy": "view-shipping-policy",
  "#/pages/warranty-policy": "view-warranty-policy",
  "#/pages/return-and-refund-policy-easy-returns-refunds": "view-return-policy",
  "#/pages/privacy-policy": "view-privacy-policy",
  "#/pages/contact-us-get-in-touch-with-our-team": "view-contact-us",
  "#/pages/sell-your-device": "view-sell-device",
  "#/pages/wholesale-price": "view-wholesale",
  "#/pages/jobs": "view-jobs",
  "#/pages/ask-to-ceo": "view-ask-ceo",
  "#/pages/order-info": "view-order-info"
};

function navigateTo(route) {
  if (state.activePortal !== "storefront") {
    switchPortal("storefront");
  }
  window.location.hash = route;
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash || "#/";
  const targetViewId = PAGE_ROUTES[hash] || "view-home";

  // Hide all views
  document.querySelectorAll(".page-view").forEach(v => {
    v.classList.add("hidden");
  });

  // Show target view
  const targetEl = document.getElementById(targetViewId);
  if (targetEl) {
    targetEl.classList.remove("hidden");
  }

  // Update Nav links active highlight
  document.querySelectorAll(".nav-link-item").forEach(link => {
    const href = link.getAttribute("href");
    if (href === hash || (hash === "" && href === "#/")) {
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });

  // Page specific hooks
  if (targetViewId === "view-faq") {
    renderFaq("all", "");
  } else if (targetViewId === "view-sell-device") {
    calculateSellPrice();
  } else if (targetViewId === "view-wholesale") {
    calculateWholesalePrice();
  }

  // Hero carousel auto-slide lifecycle per view
  if (targetViewId === "view-home") {
    if (heroIsAutoPlaying && !heroCarouselTimer) {
      startHeroAutoSlide();
    }
  } else {
    pauseHeroAutoSlide(false);
  }

  // Scroll
  if (hash === "#/collections/all") {
    const catSection = document.getElementById("productCatalogSection");
    if (catSection) {
      catSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ======================================================== */
/* SHOP CATEGORIES DROPDOWN CONTROLLER                      */
/* ======================================================== */
let isCategoriesDropdownOpen = false;

function toggleCategoriesDropdown(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  if (isCategoriesDropdownOpen) {
    closeCategoriesDropdown();
  } else {
    openCategoriesDropdown();
  }
}

function openCategoriesDropdown() {
  const menu = document.getElementById("categoriesDropdownMenu");
  const chevron = document.getElementById("shopCategoriesChevron");
  const btn = document.getElementById("shopCategoriesBtn");
  if (!menu) return;

  menu.classList.remove("hidden");
  menu.classList.add("show-dropdown");
  if (chevron) chevron.style.transform = "rotate(180deg)";
  if (btn) btn.setAttribute("aria-expanded", "true");
  isCategoriesDropdownOpen = true;
}

function closeCategoriesDropdown() {
  const menu = document.getElementById("categoriesDropdownMenu");
  const chevron = document.getElementById("shopCategoriesChevron");
  const btn = document.getElementById("shopCategoriesBtn");
  if (!menu) return;

  menu.classList.remove("show-dropdown");
  menu.classList.add("hidden");
  if (chevron) chevron.style.transform = "rotate(0deg)";
  if (btn) btn.setAttribute("aria-expanded", "false");
  isCategoriesDropdownOpen = false;
}

function handleCategorySelect(cat, brand) {
  closeCategoriesDropdown();
  filterByTaxonomy(cat, brand);
}

// Global click outside listener to close dropdown
document.addEventListener("click", (e) => {
  const container = document.getElementById("categoriesDropdownContainer");
  if (container && !container.contains(e.target)) {
    closeCategoriesDropdown();
  }
});

// ESC key listener to close dropdown
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCategoriesDropdown();
  }
});

window.addEventListener("hashchange", handleRoute);

function filterByTaxonomy(cat, brand) {
  navigateTo("#/collections/all");
  setCategory(cat);
  if (brand && brand !== "all") {
    state.activeSubFilter = brand;
    renderSubFilters();
    filterProducts();
  }
  showToast(`🔍 Showing certified: ${brand !== 'all' ? brand.toUpperCase() : ''} ${cat.toUpperCase()}`);
}

/* ======================================================== */
/* 9. FAQ ACCORDION ENGINE                                  */
/* ======================================================== */
const FAQ_DATA = [
  {
    q: "What does 'Certified Pre-Owned / Refurbished' mean at FoneZone?",
    a: "Every FoneZone certified pre-owned smartphone undergoes an exhaustive 32-point engineering inspection in our Bangalore QA lab. We check everything from display TrueTone and multi-touch latency to camera sensor sharpness, 5G modem radios, and battery peak performance. All devices are 100% original OEM hardware with up to 12 months comprehensive replacement warranty.",
    cat: "grading"
  },
  {
    q: "How does FoneZone grade cosmetic condition (Grade A, B, C)?",
    a: "We maintain strict, transparent cosmetic grading: <br>• <b>Grade A (Pristine):</b> Like-new showroom condition. Zero scratches on Ceramic Shield screen or casing. 95%+ battery health.<br>• <b>Grade B (Very Good):</b> Pristine spotless display with minor hairline micro-scuffs on side aluminum/titanium frame (invisible with case). 90%+ battery.<br>• <b>Grade C (Value Deal):</b> Normal cosmetic wear on back glass/corners, 100% hardware certified, maximum rupee savings.",
    cat: "grading"
  },
  {
    q: "What is your certified battery health guarantee?",
    a: "We guarantee that all Grade A and Grade B smartphones ship with a minimum of 85% to 98% original factory battery health, ensuring Apple OEM peak performance capability. If the battery capacity degrades below 80% during your warranty period, we replace the cell completely free of charge.",
    cat: "grading"
  },
  {
    q: "What does the 6 to 12 Months Replacement Warranty cover?",
    a: "Our comprehensive warranty covers all hardware and logic board issues: display touch digitizers, Face ID / Touch ID sensors, front and rear camera modules, charging ports, speakers, and battery degradation below 80%. If any covered fault arises, we provide free doorstep courier pickup and either repair or replace your device within 48 hours.",
    cat: "warranty"
  },
  {
    q: "How does Cash on Delivery (COD) work and why is WhatsApp OTP required?",
    a: "We provide Pan-India Cash on Delivery across 19,000+ PIN codes with zero extra convenience charges. To protect our couriers and prevent fake orders, we send a 1-tap WhatsApp address verification OTP immediately after ordering. Customers can also choose to prepay via UPI on WhatsApp to receive an instant ₹300 flat discount!",
    cat: "shipping"
  },
  {
    q: "Can I return or exchange my phone if I am not satisfied?",
    a: "Yes! FoneZone provides a 7-day hassle-free return and replacement policy starting from the date of doorstep delivery. If you change your mind or encounter any issue, submit a return request via WhatsApp. BlueDart will pick up the parcel and your refund will be disbursed to your bank/UPI within 24 hours of hub inspection.",
    cat: "returns"
  },
  {
    q: "How long does shipping take to my PIN code?",
    a: "Orders confirmed before 2:00 PM IST are dispatched the same day. Delivery takes 24–48 hours for tier-1 metro cities (Delhi NCR, Bangalore, Mumbai, Chennai, Kolkata, Hyderabad) and 3–5 business days for other regions across India via BlueDart Air Express.",
    cat: "shipping"
  },
  {
    q: "Are original accessories and chargers included in the box?",
    a: "Every FoneZone certified smartphone comes packaged in a tamper-proof security box accompanied by a certified high-speed charging cable, SIM ejector tool, and your official GST tax invoice with IMEI warranty certificate.",
    cat: "grading"
  }
];

let activeFaqCategory = "all";
let faqOpenIndex = null;

function renderFaq(cat = "all", query = "") {
  const container = document.getElementById("faqAccordionContainer");
  if (!container) return;

  const filtered = FAQ_DATA.filter(item => {
    const matchesCat = cat === "all" || item.cat === cat;
    const matchesQ = !query || 
      item.q.toLowerCase().includes(query.toLowerCase()) || 
      item.a.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQ;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-slate-900 border border-slate-800 rounded-3xl text-slate-400 text-xs">
        No questions matched your search query. Please try different keywords or chat with us on WhatsApp.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, idx) => `
    <div class="faq-item p-4 rounded-2xl bg-slate-900/80 border border-slate-800 cursor-pointer ${faqOpenIndex === idx ? 'faq-open' : ''}" onclick="toggleFaq(${idx})">
      <div class="flex items-center justify-between gap-3">
        <span class="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
          <span class="text-blue-400 font-mono">Q.</span>
          <span>${item.q}</span>
        </span>
        <svg class="faq-chevron w-4 h-4 text-slate-400 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      <div class="faq-body ${faqOpenIndex === idx ? 'block' : 'hidden'} mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
        ${item.a}
      </div>
    </div>
  `).join("");
}

function toggleFaq(index) {
  faqOpenIndex = faqOpenIndex === index ? null : index;
  renderFaq(activeFaqCategory, document.getElementById("faqSearchInput")?.value || "");
}

function setFaqCategory(cat) {
  activeFaqCategory = cat;
  document.querySelectorAll(".faq-cat-btn").forEach(btn => {
    if (btn.getAttribute("data-cat") === cat) {
      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove("bg-slate-800", "text-slate-300");
    } else {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-slate-800", "text-slate-300");
    }
  });
  renderFaq(cat, document.getElementById("faqSearchInput")?.value || "");
}

function filterFaq(query) {
  renderFaq(activeFaqCategory, query);
}

/* ======================================================== */
/* 10. SELL YOUR DEVICE (TRADE-IN) VALUATION ENGINE         */
/* ======================================================== */
const SELL_STATE = {
  brand: "apple",
  model: "ip14",
  storage: "128",
  condition: "flawless"
};

const MODEL_BASE_VALUES = {
  ip14pro: 54000,
  ip14: 36000,
  ip13: 28000,
  ip12: 19000,
  s23ultra: 48000,
  s22: 24000
};

function setSellBrand(brand) {
  SELL_STATE.brand = brand;
  document.querySelectorAll(".sell-brand-btn").forEach(btn => {
    if (btn.getAttribute("data-brand") === brand) {
      btn.classList.add("border-blue-500", "bg-blue-600", "text-white");
      btn.classList.remove("border-slate-700", "bg-slate-950", "text-slate-300");
    } else {
      btn.classList.remove("border-blue-500", "bg-blue-600", "text-white");
      btn.classList.add("border-slate-700", "bg-slate-950", "text-slate-300");
    }
  });
  calculateSellPrice();
}

function setSellStorage(storage) {
  SELL_STATE.storage = storage;
  document.querySelectorAll(".sell-storage-btn").forEach(btn => {
    if (btn.getAttribute("data-storage") === storage) {
      btn.classList.add("border-blue-500", "bg-blue-600", "text-white");
      btn.classList.remove("border-slate-700", "bg-slate-950", "text-slate-300");
    } else {
      btn.classList.remove("border-blue-500", "bg-blue-600", "text-white");
      btn.classList.add("border-slate-700", "bg-slate-950", "text-slate-300");
    }
  });
  calculateSellPrice();
}

function setSellCondition(cond) {
  SELL_STATE.condition = cond;
  document.querySelectorAll(".sell-cond-btn").forEach(btn => {
    if (btn.getAttribute("data-cond") === cond) {
      btn.classList.add("border-emerald-500", "bg-emerald-600/20", "text-emerald-300");
      btn.classList.remove("border-slate-700", "bg-slate-950", "text-slate-300");
    } else {
      btn.classList.remove("border-emerald-500", "bg-emerald-600/20", "text-emerald-300");
      btn.classList.add("border-slate-700", "bg-slate-950", "text-slate-300");
    }
  });
  calculateSellPrice();
}

function calculateSellPrice() {
  const modelSelect = document.getElementById("sellModelSelect");
  if (!modelSelect) return;
  const modelKey = modelSelect.value;
  const base = MODEL_BASE_VALUES[modelKey] || 32000;

  let storageMult = 0;
  if (SELL_STATE.storage === "128") storageMult = 2000;
  if (SELL_STATE.storage === "256") storageMult = 5000;
  if (SELL_STATE.storage === "512") storageMult = 8500;

  let condDeduction = 0;
  if (SELL_STATE.condition === "good") condDeduction = 3500;
  if (SELL_STATE.condition === "fair") condDeduction = 7500;

  const upiBonus = 500;
  const total = base + storageMult - condDeduction + upiBonus;

  const quoteEl = document.getElementById("sellQuoteAmount");
  const baseValEl = document.getElementById("sellBaseVal");
  const storageValEl = document.getElementById("sellStorageVal");
  const netValEl = document.getElementById("sellNetVal");

  if (quoteEl) quoteEl.textContent = "₹" + total.toLocaleString("en-IN");
  if (baseValEl) baseValEl.textContent = "₹" + base.toLocaleString("en-IN");
  if (storageValEl) storageValEl.textContent = "+₹" + storageMult.toLocaleString("en-IN");
  if (netValEl) netValEl.textContent = "₹" + total.toLocaleString("en-IN");
}

function confirmSellPickup() {
  const name = document.getElementById("sellName")?.value || "Valued Customer";
  const phone = document.getElementById("sellPhone")?.value || "+91 98XXX XXXXX";
  const amount = document.getElementById("sellQuoteAmount")?.textContent || "₹31,500";

  showToast(`✅ Doorstep pickup confirmed for ${name}! Our courier will arrive tomorrow. Instant UPI payout of ${amount} locked.`);
}

/* ======================================================== */
/* 11. B2B WHOLESALE CALCULATOR & RFQ                       */
/* ======================================================== */
const WHOLESALE_LOTS = {
  "lot-ip13-10": { name: "iPhone 13 128GB Grade A (10 Units)", base: 345000, units: 10, unitResale: 39999 },
  "lot-ip14-5": { name: "iPhone 14 128GB Grade A (5 Units)", base: 215000, units: 5, unitResale: 48999 },
  "lot-ip15pro-5": { name: "iPhone 15 Pro 128GB Grade A (5 Units)", base: 385000, units: 5, unitResale: 84999 },
  "lot-s23u-5": { name: "Samsung Galaxy S23 Ultra Grade A (5 Units)", base: 305000, units: 5, unitResale: 67999 },
  "lot-mixed-20": { name: "Mixed Refurbished Value Lot (20 Units)", base: 580000, units: 20, unitResale: 35000 }
};

function calculateWholesalePrice() {
  const lotSelect = document.getElementById("wholesaleLotSelect");
  const slider = document.getElementById("wholesaleBundleCount");
  const label = document.getElementById("wholesaleBundleCountLabel");
  if (!lotSelect || !slider) return;

  const lot = WHOLESALE_LOTS[lotSelect.value] || WHOLESALE_LOTS["lot-ip13-10"];
  const count = parseInt(slider.value);
  if (label) label.textContent = `${count} ${count > 1 ? 'Bundles' : 'Bundle'} (${lot.units * count} units)`;

  const totalBase = lot.base * count;
  const totalUnits = lot.units * count;

  let discountRate = 0;
  let discountTier = "Starter (0%)";
  if (totalUnits >= 50) {
    discountRate = 0.08;
    discountTier = "Tier 3 (8% Off)";
  } else if (totalUnits >= 20) {
    discountRate = 0.04;
    discountTier = "Tier 2 (4% Off)";
  }

  const discountAmount = Math.round(totalBase * discountRate);
  const netPayable = totalBase - discountAmount;
  const gstCredit = Math.round(netPayable * 0.18 / 1.18);
  const netCostPerUnit = Math.round((netPayable - gstCredit) / totalUnits);
  const projectedProfit = Math.round((lot.unitResale * totalUnits) - (netPayable - gstCredit));
  const marginPct = Math.round((projectedProfit / (lot.unitResale * totalUnits)) * 100);

  const totalEl = document.getElementById("wsTotalAmount");
  const baseEl = document.getElementById("wsBaseRate");
  const discEl = document.getElementById("wsDiscountVal");
  const gstEl = document.getElementById("wsGstVal");
  const perUnitEl = document.getElementById("wsPerUnitNet");
  const profitEl = document.getElementById("wsDealerProfit");

  if (totalEl) totalEl.textContent = "₹" + netPayable.toLocaleString("en-IN");
  if (baseEl) baseEl.textContent = "₹" + totalBase.toLocaleString("en-IN");
  if (discEl) discEl.textContent = discountAmount > 0 ? `-₹${discountAmount.toLocaleString("en-IN")} (${discountTier})` : "₹0 (Starter)";
  if (gstEl) gstEl.textContent = "₹" + gstCredit.toLocaleString("en-IN");
  if (perUnitEl) perUnitEl.textContent = "₹" + netCostPerUnit.toLocaleString("en-IN");
  if (profitEl) profitEl.textContent = `₹${projectedProfit.toLocaleString("en-IN")} (${marginPct}% Margin)`;
}

function submitWholesaleRfq() {
  const firm = document.getElementById("wsFirmName")?.value || "Authorized Dealer";
  const gst = document.getElementById("wsGst")?.value || "29ABCDE1234F1Z5";
  const amount = document.getElementById("wsTotalAmount")?.textContent || "₹3,45,000";

  showToast(`✅ Proforma GST Invoice locked for ${firm} (${amount})! WhatsApp copy dispatched.`);
}

/* ======================================================== */
/* 12. SHIPPING PIN CODE CHECKER & POLICIES                 */
/* ======================================================== */
const PIN_DATA = {
  "110019": { loc: "South Delhi / Kalkaji Hub", courier: "BlueDart Air Express", eta: "Tomorrow by 4:00 PM" },
  "560038": { loc: "Bangalore / Indiranagar Hub", courier: "BlueDart Air Express", eta: "Tomorrow by 2:30 PM" },
  "400001": { loc: "South Mumbai / Fort Hub", courier: "Delhivery Air Express", eta: "Tomorrow by 5:00 PM" },
  "700091": { loc: "Kolkata / Salt Lake Hub", courier: "BlueDart Express", eta: "Day after Tomorrow" }
};

function checkPinService() {
  const pin = document.getElementById("shippingPinInput")?.value?.trim() || "110019";
  const info = PIN_DATA[pin] || { loc: `PIN ${pin} Region`, courier: "BlueDart Air Cargo", eta: "Within 48-72 Hours" };

  const locEl = document.getElementById("pinLocationText");
  const courEl = document.getElementById("pinCourierText");
  const dateEl = document.getElementById("pinDeliveryDate");

  if (locEl) locEl.textContent = info.loc;
  if (courEl) courEl.textContent = info.courier;
  if (dateEl) dateEl.textContent = info.eta;

  showToast(`📍 Serviceability verified for PIN ${pin}: ${info.eta}`);
}

function fillPin(pin) {
  const inp = document.getElementById("shippingPinInput");
  if (inp) inp.value = pin;
  checkPinService();
}

/* ======================================================== */
/* 13. WARRANTY CHECK & CLAIMS                              */
/* ======================================================== */
function checkWarrantyStatus() {
  const orderId = document.getElementById("warrantyOrderId")?.value || "FZ-1049";
  const imei = document.getElementById("warrantyImei")?.value || "354892091823901";

  const card = document.getElementById("warrantyResultCard");
  if (card) {
    card.classList.remove("hidden");
    card.scrollIntoView({ behavior: "smooth" });
  }
  showToast(`🛡️ Warranty Active: Order #${orderId} has 154 days comprehensive coverage.`);
}

/* ======================================================== */
/* 14. CONTACT FORM & EXECUTIVE CHANNELS                    */
/* ======================================================== */
function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value || "Client";
  e.target.reset();
  showToast(`✅ Thank you ${name}! Your inquiry was assigned to Sahil's operations triage desk.`);
}

function submitExecutiveEscalation(e) {
  e.preventDefault();
  const name = document.getElementById("ceoViewName")?.value || "Executive Partner";
  e.target.reset();
  showToast(`👑 Direct Executive Escalation received. Hemant Verma's office will review within 2 hours.`);
}

/* ======================================================== */
/* 15. JOBS MODAL & APPLICATION                             */
/* ======================================================== */
function openJobModal(roleName) {
  const modal = document.getElementById("jobModal");
  const title = document.getElementById("jobModalRoleName");
  if (title) title.textContent = roleName;
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeJobModal() {
  const modal = document.getElementById("jobModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function submitJobApplication(e) {
  e.preventDefault();
  const name = document.getElementById("jobApplicantName")?.value || "Applicant";
  closeJobModal();
  e.target.reset();
  showToast(`✅ Application received for ${name}! Routed to HR & Sahil Pathania.`);
}

/* ======================================================== */
/* 16. ORDER TRACKING VIEW SEARCH                           */
/* ======================================================== */
function searchTrackOrderView() {
  const val = document.getElementById("trackOrderViewInput")?.value || "FZ-1049";
  showToast(`🚚 Live tracking retrieved for #${val}: In Transit via BlueDart Express.`);
}

/* ======================================================== */
/* 17. CASHIFY-INSPIRED BRAND QUICK-SELECT & CATEGORY RAIL  */
/* ======================================================== */
function handleBrandQuickSelect(brand) {
  state.activeCategory = "all";
  state.activeSubFilter = brand;
  state.searchQuery = "";
  
  // Highlight active rail card
  document.querySelectorAll(".brand-rail-card").forEach(el => el.classList.remove("active"));
  const clicked = event?.currentTarget;
  if (clicked) clicked.classList.add("active");

  const breadcrumb = document.getElementById("breadcrumbCategory");
  if (breadcrumb) {
    breadcrumb.textContent = brand === "apple" ? "Apple iPhones & Devices" : brand === "samsung" ? "Samsung Galaxy Devices" : "Flagship Titanium & Ultra Deals";
  }

  renderCatalog();

  // Smooth scroll to catalog
  const catalogEl = document.getElementById("productCatalogSection");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast(`⚡ Filtered for ${brand.toUpperCase()} Devices (Starting prices live)`);
}

function handleCategoryQuickSelect(cat) {
  state.activeCategory = cat;
  state.activeSubFilter = "all";
  state.searchQuery = "";

  document.querySelectorAll(".brand-rail-card").forEach(el => el.classList.remove("active"));
  const clicked = event?.currentTarget;
  if (clicked) clicked.classList.add("active");

  const breadcrumb = document.getElementById("breadcrumbCategory");
  if (breadcrumb) {
    breadcrumb.textContent = cat === "macbook" ? "MacBooks & Laptops" : cat === "ipad" ? "iPads & Tablets" : "Smartwatches";
  }

  renderCatalog();

  const catalogEl = document.getElementById("productCatalogSection");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  showToast(`⚡ Displaying ${cat.toUpperCase()} catalog`);
}

function handleVideoVerifiedFilter() {
  state.activeCategory = "all";
  state.activeSubFilter = "all";
  state.searchQuery = "";
  state.videoVerifiedOnly = !state.videoVerifiedOnly;

  const btn = document.getElementById("quickFilterVideoBtn");
  if (btn) {
    if (state.videoVerifiedOnly) {
      btn.classList.add("active", "ring-2", "ring-red-500");
      showToast("📹 Filtered: Showing 100% Video-Verified Certified Units");
    } else {
      btn.classList.remove("active", "ring-2", "ring-red-500");
      showToast("Reset to All Certified Units");
    }
  }

  renderCatalog();

  const catalogEl = document.getElementById("productCatalogSection");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ======================================================== */
/* 18. 32-POINT QA VERIFICATION VIDEO PLAYER (CASHIFY-STYLE)*/
/* ======================================================== */
const QA_PHASES = [
  {
    phase: 1,
    title: "Phase 1: Physical Housing & 0-Dent Inspection",
    telemetry: "Laser Surface Micrometry: 0 Dents Detected (Grade A)",
    zoom: "scale-100",
    laser: true,
    audio: false,
    passBadge: "PASS (0 Dents)",
    time: 5
  },
  {
    phase: 2,
    title: "Phase 2: OLED & Multi-Touch Digitizer Scan",
    telemetry: "TrueTone & 120Hz ProMotion Calibrated • Zero Dead Pixels",
    zoom: "scale-110",
    laser: true,
    audio: false,
    passBadge: "PASS (120Hz)",
    time: 11
  },
  {
    phase: 3,
    title: "Phase 3: 48MP/200MP Triple Camera & OIS Telemetry",
    telemetry: "Autofocus Latency 14ms • Sensor Dust Microscopy: 100% Clean",
    zoom: "scale-125 translate-y-3",
    laser: false,
    audio: false,
    passBadge: "PASS (48MP)",
    time: 17
  },
  {
    phase: 4,
    title: "Phase 4: Stereo Speakers & Dual Acoustic Mic",
    telemetry: "Peak Output 88dB • Stereo Frequency Sweep (20Hz - 20kHz) PASS",
    zoom: "scale-105",
    laser: false,
    audio: true,
    passBadge: "PASS (88dB)",
    time: 23
  },
  {
    phase: 5,
    title: "Phase 5: Battery Health & USB-C Power Draw",
    telemetry: "Verified 96% Capacity • 84 Cycles • PD 27W Fast Charge PASS",
    zoom: "scale-100",
    laser: true,
    audio: false,
    passBadge: "PASS (96%)",
    time: 28
  },
  {
    phase: 6,
    title: "Phase 6: Motherboard, 5G Radio & Clean IMEI",
    telemetry: "IMEI: 354891082918231 • Carrier Blacklist: Clean • OEM Logic Board",
    zoom: "scale-100",
    laser: false,
    audio: false,
    passBadge: "PASS (Clean)",
    time: 32
  }
];

let qaVideoState = {
  activeProductId: null,
  activeProduct: null,
  currentPhase: 0,
  isPlaying: true,
  timerInterval: null,
  elapsedSeconds: 0,
  totalSeconds: 32
};

function openVerificationVideo(productId) {
  const p = CATALOG.find(item => item.id === productId) || CATALOG[0];
  qaVideoState.activeProductId = p.id;
  qaVideoState.activeProduct = p;
  qaVideoState.currentPhase = 0;
  qaVideoState.elapsedSeconds = 0;
  qaVideoState.isPlaying = true;

  const modal = document.getElementById("verificationVideoModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Populate info
  const nameEl = document.getElementById("qaVideoModalProductName");
  if (nameEl) nameEl.textContent = p.name;

  const imgEl = document.getElementById("qaVideoDeviceImage");
  if (imgEl) imgEl.src = p.image;

  const serialEl = document.getElementById("qaVideoSerialTag");
  if (serialEl) serialEl.textContent = `FZ-QC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Start video playback
  updateQAPhaseUI(0);
  startQATimer();
  showToast(`📹 Loading 32-Point QA Video Log for ${p.name}`);
}

function closeVerificationVideo() {
  stopQATimer();
  const modal = document.getElementById("verificationVideoModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function startQATimer() {
  stopQATimer();
  qaVideoState.isPlaying = true;
  updateQAControlsUI();

  qaVideoState.timerInterval = setInterval(() => {
    qaVideoState.elapsedSeconds++;
    if (qaVideoState.elapsedSeconds > qaVideoState.totalSeconds) {
      qaVideoState.elapsedSeconds = 0; // loop
    }

    // Determine phase from seconds
    let newPhase = 0;
    if (qaVideoState.elapsedSeconds <= 5) newPhase = 0;
    else if (qaVideoState.elapsedSeconds <= 11) newPhase = 1;
    else if (qaVideoState.elapsedSeconds <= 17) newPhase = 2;
    else if (qaVideoState.elapsedSeconds <= 23) newPhase = 3;
    else if (qaVideoState.elapsedSeconds <= 28) newPhase = 4;
    else newPhase = 5;

    if (newPhase !== qaVideoState.currentPhase) {
      updateQAPhaseUI(newPhase);
    }

    // Update timeline progress bar and time text
    const pct = (qaVideoState.elapsedSeconds / qaVideoState.totalSeconds) * 100;
    const bar = document.getElementById("qaVideoProgressBar");
    if (bar) bar.style.width = `${pct}%`;

    const timeEl = document.getElementById("qaVideoCurrentTime");
    if (timeEl) {
      const sec = qaVideoState.elapsedSeconds < 10 ? `0${qaVideoState.elapsedSeconds}` : qaVideoState.elapsedSeconds;
      timeEl.textContent = `00:${sec}`;
    }
  }, 1000);
}

function stopQATimer() {
  if (qaVideoState.timerInterval) {
    clearInterval(qaVideoState.timerInterval);
    qaVideoState.timerInterval = null;
  }
}

function toggleQAVideoPlay() {
  if (qaVideoState.isPlaying) {
    stopQATimer();
    qaVideoState.isPlaying = false;
  } else {
    startQATimer();
    qaVideoState.isPlaying = true;
  }
  updateQAControlsUI();
}

function restartQAVideo() {
  qaVideoState.elapsedSeconds = 0;
  updateQAPhaseUI(0);
  startQATimer();
  showToast("🔄 Rewound QA Video to start");
}

function updateQAControlsUI() {
  const icon = document.getElementById("qaPlayIcon");
  const text = document.getElementById("qaPlayText");
  if (icon && text) {
    if (qaVideoState.isPlaying) {
      icon.textContent = "⏸️";
      text.textContent = "Pause";
    } else {
      icon.textContent = "▶️";
      text.textContent = "Play";
    }
  }
}

function jumpToQAPhase(phaseIndex) {
  qaVideoState.currentPhase = phaseIndex;
  qaVideoState.elapsedSeconds = phaseIndex === 0 ? 0 : QA_PHASES[phaseIndex - 1].time + 1;
  updateQAPhaseUI(phaseIndex);

  const pct = (qaVideoState.elapsedSeconds / qaVideoState.totalSeconds) * 100;
  const bar = document.getElementById("qaVideoProgressBar");
  if (bar) bar.style.width = `${pct}%`;

  const timeEl = document.getElementById("qaVideoCurrentTime");
  if (timeEl) {
    const sec = qaVideoState.elapsedSeconds < 10 ? `0${qaVideoState.elapsedSeconds}` : qaVideoState.elapsedSeconds;
    timeEl.textContent = `00:${sec}`;
  }
}

function updateQAPhaseUI(phaseIndex) {
  qaVideoState.currentPhase = phaseIndex;
  const data = QA_PHASES[phaseIndex];

  // Update Title & Telemetry
  const titleEl = document.getElementById("qaActivePhaseTitle");
  if (titleEl) titleEl.textContent = data.title;

  const telEl = document.getElementById("qaActivePhaseTelemetry");
  if (telEl) telEl.textContent = data.telemetry;

  // Update Device Image transform
  const imgEl = document.getElementById("qaVideoDeviceImage");
  if (imgEl) {
    imgEl.className = `max-h-56 max-w-[85%] object-contain drop-shadow-2xl z-10 transition-all duration-700 ${data.zoom}`;
  }

  // Laser visibility
  const laserEl = document.getElementById("qaScanLaser");
  if (laserEl) {
    laserEl.style.display = data.laser ? "block" : "none";
  }

  // Audio wave visibility
  const audioEl = document.getElementById("qaAudioWaveform");
  if (audioEl) {
    if (data.audio) {
      audioEl.classList.remove("hidden");
      audioEl.classList.add("flex");
    } else {
      audioEl.classList.add("hidden");
      audioEl.classList.remove("flex");
    }
  }

  // Step Pills update
  for (let i = 0; i < 6; i++) {
    const pill = document.getElementById(`qaPhasePill${i}`);
    if (pill) {
      if (i === phaseIndex) {
        pill.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white cursor-pointer shadow-md";
      } else if (i < phaseIndex) {
        pill.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-700/80 text-white cursor-pointer";
      } else {
        pill.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-400 hover:text-white cursor-pointer";
      }
    }

    const card = document.getElementById(`qaStageCard${i}`);
    if (card) {
      if (i === phaseIndex) {
        card.className = "p-2 rounded-lg bg-blue-900/40 border border-blue-500 shadow flex items-center justify-between cursor-pointer transition-all";
      } else {
        card.className = "p-2 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between cursor-pointer transition-all";
      }
    }
  }
}

function seekQATimeline(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  qaVideoState.elapsedSeconds = Math.round(pct * qaVideoState.totalSeconds);

  let newPhase = 0;
  if (qaVideoState.elapsedSeconds <= 5) newPhase = 0;
  else if (qaVideoState.elapsedSeconds <= 11) newPhase = 1;
  else if (qaVideoState.elapsedSeconds <= 17) newPhase = 2;
  else if (qaVideoState.elapsedSeconds <= 23) newPhase = 3;
  else if (qaVideoState.elapsedSeconds <= 28) newPhase = 4;
  else newPhase = 5;

  updateQAPhaseUI(newPhase);

  const bar = document.getElementById("qaVideoProgressBar");
  if (bar) bar.style.width = `${pct * 100}%`;

  const timeEl = document.getElementById("qaVideoCurrentTime");
  if (timeEl) {
    const sec = qaVideoState.elapsedSeconds < 10 ? `0${qaVideoState.elapsedSeconds}` : qaVideoState.elapsedSeconds;
    timeEl.textContent = `00:${sec}`;
  }
}

function downloadQACertificate() {
  const p = qaVideoState.activeProduct || CATALOG[0];
  showToast(`📄 Generating Official 32-Pt QA Certificate for ${p.name}...`);
  setTimeout(() => {
    showToast(`✅ Downloaded: ${p.name.replace(/\\s+/g, '_')}_QA_Certificate.pdf (Digitally Signed by FoneZone Lab)`);
  }, 1000);
}

function buyVerifiedDeviceNow() {
  const p = qaVideoState.activeProduct || CATALOG[0];
  closeVerificationVideo();
  buyProductCOD(p.id);
}

// Immediate check in case document is already parsed
if (typeof document !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    initBudgetSlider();
    initHeroCarousel();
  }
}


/* ======================================================== */
/* 13. WORLD-FIRST INNOVATIONS & AI QUALITY SPECIALIST      */
/* ======================================================== */

// A. Interactive 3D Phone Case Simulator
state.selectedCaseStyle = "none";
state.hasCaseAddon = false;

function setPhoneCase(caseStyle) {
  state.selectedCaseStyle = caseStyle;
  const overlay = document.getElementById("caseSimOverlay2D");
  const calloutText = document.getElementById("caseSimCalloutText");
  const badge = document.getElementById("caseSimStatusBadge");
  const mv = document.getElementById("mainModelViewer");

  // Update button active states
  ["none", "clear", "black", "navy"].forEach(type => {
    const btn = document.getElementById(`btnCase${type.charAt(0).toUpperCase() + type.slice(1)}`);
    if (btn) {
      if (type === caseStyle) {
        btn.className = "case-sim-option-btn active p-1.5 rounded-lg border border-blue-500 bg-blue-600 text-white font-bold text-center text-[10px] cursor-pointer shadow-sm";
      } else {
        btn.className = "case-sim-option-btn p-1.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white font-medium text-center text-[10px] cursor-pointer";
      }
    }
  });

  if (caseStyle === "none") {
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.style.border = "none";
      overlay.style.boxShadow = "none";
      overlay.style.background = "none";
    }
    if (badge) {
      badge.textContent = "Raw Chassis Mode";
      badge.className = "text-[10px] text-slate-400 font-bold font-mono";
    }
    if (calloutText) {
      calloutText.innerHTML = "<b>Smart Buyer Insight:</b> 94% of users put a case on their phone. Installing a case conceals edge marks 100%, giving you Grade A looks for Grade B pricing!";
    }
  } else {
    if (overlay) {
      overlay.classList.remove("hidden");
      overlay.className = "case-overlay-active absolute inset-x-0 top-6 bottom-6 max-w-[260px] mx-auto pointer-events-none rounded-[44px] transition-all duration-300 z-10";
      if (caseStyle === "clear") {
        overlay.style.border = "8px solid rgba(255, 255, 255, 0.45)";
        overlay.style.boxShadow = "inset 0 0 15px rgba(255, 255, 255, 0.35), 0 8px 30px rgba(0, 0, 0, 0.5)";
        overlay.style.background = "radial-gradient(ellipse at center, transparent 75%, rgba(255,255,255,0.12) 100%)";
      } else if (caseStyle === "black") {
        overlay.style.border = "10px solid #090d16";
        overlay.style.boxShadow = "inset 0 0 14px rgba(0, 0, 0, 0.9), 0 10px 35px rgba(0, 0, 0, 0.7)";
        overlay.style.background = "radial-gradient(ellipse at center, transparent 75%, rgba(15,23,42,0.2) 100%)";
      } else if (caseStyle === "navy") {
        overlay.style.border = "10px solid #1e3a8a";
        overlay.style.boxShadow = "inset 0 0 14px rgba(30, 58, 138, 0.8), 0 10px 35px rgba(15, 23, 42, 0.7)";
        overlay.style.background = "radial-gradient(ellipse at center, transparent 75%, rgba(30,58,138,0.2) 100%)";
      }
    }
    if (badge) {
      badge.textContent = "✓ Edge Marks 100% Concealed";
      badge.className = "text-[10px] text-emerald-400 font-bold font-mono";
    }
    if (calloutText) {
      const caseName = caseStyle === "clear" ? "Clear Impact Case" : caseStyle === "black" ? "Slim Matte Black Case" : "Navy Silicone Case";
      calloutText.innerHTML = `<b>${caseName} Active:</b> Any minor bezel hairline scuffs are now 100% hidden beneath shock-absorbing bumpers! Save ₹4,000+ vs Brand New.`;
    }
  }
}

function toggleAddCaseToOrder() {
  state.hasCaseAddon = !state.hasCaseAddon;
  const btn = document.getElementById("btnAddCaseBtn");
  const priceEl = document.getElementById("inspectPrice");
  const p = state.currentInspectProduct || CATALOG[0];
  const g = state.currentInspectGrade || "A";
  const basePrice = p.grades[g]?.price || p.price;

  if (state.hasCaseAddon) {
    if (btn) {
      btn.textContent = "✓ Case Added (+₹399)";
      btn.className = "shrink-0 px-2 py-1 rounded bg-emerald-500 text-slate-950 font-black text-[10px] shadow cursor-pointer transition-all";
    }
    if (priceEl) priceEl.textContent = formatMoney(basePrice + 399);
    showToast("📱 +₹399 Shockproof Case bundle added to this device!");
  } else {
    if (btn) {
      btn.textContent = "+ Add Case (₹399)";
      btn.className = "shrink-0 px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] shadow cursor-pointer transition-all";
    }
    if (priceEl) priceEl.textContent = formatMoney(basePrice);
    showToast("Removed phone case bundle.");
  }
}

// B. Interactive Real-World Battery Runtime Simulator
state.batterySimHealth = 96;
state.batterySimProfile = "daily";

function toggleBatterySimulator() {
  const sim = document.getElementById("batteryRuntimeSimulator");
  if (!sim) return;
  if (sim.classList.contains("hidden")) {
    sim.classList.remove("hidden");
    const p = state.currentInspectProduct || CATALOG[0];
    const g = state.currentInspectGrade || "A";
    const health = p.grades[g]?.battery || 96;
    const slider = document.getElementById("batSimHealthSlider");
    if (slider) slider.value = health;
    updateBatterySimulation(health);
  } else {
    sim.classList.add("hidden");
  }
}

function updateBatterySimulation(val) {
  state.batterySimHealth = parseInt(val, 10) || 96;
  const healthValEl = document.getElementById("batSimHealthVal");
  if (healthValEl) {
    const status = state.batterySimHealth >= 95 ? "Pristine OEM" : state.batterySimHealth >= 88 ? "Excellent Health" : "Good Daily Health";
    healthValEl.textContent = `${state.batterySimHealth}% OEM Health (${status})`;
  }

  const ratio = state.batterySimHealth / 100;
  let sOn = 8.25, yt = 13.6, reels = 7.3, calls = 24.0, gps = 5.5, standby = 48.0;

  if (state.batterySimProfile === "media") {
    sOn = 7.0; yt = 12.0; reels = 8.5; calls = 18.0; gps = 4.8; standby = 38.0;
  } else if (state.batterySimProfile === "heavy") {
    sOn = 5.2; yt = 8.5; reels = 5.8; calls = 14.0; gps = 4.2; standby = 28.0;
  }

  const calcHoursMin = (hrs) => {
    const total = hrs * ratio;
    const h = Math.floor(total);
    const m = Math.round((total - h) * 60);
    return `${h}h ${m < 10 ? "0" + m : m}m`;
  };

  const simScreenOn = document.getElementById("simScreenOn");
  const simYoutube = document.getElementById("simYoutube");
  const simReels = document.getElementById("simReels");
  const simCalls = document.getElementById("simCalls");
  const simGps = document.getElementById("simGps");
  const simStandby = document.getElementById("simStandby");

  if (simScreenOn) simScreenOn.textContent = calcHoursMin(sOn);
  if (simYoutube) simYoutube.textContent = calcHoursMin(yt);
  if (simReels) simReels.textContent = calcHoursMin(reels);
  if (simCalls) simCalls.textContent = calcHoursMin(calls);
  if (simGps) simGps.textContent = calcHoursMin(gps);
  if (simStandby) simStandby.textContent = calcHoursMin(standby);
}

function setBatteryUsageProfile(profile) {
  state.batterySimProfile = profile;
  ["daily", "media", "heavy"].forEach(p => {
    const btn = document.getElementById(`btnProfile${p.charAt(0).toUpperCase() + p.slice(1)}`);
    if (btn) {
      if (p === profile) {
        btn.className = "battery-preset-btn active p-1.5 rounded-lg bg-blue-600 text-white font-bold text-center text-[10px] cursor-pointer shadow-sm";
      } else {
        btn.className = "battery-preset-btn p-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-700 hover:text-white font-medium text-center text-[10px] cursor-pointer";
      }
    }
  });
  updateBatterySimulation(state.batterySimHealth);
}

// C. Practical AI Refurbished Quality Copilot ("Ask NexG AI Specialist")
state.isAICopilotOpen = true;

function toggleAICopilot() {
  const body = document.getElementById("aiCopilotBody");
  const chevron = document.getElementById("aiCopilotChevron");
  if (!body) return;
  state.isAICopilotOpen = !state.isAICopilotOpen;
  if (state.isAICopilotOpen) {
    body.classList.remove("hidden");
    if (chevron) chevron.style.transform = "rotate(0deg)";
  } else {
    body.classList.add("hidden");
    if (chevron) chevron.style.transform = "rotate(180deg)";
  }
}

const AI_COPILOT_KNOWLEDGE = {
  battery: "🔋 <b>NexG Battery Diagnostic Log:</b> Tested at 96% OEM capacity with 84 verified charge cycles. Peak performance capability is 100% intact with zero CPU throttling. Expect 8h 15m screen-on time on active 5G. Covered by FoneZone 6-Month Replacement Guarantee if health drops below 80%.",
  grade_b: "🔍 <b>Cosmetic Flaw Analysis:</b> On this Grade B unit, there is a single 0.8mm hairline cosmetic scuff on the lower speaker rail (angle 180°). The front ceramic display and camera sapphire lenses are 100% scratch-free. When held at normal 30cm reading distance, the mark is virtually invisible in outdoor sunlight, and 100% covered when using a case.",
  genuine: "🛡️ <b>Component Authenticity Report:</b> Motherboard GSMA IMEI verified clean. TrueTone, Face ID biometric laser, and Apple Ceramic Shield are 100% factory original OEM parts. Passed 32 hardware diagnostic tests with zero \"Unknown Part\" warning banners in iOS Settings.",
  vs_cashify: "⚖️ <b>FoneZone vs Cashify Comparison:</b> Cashify charges up to ₹4,000 more for similar models and provides generic stock photos. FoneZone gives you: (1) True 360° flaw transparency with millimeter coordinates, (2) Serialized 32-Pt QA video of your exact device, (3) 7-Day test return policy with zero restocking fees."
};

function typewriterAIAnswer(htmlText) {
  const answerEl = document.getElementById("aiCopilotAnswer");
  if (!answerEl) return;
  answerEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-1.5"></span> Analyzing hardware telemetry...`;
  setTimeout(() => {
    answerEl.innerHTML = htmlText;
  }, 300);
}

function askAICopilot(topic) {
  const text = AI_COPILOT_KNOWLEDGE[topic] || "Analyzing device telemetry...";
  typewriterAIAnswer(text);
}

function handleCustomAIQuestion() {
  const input = document.getElementById("aiCopilotCustomInput");
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (!q) return;

  const p = state.currentInspectProduct || CATALOG[0];
  const g = state.currentInspectGrade || "A";

  let reply = "";
  if (q.includes("battery") || q.includes("health") || q.includes("charge") || q.includes("backup")) {
    reply = `🔋 <b>Battery Analysis for ${p.name} (Grade ${g}):</b> Factory battery health is tested at ${p.grades[g]?.battery || 96}%. In our lab stress test, it delivered 8+ hours of screen-on runtime. If it degrades below 80% within 6 months, FoneZone replaces it free!`;
  } else if (q.includes("scratch") || q.includes("dent") || q.includes("mark") || q.includes("screen") || q.includes("display")) {
    reply = `🔍 <b>Display & Cosmetic Assurance:</b> The OLED display on this ${p.name} is guaranteed 100% scratch-free. Touch sensitivity, 120Hz ProMotion, and TrueTone are fully verified. All cosmetic flaw coordinates are mapped to the millimeter in our 360 viewer.`;
  } else if (q.includes("warranty") || q.includes("guarantee") || q.includes("return") || q.includes("replace")) {
    reply = `🛡️ <b>FoneZone Protection Plan:</b> Comes with our comprehensive 6-Month Pan-India Warranty covering screen, motherboard, and battery. You also receive a 7-Day Doorstep Replacement Window if anything does not meet your expectations.`;
  } else if (q.includes("cashify") || q.includes("compare") || q.includes("price") || q.includes("why")) {
    reply = `⚖️ <b>Why Choose FoneZone:</b> You save ₹3,000–₹5,000 compared to Cashify while getting radical transparency: inspect the real 360 flaw coordinates and watch the 32-point inspection video before dispatch!`;
  } else if (q.includes("original") || q.includes("genuine") || q.includes("part") || q.includes("icloud") || q.includes("lock")) {
    reply = `✅ <b>100% Genuine & Clean GSMA:</b> Every unit is checked against global GSMA blacklists, completely iCloud/MDM unlocked, and runs on 100% genuine OEM components with no warnings in Settings.`;
  } else {
    reply = `🤖 <b>NexG AI Specialist:</b> For this ${p.name} (Grade ${g}), our 32-point robotic and technician audit found zero functional defects. Motherboard thermals, cameras (0.5x, 1x, 3x), 5G transceivers, and speakers scored 100% PASS. Doorstep delivery is backed by 7-Day Easy Returns.`;
  }

  typewriterAIAnswer(reply);
  input.value = "";
}

// D. Store Experience Hub Booking
function bookStoreDemo(storeName) {
  showToast(`📍 1-on-1 VIP In-Store Demo reserved at ${storeName}! Our store manager will keep the device powered on and ready for your 360 inspection.`);
}

// E. Global Aliases
window.openInspectModal = openInspector;
window.setPhoneCase = setPhoneCase;
window.toggleAddCaseToOrder = toggleAddCaseToOrder;
window.toggleBatterySimulator = toggleBatterySimulator;
window.updateBatterySimulation = updateBatterySimulation;
window.setBatteryUsageProfile = setBatteryUsageProfile;
window.toggleAICopilot = toggleAICopilot;
window.askAICopilot = askAICopilot;
window.handleCustomAIQuestion = handleCustomAIQuestion;
window.bookStoreDemo = bookStoreDemo;
