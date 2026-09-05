// FoneZone Modern Prototype Engine
// Dual-Portal: 1. Customer Storefront (FoneZone.com) | 2. Merchant & Ops Hub (Sahil Pathania & Hemant Verma)

const CATALOG = [
  {
    "id": "fz-ip15pro",
    "baseModelName": "iPhone 15 Pro",
    "color": "Natural Titanium",
    "name": "iPhone 15 Pro 128GB Natural Titanium",
    "model3d": "assets/iphone14_model.glb",
    "category": "phone",
    "brand": "apple",
    "badge": "FLAGSHIP",
    "image": "assets/iphone15pro_naturaltitanium.png",
    "msrp": 134900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 134900
      },
      {
        "size": "256GB",
        "delta": 7000,
        "msrp": 144900
      },
      {
        "size": "512GB",
        "delta": 16000,
        "msrp": 164900
      },
      {
        "size": "1TB",
        "delta": 25000,
        "msrp": 184900
      }
    ],
    "grades": {
      "A": {
        "price": 84999,
        "label": "Grade A (Pristine)",
        "battery": 98,
        "cycles": 84,
        "desc": "Flawless condition. Zero micro-scratches on Ceramic Shield or Titanium. Apple OEM display."
      },
      "B": {
        "price": 78999,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 198,
        "desc": "Pristine display. Minor hairline micro-abrasion on lower titanium bezel rim (invisible with case)."
      },
      "C": {
        "price": 71999,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 340,
        "desc": "Visible cosmetic scuffs on corners. 100% hardware certified, maximum savings."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch All-Screen OLED Display"
          },
          {
            "label": "Resolution",
            "value": "2556 x 1179 pixels at 460 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz ProMotion Adaptive Frequency"
          },
          {
            "label": "Peak Brightness",
            "value": "2,000 nits Outdoor / 1,600 nits HDR"
          },
          {
            "label": "Glass & Shield",
            "value": "Ceramic Shield Front \u2022 Matte Glass Back"
          },
          {
            "label": "Tech Features",
            "value": "Dynamic Island, Always-On, TrueTone, P3"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A17 Pro (3nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A17 Pro 3nm Industry-First SoC"
          },
          {
            "label": "CPU Architecture",
            "value": "6-Core CPU (2 Performance + 4 Efficiency)"
          },
          {
            "label": "GPU Architecture",
            "value": "6-Core Pro GPU with Hardware Ray Tracing"
          },
          {
            "label": "Neural Engine",
            "value": "16-Core Neural Engine (35 Trillion Ops/sec)"
          },
          {
            "label": "RAM Memory",
            "value": "8GB LPDDR5 Unified Memory Architecture"
          }
        ]
      },
      "camera": {
        "title": "Pro 48MP Photonic Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary Sensor",
            "value": "48MP Main (24mm, f/1.78, 2nd-gen Sensor OIS)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.2, 120\u00b0 Field of View)"
          },
          {
            "label": "Telephoto",
            "value": "12MP 3x Telephoto (77mm, f/2.8, Optical OIS)"
          },
          {
            "label": "Optical Zoom",
            "value": "3x Optical Zoom In, 2x Out (6x Optical Range)"
          },
          {
            "label": "Pro Video",
            "value": "4K ProRes at 60 fps with external USB-C drive Log"
          },
          {
            "label": "Front Camera",
            "value": "12MP TrueDepth (f/1.9) with Autofocus & Face ID"
          }
        ]
      },
      "battery": {
        "title": "Battery & Fast Charging Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "OEM Capacity",
            "value": "3,274 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 23 Hours Local / 20 Hours Streamed"
          },
          {
            "label": "Fast Charging",
            "value": "Up to 50% charge in 30 mins via 20W Type-C"
          },
          {
            "label": "Wireless Qi2",
            "value": "MagSafe 15W & Qi2 Magnetic Fast Charging"
          }
        ]
      },
      "build": {
        "title": "Aerospace Titanium Chassis & Dimensions",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis Material",
            "value": "Grade 5 Aerospace Titanium with Aluminum core"
          },
          {
            "label": "Dimensions",
            "value": "146.6 x 70.6 x 8.25 mm (5.77 x 2.78 x 0.32 in)"
          },
          {
            "label": "Total Weight",
            "value": "187 grams (6.60 oz) Ultra-Lightweight"
          },
          {
            "label": "Water Resistance",
            "value": "IP68 Rating (Maximum depth 6 meters up to 30 mins)"
          },
          {
            "label": "Action Control",
            "value": "Custom Action Button with Haptic Feedback"
          }
        ]
      },
      "connectivity": {
        "title": "5G, Dual SIM & Wireless Architecture",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "5G Cellular",
            "value": "5G Sub-6GHz & mmWave (All Indian 5G Bands)"
          },
          {
            "label": "SIM Types",
            "value": "Dual SIM (Physical nano-SIM + eSIM) Unlocked"
          },
          {
            "label": "Wi-Fi & Bluetooth",
            "value": "Wi-Fi 6E (802.11ax) + Bluetooth 5.3 + Thread"
          },
          {
            "label": "Port Interface",
            "value": "USB-C 3.0 (up to 10Gb/s transfer speed)"
          },
          {
            "label": "Biometrics",
            "value": "Face ID TrueDepth 3D Facial Recognition"
          }
        ]
      },
      "inclusions": {
        "title": "FoneZone Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty Cover",
            "value": "6 Months Comprehensive Pan-India Warranty Card"
          },
          {
            "label": "Charging Cable",
            "value": "20W Braided USB-C to USB-C Fast Charge Cable"
          },
          {
            "label": "Security Seal",
            "value": "Tamper-Evident Anti-Swap Doorstep Security Pouch"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/turntable_frame_0.png",
      "45": "assets/turntable_frame_45.png",
      "90": "assets/turntable_frame_90.png",
      "135": "assets/turntable_frame_135.png",
      "180": "assets/turntable_frame_180.png",
      "225": "assets/turntable_frame_225.png",
      "270": "assets/turntable_frame_270.png",
      "315": "assets/turntable_frame_315.png",
      "front": "assets/turntable_frame_0.png",
      "back": "assets/turntable_frame_180.png",
      "right": "assets/turntable_frame_right.png",
      "left": "assets/turntable_frame_left.png",
      "top": "assets/turntable_frame_top.png",
      "bottom": "assets/turntable_frame_bottom.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "8 units available in Delhi Hub"
  },
  {
    "id": "fz-ip15promax",
    "baseModelName": "iPhone 15 Pro Max",
    "color": "Blue Titanium",
    "name": "iPhone 15 Pro Max 256GB Blue Titanium",
    "category": "phone",
    "brand": "apple",
    "badge": "TITANIUM PRO",
    "image": "assets/iphone15_promax.jpg",
    "msrp": 159900,
    "storageOptions": [
      {
        "size": "256GB",
        "delta": 0,
        "msrp": 159900
      },
      {
        "size": "512GB",
        "delta": 13000,
        "msrp": 179900
      },
      {
        "size": "1TB",
        "delta": 24000,
        "msrp": 199900
      }
    ],
    "grades": {
      "A": {
        "price": 94999,
        "label": "Grade A (Pristine)",
        "battery": 99,
        "cycles": 46,
        "desc": "Flawless condition. Grade 5 Titanium chassis, pristine Ceramic Shield display, zero scuffs."
      },
      "B": {
        "price": 87999,
        "label": "Grade B (Very Good)",
        "battery": 93,
        "cycles": 185,
        "desc": "Clean glass. Microscopic pinpoint mark on lower frame rim, undetectable with case."
      },
      "C": {
        "price": 81999,
        "label": "Grade C (Value Deal)",
        "battery": 87,
        "cycles": 320,
        "desc": "Light cosmetic casing marks. 100% genuine Apple hardware and 5x optical telephoto certified."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.7-inch All-Screen Super Retina XDR OLED"
          },
          {
            "label": "Resolution",
            "value": "2796 x 1290 pixels at 460 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz ProMotion Adaptive Frequency"
          },
          {
            "label": "Peak Brightness",
            "value": "2,000 nits Outdoor / 1,600 nits HDR"
          },
          {
            "label": "Protection",
            "value": "Ceramic Shield Front \u2022 Textured Matte Glass Back"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A17 Pro (3nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A17 Pro 3nm SoC"
          },
          {
            "label": "CPU Architecture",
            "value": "6-Core CPU (2 Performance + 4 Efficiency)"
          },
          {
            "label": "GPU Architecture",
            "value": "6-Core Pro GPU with Hardware Ray Tracing"
          },
          {
            "label": "Neural Engine",
            "value": "16-Core Neural Engine (35 Trillion Ops/sec)"
          }
        ]
      },
      "camera": {
        "title": "Pro 48MP 5x Tetraprism Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary Sensor",
            "value": "48MP Main (24mm, f/1.78, 2nd-gen Sensor-Shift OIS)"
          },
          {
            "label": "5x Telephoto",
            "value": "12MP 5x Optical Zoom (120mm, f/2.8, 3D Sensor-Shift OIS)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.2, 120\u00b0 FOV)"
          },
          {
            "label": "Video Capture",
            "value": "4K ProRes at 60 fps with external USB-C drive Log"
          }
        ]
      },
      "battery": {
        "title": "All-Day Pro Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "OEM Capacity",
            "value": "4,422 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 29 Hours Local Playback (Best-in-class)"
          },
          {
            "label": "Fast Charging",
            "value": "Up to 50% in 30 mins via 20W Type-C"
          },
          {
            "label": "Wireless",
            "value": "MagSafe 15W & Qi2 Magnetic Charging"
          }
        ]
      },
      "build": {
        "title": "Grade 5 Aerospace Titanium",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Grade 5 Aerospace Titanium with internal Aluminum structure"
          },
          {
            "label": "Dimensions",
            "value": "159.9 x 76.7 x 8.25 mm \u2022 221 grams weight"
          },
          {
            "label": "Water Resistance",
            "value": "IP68 Rating (6 meters up to 30 mins)"
          },
          {
            "label": "Action Button",
            "value": "Custom Action Button with Haptic Feedback"
          }
        ]
      },
      "connectivity": {
        "title": "5G, Wi-Fi 6E & USB-C 3.0",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz + mmWave (All Indian 5G Bands)"
          },
          {
            "label": "Wi-Fi & Bluetooth",
            "value": "Wi-Fi 6E (802.11ax) + Bluetooth 5.3"
          },
          {
            "label": "Port Interface",
            "value": "USB-C 3.0 (up to 10Gb/s transfer speed)"
          }
        ]
      },
      "inclusions": {
        "title": "FoneZone Certified Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty Cover",
            "value": "6 Months Comprehensive Pan-India Warranty Card"
          },
          {
            "label": "Cable",
            "value": "Braided USB-C Fast Charge Cable"
          },
          {
            "label": "Security Seal",
            "value": "Tamper-Evident Anti-Swap Doorstep Security Pouch"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone15_promax.jpg",
      "45": "assets/iphone15_promax.jpg",
      "90": "assets/iphone15_promax.jpg",
      "180": "assets/iphone15_promax.jpg",
      "270": "assets/iphone15_promax.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "6 units available in Delhi Hub"
  },
  {
    "id": "fz-ip15",
    "baseModelName": "iPhone 15",
    "color": "Pink",
    "name": "iPhone 15 128GB Pink",
    "category": "phone",
    "brand": "apple",
    "badge": "DYNAMIC ISLAND",
    "image": "assets/iphone15_pink.jpg",
    "msrp": 79900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 79900
      },
      {
        "size": "256GB",
        "delta": 7000,
        "msrp": 89900
      },
      {
        "size": "512GB",
        "delta": 15000,
        "msrp": 109900
      }
    ],
    "grades": {
      "A": {
        "price": 56999,
        "label": "Grade A (Pristine)",
        "battery": 97,
        "cycles": 68,
        "desc": "Immaculate condition. Color-infused back glass, Dynamic Island OLED, scratch-free."
      },
      "B": {
        "price": 51999,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 190,
        "desc": "Pristine display. Subtle micro-scuff on aluminum frame corner."
      },
      "C": {
        "price": 46999,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 310,
        "desc": "Minor cosmetic frame marks. 100% verified 48MP main camera and hardware."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch Super Retina XDR OLED Display"
          },
          {
            "label": "Resolution",
            "value": "2556 x 1179 pixels at 460 ppi"
          },
          {
            "label": "Dynamic Island",
            "value": "Interactive Dynamic Island Notifications"
          },
          {
            "label": "Brightness",
            "value": "2,000 nits Outdoor Peak / 1,600 nits HDR"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A16 Bionic (4nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A16 Bionic 4nm SoC"
          },
          {
            "label": "CPU",
            "value": "6-Core CPU (2 High-Performance + 4 High-Efficiency)"
          },
          {
            "label": "GPU",
            "value": "5-Core GPU with 50% more memory bandwidth"
          }
        ]
      },
      "camera": {
        "title": "Advanced 48MP Dual-Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary Sensor",
            "value": "48MP Main (26mm, f/1.6, Sensor-Shift OIS)"
          },
          {
            "label": "2x Telephoto",
            "value": "12MP 2x Optical Telephoto (via 48MP Sensor Crop)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.4, 120\u00b0 FOV)"
          }
        ]
      },
      "battery": {
        "title": "All-Day Battery & USB-C",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "OEM Capacity",
            "value": "3,349 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 20 Hours Local Video Playback"
          },
          {
            "label": "Charging Port",
            "value": "Universal USB-C Fast Charging Port"
          }
        ]
      },
      "build": {
        "title": "Color-Infused Glass & Aluminum",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Back Material",
            "value": "Industry-first Color-Infused Matte Glass Back"
          },
          {
            "label": "Frame",
            "value": "Aerospace-Grade Aluminum with Contoured Edges"
          },
          {
            "label": "Dimensions",
            "value": "147.6 x 71.6 x 7.80 mm \u2022 171 grams weight"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Second-Gen Ultra Wideband",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Telecom Bands)"
          },
          {
            "label": "UWB Chip",
            "value": "2nd-Gen Ultra Wideband Chip for Precision Finding"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Braided USB-C to USB-C Fast Charge Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone15_pink.jpg",
      "45": "assets/iphone15_pink.jpg",
      "90": "assets/iphone15_pink.jpg",
      "180": "assets/iphone15_pink.jpg",
      "270": "assets/iphone15_pink.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "9 units available in Mumbai Hub"
  },
  {
    "id": "fz-ip14promax",
    "baseModelName": "iPhone 14 Pro Max",
    "color": "Gold",
    "name": "iPhone 14 Pro Max 128GB Gold",
    "category": "phone",
    "brand": "apple",
    "badge": "GOLD FLAGSHIP",
    "image": "assets/iphone14_pro_gold.jpg",
    "msrp": 139900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 139900
      },
      {
        "size": "256GB",
        "delta": 7000,
        "msrp": 149900
      },
      {
        "size": "512GB",
        "delta": 15000,
        "msrp": 169900
      },
      {
        "size": "1TB",
        "delta": 23000,
        "msrp": 189900
      }
    ],
    "grades": {
      "A": {
        "price": 74999,
        "label": "Grade A (Pristine)",
        "battery": 97,
        "cycles": 110,
        "desc": "Immaculate Surgical Steel chassis, scratch-free Ceramic Shield display, like-new."
      },
      "B": {
        "price": 68999,
        "label": "Grade B (Very Good)",
        "battery": 91,
        "cycles": 230,
        "desc": "Clean display. Light micro-scuffs on polished stainless steel side rim."
      },
      "C": {
        "price": 62999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 370,
        "desc": "Cosmetic frame marks. 100% verified 48MP Pro camera, Face ID, and display."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED with Always-On",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.7-inch All-Screen OLED Display"
          },
          {
            "label": "Resolution",
            "value": "2796 x 1290 pixels at 460 ppi"
          },
          {
            "label": "ProMotion",
            "value": "120Hz ProMotion Adaptive Refresh Rate"
          },
          {
            "label": "Brightness",
            "value": "2,000 nits Outdoor Peak / 1,600 nits HDR"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A16 Bionic (4nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A16 Bionic 4nm SoC"
          },
          {
            "label": "CPU",
            "value": "6-Core CPU (2 Performance + 4 Efficiency)"
          },
          {
            "label": "GPU",
            "value": "5-Core GPU with 50% more bandwidth"
          }
        ]
      },
      "camera": {
        "title": "Pro 48MP Triple-Lens Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "48MP Main (24mm, f/1.78, 2nd-gen Sensor OIS)"
          },
          {
            "label": "Telephoto",
            "value": "12MP 3x Telephoto (77mm, f/2.8, OIS)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.2, 120\u00b0 FOV)"
          },
          {
            "label": "Photonic Engine",
            "value": "Apple Photonic Engine for Deep Color Fusion"
          }
        ]
      },
      "battery": {
        "title": "High Capacity Pro Max Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "4,323 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 29 Hours Local Playback"
          }
        ]
      },
      "build": {
        "title": "Surgical-Grade Stainless Steel",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Surgical-Grade Stainless Steel Frame"
          },
          {
            "label": "Dimensions",
            "value": "160.7 x 77.6 x 7.85 mm \u2022 240 grams weight"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Satellite Emergency SOS",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz + mmWave (All Indian Bands)"
          },
          {
            "label": "SIM",
            "value": "Dual SIM (Physical nano-SIM + eSIM)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone14_pro_gold.jpg",
      "45": "assets/iphone14_pro_gold.jpg",
      "90": "assets/iphone14_pro_gold.jpg",
      "180": "assets/iphone14_pro_gold.jpg",
      "270": "assets/iphone14_pro_gold.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "5 units available in Delhi Hub"
  },
  {
    "id": "fz-ip14pro",
    "baseModelName": "iPhone 14 Pro",
    "color": "Space Black",
    "name": "iPhone 14 Pro 128GB Space Black",
    "category": "phone",
    "brand": "apple",
    "badge": "PRO DEAL",
    "image": "assets/iphone14_pro_black.jpg",
    "msrp": 129900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 129900
      },
      {
        "size": "256GB",
        "delta": 6000,
        "msrp": 139900
      },
      {
        "size": "512GB",
        "delta": 14000,
        "msrp": 159900
      },
      {
        "size": "1TB",
        "delta": 22000,
        "msrp": 179900
      }
    ],
    "grades": {
      "A": {
        "price": 66999,
        "label": "Grade A (Pristine)",
        "battery": 96,
        "cycles": 120,
        "desc": "Flawless Space Black stainless steel body, pristine display, 100% genuine Apple OEM parts."
      },
      "B": {
        "price": 61499,
        "label": "Grade B (Very Good)",
        "battery": 90,
        "cycles": 240,
        "desc": "Pristine display. Minor hairline micro-abrasion on steel rim."
      },
      "C": {
        "price": 55999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 380,
        "desc": "Cosmetic scuffs on corner edges. 100% hardware certified, maximum savings."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch OLED Display with Dynamic Island"
          },
          {
            "label": "Resolution",
            "value": "2556 x 1179 pixels at 460 ppi"
          },
          {
            "label": "ProMotion",
            "value": "120Hz ProMotion Adaptive Frequency"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A16 Bionic (4nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A16 Bionic 4nm SoC"
          },
          {
            "label": "CPU",
            "value": "6-Core CPU with 2 performance cores"
          }
        ]
      },
      "camera": {
        "title": "Pro 48MP Photonic Camera",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "48MP Main (24mm, f/1.78, 2nd-gen Sensor OIS)"
          },
          {
            "label": "Telephoto",
            "value": "12MP 3x Telephoto (77mm, f/2.8, OIS)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.2)"
          }
        ]
      },
      "battery": {
        "title": "Pro Battery Life Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "3,200 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 23 Hours Local Video"
          }
        ]
      },
      "build": {
        "title": "Surgical Stainless Steel",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Surgical-Grade Stainless Steel & Textured Glass"
          },
          {
            "label": "Dimensions",
            "value": "147.5 x 71.5 x 7.85 mm \u2022 206 grams weight"
          }
        ]
      },
      "connectivity": {
        "title": "5G, Wi-Fi 6 & Bluetooth 5.3",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone14_pro_black.jpg",
      "45": "assets/iphone14_pro_black.jpg",
      "90": "assets/iphone14_pro_black.jpg",
      "180": "assets/iphone14_pro_black.jpg",
      "270": "assets/iphone14_pro_black.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "7 units available in Bangalore Hub"
  },
  {
    "id": "fz-ip14",
    "baseModelName": "iPhone 14",
    "color": "Blue",
    "name": "iPhone 14 128GB Blue",
    "model3d": "assets/iphone14_model.glb",
    "category": "phone",
    "brand": "apple",
    "badge": "BESTSELLER",
    "image": "assets/iphone14_blue.png",
    "msrp": 69900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 69900
      },
      {
        "size": "256GB",
        "delta": 6000,
        "msrp": 79900
      },
      {
        "size": "512GB",
        "delta": 14000,
        "msrp": 99900
      }
    ],
    "grades": {
      "A": {
        "price": 48999,
        "label": "Grade A (Pristine)",
        "battery": 96,
        "cycles": 112,
        "desc": "Scratch-free glass, like-new aerospace aluminum body. 100% battery performance."
      },
      "B": {
        "price": 43999,
        "label": "Grade B (Very Good)",
        "battery": 91,
        "cycles": 220,
        "desc": "Light brush marks on side rails. Clean Super Retina display."
      },
      "C": {
        "price": 38999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 390,
        "desc": "Minor cosmetic corner abrasions. Hardware and cameras tested 100%."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch Super Retina XDR OLED"
          },
          {
            "label": "Resolution",
            "value": "2532 x 1170 pixels at 460 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "60Hz Smooth Retina Interface"
          },
          {
            "label": "Peak Brightness",
            "value": "1,200 nits HDR / 800 nits Typical"
          },
          {
            "label": "Protection",
            "value": "Ceramic Shield Front \u2022 Aerospace Aluminum"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A15 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A15 Bionic (5-Core GPU Edition)"
          },
          {
            "label": "CPU Architecture",
            "value": "6-Core CPU (2 Performance + 4 Efficiency)"
          },
          {
            "label": "Neural Engine",
            "value": "16-Core Neural Engine for computational photo"
          }
        ]
      },
      "camera": {
        "title": "Advanced 12MP Dual-Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "12MP Main (26mm, f/1.5, Sensor-Shift OIS)"
          },
          {
            "label": "Ultra-Wide",
            "value": "12MP Ultra-Wide (13mm, f/2.4, 120\u00b0 FOV)"
          },
          {
            "label": "Video Features",
            "value": "Action Mode Stabilization + 4K Cinematic Mode"
          }
        ]
      },
      "battery": {
        "title": "Long-Lasting All-Day Battery QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "OEM Capacity",
            "value": "3,279 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 20 Hours Local Video Playback"
          }
        ]
      },
      "build": {
        "title": "Aerospace Aluminum Chassis",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis Material",
            "value": "Aerospace-Grade Aluminum with Ceramic Shield"
          },
          {
            "label": "Dimensions",
            "value": "146.7 x 71.5 x 7.80 mm \u2022 172 grams"
          }
        ]
      },
      "connectivity": {
        "title": "5G, eSIM & Wi-Fi 6",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Bands)"
          },
          {
            "label": "SIM Types",
            "value": "Dual SIM (nano-SIM + eSIM) Unlocked"
          }
        ]
      },
      "inclusions": {
        "title": "FoneZone Certified Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty Cover",
            "value": "6 Months Comprehensive Pan-India Warranty Card"
          },
          {
            "label": "Charging Cable",
            "value": "Fast Lightning to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone14_front.png",
      "45": "assets/iphone14_blue.png",
      "90": "assets/iphone14_side.png",
      "180": "assets/iphone14_back.png",
      "270": "assets/iphone14_side.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "14 units available in Delhi Hub"
  },
  {
    "id": "fz-ip13promax",
    "baseModelName": "iPhone 13 Pro Max",
    "color": "Graphite",
    "name": "iPhone 13 Pro Max 128GB Graphite",
    "category": "phone",
    "brand": "apple",
    "badge": "120HZ PRO",
    "image": "assets/iphone13_promax.jpg",
    "msrp": 129900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 129900
      },
      {
        "size": "256GB",
        "delta": 6000,
        "msrp": 139900
      },
      {
        "size": "512GB",
        "delta": 13000,
        "msrp": 159900
      },
      {
        "size": "1TB",
        "delta": 20000,
        "msrp": 179900
      }
    ],
    "grades": {
      "A": {
        "price": 58999,
        "label": "Grade A (Pristine)",
        "battery": 95,
        "cycles": 140,
        "desc": "Flawless condition. Legendary battery life king, 120Hz ProMotion display, pristine steel."
      },
      "B": {
        "price": 53999,
        "label": "Grade B (Very Good)",
        "battery": 89,
        "cycles": 270,
        "desc": "Pristine display. Light pocket scuff marks on stainless steel corners."
      },
      "C": {
        "price": 47999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 410,
        "desc": "Cosmetic bezel wear. 100% verified hardware and 3x Pro camera system."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR with ProMotion",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.7-inch OLED Display with ProMotion"
          },
          {
            "label": "Resolution",
            "value": "2778 x 1284 pixels at 458 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Adaptive ProMotion"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A15 Bionic (5nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A15 Bionic (5-Core GPU)"
          }
        ]
      },
      "camera": {
        "title": "Pro 12MP 3x Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "12MP Main (f/1.5, Sensor-Shift OIS)"
          },
          {
            "label": "Telephoto",
            "value": "12MP 3x Telephoto (f/2.8, OIS)"
          },
          {
            "label": "Macro",
            "value": "Ultra-Wide Macro Photography down to 2cm"
          }
        ]
      },
      "battery": {
        "title": "Legendary Battery Champion",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "4,352 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 28 Hours Local Playback"
          }
        ]
      },
      "build": {
        "title": "Surgical Stainless Steel",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Surgical Stainless Steel \u2022 240 grams weight"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Wi-Fi 6",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Telecom Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone13_promax.jpg",
      "45": "assets/iphone13_promax.jpg",
      "90": "assets/iphone13_promax.jpg",
      "180": "assets/iphone13_promax.jpg",
      "270": "assets/iphone13_promax.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "8 units available in Mumbai Hub"
  },
  {
    "id": "fz-ip13",
    "baseModelName": "iPhone 13",
    "color": "Starlight",
    "name": "iPhone 13 128GB Starlight",
    "category": "phone",
    "brand": "apple",
    "badge": "VALUE KING",
    "image": "assets/iphone13_starlight.png",
    "msrp": 59900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 59900
      },
      {
        "size": "256GB",
        "delta": 5000,
        "msrp": 69900
      },
      {
        "size": "512GB",
        "delta": 12000,
        "msrp": 89900
      }
    ],
    "grades": {
      "A": {
        "price": 39999,
        "label": "Grade A (Pristine)",
        "battery": 94,
        "cycles": 154,
        "desc": "Flawless glass and aluminum casing. 100% verified camera and TrueTone."
      },
      "B": {
        "price": 35999,
        "label": "Grade B (Very Good)",
        "battery": 89,
        "cycles": 260,
        "desc": "Clean display. Minor faint hairline scuff near charging port."
      },
      "C": {
        "price": 31999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 420,
        "desc": "Cosmetic frame marks. 100% functional, exceptional value."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch Super Retina XDR OLED"
          },
          {
            "label": "Resolution",
            "value": "2532 x 1170 pixels at 460 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A15 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A15 Bionic (4-Core GPU)"
          }
        ]
      },
      "camera": {
        "title": "Diagonal 12MP Dual-Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "12MP Main (f/1.6, Sensor-Shift OIS)"
          },
          {
            "label": "Cinematic Mode",
            "value": "1080p at 30 fps Cinematic Shallow Depth"
          }
        ]
      },
      "battery": {
        "title": "Battery & Power Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "3,227 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Video Playback",
            "value": "Up to 19 Hours Local Playback"
          }
        ]
      },
      "build": {
        "title": "Aerospace Aluminum Chassis",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Dimensions",
            "value": "146.7 x 71.5 x 7.65 mm \u2022 174 grams"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Dual SIM",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone13_starlight.png",
      "45": "assets/iphone13_starlight.png",
      "90": "assets/iphone13_starlight.png",
      "180": "assets/iphone13_starlight.png",
      "270": "assets/iphone13_starlight.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "18 units available in Delhi Hub"
  },
  {
    "id": "fz-ip12promax",
    "baseModelName": "iPhone 12 Pro Max",
    "color": "Silver",
    "name": "iPhone 12 Pro Max 128GB Silver",
    "category": "phone",
    "brand": "apple",
    "badge": "VALUE PRO",
    "image": "assets/iphone12_promax.jpg",
    "msrp": 119900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 119900
      },
      {
        "size": "256GB",
        "delta": 5000,
        "msrp": 129900
      },
      {
        "size": "512GB",
        "delta": 11000,
        "msrp": 149900
      }
    ],
    "grades": {
      "A": {
        "price": 44999,
        "label": "Grade A (Pristine)",
        "battery": 93,
        "cycles": 180,
        "desc": "Immaculate silver stainless steel, flawless Ceramic Shield OLED, LiDAR tested."
      },
      "B": {
        "price": 39999,
        "label": "Grade B (Very Good)",
        "battery": 88,
        "cycles": 310,
        "desc": "Clean display. Minor hairline scuffs on polished steel rim."
      },
      "C": {
        "price": 35499,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 450,
        "desc": "Cosmetic frame wear. 100% genuine Apple hardware certified."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.7-inch All-Screen OLED Display"
          },
          {
            "label": "Resolution",
            "value": "2778 x 1284 pixels at 458 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A14 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A14 Bionic 5nm SoC"
          }
        ]
      },
      "camera": {
        "title": "Pro 12MP Camera System with LiDAR",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "12MP Main (f/1.6, Sensor-Shift OIS)"
          },
          {
            "label": "Telephoto",
            "value": "12MP 2.5x Telephoto (65mm, f/2.2)"
          },
          {
            "label": "LiDAR",
            "value": "LiDAR Scanner for Night Mode Portraits"
          }
        ]
      },
      "battery": {
        "title": "Pro Max Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "3,687 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Surgical Stainless Steel",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Surgical-Grade Stainless Steel \u2022 228 grams"
          }
        ]
      },
      "connectivity": {
        "title": "First 5G iPhone Generation",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian 5G Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone12_promax.jpg",
      "45": "assets/iphone12_promax.jpg",
      "90": "assets/iphone12_promax.jpg",
      "180": "assets/iphone12_promax.jpg",
      "270": "assets/iphone12_promax.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "6 units available in Delhi Hub"
  },
  {
    "id": "fz-ip11promax",
    "baseModelName": "iPhone 11 Pro Max",
    "color": "Gold",
    "name": "iPhone 11 Pro Max 64GB Gold",
    "category": "phone",
    "brand": "apple",
    "badge": "SUPER VALUE",
    "image": "assets/iphone11_promax.jpg",
    "msrp": 109900,
    "storageOptions": [
      {
        "size": "64GB",
        "delta": 0,
        "msrp": 109900
      },
      {
        "size": "256GB",
        "delta": 4000,
        "msrp": 121900
      },
      {
        "size": "512GB",
        "delta": 8000,
        "msrp": 139900
      }
    ],
    "grades": {
      "A": {
        "price": 32999,
        "label": "Grade A (Pristine)",
        "battery": 92,
        "cycles": 210,
        "desc": "Pristine Super Retina XDR OLED, scratch-free matte back glass, beautiful gold rim."
      },
      "B": {
        "price": 28999,
        "label": "Grade B (Very Good)",
        "battery": 87,
        "cycles": 340,
        "desc": "Clean display. Light micro-scuffs on polished steel sides."
      },
      "C": {
        "price": 24999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 490,
        "desc": "Cosmetic frame marks. Triple 12MP cameras and Face ID certified 100%."
      }
    },
    "specs": {
      "display": {
        "title": "Super Retina XDR OLED Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.5-inch All-Screen OLED Display"
          },
          {
            "label": "Resolution",
            "value": "2688 x 1242 pixels at 458 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A13 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A13 Bionic with 3rd-Gen Neural Engine"
          }
        ]
      },
      "camera": {
        "title": "Pro Triple 12MP Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Cameras",
            "value": "Ultra Wide (f/2.4), Wide (f/1.8), Telephoto (f/2.0)"
          },
          {
            "label": "Night Mode",
            "value": "Automatic Night Mode low-light photography"
          }
        ]
      },
      "battery": {
        "title": "All-Day Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "3,969 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Textured Matte Glass & Steel",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Stainless Steel & Matte Glass \u2022 226 grams"
          }
        ]
      },
      "connectivity": {
        "title": "4G LTE Advanced & Wi-Fi 6",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "Gigabit-class LTE with 4x4 MIMO"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone11_promax.jpg",
      "45": "assets/iphone11_promax.jpg",
      "90": "assets/iphone11_promax.jpg",
      "180": "assets/iphone11_promax.jpg",
      "270": "assets/iphone11_promax.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "9 units available in Delhi Hub"
  },
  {
    "id": "fz-ip11",
    "baseModelName": "iPhone 11",
    "color": "White",
    "name": "iPhone 11 64GB White",
    "category": "phone",
    "brand": "apple",
    "badge": "STUDENT PICK",
    "image": "assets/iphone14_front.png",
    "msrp": 49900,
    "storageOptions": [
      {
        "size": "64GB",
        "delta": 0,
        "msrp": 49900
      },
      {
        "size": "128GB",
        "delta": 3000,
        "msrp": 54900
      }
    ],
    "grades": {
      "A": {
        "price": 22999,
        "label": "Grade A (Pristine)",
        "battery": 91,
        "cycles": 230,
        "desc": "Immaculate Liquid Retina screen, zero chassis scuffs, 100% genuine parts."
      },
      "B": {
        "price": 19999,
        "label": "Grade B (Very Good)",
        "battery": 87,
        "cycles": 360,
        "desc": "Clean display. Light micro-scratches on aluminum edges."
      },
      "C": {
        "price": 16999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 510,
        "desc": "Visible cosmetic scratches on back/bezel. 100% verified hardware."
      }
    },
    "specs": {
      "display": {
        "title": "Liquid Retina HD Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch Liquid Retina HD LCD"
          },
          {
            "label": "Resolution",
            "value": "1792 x 828 pixels at 326 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A13 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A13 Bionic 7nm SoC"
          }
        ]
      },
      "camera": {
        "title": "Dual 12MP Ultra-Wide & Wide",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Cameras",
            "value": "12MP Wide (f/1.8) + 12MP Ultra Wide (f/2.4)"
          }
        ]
      },
      "battery": {
        "title": "All-Day Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "3,110 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Aerospace Aluminum & Glass",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Dimensions",
            "value": "150.9 x 75.7 x 8.3 mm \u2022 194 grams"
          }
        ]
      },
      "connectivity": {
        "title": "4G LTE & Wi-Fi 6",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "Gigabit-class 4G LTE with 2x2 MIMO"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Lightning to USB Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone14_front.png",
      "45": "assets/iphone14_front.png",
      "90": "assets/iphone14_front.png",
      "180": "assets/iphone14_front.png",
      "270": "assets/iphone14_front.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "22 units available in Delhi Hub"
  },
  {
    "id": "fz-ipxr",
    "baseModelName": "iPhone XR",
    "color": "White",
    "name": "iPhone XR 64GB White",
    "category": "phone",
    "brand": "apple",
    "badge": "BUDGET KING",
    "image": "assets/iphone_xr_white.jpg",
    "msrp": 47900,
    "storageOptions": [
      {
        "size": "64GB",
        "delta": 0,
        "msrp": 47900
      },
      {
        "size": "128GB",
        "delta": 2500,
        "msrp": 52900
      }
    ],
    "grades": {
      "A": {
        "price": 14999,
        "label": "Grade A (Pristine)",
        "battery": 90,
        "cycles": 240,
        "desc": "Pristine display, scratch-free glass back, 100% Face ID & TrueTone certified."
      },
      "B": {
        "price": 12999,
        "label": "Grade B (Very Good)",
        "battery": 86,
        "cycles": 390,
        "desc": "Clean display. Light pocket scuff marks on aluminum frame."
      },
      "C": {
        "price": 10999,
        "label": "Grade C (Value Deal)",
        "battery": 84,
        "cycles": 550,
        "desc": "Cosmetic bezel scratches. Hardware 100% functional, entry-level Apple price."
      }
    },
    "specs": {
      "display": {
        "title": "Liquid Retina HD Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.1-inch Liquid Retina All-Screen LCD"
          },
          {
            "label": "Resolution",
            "value": "1792 x 828 pixels at 326 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A12 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A12 Bionic 7nm SoC"
          }
        ]
      },
      "camera": {
        "title": "Single 12MP Wide Camera",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Camera",
            "value": "12MP Wide (f/1.8) with Smart HDR"
          }
        ]
      },
      "battery": {
        "title": "Long Battery Life",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "2,942 mAh Li-Ion (Guaranteed >=84% Health)"
          }
        ]
      },
      "build": {
        "title": "7000 Series Aluminum",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Aerospace-Grade 7000 Series Aluminum"
          }
        ]
      },
      "connectivity": {
        "title": "4G LTE & Face ID",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Biometrics",
            "value": "Face ID TrueDepth Facial Recognition"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Lightning to USB Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/iphone_xr_white.jpg",
      "45": "assets/iphone_xr_white.jpg",
      "90": "assets/iphone_xr_white.jpg",
      "180": "assets/iphone_xr_white.jpg",
      "270": "assets/iphone_xr_white.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "16 units available in Delhi Hub"
  },
  {
    "id": "fz-s23ultra",
    "baseModelName": "Galaxy S23 Ultra",
    "color": "Green",
    "name": "Samsung Galaxy S23 Ultra 256GB Green",
    "category": "phone",
    "brand": "samsung",
    "badge": "200MP CAM",
    "image": "assets/samsung_s23_ultra.png",
    "msrp": 124999,
    "storageOptions": [
      {
        "size": "256GB",
        "delta": 0,
        "msrp": 124999
      },
      {
        "size": "512GB",
        "delta": 8000,
        "msrp": 139999
      },
      {
        "size": "1TB",
        "delta": 18000,
        "msrp": 159999
      }
    ],
    "grades": {
      "A": {
        "price": 67999,
        "label": "Grade A (Pristine)",
        "battery": 97,
        "cycles": 92,
        "desc": "Immaculate Dynamic AMOLED 2X, flawless Armor Aluminum frame, integrated S-Pen tested."
      },
      "B": {
        "price": 61999,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 210,
        "desc": "Pristine display. Subtle micro-scuff on bottom bezel near S-Pen slot."
      },
      "C": {
        "price": 55999,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 360,
        "desc": "Cosmetic frame marks. 100% genuine Samsung hardware & 200MP sensor tested."
      }
    },
    "specs": {
      "display": {
        "title": "Dynamic AMOLED 2X Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.8-inch Edge QHD+ Dynamic AMOLED 2X"
          },
          {
            "label": "Resolution",
            "value": "3088 x 1440 pixels (500 ppi)"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Super Smooth Adaptive (1-120Hz)"
          },
          {
            "label": "Peak Brightness",
            "value": "1,750 nits Outdoor Peak"
          }
        ]
      },
      "processor": {
        "title": "Snapdragon 8 Gen 2 for Galaxy",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Snapdragon 8 Gen 2 Overclocked (3.36 GHz)"
          },
          {
            "label": "GPU",
            "value": "Adreno 740 with Hardware Ray Tracing"
          }
        ]
      },
      "camera": {
        "title": "200MP Quad Telephoto Camera",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary Sensor",
            "value": "200MP Wide Sensor (f/1.7, OIS)"
          },
          {
            "label": "100x Space Zoom",
            "value": "10MP Periscope (10x Optical, 100x Digital)"
          },
          {
            "label": "Telephoto",
            "value": "10MP 3x Optical Telephoto (f/2.4, OIS)"
          }
        ]
      },
      "battery": {
        "title": "5,000 mAh All-Day Power Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "5,000 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Fast Charging",
            "value": "45W Super Fast Charging 2.0"
          }
        ]
      },
      "build": {
        "title": "Armor Aluminum & Gorilla Glass Victus 2",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Glass",
            "value": "Corning Gorilla Glass Victus 2 Front & Back"
          },
          {
            "label": "Integrated S-Pen",
            "value": "Embedded S-Pen with 2.8ms Latency"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Wi-Fi 6E",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Dual SIM (nano-SIM + eSIM)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Samsung 45W Compatible USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/samsung_s23_ultra.png",
      "45": "assets/samsung_s23_ultra.png",
      "90": "assets/samsung_s23_ultra.png",
      "180": "assets/samsung_s23_ultra.png",
      "270": "assets/samsung_s23_ultra.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "11 units available in Delhi Hub"
  },
  {
    "id": "fz-s22ultra",
    "baseModelName": "Galaxy S22 Ultra 5G",
    "color": "Burgundy",
    "name": "Samsung Galaxy S22 Ultra 5G 256GB Burgundy",
    "category": "phone",
    "brand": "samsung",
    "badge": "S-PEN FLAGSHIP",
    "image": "assets/samsung_s22_ultra.jpg",
    "msrp": 109999,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 109999
      },
      {
        "size": "256GB",
        "delta": 5000,
        "msrp": 118999
      },
      {
        "size": "512GB",
        "delta": 11000,
        "msrp": 131999
      }
    ],
    "grades": {
      "A": {
        "price": 46999,
        "label": "Grade A (Pristine)",
        "battery": 94,
        "cycles": 160,
        "desc": "Immaculate Burgundy finish, scratch-free 120Hz Dynamic AMOLED 2X, S-Pen tested."
      },
      "B": {
        "price": 41999,
        "label": "Grade B (Very Good)",
        "battery": 90,
        "cycles": 280,
        "desc": "Pristine display. Minor hairline scuff on aluminum bezel."
      },
      "C": {
        "price": 37499,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 430,
        "desc": "Cosmetic frame marks. 100% verified 108MP camera, 100x zoom, hardware certified."
      }
    },
    "specs": {
      "display": {
        "title": "Dynamic AMOLED 2X QHD+",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.8-inch Edge QHD+ AMOLED 2X"
          },
          {
            "label": "Resolution",
            "value": "3088 x 1440 pixels at 500 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Adaptive Refresh (1-120Hz)"
          }
        ]
      },
      "processor": {
        "title": "Qualcomm Snapdragon 8 Gen 1 (4nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Snapdragon 8 Gen 1 4nm SoC"
          }
        ]
      },
      "camera": {
        "title": "108MP Quad Camera with 100x Space Zoom",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "108MP Wide (f/1.8, OIS)"
          },
          {
            "label": "Periscope",
            "value": "10MP 10x Optical Zoom, up to 100x Space Zoom"
          }
        ]
      },
      "battery": {
        "title": "5,000 mAh High Capacity Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "5,000 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Charging",
            "value": "45W Fast Charging Support"
          }
        ]
      },
      "build": {
        "title": "Armor Aluminum & Integrated S-Pen",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "S-Pen",
            "value": "Integrated S-Pen with Bluetooth gestures"
          }
        ]
      },
      "connectivity": {
        "title": "5G Dual SIM & Wi-Fi 6E",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Type-C to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/samsung_s22_ultra.jpg",
      "45": "assets/samsung_s22_ultra.jpg",
      "90": "assets/samsung_s22_ultra.jpg",
      "180": "assets/samsung_s22_ultra.jpg",
      "270": "assets/samsung_s22_ultra.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "7 units available in Bangalore Hub"
  },
  {
    "id": "fz-s21ultra",
    "baseModelName": "Galaxy S21 Ultra 5G",
    "color": "Phantom Brown",
    "name": "Samsung Galaxy S21 Ultra 5G 256GB Phantom Brown",
    "category": "phone",
    "brand": "samsung",
    "badge": "100X ZOOM",
    "image": "assets/samsung_s21_ultra.jpg",
    "msrp": 105999,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 105999
      },
      {
        "size": "256GB",
        "delta": 4000,
        "msrp": 114999
      },
      {
        "size": "512GB",
        "delta": 9000,
        "msrp": 126999
      }
    ],
    "grades": {
      "A": {
        "price": 34999,
        "label": "Grade A (Pristine)",
        "battery": 92,
        "cycles": 220,
        "desc": "Immaculate Phantom Brown matte finish, 120Hz WQHD+ AMOLED, 100x zoom certified."
      },
      "B": {
        "price": 30999,
        "label": "Grade B (Very Good)",
        "battery": 88,
        "cycles": 350,
        "desc": "Pristine display. Light pocket scuff marks on contour-cut camera housing."
      },
      "C": {
        "price": 26999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 480,
        "desc": "Cosmetic frame marks. 100% functional, top-tier flagship at mid-range price."
      }
    },
    "specs": {
      "display": {
        "title": "Dynamic AMOLED 2X WQHD+",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.8-inch WQHD+ Dynamic AMOLED 2X"
          },
          {
            "label": "Resolution",
            "value": "3200 x 1440 pixels at 515 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Adaptive Frequency"
          }
        ]
      },
      "processor": {
        "title": "Flagship 5nm Octa-Core SoC",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "5nm Octa-Core Processor with 12GB RAM"
          }
        ]
      },
      "camera": {
        "title": "108MP Quad Camera with Dual Telephoto",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "108MP Main Sensor (f/1.8, OIS)"
          },
          {
            "label": "Dual Telephoto",
            "value": "3x and 10x Dual Optical Zoom Lenses"
          }
        ]
      },
      "battery": {
        "title": "5,000 mAh Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "5,000 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Contour-Cut Camera Design",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Gorilla Glass Victus & Aluminum frame \u2022 227 grams"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Wi-Fi 6E",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "5G Sub-6GHz (All Indian Telecom Bands)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Type-C to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/samsung_s21_ultra.jpg",
      "45": "assets/samsung_s21_ultra.jpg",
      "90": "assets/samsung_s21_ultra.jpg",
      "180": "assets/samsung_s21_ultra.jpg",
      "270": "assets/samsung_s21_ultra.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "9 units available in Delhi Hub"
  },
  {
    "id": "fz-note20ultra",
    "baseModelName": "Galaxy Note 20 Ultra 5G",
    "color": "Mystic White",
    "name": "Samsung Galaxy Note 20 Ultra 5G 256GB Mystic White",
    "category": "phone",
    "brand": "samsung",
    "badge": "NOTE ICON",
    "image": "assets/samsung_note20_ultra.png",
    "msrp": 104999,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 104999
      },
      {
        "size": "256GB",
        "delta": 4000,
        "msrp": 112999
      },
      {
        "size": "512GB",
        "delta": 8000,
        "msrp": 124999
      }
    ],
    "grades": {
      "A": {
        "price": 29999,
        "label": "Grade A (Pristine)",
        "battery": 91,
        "cycles": 230,
        "desc": "Immaculate condition. Iconic square design, 9ms S-Pen latency, pristine 120Hz display."
      },
      "B": {
        "price": 25999,
        "label": "Grade B (Very Good)",
        "battery": 87,
        "cycles": 370,
        "desc": "Clean display. Minor hairline scuff on stainless frame corners."
      },
      "C": {
        "price": 22499,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 520,
        "desc": "Cosmetic frame marks. 100% verified hardware and S-Pen certified."
      }
    },
    "specs": {
      "display": {
        "title": "Dynamic AMOLED 2X Display",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.9-inch Edge Dynamic AMOLED 2X"
          },
          {
            "label": "Resolution",
            "value": "3088 x 1440 pixels at 496 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Smooth Display"
          }
        ]
      },
      "processor": {
        "title": "Snapdragon 865+ / Exynos 990",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Flagship 7nm+ Octa-Core Processor"
          }
        ]
      },
      "camera": {
        "title": "108MP Pro Camera System",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "108MP Main Sensor (f/1.8, OIS) with Laser AF"
          },
          {
            "label": "Space Zoom",
            "value": "50x Space Zoom (5x Optical Zoom)"
          }
        ]
      },
      "battery": {
        "title": "4,500 mAh All-Day Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "4,500 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Gorilla Glass Victus & S-Pen",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "S-Pen",
            "value": "Built-in 9ms latency S-Pen with Air Actions"
          }
        ]
      },
      "connectivity": {
        "title": "5G & DeX Wireless Desktop",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Samsung DeX",
            "value": "Wireless Samsung DeX PC desktop mode"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Type-C to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/samsung_note20_ultra.png",
      "45": "assets/samsung_note20_ultra.png",
      "90": "assets/samsung_note20_ultra.png",
      "180": "assets/samsung_note20_ultra.png",
      "270": "assets/samsung_note20_ultra.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "8 units available in Delhi Hub"
  },
  {
    "id": "fz-zfold3",
    "baseModelName": "Galaxy Z Fold 3 5G",
    "color": "Phantom Black",
    "name": "Samsung Galaxy Z Fold 3 5G 256GB Phantom Black",
    "category": "phone",
    "brand": "samsung",
    "badge": "FOLDABLE",
    "image": "assets/samsung_zfold3.jpg",
    "msrp": 149999,
    "storageOptions": [
      {
        "size": "256GB",
        "delta": 0,
        "msrp": 149999
      },
      {
        "size": "512GB",
        "delta": 7000,
        "msrp": 164999
      }
    ],
    "grades": {
      "A": {
        "price": 52999,
        "label": "Grade A (Pristine)",
        "battery": 94,
        "cycles": 140,
        "desc": "Immaculate folding hinge mechanism, pristine inner screen protector, zero crease wear."
      },
      "B": {
        "price": 46999,
        "label": "Grade B (Very Good)",
        "battery": 89,
        "cycles": 260,
        "desc": "Clean inner display. Minor micro-scuff on outer hinge aluminum."
      },
      "C": {
        "price": 41499,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 390,
        "desc": "Light cosmetic casing wear. Hinge and folding screen certified 100%."
      }
    },
    "specs": {
      "display": {
        "title": "7.6\" Foldable AMOLED + 6.2\" Cover",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Main Screen",
            "value": "7.6-inch Foldable Dynamic AMOLED 2X 120Hz"
          },
          {
            "label": "Cover Screen",
            "value": "6.2-inch Dynamic AMOLED 2X 120Hz"
          },
          {
            "label": "Hinge QA",
            "value": "Tested across 200,000 fold cycles by FoneZone Lab"
          }
        ]
      },
      "processor": {
        "title": "Qualcomm Snapdragon 888 5G",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Snapdragon 888 5nm Flagship SoC with 12GB RAM"
          }
        ]
      },
      "camera": {
        "title": "Triple 12MP System with UDC",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Rear Cameras",
            "value": "12MP Wide + 12MP Telephoto + 12MP Ultra-Wide"
          },
          {
            "label": "Under Display Cam",
            "value": "4MP Under-Display Camera on folding screen"
          }
        ]
      },
      "battery": {
        "title": "Dual-Cell 4,400 mAh Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "4,400 mAh Dual-Cell Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Armor Aluminum & IPX8 Water Resistant",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Water Resistance",
            "value": "IPX8 Certified (Water resistant up to 1.5m for 30m)"
          },
          {
            "label": "Weight",
            "value": "271 grams premium tablet-phone hybrid"
          }
        ]
      },
      "connectivity": {
        "title": "5G & S-Pen Fold Edition",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "S-Pen Support",
            "value": "Supports S-Pen Fold Edition & S-Pen Pro"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Hinge & Display Diagnostic Report"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Fast Type-C to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/samsung_zfold3.jpg",
      "45": "assets/samsung_zfold3.jpg",
      "90": "assets/samsung_zfold3.jpg",
      "180": "assets/samsung_zfold3.jpg",
      "270": "assets/samsung_zfold3.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "4 units available in Mumbai Hub"
  },
  {
    "id": "fz-oneplus7pro",
    "baseModelName": "OnePlus 7 Pro",
    "color": "Nebula Blue",
    "name": "OnePlus 7 Pro 256GB Nebula Blue",
    "category": "phone",
    "brand": "oneplus",
    "badge": "POP-UP CAM",
    "image": "assets/oneplus_7pro.jpg",
    "msrp": 52999,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 48999
      },
      {
        "size": "256GB",
        "delta": 2500,
        "msrp": 52999
      }
    ],
    "grades": {
      "A": {
        "price": 18999,
        "label": "Grade A (Pristine)",
        "battery": 92,
        "cycles": 190,
        "desc": "Immaculate bezelless 90Hz Fluid AMOLED, motorized pop-up camera tested 100%, zero scuffs."
      },
      "B": {
        "price": 16499,
        "label": "Grade B (Very Good)",
        "battery": 87,
        "cycles": 320,
        "desc": "Pristine display. Minor hairline scuff on blue aluminum edge."
      },
      "C": {
        "price": 13999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 460,
        "desc": "Light cosmetic frame marks. 100% hardware certified, true full-screen display."
      }
    },
    "specs": {
      "display": {
        "title": "90Hz Fluid AMOLED Bezelless",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.67-inch All-Screen Fluid AMOLED (No Notch/Hole)"
          },
          {
            "label": "Resolution",
            "value": "3120 x 1440 pixels at 516 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "90Hz Smooth Fluid Display"
          }
        ]
      },
      "processor": {
        "title": "Qualcomm Snapdragon 855 (7nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Snapdragon 855 Octa-Core with 8GB RAM"
          }
        ]
      },
      "camera": {
        "title": "48MP Triple Camera + Pop-Up Selfie",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "48MP Sony IMX586 (f/1.6, OIS)"
          },
          {
            "label": "Pop-Up Selfie",
            "value": "16MP Motorized Elevating Front Camera (Tested 300,000 lifts)"
          }
        ]
      },
      "battery": {
        "title": "4,000 mAh with Warp Charge 30",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "4,000 mAh Li-Ion (Guaranteed >=85% Health)"
          },
          {
            "label": "Warp Charge",
            "value": "Warp Charge 30 (5V/6A) Fast Charging"
          }
        ]
      },
      "build": {
        "title": "Curved Glass & Aluminum",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Corning Gorilla Glass 5 & Aluminum \u2022 206 grams"
          }
        ]
      },
      "connectivity": {
        "title": "Dual SIM & Dolby Atmos",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Audio",
            "value": "Dual Stereo Speakers with Dolby Atmos"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Motorized Camera & Board Report"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Original Warp Charge USB-A to Type-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/oneplus_7pro.jpg",
      "45": "assets/oneplus_7pro.jpg",
      "90": "assets/oneplus_7pro.jpg",
      "180": "assets/oneplus_7pro.jpg",
      "270": "assets/oneplus_7pro.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "10 units available in Delhi Hub"
  },
  {
    "id": "fz-pixel6pro",
    "baseModelName": "Google Pixel 6 Pro",
    "color": "Stormy Black",
    "name": "Google Pixel 6 Pro 128GB Stormy Black",
    "category": "phone",
    "brand": "google",
    "badge": "AI CAMERA",
    "image": "assets/google_pixel.jpg",
    "msrp": 79999,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 79999
      },
      {
        "size": "256GB",
        "delta": 3500,
        "msrp": 86999
      }
    ],
    "grades": {
      "A": {
        "price": 26999,
        "label": "Grade A (Pristine)",
        "battery": 93,
        "cycles": 170,
        "desc": "Immaculate condition. Google Tensor AI chip, legendary computational photography, 120Hz LTPO."
      },
      "B": {
        "price": 23999,
        "label": "Grade B (Very Good)",
        "battery": 88,
        "cycles": 290,
        "desc": "Pristine display. Light micro-scuffs on iconic camera visor strip."
      },
      "C": {
        "price": 20499,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 440,
        "desc": "Cosmetic casing scuffs. 100% verified camera bar, Magic Eraser, and Android OS."
      }
    },
    "specs": {
      "display": {
        "title": "6.71\" LTPO AMOLED 120Hz",
        "icon": "\ud83d\udcf1",
        "details": [
          {
            "label": "Screen Size",
            "value": "6.71-inch LTPO AMOLED Display"
          },
          {
            "label": "Resolution",
            "value": "3120 x 1440 pixels at 512 ppi"
          },
          {
            "label": "Refresh Rate",
            "value": "120Hz Smooth Adaptive Frequency"
          }
        ]
      },
      "processor": {
        "title": "Google Tensor (5nm) AI Engine",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Google Tensor SoC with Titan M2 Security"
          },
          {
            "label": "AI Features",
            "value": "On-device speech recognition & Magic Eraser"
          }
        ]
      },
      "camera": {
        "title": "50MP Primary + 48MP 4x Telephoto",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Primary",
            "value": "50MP Octa-PD Quad Bayer (f/1.85, OIS)"
          },
          {
            "label": "Telephoto",
            "value": "48MP 4x Optical Zoom, up to 20x Super Res Zoom"
          }
        ]
      },
      "battery": {
        "title": "5,003 mAh Beyond 24-Hour Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "5,003 mAh Li-Ion (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Iconic Camera Bar & Polished Alloy",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Corning Gorilla Glass Victus & Aluminum \u2022 210 grams"
          }
        ]
      },
      "connectivity": {
        "title": "5G & Pure Pixel Android",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Software",
            "value": "Clean Stock Google Android with Day-One Updates"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          },
          {
            "label": "Cable",
            "value": "Original USB-C to USB-C Cable"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/google_pixel.jpg",
      "45": "assets/google_pixel.jpg",
      "90": "assets/google_pixel.jpg",
      "180": "assets/google_pixel.jpg",
      "270": "assets/google_pixel.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "7 units available in Delhi Hub"
  },
  {
    "id": "fz-macbook-m2",
    "baseModelName": "MacBook Air 13.6\" M2",
    "color": "Midnight",
    "name": "MacBook Air 13.6\" M2 256GB Midnight",
    "category": "macbook",
    "brand": "apple",
    "badge": "APPLE SILICON",
    "image": "assets/macbookair_midnight.png",
    "msrp": 114900,
    "storageOptions": [
      {
        "size": "256GB SSD",
        "delta": 0,
        "msrp": 114900
      },
      {
        "size": "512GB SSD",
        "delta": 14000,
        "msrp": 134900
      },
      {
        "size": "1TB SSD",
        "delta": 28000,
        "msrp": 154900
      }
    ],
    "grades": {
      "A": {
        "price": 68999,
        "label": "Grade A (Pristine)",
        "battery": 99,
        "cycles": 28,
        "desc": "Like-new anodized Midnight aluminum body, zero keyboard shine, pristine Liquid Retina display."
      },
      "B": {
        "price": 62999,
        "label": "Grade B (Very Good)",
        "battery": 94,
        "cycles": 92,
        "desc": "Clean display. Minor faint hairline edge wear on aluminum corner."
      },
      "C": {
        "price": 56999,
        "label": "Grade C (Value Deal)",
        "battery": 88,
        "cycles": 210,
        "desc": "Visible cosmetic scuffs on base. 100% genuine Apple hardware and MagSafe certified."
      }
    },
    "specs": {
      "display": {
        "title": "13.6-inch Liquid Retina Display",
        "icon": "\ud83d\udcbb",
        "details": [
          {
            "label": "Screen Size",
            "value": "13.6-inch LED-backlit Liquid Retina Display"
          },
          {
            "label": "Resolution",
            "value": "2560 x 1664 native resolution at 224 ppi"
          },
          {
            "label": "Brightness",
            "value": "500 nits Brightness with Wide Color (P3)"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon M2 (5nm Gen 2)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple M2 8-Core CPU (4 Performance + 4 Efficiency)"
          },
          {
            "label": "GPU",
            "value": "8-Core GPU with Hardware-Accelerated ProRes"
          },
          {
            "label": "Memory",
            "value": "8GB Unified Memory (100GB/s Memory Bandwidth)"
          }
        ]
      },
      "battery": {
        "title": "18-Hour Battery & MagSafe 3",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Battery Unit",
            "value": "52.6-watt-hour Lithium-Polymer Battery"
          },
          {
            "label": "Battery Life",
            "value": "Up to 18 Hours Apple TV App Movie Playback"
          },
          {
            "label": "MagSafe 3",
            "value": "MagSafe 3 Magnetic Fast Charging Port"
          }
        ]
      },
      "build": {
        "title": "All-Aluminum Unibody & Silent Fanless",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Thickness",
            "value": "11.3 mm (0.44 inch) Ultra-Thin Uniform Design"
          },
          {
            "label": "Weight",
            "value": "1.24 kg (2.7 pounds) Featherweight"
          },
          {
            "label": "Cooling",
            "value": "100% Silent Fanless Thermal Architecture"
          }
        ]
      },
      "connectivity": {
        "title": "Thunderbolt / USB 4 & Wi-Fi 6",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Ports",
            "value": "2x Thunderbolt / USB 4 Ports + 3.5mm Headphone Jack"
          },
          {
            "label": "Touch ID",
            "value": "Magic Keyboard with Touch ID Fingerprint Sensor"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Motherboard & Battery Lab QA Certificate"
          },
          {
            "label": "Charger",
            "value": "Apple 30W USB-C Power Adapter + Braided MagSafe Cable"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/macbookair_midnight.png",
      "45": "assets/macbookair_midnight.png",
      "90": "assets/macbookair_midnight.png",
      "180": "assets/macbookair_midnight.png",
      "270": "assets/macbookair_midnight.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "5 units available in Delhi Hub"
  },
  {
    "id": "fz-macbook-pro16",
    "baseModelName": "MacBook Pro 16\" M1 Max",
    "color": "Silver",
    "name": "MacBook Pro 16\" M1 Max 512GB Silver",
    "category": "macbook",
    "brand": "apple",
    "badge": "STUDIO BEAST",
    "image": "assets/macbook_pro_16.png",
    "msrp": 259900,
    "storageOptions": [
      {
        "size": "512GB SSD",
        "delta": 0,
        "msrp": 259900
      },
      {
        "size": "1TB SSD",
        "delta": 18000,
        "msrp": 289900
      },
      {
        "size": "2TB SSD",
        "delta": 35000,
        "msrp": 329900
      }
    ],
    "grades": {
      "A": {
        "price": 119999,
        "label": "Grade A (Pristine)",
        "battery": 98,
        "cycles": 34,
        "desc": "Immaculate condition. 120Hz Mini-LED Liquid Retina XDR, 32-core GPU, 32GB Unified RAM, zero scuffs."
      },
      "B": {
        "price": 108999,
        "label": "Grade B (Very Good)",
        "battery": 93,
        "cycles": 110,
        "desc": "Pristine display. Subtle micro-scuff on bottom aluminum base plate."
      },
      "C": {
        "price": 97999,
        "label": "Grade C (Value Deal)",
        "battery": 87,
        "cycles": 240,
        "desc": "Cosmetic base marks. 100% verified 10-core CPU, 32-core GPU, and Liquid Retina XDR screen."
      }
    },
    "specs": {
      "display": {
        "title": "16.2\" Liquid Retina XDR Mini-LED",
        "icon": "\ud83d\udcbb",
        "details": [
          {
            "label": "Screen Size",
            "value": "16.2-inch Liquid Retina XDR Mini-LED (3456 x 2234)"
          },
          {
            "label": "Brightness",
            "value": "1,000 nits Sustained Full-Screen, 1,600 nits Peak HDR"
          },
          {
            "label": "ProMotion",
            "value": "120Hz Adaptive ProMotion Refresh Rate"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon M1 Max (10-Core / 32-Core)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple M1 Max (10-Core CPU: 8 Perf + 2 Eff)"
          },
          {
            "label": "GPU Architecture",
            "value": "32-Core GPU (Up to 400GB/s Memory Bandwidth)"
          },
          {
            "label": "Unified Memory",
            "value": "32GB Unified RAM (Handles multi-stream 8K ProRes)"
          }
        ]
      },
      "battery": {
        "title": "100-Watt-Hour Battery & 140W Fast Charge",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "100Wh Battery (Longest battery life in a Mac notebook)"
          },
          {
            "label": "Playback",
            "value": "Up to 21 Hours Apple TV App Video Playback"
          }
        ]
      },
      "build": {
        "title": "Heavy-Duty Studio Chassis",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Material",
            "value": "Solid 100% Recycled Aluminum Unibody \u2022 2.15 kg"
          },
          {
            "label": "Audio",
            "value": "High-Fidelity Six-Speaker Sound System with Force-Cancelling Woofers"
          }
        ]
      },
      "connectivity": {
        "title": "HDMI, SDXC, MagSafe 3 & 3x Thunderbolt 4",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Pro Ports",
            "value": "SDXC Card Slot + HDMI Port + 3x Thunderbolt 4 (USB-C)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Charger",
            "value": "Original 140W USB-C Power Adapter + Braided MagSafe 3 Cable"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/macbook_pro_16.png",
      "45": "assets/macbook_pro_16.png",
      "90": "assets/macbook_pro_16.png",
      "180": "assets/macbook_pro_16.png",
      "270": "assets/macbook_pro_16.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "3 units available in Delhi Hub"
  },
  {
    "id": "fz-ipad-10",
    "baseModelName": "iPad 10th Gen",
    "color": "Blue",
    "name": "iPad 10th Gen 64GB Blue",
    "category": "ipad",
    "brand": "apple",
    "badge": "EDUCATION",
    "image": "assets/ipad_10th_gen.png",
    "msrp": 39900,
    "storageOptions": [
      {
        "size": "64GB",
        "delta": 0,
        "msrp": 39900
      },
      {
        "size": "256GB",
        "delta": 8000,
        "msrp": 54900
      }
    ],
    "grades": {
      "A": {
        "price": 27999,
        "label": "Grade A (Pristine)",
        "battery": 98,
        "cycles": 32,
        "desc": "Immaculate 10.9-inch Liquid Retina screen, scratch-free anodized blue casing."
      },
      "B": {
        "price": 24499,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 110,
        "desc": "Pristine display. Subtle micro-scuff on aluminum bezel edge."
      },
      "C": {
        "price": 21999,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 240,
        "desc": "Cosmetic frame marks. 100% verified display, Touch ID, and USB-C port."
      }
    },
    "specs": {
      "display": {
        "title": "10.9-inch Liquid Retina Display",
        "icon": "\ud83d\udcd1",
        "details": [
          {
            "label": "Screen Size",
            "value": "10.9-inch (diagonal) LED backlit Multi-Touch display"
          },
          {
            "label": "Resolution",
            "value": "2360 x 1640 pixels at 264 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A14 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "A14 Bionic chip with 6-core CPU and 4-core GPU"
          }
        ]
      },
      "camera": {
        "title": "Landscape 12MP Ultra-Wide Camera",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Front Camera",
            "value": "Landscape 12MP Ultra Wide with Center Stage"
          },
          {
            "label": "Back Camera",
            "value": "12MP Wide back camera with 4K video capture"
          }
        ]
      },
      "battery": {
        "title": "All-Day Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Battery Capacity",
            "value": "28.6-watt-hour rechargeable lithium-polymer battery"
          },
          {
            "label": "Usage",
            "value": "Up to 10 Hours of surfing the web on Wi-Fi"
          }
        ]
      },
      "build": {
        "title": "All-Screen Design & USB-C",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Dimensions",
            "value": "248.6 x 179.5 x 7.0 mm \u2022 477 grams"
          },
          {
            "label": "Touch ID",
            "value": "Top Button Touch ID Sensor"
          }
        ]
      },
      "connectivity": {
        "title": "Wi-Fi 6 & Apple Pencil",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Pencil Support",
            "value": "Apple Pencil (1st gen) & Apple Pencil (USB-C)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Comprehensive Lab Diagnostic Certificate"
          },
          {
            "label": "Charger",
            "value": "20W USB-C Power Adapter + Fast USB-C Charge Cable"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/ipad_10th_gen.png",
      "45": "assets/ipad_10th_gen.png",
      "90": "assets/ipad_10th_gen.png",
      "180": "assets/ipad_10th_gen.png",
      "270": "assets/ipad_10th_gen.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "9 units available in Delhi Hub"
  },
  {
    "id": "fz-ipad-pro129",
    "baseModelName": "iPad Pro 12.9\" M2",
    "color": "Space Gray",
    "name": "Apple iPad Pro 12.9\" M2 128GB Space Gray",
    "category": "ipad",
    "brand": "apple",
    "badge": "MINI-LED PRO",
    "image": "assets/ipad_pro_129.jpg",
    "msrp": 112900,
    "storageOptions": [
      {
        "size": "128GB",
        "delta": 0,
        "msrp": 112900
      },
      {
        "size": "256GB",
        "delta": 7000,
        "msrp": 122900
      },
      {
        "size": "512GB",
        "delta": 15000,
        "msrp": 142900
      },
      {
        "size": "1TB",
        "delta": 26000,
        "msrp": 169900
      }
    ],
    "grades": {
      "A": {
        "price": 69999,
        "label": "Grade A (Pristine)",
        "battery": 97,
        "cycles": 42,
        "desc": "Immaculate condition. Liquid Retina XDR Mini-LED display, Apple M2 Silicon, zero chassis scuffs."
      },
      "B": {
        "price": 62999,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 120,
        "desc": "Clean display. Subtle micro-scuff on aluminum edge near magnetic pencil strip."
      },
      "C": {
        "price": 56499,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 250,
        "desc": "Cosmetic frame marks. 100% verified M2 chip, Face ID, and Thunderbolt 4 port."
      }
    },
    "specs": {
      "display": {
        "title": "12.9\" Liquid Retina XDR Mini-LED",
        "icon": "\ud83d\udcd1",
        "details": [
          {
            "label": "Screen Size",
            "value": "12.9-inch 2D backlighting system with 2,596 full-array local dimming zones"
          },
          {
            "label": "Resolution",
            "value": "2732 x 2048 pixels at 264 ppi (120Hz ProMotion)"
          },
          {
            "label": "Peak Brightness",
            "value": "1,000 nits full-screen / 1,600 nits peak HDR"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon M2 (8-Core / 10-Core)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple M2 (8-Core CPU + 10-Core GPU)"
          },
          {
            "label": "Hover Feature",
            "value": "Apple Pencil Hover feature up to 12mm above display"
          }
        ]
      },
      "camera": {
        "title": "Pro Cameras with LiDAR Scanner",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Cameras",
            "value": "12MP Wide + 10MP Ultra-Wide + LiDAR Scanner"
          },
          {
            "label": "TrueDepth Front",
            "value": "12MP Ultra-Wide with Center Stage & Face ID"
          }
        ]
      },
      "battery": {
        "title": "40.88-Watt-Hour Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "40.88Wh Li-Polymer (Guaranteed >=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Precision Aluminum Unibody",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Dimensions",
            "value": "280.6 x 214.9 x 6.4 mm \u2022 682 grams"
          }
        ]
      },
      "connectivity": {
        "title": "Thunderbolt 4 / USB 4 & Wi-Fi 6E",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Port Interface",
            "value": "Thunderbolt / USB 4 (up to 40Gb/s transfer speed)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Charger",
            "value": "Original 20W USB-C Adapter + Fast USB-C Cable"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/ipad_pro_129.jpg",
      "45": "assets/ipad_pro_129.jpg",
      "90": "assets/ipad_pro_129.jpg",
      "180": "assets/ipad_pro_129.jpg",
      "270": "assets/ipad_pro_129.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "5 units available in Delhi Hub"
  },
  {
    "id": "fz-ipad-air",
    "baseModelName": "iPad Air 10.5\" 3rd Gen",
    "color": "Silver",
    "name": "Apple iPad Air 10.5\" 64GB Wi-Fi Silver",
    "category": "ipad",
    "brand": "apple",
    "badge": "RETINA DEAL",
    "image": "assets/ipad_air_105.jpg",
    "msrp": 44900,
    "storageOptions": [
      {
        "size": "64GB",
        "delta": 0,
        "msrp": 44900
      },
      {
        "size": "256GB",
        "delta": 4500,
        "msrp": 54900
      }
    ],
    "grades": {
      "A": {
        "price": 21999,
        "label": "Grade A (Pristine)",
        "battery": 94,
        "cycles": 98,
        "desc": "Immaculate Retina display with TrueTone, scratch-free aluminum body, Touch ID tested."
      },
      "B": {
        "price": 18999,
        "label": "Grade B (Very Good)",
        "battery": 89,
        "cycles": 210,
        "desc": "Clean display. Light hairline scuffs on back aluminum plate."
      },
      "C": {
        "price": 15999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 360,
        "desc": "Cosmetic casing marks. 100% genuine Apple hardware and battery certified."
      }
    },
    "specs": {
      "display": {
        "title": "10.5\" Retina Display with TrueTone",
        "icon": "\ud83d\udcd1",
        "details": [
          {
            "label": "Screen Size",
            "value": "10.5-inch Retina Display with TrueTone & Wide Color (P3)"
          },
          {
            "label": "Resolution",
            "value": "2224 x 1668 pixels at 264 ppi"
          }
        ]
      },
      "processor": {
        "title": "Apple Silicon A12 Bionic",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple A12 Bionic with Neural Engine"
          }
        ]
      },
      "camera": {
        "title": "8MP Camera & FaceTime HD",
        "icon": "\ud83d\udcf7",
        "details": [
          {
            "label": "Back Camera",
            "value": "8MP Wide back camera with 1080p HD video"
          },
          {
            "label": "Front Camera",
            "value": "7MP FaceTime HD camera"
          }
        ]
      },
      "battery": {
        "title": "10-Hour Battery Lab QA",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "30.2-watt-hour rechargeable battery (>=85% Health)"
          }
        ]
      },
      "build": {
        "title": "Slim 6.1mm Aluminum Profile",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Dimensions",
            "value": "250.6 x 174.1 x 6.1 mm \u2022 456 grams ultra-thin"
          }
        ]
      },
      "connectivity": {
        "title": "Wi-Fi & Apple Pencil 1st Gen",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Accessories",
            "value": "Smart Keyboard & Apple Pencil (1st gen) support"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Charger",
            "value": "12W Power Adapter + Lightning to USB Cable"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/ipad_air_105.jpg",
      "45": "assets/ipad_air_105.jpg",
      "90": "assets/ipad_air_105.jpg",
      "180": "assets/ipad_air_105.jpg",
      "270": "assets/ipad_air_105.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "7 units available in Bangalore Hub"
  },
  {
    "id": "fz-watch-ultra",
    "baseModelName": "Apple Watch Ultra 49mm",
    "color": "Titanium",
    "name": "Apple Watch Ultra 49mm Titanium",
    "category": "watch",
    "brand": "apple",
    "badge": "ADVENTURE",
    "image": "assets/applewatch_ultra.png",
    "msrp": 89900,
    "storageOptions": [
      {
        "size": "32GB (GPS+Cellular)",
        "delta": 0,
        "msrp": 89900
      }
    ],
    "grades": {
      "A": {
        "price": 44999,
        "label": "Grade A (Pristine)",
        "battery": 99,
        "cycles": 42,
        "desc": "Aerospace Titanium case, scratch-free Sapphire crystal face."
      },
      "B": {
        "price": 39499,
        "label": "Grade B (Very Good)",
        "battery": 93,
        "cycles": 130,
        "desc": "Light brush mark on titanium bezel rim. Clean display."
      },
      "C": {
        "price": 34999,
        "label": "Grade C (Value Deal)",
        "battery": 87,
        "cycles": 260,
        "desc": "Visible outdoor adventure scuffs. Cellular and Action button 100%."
      }
    },
    "specs": {
      "display": {
        "title": "49mm Always-On Retina LTPO OLED",
        "icon": "\u231a",
        "details": [
          {
            "label": "Case Size",
            "value": "49mm Aerospace Titanium Case with Raised Bezel"
          },
          {
            "label": "Resolution",
            "value": "410 x 502 pixels (1,185 sq mm Display Area)"
          },
          {
            "label": "Peak Brightness",
            "value": "Up to 2,000 nits (2x Brighter than Series 8)"
          },
          {
            "label": "Face Glass",
            "value": "Flat Sapphire Crystal Face with Edge Protection"
          }
        ]
      },
      "processor": {
        "title": "S8 SiP Dual-Core 64-bit Architecture",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Apple S8 System in Package (SiP) with 64-bit Dual-Core"
          },
          {
            "label": "Wireless Chips",
            "value": "W3 Apple Wireless Chip + U1 Ultra Wideband (UWB)"
          },
          {
            "label": "Storage",
            "value": "32GB Internal Flash Storage Capacity"
          }
        ]
      },
      "battery": {
        "title": "Multi-Day 36-Hour Expedition Battery",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Battery Unit",
            "value": "542 mAh Lithium-Ion Rechargeable Battery"
          },
          {
            "label": "Normal Use",
            "value": "Up to 36 Hours Normal Use on Active Cellular"
          },
          {
            "label": "Low Power Mode",
            "value": "Up to 60-72 Hours in Low Power Expedition Mode"
          },
          {
            "label": "Charging",
            "value": "Fast Inductive Magnetic USB-C Charging"
          }
        ]
      },
      "build": {
        "title": "Mil-STD 810H & 100m Water / Dive Certified",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Chassis",
            "value": "Aerospace Grade 5 Titanium with Raised Bezel Protection"
          },
          {
            "label": "Dimensions",
            "value": "49 x 44 x 14.4 mm \u2022 61.3 grams weight"
          },
          {
            "label": "Water Resistance",
            "value": "100m Water Resistance (WR100 & EN13319 Dive to 40m)"
          },
          {
            "label": "Special Hardware",
            "value": "Customizable Action Button + 86dB Emergency Siren"
          }
        ]
      },
      "connectivity": {
        "title": "Precision Dual-Frequency GPS & 4G LTE",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Cellular",
            "value": "Standalone 4G LTE and UMTS Cellular (No iPhone needed)"
          },
          {
            "label": "Precision GPS",
            "value": "Precision Dual-Frequency GPS (L1 and L5) with Offline Compass"
          },
          {
            "label": "Sensors",
            "value": "Blood Oxygen, ECG, Temperature Sensor, Depth Gauge"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Comprehensive Lab Diagnostic Certificate"
          },
          {
            "label": "Fast Charger",
            "value": "Official Apple Watch Magnetic Fast Charger to USB-C Cable"
          },
          {
            "label": "Band",
            "value": "Certified Ocean / Alpine Loop Band"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/applewatch_ultra.png",
      "45": "assets/applewatch_ultra.png",
      "90": "assets/applewatch_ultra.png",
      "180": "assets/applewatch_ultra.png",
      "270": "assets/applewatch_ultra.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "7 units available in Bangalore Hub"
  },
  {
    "id": "fz-watch-series7",
    "baseModelName": "Apple Watch Series 7 45mm",
    "color": "Midnight",
    "name": "Apple Watch Series 7 45mm Midnight Aluminum",
    "category": "watch",
    "brand": "apple",
    "badge": "OLED RETINA",
    "image": "assets/applewatch_series7.png",
    "msrp": 44900,
    "storageOptions": [
      {
        "size": "32GB (GPS+Cellular)",
        "delta": 0,
        "msrp": 44900
      }
    ],
    "grades": {
      "A": {
        "price": 21999,
        "label": "Grade A (Pristine)",
        "battery": 97,
        "cycles": 60,
        "desc": "Pristine condition. Scratch-resistant front crystal, edge-to-edge curved OLED, ECG certified."
      },
      "B": {
        "price": 18999,
        "label": "Grade B (Very Good)",
        "battery": 91,
        "cycles": 180,
        "desc": "Clean display. Minor hairline scuff on side aluminum rim."
      },
      "C": {
        "price": 15999,
        "label": "Grade C (Value Deal)",
        "battery": 85,
        "cycles": 320,
        "desc": "Cosmetic bezel wear. 100% verified optical sensors, cellular, and battery health."
      }
    },
    "specs": {
      "display": {
        "title": "45mm Always-On Retina LTPO OLED",
        "icon": "\u231a",
        "details": [
          {
            "label": "Screen Area",
            "value": "Nearly 20% more screen area than Series 6"
          },
          {
            "label": "Borders",
            "value": "Refined 1.7mm thin borders (40% thinner)"
          },
          {
            "label": "Brightness",
            "value": "1,000 nits Always-On Retina display"
          }
        ]
      },
      "processor": {
        "title": "Apple S7 SiP Dual-Core 64-bit",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "S7 with 64-bit dual-core processor and W3 wireless"
          }
        ]
      },
      "battery": {
        "title": "Fast Charging Up to 33% Faster",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Battery Life",
            "value": "All-day 18-hour battery life (Guaranteed >=85% Health)"
          },
          {
            "label": "Fast Charging",
            "value": "0 to 80% charge in about 45 minutes via USB-C"
          }
        ]
      },
      "build": {
        "title": "Crack-Resistant Crystal & WR50",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Durability",
            "value": "IP6X Dust Resistant + WR50 Swimproof Water Resistant"
          },
          {
            "label": "Dimensions",
            "value": "45 x 38 x 10.7 mm \u2022 38.8 grams weight"
          }
        ]
      },
      "connectivity": {
        "title": "4G LTE Cellular & Health Sensors",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Health",
            "value": "Blood Oxygen Sensor & App + ECG App + Fall Detection"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Diagnostic Engineering Report (Pass 100%)"
          },
          {
            "label": "Charger",
            "value": "Magnetic Fast Charger to USB-C Cable"
          },
          {
            "label": "Band",
            "value": "Certified Sport Band"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/applewatch_series7.png",
      "45": "assets/applewatch_series7.png",
      "90": "assets/applewatch_series7.png",
      "180": "assets/applewatch_series7.png",
      "270": "assets/applewatch_series7.png"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "8 units available in Delhi Hub"
  },
  {
    "id": "fz-galaxy-watch5",
    "baseModelName": "Galaxy Watch 5 44mm",
    "color": "Sapphire",
    "name": "Samsung Galaxy Watch 5 44mm Sapphire Bluetooth/LTE",
    "category": "watch",
    "brand": "samsung",
    "badge": "BIOACTIVE SENSOR",
    "image": "assets/galaxy_watch5.jpg",
    "msrp": 33999,
    "storageOptions": [
      {
        "size": "16GB (Bluetooth+LTE)",
        "delta": 0,
        "msrp": 33999
      }
    ],
    "grades": {
      "A": {
        "price": 14999,
        "label": "Grade A (Pristine)",
        "battery": 98,
        "cycles": 40,
        "desc": "Immaculate Sapphire crystal face, scratch-free Armor Aluminum casing, BioActive sensor tested."
      },
      "B": {
        "price": 12499,
        "label": "Grade B (Very Good)",
        "battery": 92,
        "cycles": 140,
        "desc": "Clean display. Light micro-scuffs on side aluminum frame."
      },
      "C": {
        "price": 10499,
        "label": "Grade C (Value Deal)",
        "battery": 86,
        "cycles": 270,
        "desc": "Cosmetic bezel marks. 100% hardware certified, ECG and body composition tested."
      }
    },
    "specs": {
      "display": {
        "title": "1.4\" Super AMOLED Sapphire Crystal",
        "icon": "\u231a",
        "details": [
          {
            "label": "Screen Size",
            "value": "1.4-inch (34.6mm) Super AMOLED (450 x 450 pixels)"
          },
          {
            "label": "Glass",
            "value": "Sapphire Crystal Glass (1.6x stronger against scratches)"
          }
        ]
      },
      "processor": {
        "title": "Exynos W920 Dual-Core (5nm)",
        "icon": "\u26a1",
        "details": [
          {
            "label": "Processor Chip",
            "value": "Exynos W920 Dual-Core 1.18GHz with Wear OS Powered by Samsung"
          },
          {
            "label": "Memory",
            "value": "1.5GB RAM + 16GB Storage"
          }
        ]
      },
      "battery": {
        "title": "410 mAh Battery & Fast Charging",
        "icon": "\ud83d\udd0b",
        "details": [
          {
            "label": "Capacity",
            "value": "410 mAh Battery with Fast Wireless Charging"
          },
          {
            "label": "Charge Speed",
            "value": "Up to 45% charge in 30 minutes"
          }
        ]
      },
      "build": {
        "title": "Armor Aluminum & 5ATM + IP68",
        "icon": "\ud83d\udcd0",
        "details": [
          {
            "label": "Durability",
            "value": "5ATM Water Resistance + IP68 + MIL-STD-810H Certified"
          },
          {
            "label": "Weight",
            "value": "33.5 grams lightweight design"
          }
        ]
      },
      "connectivity": {
        "title": "Samsung BioActive Sensor & LTE",
        "icon": "\ud83d\udcf6",
        "details": [
          {
            "label": "Health Sensors",
            "value": "BioActive 3-in-1 Sensor (Optical Heart Rate, ECG, BIA Body Composition)"
          }
        ]
      },
      "inclusions": {
        "title": "Certified Box Inclusions",
        "icon": "\ud83d\udee1\ufe0f",
        "details": [
          {
            "label": "QA Certificate",
            "value": "32-Point Comprehensive Lab Diagnostic Certificate"
          },
          {
            "label": "Charger",
            "value": "Fast Wireless Charger Cable"
          },
          {
            "label": "Band",
            "value": "Samsung Sport Band"
          },
          {
            "label": "Warranty",
            "value": "6 Months Comprehensive FoneZone Pan-India Warranty"
          }
        ]
      }
    },
    "angles": {
      "0": "assets/galaxy_watch5.jpg",
      "45": "assets/galaxy_watch5.jpg",
      "90": "assets/galaxy_watch5.jpg",
      "180": "assets/galaxy_watch5.jpg",
      "270": "assets/galaxy_watch5.jpg"
    },
    "warranty": "6 Months Comprehensive FoneZone Warranty",
    "stock": "6 units available in Mumbai Hub"
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
  chatHistory: {},

  // Storage Selection & Technical Specs State
  selectedProductStorage: {},
  currentInspectStorage: null,
  showFlawMarkers: true,
  specsFilterTab: "all",
  isSpecsOpen: true
};

// Initialize grades and default storage
CATALOG.forEach(p => {
  state.selectedProductGrades[p.id] = "A";
  if (p.storageOptions && p.storageOptions.length > 0) {
    state.selectedProductStorage[p.id] = p.storageOptions[0].size;
  }
});

// Dynamic Price & Storage Calculator
function getProductPrice(product, grade, storageSize) {
  if (!product) return { price: 0, msrp: 0, savings: 0, savingsPct: 0, delta: 0, storageSize: "" };
  const currentGrade = grade || "A";
  const gradeInfo = product.grades[currentGrade] || product.grades["A"];
  const basePrice = gradeInfo ? gradeInfo.price : 0;
  const storageOpt = (product.storageOptions || []).find(s => s.size === storageSize) || (product.storageOptions ? product.storageOptions[0] : null);
  const delta = storageOpt ? storageOpt.delta : 0;
  const msrp = storageOpt && storageOpt.msrp ? storageOpt.msrp : product.msrp;
  const finalPrice = basePrice + delta;
  const savings = Math.max(0, msrp - finalPrice);
  const savingsPct = Math.round((savings / msrp) * 100);
  return {
    price: finalPrice,
    msrp: msrp,
    savings: savings,
    savingsPct: savingsPct,
    delta: delta,
    storageSize: storageOpt ? storageOpt.size : ""
  };
}


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
    subtitle: "Explore 27 certified iPhones, Galaxy flagships, OnePlus, Pixel, MacBooks, iPads & Watches with warranty.",
    breadcrumb: "All Certified Devices",
    subFilters: [
      { id: "all", label: "All 27 Devices" },
      { id: "apple", label: "Apple (16 Models)" },
      { id: "samsung", label: "Samsung Galaxy (6 Models)" },
      { id: "oneplus_pixel", label: "OnePlus & Pixel" },
      { id: "flagship", label: "Titanium & Ultra Pro" },
      { id: "under50k", label: "Under ₹50,000" }
    ]
  },
  phone: {
    title: "Certified Refurbished Smartphones",
    subtitle: "Premium pre-owned Apple iPhones, Samsung Galaxy, OnePlus & Google Pixel flagships. Tested across 32 points.",
    breadcrumb: "Refurbished Phones",
    subFilters: [
      { id: "all", label: "All Phones" },
      { id: "apple", label: "Apple iPhones" },
      { id: "samsung", label: "Samsung Galaxy" },
      { id: "oneplus_pixel", label: "OnePlus & Pixel" },
      { id: "flagship", label: "Flagship Pro Tier" },
      { id: "under50k", label: "Under ₹50,000" }
    ]
  },
  macbook: {
    title: "Certified Refurbished MacBooks & Laptops",
    subtitle: "Apple Silicon M1 Max & M2 laptops with 100% certified battery life and pristine displays.",
    breadcrumb: "MacBooks & Laptops",
    subFilters: [
      { id: "all", label: "All MacBooks" },
      { id: "m2", label: "Apple M2 / M1 Max" },
      { id: "pristine", label: "Grade A Pristine" }
    ]
  },
  ipad: {
    title: "Certified Refurbished iPads & Tablets",
    subtitle: "All-screen Liquid Retina iPads tested with Apple Pencil and Magic Keyboard compatibility.",
    breadcrumb: "iPads & Tablets",
    subFilters: [
      { id: "all", label: "All iPads" },
      { id: "pro", label: "iPad Pro 12.9 (M2)" },
      { id: "air", label: "iPad Air & 10th Gen" }
    ]
  },
  watch: {
    title: "Certified Smart Watches",
    subtitle: "Rugged Apple Watch Ultra, Series 7, and Galaxy Watch with tested water resistance and battery health.",
    breadcrumb: "Smart Watches",
    subFilters: [
      { id: "all", label: "All Watches" },
      { id: "ultra", label: "Apple Watch Ultra" },
      { id: "apple", label: "Apple Watch" },
      { id: "samsung", label: "Galaxy Watch" }
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
    else if (state.activeSubFilter === "oneplus_pixel") matchesSub = p.brand === "oneplus" || p.brand === "google";
    else if (state.activeSubFilter === "under50k") matchesSub = p.grades["A"].price < 50000;
    else if (state.activeSubFilter === "flagship") matchesSub = p.badge === "FLAGSHIP" || p.badge === "TITANIUM PRO" || p.badge === "GOLD FLAGSHIP" || p.badge === "200MP CAM" || p.badge === "STUDIO BEAST" || p.badge === "MINI-LED PRO";
    else if (state.activeSubFilter === "m2") matchesSub = p.specs && p.specs.processor && (p.specs.processor.title.includes("M2") || p.specs.processor.title.includes("M1 Max"));
    else if (state.activeSubFilter === "pro") matchesSub = p.id.includes("pro");
    else if (state.activeSubFilter === "air") matchesSub = p.id.includes("air") || p.id.includes("10");
    else if (state.activeSubFilter === "ultra") matchesSub = p.id.includes("ultra");
    else if (state.activeSubFilter === "pristine") matchesSub = true;

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
    const currentStorage = state.selectedProductStorage[p.id] || (p.storageOptions ? p.storageOptions[0].size : "");
    const priceInfo = getProductPrice(p, currentGrade, currentStorage);
    const gradeInfo = p.grades[currentGrade];
    const rating = p.brand === "apple" ? "4.9" : "4.8";
    const reviews = p.id === "fz-ip15pro" ? 218 : p.id === "fz-ip14" ? 342 : p.id === "fz-s23ultra" ? 186 : 124;
    const displayName = p.baseModelName ? `${p.baseModelName} ${currentStorage} ${p.color}` : p.name;

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
            <img src="${p.image}" alt="${displayName}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xl">
            
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

          <!-- Product Title with Selected Storage -->
          <h3 class="text-xs font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1" title="${displayName}">
            ${displayName}
          </h3>

          <!-- Pointer 2: Certified Battery Health Chip -->
          <div class="mt-2 flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px]">
            <div class="flex items-center gap-1.5">
              <span class="text-xs">🔋</span>
              <span class="text-slate-300 font-medium">Battery Health:</span>
            </div>
            <span class="text-emerald-400 font-mono font-bold">${gradeInfo.battery}% (Certified)</span>
          </div>

          <!-- Selectable Storage Options Pills -->
          ${p.storageOptions && p.storageOptions.length > 1 ? `
            <div class="mt-2" onclick="event.stopPropagation();">
              <div class="flex items-center justify-between text-[10px] text-slate-400 font-semibold mb-1">
                <span>Storage Variant:</span>
                <span class="text-blue-400 font-mono font-bold">${currentStorage}</span>
              </div>
              <div class="flex items-center gap-1 flex-wrap">
                ${p.storageOptions.map(opt => `
                  <button 
                    onclick="setCardStorage('${p.id}', '${opt.size}')"
                    class="card-storage-btn py-0.5 px-2 rounded-md text-[10px] font-bold transition-all cursor-pointer ${opt.size === currentStorage ? 'active bg-blue-600 text-white border border-blue-500 shadow-sm ring-1 ring-blue-400/50' : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'}"
                    title="${opt.size} (${opt.delta > 0 ? '+' + formatMoney(opt.delta) : 'Base'})"
                  >
                    ${opt.size}
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Grade Selector Pills -->
          <div class="mt-2" onclick="event.stopPropagation();">
            <div class="text-[10px] text-slate-400 font-semibold mb-1">Select Condition Grade:</div>
            <div class="grid grid-cols-3 gap-1.5">
              ${["A", "B", "C"].map(g => `
                <button 
                  onclick="setCardGrade('${p.id}', '${g}')"
                  class="card-grade-btn py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${g === currentGrade ? (g === 'A' ? 'badge-grade-a ring-1 ring-emerald-400/50' : g === 'B' ? 'badge-grade-b ring-1 ring-indigo-400/50' : 'badge-grade-c ring-1 ring-amber-400/50') : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'}"
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
              <span class="text-base font-extrabold text-white">${formatMoney(priceInfo.price)}</span>
              <span class="text-xs text-slate-500 line-through">${formatMoney(priceInfo.msrp)}</span>
              <span class="text-[10px] text-emerald-400 font-bold ml-auto bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Save ${priceInfo.savingsPct}%</span>
            </div>
            <div class="text-[10px] text-blue-400 font-medium mt-0.5 flex items-center justify-between">
              <span>💳 ${state.activeRegion === 'UAE' ? 'Flat AED 90 Off on Cards/Apple Pay' : 'Flat ₹2,000 Off on UPI/Card'}</span>
              <span class="text-slate-400">${state.activeRegion === 'UAE' ? 'Dubai Express Air' : 'Free Express Air'}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons: 360 View, Add to Cart & Buy COD -->
        <div class="grid grid-cols-2 gap-2 mt-3 pt-2" onclick="event.stopPropagation();">
          <button onclick="addToCart('${p.id}')" class="card-add-cart-btn py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer">
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

function setCardStorage(productId, size) {
  state.selectedProductStorage[productId] = size;
  renderCatalog();
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
    let label = f.label;
    if (f.id === "under50k") {
      label = state.activeRegion === "UAE" ? "Under AED 2,200" : "Under ₹50,000";
    }
    return `
      <button 
        onclick="setSubFilter('${f.id}')" 
        class="px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}"
      >
        ${label}
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
  if (btnIn && btnUae) {
    if (reg === "IN") {
      btnIn.className = "px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white cursor-pointer";
      btnUae.className = "px-2 py-0.5 rounded text-[11px] font-semibold text-slate-400 hover:text-white cursor-pointer";
    } else {
      btnUae.className = "px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white cursor-pointer";
      btnIn.className = "px-2 py-0.5 rounded text-[11px] font-semibold text-slate-400 hover:text-white cursor-pointer";
    }
  }

  // Mobile Header Switcher
  const btnInMobile = document.getElementById("regionBtnINMobile");
  const btnUaeMobile = document.getElementById("regionBtnUAEMobile");
  if (btnInMobile && btnUaeMobile) {
    if (reg === "IN") {
      btnInMobile.className = "px-1.5 py-0.5 rounded font-bold bg-blue-600 text-white cursor-pointer";
      btnUaeMobile.className = "px-1.5 py-0.5 rounded font-semibold text-slate-400 hover:text-white cursor-pointer";
    } else {
      btnUaeMobile.className = "px-1.5 py-0.5 rounded font-bold bg-blue-600 text-white cursor-pointer";
      btnInMobile.className = "px-1.5 py-0.5 rounded font-semibold text-slate-400 hover:text-white cursor-pointer";
    }
  }

  // Mobile Drawer Switcher
  const drawerIn = document.getElementById("drawerRegionIN");
  const drawerUae = document.getElementById("drawerRegionUAE");
  if (drawerIn && drawerUae) {
    if (reg === "IN") {
      drawerIn.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-600 text-white cursor-pointer transition-all";
      drawerUae.className = "px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer transition-all";
    } else {
      drawerUae.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-600 text-white cursor-pointer transition-all";
      drawerIn.className = "px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer transition-all";
    }
  }

  updateRegionUI();
  renderCatalog();
  updateCartDrawerUI();
  if (state.currentInspectProduct && typeof updateInspectGradeUI === "function") {
    updateInspectGradeUI();
  }
  if (typeof calculateSellPrice === "function") calculateSellPrice();
  if (typeof calculateWholesalePrice === "function") calculateWholesalePrice();
  showToast(reg === "UAE" ? "🇦🇪 Currency switched to AED (UAE Dirhams) • Dubai Hub & GCC Delivery Active" : "🇮🇳 Currency switched to INR (₹) • Pan-India Free Express Air Active");
}

function updateRegionUI() {
  const isUae = state.activeRegion === "UAE";

  // 1. Announcement Bar Care & Shipping
  const careLink = document.getElementById("careContactLink");
  const careText = document.getElementById("careContactText");
  const shipText = document.getElementById("shippingBadgeText");
  if (careLink && careText && shipText) {
    if (isUae) {
      careLink.href = "https://wa.me/97143528899";
      careText.innerHTML = 'Dubai & UAE Care: <b>+971 4 352 8899</b> / WhatsApp';
      shipText.textContent = "UAE & GCC Express Insured Delivery";
    } else {
      careLink.href = "tel:+918044630881";
      careText.innerHTML = 'Customer Care: <b>+91 8044630881</b> (10am - 7pm)';
      shipText.textContent = "Pan-India Insured Dispatch";
    }
  }

  // 2. Hero Carousel Slides
  const h1Price = document.getElementById("heroSlide1Price");
  const h1Badge = document.getElementById("heroSlide1SaveBadge");
  if (h1Price) {
    h1Price.innerHTML = `Starting from <strong class="text-white text-base">${formatMoney(38999)}</strong> (MSRP <span class="line-through text-slate-400">${formatMoney(69900)}</span>). Every device passes our rigorous 32-point engineering inspection with authentic cosmetic condition grading.`;
  }
  if (h1Badge) h1Badge.textContent = `Save ${formatMoney(30901)}`;

  const h2Price = document.getElementById("heroSlide2Price");
  const h2Badge = document.getElementById("heroSlide2SaveBadge");
  if (h2Price) {
    h2Price.innerHTML = `Starting from <strong class="text-white text-base">${formatMoney(54999)}</strong> (MSRP <span class="line-through text-slate-400">${formatMoney(124999)}</span>). Original S-Pen stylus included. 100x Space Zoom & Dynamic AMOLED 2X tested with zero burn-in.`;
  }
  if (h2Badge) h2Badge.textContent = `SAVE ${formatMoney(70000)}`;

  const h3Badge = document.getElementById("heroSlide3TradeinBadge");
  if (h3Badge) h3Badge.textContent = `GET UP TO ${formatMoney(15000)} EXTRA`;

  // 3. Promo Offer Cards
  const o1Deal = document.getElementById("offer1DealPrice");
  const o1Msrp = document.getElementById("offer1MsrpPrice");
  if (o1Deal) o1Deal.textContent = formatMoney(30999);
  if (o1Msrp) o1Msrp.textContent = formatMoney(59900);

  const o2Head = document.getElementById("offer2Heading");
  const o2Sub = document.getElementById("offer2Subtext");
  const o2Emi = document.getElementById("offer2EmiText");
  if (o2Head) o2Head.textContent = isUae ? "Flat AED 90 Instant Off" : "Flat ₹2,000 Instant Off";
  if (o2Sub) o2Sub.textContent = isUae ? "Emirates NBD, ADCB & Mashreq Cards on orders above AED 1,300." : "HDFC, ICICI, SBI & Axis Bank Credit/Debit Cards on orders above ₹30k.";
  if (o2Emi) o2Emi.textContent = isUae ? "+ Tabby / Tamara 4-Split from AED 75/mo" : "+ No Cost EMI from ₹1,666/mo";

  const o3Coupon = document.getElementById("offer3CouponCode");
  const o3Sub = document.getElementById("offer3Subtext");
  if (o3Coupon) o3Coupon.textContent = isUae ? "FONEZONE90" : "FONEZONE2K";
  if (o3Sub) o3Sub.textContent = isUae ? "Get additional AED 90 off at cart checkout on any flagship purchase." : "Get additional ₹2,000 off at cart checkout on any flagship purchase.";

  // 4. Quick Select Rail
  const rpApple = document.getElementById("railPriceApple");
  const rpSamsung = document.getElementById("railPriceSamsung");
  const rpOnePlus = document.getElementById("railPriceOnePlus");
  const rpMacBook = document.getElementById("railPriceMacBook");
  const rpIpad = document.getElementById("railPriceIpad");
  const rpWatch = document.getElementById("railPriceWatch");
  if (rpApple) rpApple.textContent = `From ${formatMoney(10999)}`;
  if (rpSamsung) rpSamsung.textContent = `From ${formatMoney(22499)}`;
  if (rpOnePlus) rpOnePlus.textContent = `From ${formatMoney(13999)}`;
  if (rpMacBook) rpMacBook.textContent = `From ${formatMoney(56999)}`;
  if (rpIpad) rpIpad.textContent = `From ${formatMoney(15999)}`;
  if (rpWatch) rpWatch.textContent = `From ${formatMoney(10499)}`;

  // 5. Budget Finder
  const minLabel = document.getElementById("budgetSliderMinLabel");
  const maxLabel = document.getElementById("budgetSliderMaxLabel");
  if (minLabel) minLabel.textContent = formatMoney(15000);
  if (maxLabel) maxLabel.textContent = isUae ? "AED 4,500+" : "₹1,00,000+";

  const savingsCallout = document.getElementById("budgetSavingsCalloutText");
  if (savingsCallout) savingsCallout.textContent = `🔥 Save up to ${formatMoney(55000)} vs Brand New MRP`;

  // Update budget quick pills text
  const pills = document.querySelectorAll(".quick-budget-btn");
  pills.forEach(p => {
    const val = Number(p.getAttribute("data-budget"));
    if (val === 20000) p.textContent = isUae ? "Under AED 900" : "Under ₹20k";
    else if (val === 35000) p.textContent = isUae ? "AED 900 - 1.5k" : "₹20k - ₹35k";
    else if (val === 50000) p.textContent = isUae ? "AED 1.5k - 2.2k" : "₹35k - ₹50k";
    else if (val === 75000) p.textContent = isUae ? "AED 2.2k - 3.3k" : "₹50k - ₹75k";
    else if (val >= 100000) p.textContent = "All Budgets";
  });

  updateBudgetDisplayUI();
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

  // Highlight matching quick budget pill by data-budget attribute
  const btns = document.querySelectorAll(".quick-budget-btn");
  btns.forEach(btn => {
    const btnVal = Number(btn.getAttribute("data-budget"));
    const isMatch = btnVal === numVal;
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

  // Dynamic range-based pill highlighting by data-budget attribute
  const btns = document.querySelectorAll(".quick-budget-btn");
  btns.forEach(btn => {
    btn.className = "quick-budget-btn px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-medium transition-all cursor-pointer";
    const btnVal = Number(btn.getAttribute("data-budget"));
    if (numVal <= 20000 && btnVal === 20000) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 20000 && numVal <= 35000 && btnVal === 35000) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 35000 && numVal <= 50000 && btnVal === 50000) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal > 50000 && numVal <= 75000 && btnVal === 75000) {
      btn.className = "quick-budget-btn active px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[11px] transition-all cursor-pointer shadow";
    } else if (numVal >= 100000 && btnVal === 100000) {
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

  slider.oninput = (e) => handleBudgetSlider(e.target.value);
  slider.onchange = (e) => handleBudgetSlider(e.target.value);

  updateSliderTrackFill(slider.value || 100000);
}

// Global window exposure for inline attributes
window.handleBudgetSlider = handleBudgetSlider;
window.handleBudgetSliderInput = handleBudgetSlider;
window.setQuickBudget = setQuickBudget;
window.initBudgetSlider = initBudgetSlider;
window.updateRegionUI = updateRegionUI;

function updateBudgetDisplayUI() {
  const displayVal = document.getElementById("budgetDisplayVal");
  const isUae = state.activeRegion === "UAE";
  if (displayVal) {
    if (state.budgetMax >= 100000) {
      displayVal.textContent = isUae ? "All Budgets (AED 4,500+)" : "All Budgets (₹1,00,000+)";
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
/* 3. SEARCH WITH LIVE SUGGESTIONS DROPDOWN (DESKTOP & MOBILE) */
/* ======================================================== */
function handleSearch(q) {
  state.searchQuery = q.trim();
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  const dropdownMobile = document.getElementById("searchSuggestionsDropdownMobile");

  if (!state.searchQuery) {
    if (dropdown) dropdown.classList.add("hidden");
    if (dropdownMobile) dropdownMobile.classList.add("hidden");
    renderCatalog();
    return;
  }

  // Filter matched products for dropdown
  const matches = CATALOG.filter(p => 
    p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  const html = matches.length > 0 ? matches.slice(0, 5).map(p => `
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
  `).join('') : `<div class="p-3 text-center text-slate-400 text-xs">No matching certified devices found.</div>`;

  if (dropdown) {
    dropdown.classList.remove("hidden");
    dropdown.innerHTML = html;
  }
  if (dropdownMobile) {
    dropdownMobile.classList.remove("hidden");
    dropdownMobile.innerHTML = html;
  }

  renderCatalog();
}

function handleSearchFocus() {
  if (state.searchQuery) {
    handleSearch(state.searchQuery);
  }
}

function handleSearchFocusMobile() {
  const mInput = document.getElementById("storeSearchInputMobile");
  if (mInput && mInput.value) {
    handleSearch(mInput.value);
  } else if (state.searchQuery) {
    handleSearch(state.searchQuery);
  }
}

function selectSearchProduct(productId) {
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  const dropdownMobile = document.getElementById("searchSuggestionsDropdownMobile");
  if (dropdown) dropdown.classList.add("hidden");
  if (dropdownMobile) dropdownMobile.classList.add("hidden");
  openInspector(productId);
}

function executeSearch() {
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  const dropdownMobile = document.getElementById("searchSuggestionsDropdownMobile");
  if (dropdown) dropdown.classList.add("hidden");
  if (dropdownMobile) dropdownMobile.classList.add("hidden");
  renderCatalog();
  const sec = document.getElementById("productCatalogSection");
  if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Close search dropdown on clicking outside
document.addEventListener("click", (e) => {
  const searchInput = document.getElementById("storeSearchInput");
  const searchInputMobile = document.getElementById("storeSearchInputMobile");
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  const dropdownMobile = document.getElementById("searchSuggestionsDropdownMobile");

  if (dropdown && !dropdown.contains(e.target) && e.target !== searchInput) {
    dropdown.classList.add("hidden");
  }
  if (dropdownMobile && !dropdownMobile.contains(e.target) && e.target !== searchInputMobile) {
    dropdownMobile.classList.add("hidden");
  }
});

window.handleSearch = handleSearch;
window.handleSearchFocus = handleSearchFocus;
window.handleSearchFocusMobile = handleSearchFocusMobile;
window.selectSearchProduct = selectSearchProduct;
window.executeSearch = executeSearch;

/* ======================================================== */
/* 4. CART & WISHLIST DRAWERS                               */
/* ======================================================== */
function addToCart(productId) {
  const p = CATALOG.find(item => item.id === productId);
  if (!p) return;

  const currentGrade = state.selectedProductGrades[productId] || "A";
  const currentStorage = state.selectedProductStorage[productId] || (p.storageOptions ? p.storageOptions[0].size : "");
  const priceInfo = getProductPrice(p, currentGrade, currentStorage);
  const fullName = p.baseModelName ? `${p.baseModelName} ${currentStorage} ${p.color}` : p.name;
  const cartKey = `${productId}-${currentGrade}-${currentStorage}`;

  const existing = state.cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: productId,
      cartKey: cartKey,
      name: fullName,
      image: p.image,
      grade: currentGrade,
      storage: currentStorage,
      price: priceInfo.price,
      qty: 1
    });
  }

  updateCartDrawerUI();
  openCartDrawer();
  showToast(`🛒 Added ${fullName} (Grade ${currentGrade}) to Cart!`);
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
  const bottomCartBadge = document.getElementById("bottomCartBadge");
  if (bottomCartBadge) {
    bottomCartBadge.textContent = totalItems;
    if (totalItems > 0) {
      bottomCartBadge.classList.remove("hidden");
    } else {
      bottomCartBadge.classList.add("hidden");
    }
  }

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
  state.currentInspectStorage = state.selectedProductStorage[p.id] || (p.storageOptions ? p.storageOptions[0].size : "128GB");
  state.currentInspectAngle = 0;
  state.isZoomed = false;
  state.isZoomLoupeActive = false;

  const modal = document.getElementById("inspectorModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const displayName = p.baseModelName ? `${p.baseModelName} ${state.currentInspectStorage} ${p.color}` : p.name;
  document.getElementById("inspectModalProductName").textContent = displayName;
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

  // Smart Viewer Mode: 3D Orbit if interactive .glb mesh exists, otherwise Studio Photo Frames
  const btn3d = document.getElementById("modeViewer3dBtn");
  if (p.model3d) {
    if (btn3d) { btn3d.style.display = "inline-flex"; }
    setViewerMode("3d");
    setInspectPerspective("front");
  } else {
    if (btn3d) { btn3d.style.display = "none"; }
    setViewerMode("photo");
  }

  // Render Storage Variant Selector & Tech Specs
  renderInspectStorageUI(p);
  renderProductSpecs(p, state.specsFilterTab || "all");

  state.hasCaseAddon = false;
  const caseBtn = document.getElementById("btnAddCaseBtn");
  if (caseBtn) {
    caseBtn.textContent = `+ Add Case (${formatMoney(399)})`;
    caseBtn.className = "shrink-0 px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] shadow cursor-pointer transition-all";
  }

  updateInspectGradeUI();
  updateInspectAngleUI();
  initTurntableDragging();
  initZoomLoupeEvents();
}

function renderInspectStorageUI(p) {
  const container = document.getElementById("inspectStorageOptionsGrid");
  if (!container || !p || !p.storageOptions) return;

  const currentStorage = state.currentInspectStorage || p.storageOptions[0].size;
  const cols = Math.min(p.storageOptions.length, 4);
  container.className = `grid grid-cols-${cols} gap-1.5`;

  container.innerHTML = p.storageOptions.map(opt => {
    const isSelected = opt.size === currentStorage;
    const deltaText = opt.delta > 0 ? `+${formatMoney(opt.delta)}` : "Base";
    return `
      <button 
        onclick="setInspectStorage('${opt.size}')"
        class="storage-option-btn p-1.5 rounded-lg text-center cursor-pointer transition-all ${
          isSelected 
            ? 'bg-blue-600 text-white font-bold border border-blue-500 shadow-md ring-1 ring-blue-400/50' 
            : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 font-medium hover:border-slate-700'
        }"
      >
        <div class="text-[11px] font-black">${opt.size}</div>
        <div class="text-[8px] opacity-80 font-mono">${deltaText}</div>
      </button>
    `;
  }).join('');

  const badge = document.getElementById("storageSelectedBadge");
  if (badge) badge.textContent = `${currentStorage} Selected`;

  const recText = document.getElementById("storageRecommendationText");
  if (recText) {
    if (currentStorage.includes("128")) recText.textContent = "⚡ Standard: Ideal for daily apps, WhatsApp & iCloud/Google Photos";
    else if (currentStorage.includes("256")) recText.textContent = "🔥 Most Popular: Recommended for 4K video recording & high-res camera";
    else if (currentStorage.includes("512")) recText.textContent = "🚀 Power User: Massive offline 4K video library & lossless audio";
    else if (currentStorage.includes("1TB")) recText.textContent = "👑 Creator Flagship: 1TB ProRes Log video, RAW photos & studio work";
    else recText.textContent = "⚡ Certified OEM internal high-speed flash storage";
  }
}

function setInspectStorage(storageSize) {
  state.currentInspectStorage = storageSize;
  const p = state.currentInspectProduct;
  if (!p) return;

  state.selectedProductStorage[p.id] = storageSize;

  // Update dynamic modal title
  const displayName = p.baseModelName ? `${p.baseModelName} ${storageSize} ${p.color}` : p.name;
  const titleEl = document.getElementById("inspectModalProductName");
  if (titleEl) titleEl.textContent = displayName;

  renderInspectStorageUI(p);
  updateInspectGradeUI();
  renderCatalog();
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
  const currentStorage = state.currentInspectStorage || (p.storageOptions ? p.storageOptions[0].size : "");
  const priceInfo = getProductPrice(p, g, currentStorage);

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

  // Update Dynamic Price with Storage Delta
  const priceEl = document.getElementById("inspectPrice");
  if (priceEl) priceEl.textContent = formatMoney(priceInfo.price);
  const msrpEl = document.getElementById("inspectMsrp");
  if (msrpEl) msrpEl.textContent = formatMoney(priceInfo.msrp);
  const savingsEl = document.getElementById("inspectSavingsTag");
  if (savingsEl) {
    savingsEl.textContent = `Save ${formatMoney(priceInfo.savings)} (${priceInfo.savingsPct}%)`;
  }

  // Update 2D Hotspots (Unobstructed view when Grade A or when Flaw Markers are toggled OFF)
  const bezelHotspot = document.getElementById("hotspotBezel");
  const frameHotspot = document.getElementById("hotspotFrame");
  const camHotspot = document.getElementById("hotspotCamera");

  if (bezelHotspot) bezelHotspot.style.display = state.showFlawMarkers && g !== "A" ? "flex" : "none";
  if (frameHotspot) frameHotspot.style.display = state.showFlawMarkers && (g === "C" || g === "B") ? "flex" : "none";
  if (camHotspot) camHotspot.style.display = state.showFlawMarkers && g !== "A" ? "flex" : "none";

  // Update 3D Model Surface Anchored Hotspots
  const modelDentHotspot = document.getElementById("modelHotspotDent");
  if (modelDentHotspot) {
    if (state.showFlawMarkers && (g === "B" || g === "C")) {
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

  // Unobstructed view: If user toggled flaw markers OFF, or device has 0 flaws (Grade A), leave phone 100% clean!
  if (!state.showFlawMarkers || !flaws || !flaws.pins || flaws.pins.length === 0) {
    container.innerHTML = "";
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

function toggleFlawPins() {
  state.showFlawMarkers = !state.showFlawMarkers;
  const label = document.getElementById("flawToggleLabel");
  if (label) {
    label.textContent = state.showFlawMarkers ? "Flaw Markers: ON" : "Flaw Markers: OFF";
  }
  const dentHotspot = document.getElementById("modelHotspotDent");
  if (dentHotspot) {
    if (state.showFlawMarkers && (state.currentInspectGrade === "B" || state.currentInspectGrade === "C")) {
      dentHotspot.classList.remove("hidden");
    } else {
      dentHotspot.classList.add("hidden");
    }
  }
  updateInspectGradeUI();
  showToast(state.showFlawMarkers ? "👁️ Flaw markers visible" : "✨ Flaw markers hidden — Unobstructed device view");
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
    if (e.cancelable) e.preventDefault();
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
  const currentStorage = state.selectedProductStorage[productId] || (p.storageOptions ? p.storageOptions[0].size : "");
  const priceInfo = getProductPrice(p, currentGrade, currentStorage);
  const fullName = p.baseModelName ? `${p.baseModelName} ${currentStorage} ${p.color}` : p.name;

  // Generate new order in the queue
  const newOrderId = "FZ-" + Math.floor(1050 + Math.random() * 50);
  const newOrder = {
    id: newOrderId,
    name: "Dr. Sandeep Mehta",
    phone: "+91 98401 22334",
    address: "Flat 4A, Green Park Extn",
    city: "New Delhi",
    pincode: "110016",
    product: `${fullName} (Grade ${currentGrade})`,
    amount: priceInfo.price,
    status: "unverified",
    risk: "Medium Risk (Pre-Dispatch Verification)",
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

  // Touch swipe support for mobile & tablet screens
  let touchStartX = 0;
  let touchStartY = 0;
  container.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      // Ensure horizontal swipe intent (not vertical scrolling)
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextHeroSlide(); // Swiped left -> next
        } else {
          prevHeroSlide(); // Swiped right -> prev
        }
      }
    }
  }, { passive: true });

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
  track.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;

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
  updateRegionUI();
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

  // Bottom Navigation Active State
  if (typeof updateMobileBottomNavActive === "function") {
    if (hash === "#/pages/sell-your-device") {
      updateMobileBottomNavActive("sell");
    } else if (hash === "#/" || hash === "#/collections/all" || hash === "") {
      updateMobileBottomNavActive("home");
    } else {
      updateMobileBottomNavActive("");
    }
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
/* MOBILE APP NAVIGATION & BOTTOM BAR CONTROLLER            */
/* ======================================================== */
function toggleMobileNav(isOpen) {
  const drawer = document.getElementById("mobileNavDrawer");
  const content = document.getElementById("mobileNavContent");
  if (!drawer || !content) return;

  if (isOpen) {
    drawer.classList.remove("pointer-events-none", "opacity-0");
    drawer.classList.add("pointer-events-auto", "opacity-100");
    content.classList.remove("-translate-x-full");
    content.classList.add("translate-x-0");
    document.body.classList.add("overflow-hidden");
    updateMobileBottomNavActive("categories");
  } else {
    drawer.classList.remove("pointer-events-auto", "opacity-100");
    drawer.classList.add("pointer-events-none", "opacity-0");
    content.classList.remove("translate-x-0");
    content.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
    
    // Restore active bottom tab based on current hash
    const hash = window.location.hash || "#/";
    if (hash === "#/pages/sell-your-device") {
      updateMobileBottomNavActive("sell");
    } else if (hash === "#/" || hash === "#/collections/all") {
      updateMobileBottomNavActive("home");
    } else {
      updateMobileBottomNavActive("");
    }
  }
}

function handleBottomNavClick(tab) {
  if (tab === "home") {
    navigateTo("#/");
    setCategory("all");
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateMobileBottomNavActive("home");
  } else if (tab === "categories") {
    toggleMobileNav(true);
  } else if (tab === "sell") {
    navigateTo("#/pages/sell-your-device");
    updateMobileBottomNavActive("sell");
  } else if (tab === "wishlist") {
    openWishlistDrawer();
  } else if (tab === "cart") {
    openCartDrawer();
  }
}

function updateMobileBottomNavActive(activeTab) {
  const tabs = ["home", "categories", "sell", "wishlist", "cart"];
  tabs.forEach(t => {
    const el = document.getElementById(`bottomNav${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (!el) return;
    if (t === "sell") return; // Elevated center button keeps distinct styling
    if (t === activeTab) {
      el.classList.add("text-blue-500", "font-bold");
      el.classList.remove("text-slate-400");
    } else {
      el.classList.remove("text-blue-500", "font-bold");
      el.classList.add("text-slate-400");
    }
  });
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

  if (quoteEl) quoteEl.textContent = formatMoney(total);
  if (baseValEl) baseValEl.textContent = formatMoney(base);
  if (storageValEl) storageValEl.textContent = "+" + formatMoney(storageMult);
  if (netValEl) netValEl.textContent = formatMoney(total);
}

function confirmSellPickup() {
  const name = document.getElementById("sellName")?.value || "Valued Customer";
  const phone = document.getElementById("sellPhone")?.value || "+91 98XXX XXXXX";
  const amount = document.getElementById("sellQuoteAmount")?.textContent || "₹31,500";

  showToast(`✅ Doorstep pickup confirmed for ${name}! Our courier will arrive tomorrow. Instant payout of ${amount} locked.`);
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

  if (totalEl) totalEl.textContent = formatMoney(netPayable);
  if (baseEl) baseEl.textContent = formatMoney(totalBase);
  if (discEl) discEl.textContent = discountAmount > 0 ? `-${formatMoney(discountAmount)} (${discountTier})` : `${formatMoney(0)} (Starter)`;
  if (gstEl) gstEl.textContent = formatMoney(gstCredit);
  if (perUnitEl) perUnitEl.textContent = formatMoney(netCostPerUnit);
  if (profitEl) profitEl.textContent = `${formatMoney(projectedProfit)} (${marginPct}% Margin)`;
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
      btn.textContent = `✓ Case Added (+${formatMoney(399)})`;
      btn.className = "shrink-0 px-2 py-1 rounded bg-emerald-500 text-slate-950 font-black text-[10px] shadow cursor-pointer transition-all";
    }
    if (priceEl) priceEl.textContent = formatMoney(basePrice + 399);
    showToast(`📱 +${formatMoney(399)} Shockproof Case bundle added to this device!`);
  } else {
    if (btn) {
      btn.textContent = `+ Add Case (${formatMoney(399)})`;
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

// D2. Technical Specifications & Architecture Engine
function toggleSpecsSection() {
  state.isSpecsOpen = !state.isSpecsOpen;
  const body = document.getElementById("techSpecsBody");
  const chevron = document.getElementById("techSpecsChevron");
  if (!body) return;
  if (state.isSpecsOpen) {
    body.classList.remove("hidden");
    if (chevron) chevron.style.transform = "rotate(0deg)";
  } else {
    body.classList.add("hidden");
    if (chevron) chevron.style.transform = "rotate(180deg)";
  }
}

function setSpecsTab(category) {
  state.specsFilterTab = category;
  
  const tabs = ["all", "display", "processor", "camera", "battery", "build", "connectivity"];
  tabs.forEach(t => {
    const btn = document.getElementById(`specsTab_${t}`);
    if (btn) {
      if (t === category) {
        btn.className = "specs-tab-btn active px-2 py-0.5 rounded-md bg-blue-600 text-white font-bold cursor-pointer transition-colors shadow-sm";
      } else {
        btn.className = "specs-tab-btn px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer transition-colors";
      }
    }
  });

  if (state.currentInspectProduct) {
    renderProductSpecs(state.currentInspectProduct, category);
  }
}

function renderProductSpecs(p, category = "all") {
  const container = document.getElementById("techSpecsContent");
  if (!container || !p || !p.specs) return;

  const cats = category === "all" 
    ? Object.keys(p.specs) 
    : (p.specs[category] ? [category] : []);

  if (cats.length === 0) {
    container.innerHTML = `<div class="p-3 text-center text-slate-400 text-xs">No specifications listed for this category.</div>`;
    return;
  }

  let html = "";
  cats.forEach(catKey => {
    const cat = p.specs[catKey];
    if (!cat) return;
    html += `
      <div class="specs-category-card p-2 rounded-lg bg-slate-900/70 border border-slate-800">
        <div class="specs-category-title flex items-center gap-1.5 text-[11px] font-bold text-blue-400 mb-1.5 pb-1 border-b border-slate-800">
          <span>${cat.icon || '📌'}</span>
          <span>${cat.title}</span>
        </div>
        <div class="space-y-1">
          ${cat.details.map(item => `
            <div class="specs-row-item flex items-baseline justify-between gap-2 py-0.5 text-[10px] border-b border-slate-800/40 last:border-0">
              <span class="specs-label text-slate-400 font-medium shrink-0">${item.label}:</span>
              <span class="specs-value text-slate-200 font-semibold text-right">${item.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
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
window.toggleFlawPins = toggleFlawPins;
window.setInspectStorage = setInspectStorage;
window.setCardStorage = setCardStorage;
window.toggleSpecsSection = toggleSpecsSection;
window.setSpecsTab = setSpecsTab;

