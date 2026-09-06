/**
 * FoneZone Merchant Command Center & Anti-RTO Intelligence Portal
 * Dedicated Operations Dashboard for Sahil Pathania & Hemant Verma
 */

const dashboardState = {
  theme: localStorage.getItem('fz_theme') || 'dark',
  selectedOrderId: 'FZ-1049',
  queueFilter: 'all',
  orders: [
    {
      id: 'FZ-1049',
      name: 'Rahul Sharma',
      phone: '+91 98102 43210',
      address: 'Flat 402, Kalkaji',
      city: 'New Delhi',
      pincode: '110019',
      product: 'iPhone 15 Pro 128GB (Grade A)',
      amount: 84999,
      status: 'unverified',
      risk: 'High RTO Risk (Unconfirmed Doorstep)',
      timestamp: '2 mins ago'
    },
    {
      id: 'FZ-1048',
      name: 'Priya Patel',
      phone: '+91 98250 11223',
      address: '12 Shanti Nagar, Bodakdev',
      city: 'Ahmedabad',
      pincode: '380054',
      product: 'Samsung Galaxy S23 Ultra 256GB (Grade A)',
      amount: 72999,
      status: 'verified',
      risk: 'Low Risk (Address Confirmed)',
      timestamp: '14 mins ago'
    },
    {
      id: 'FZ-1047',
      name: 'Vikram Malhotra',
      phone: '+91 98711 55667',
      address: 'C-48, 100ft Road, Indiranagar',
      city: 'Bengaluru',
      pincode: '560038',
      product: 'MacBook Air M2 256GB (Grade A)',
      amount: 69999,
      status: 'prepaid',
      risk: 'Zero Risk (Prepaid UPI via ₹300 Off)',
      timestamp: '28 mins ago'
    },
    {
      id: 'FZ-1046',
      name: 'Amit Verma',
      phone: '+91 99341 88990',
      address: 'Lane 4, Boring Road',
      city: 'Patna',
      pincode: '800001',
      product: 'OnePlus 11 5G 128GB (Grade B)',
      amount: 34999,
      status: 'unverified',
      risk: 'High RTO Risk (Remote Pincode / COD History)',
      timestamp: '42 mins ago'
    },
    {
      id: 'FZ-1045',
      name: 'Neha Sundaram',
      phone: '+91 94440 22331',
      address: '2nd Avenue, Anna Nagar West',
      city: 'Chennai',
      pincode: '600040',
      product: 'iPhone 13 128GB (Grade A)',
      amount: 38999,
      status: 'verified',
      risk: 'Low Risk (OTP Confirmed)',
      timestamp: '1 hr ago'
    }
  ],
  chatHistory: {
    'FZ-1049': [
      {
        sender: 'system',
        text: 'Namaste Rahul ji! 🙏\n\nWe have received your <b>Cash on Delivery (COD)</b> order for:\n📱 <b>iPhone 15 Pro 128GB (Grade A Pristine)</b>\n💰 <b>₹84,999</b>\n\n📍 <b>Delivery Address:</b>\nFlat 402, Kalkaji, New Delhi - 110019\n\n⚠️ To guarantee courier dispatch via BlueDart Air, please verify your doorstep availability.',
        time: '2 mins ago'
      }
    ],
    'FZ-1048': [
      {
        sender: 'system',
        text: 'Namaste Priya ji! 🙏\n\nWe have received your COD order for:\n📱 <b>Samsung Galaxy S23 Ultra 256GB</b>\n💰 <b>₹72,999</b>\n\nPlease reply to verify dispatch.',
        time: '14 mins ago'
      },
      {
        sender: 'customer',
        text: '✅ Yes, address is confirmed! Please ship via express.',
        time: '12 mins ago'
      },
      {
        sender: 'system',
        text: '🎉 <b>Verified!</b> Airway Bill #FZ-DELHIVERY-9411 generated. Dispatched from Mumbai fulfillment hub.',
        time: '10 mins ago'
      }
    ],
    'FZ-1047': [
      {
        sender: 'system',
        text: '⚡ <b>Special VIP Prepayment Offer:</b> Switch to Instant UPI Payment and pay only <b>₹69,699</b> (Flat ₹300 OFF)!',
        time: '28 mins ago'
      },
      {
        sender: 'customer',
        text: '⚡ Paid ₹69,699 via Google Pay UPI! Transaction: UPI-RZP-908129.',
        time: '25 mins ago'
      },
      {
        sender: 'system',
        text: '💎 <b>Payment Confirmed!</b> ₹300 discount credited. 0% RTO Risk order dispatched via Priority Courier.',
        time: '24 mins ago'
      }
    ]
  }
};

// 1. Render Live Order Queue Table
function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  if (!tbody) return;

  const filtered = dashboardState.orders.filter(o => {
    if (dashboardState.queueFilter === 'all') return true;
    if (dashboardState.queueFilter === 'unverified') return o.status === 'unverified' || o.status === 'whatsapp_sent';
    if (dashboardState.queueFilter === 'verified') return o.status === 'verified';
    if (dashboardState.queueFilter === 'prepaid') return o.status === 'prepaid';
    return true;
  });

  const countEl = document.getElementById('queueCount');
  if (countEl) countEl.textContent = `${filtered.length} orders`;

  tbody.innerHTML = filtered.map(order => {
    const isSelected = order.id === dashboardState.selectedOrderId;
    let statusBadge = '';
    if (order.status === 'unverified') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">🟡 Pending OTP</span>';
    } else if (order.status === 'whatsapp_sent') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">🔵 WhatsApp Sent</span>';
    } else if (order.status === 'verified') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">🟢 Verified COD</span>';
    } else if (order.status === 'prepaid') {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">💎 Prepaid (₹300 Off)</span>';
    }

    let riskClass = 'text-amber-300';
    if (order.risk.includes('Low')) riskClass = 'text-emerald-400';
    if (order.risk.includes('Zero')) riskClass = 'text-indigo-300';

    return `
      <tr class="hover:bg-slate-800/40 cursor-pointer transition-colors ${isSelected ? 'bg-blue-950/40 border-l-2 border-blue-500' : ''}" onclick="selectOrder('${order.id}')">
        <td class="py-3 px-3">
          <div class="font-bold text-white flex items-center gap-1.5">
            <span>${order.name}</span>
            <span class="text-[11px] text-slate-500 font-mono">#${order.id}</span>
          </div>
          <div class="text-[11px] text-slate-400 font-mono">${order.phone} • ${order.city}</div>
        </td>
        <td class="py-3 px-3">
          <div class="text-white font-medium">${order.product}</div>
          <div class="text-emerald-400 font-bold font-mono">₹${order.amount.toLocaleString('en-IN')} COD</div>
        </td>
        <td class="py-3 px-3 text-[11px] ${riskClass}">
          ${order.risk}
        </td>
        <td class="py-3 px-3">
          ${statusBadge}
        </td>
        <td class="py-3 px-3 text-right">
          <button onclick="event.stopPropagation(); selectOrder('${order.id}'); dispatchWhatsAppVerification();" class="px-2.5 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-[11px] shadow active:scale-95 cursor-pointer">
            📲 Dispatch
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// 2. Queue Filter Tabs
function filterQueue(q) {
  dashboardState.queueFilter = q;
  document.querySelectorAll('.q-filter-btn').forEach(btn => {
    if (btn.dataset.q === q) {
      btn.className = 'q-filter-btn px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold cursor-pointer';
    } else {
      btn.className = 'q-filter-btn px-2.5 py-1 rounded-lg text-slate-400 hover:text-white cursor-pointer';
    }
  });
  renderOrdersTable();
}

// 3. Select Order
function selectOrder(orderId) {
  dashboardState.selectedOrderId = orderId;
  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
}

// 4. Update Customer Card
function updateSelectedCustomerCard() {
  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId) || dashboardState.orders[0];
  if (!order) return;

  const nameEl = document.getElementById('selectedCustomerName');
  const phoneEl = document.getElementById('selectedCustomerPhone');
  const cityEl = document.getElementById('selectedCustomerCity');
  const itemEl = document.getElementById('selectedCustomerItem');
  const amountEl = document.getElementById('selectedCustomerAmount');
  const riskBadge = document.getElementById('selectedCustomerRiskBadge');

  if (nameEl) nameEl.textContent = order.name;
  if (phoneEl) phoneEl.textContent = order.phone;
  if (cityEl) cityEl.textContent = `${order.address}, ${order.city} (${order.pincode})`;
  if (itemEl) itemEl.textContent = order.product;
  if (amountEl) amountEl.textContent = `₹${order.amount.toLocaleString('en-IN')} COD`;

  if (riskBadge) {
    riskBadge.textContent = order.risk;
    if (order.risk.includes('High')) {
      riskBadge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
    } else if (order.risk.includes('Low')) {
      riskBadge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    } else {
      riskBadge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40';
    }
  }
}

// 5. Render WhatsApp Chat
function renderWhatsAppChat() {
  const container = document.getElementById('waChatHistory');
  if (!container) return;

  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId) || dashboardState.orders[0];
  if (!order) return;

  const history = dashboardState.chatHistory[order.id] || [
    {
      sender: 'system',
      text: `Namaste ${order.name} ji! 🙏\n\nWe have received your <b>Cash on Delivery (COD)</b> order for:\n📱 <b>${order.product}</b>\n💰 <b>₹${order.amount.toLocaleString('en-IN')}</b>\n\n📍 <b>Delivery Address:</b>\n${order.address}, ${order.city} - ${order.pincode}\n\n⚠️ To prevent fake orders and courier return fees, please verify your order below.`,
      time: order.timestamp || 'Just now'
    }
  ];

  dashboardState.chatHistory[order.id] = history;

  container.innerHTML = history.map(msg => {
    if (msg.sender === 'system') {
      return `
        <div class="chat-bubble-in bg-[#202C33] text-slate-200 p-3 rounded-2xl rounded-tl-none shadow-md max-w-[92%] text-[11px] leading-relaxed border border-slate-700/60">
          <div class="text-[11px] text-emerald-400 font-bold mb-1 flex items-center gap-1">
            <span>FoneZone Automated Dispatch</span>
            <span class="text-emerald-400 font-mono">✓✓</span>
          </div>
          <div>${msg.text.replace(/\n/g, '<br>')}</div>
          <div class="text-[11px] text-slate-500 text-right mt-1">${msg.time}</div>
        </div>
      `;
    } else {
      return `
        <div class="chat-bubble-in ml-auto bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-[85%] text-[11px] leading-relaxed">
          <div>${msg.text.replace(/\n/g, '<br>')}</div>
          <div class="text-[11px] text-emerald-200 text-right mt-1">${msg.time} ✓✓</div>
        </div>
      `;
    }
  }).join('');

  container.scrollTop = container.scrollHeight;
}

// 6. Dispatch WhatsApp Address OTP
function dispatchWhatsAppVerification() {
  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId);
  if (!order) return;

  order.status = 'whatsapp_sent';
  order.risk = 'Medium Risk (Awaiting Customer OTP)';
  
  if (!dashboardState.chatHistory[order.id]) dashboardState.chatHistory[order.id] = [];
  dashboardState.chatHistory[order.id].push({
    sender: 'system',
    text: `📲 <b>Action Required:</b> Please reply with <b>CONFIRM</b> or tap below so our logistics partner (BlueDart Air) can generate the tracking airway bill.`,
    time: 'Just now'
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`📲 WhatsApp verification dispatched to ${order.name} (${order.phone})`);
}

// 7. Dispatch ₹300 Off UPI Incentive
function dispatchPrepaidIncentive() {
  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId);
  if (!order) return;

  const discounted = order.amount - 300;
  if (!dashboardState.chatHistory[order.id]) dashboardState.chatHistory[order.id] = [];
  dashboardState.chatHistory[order.id].push({
    sender: 'system',
    text: `⚡ <b>Special VIP Offer for ${order.name}:</b>\nSwitch to Instant UPI Payment and pay only <b>₹${discounted.toLocaleString('en-IN')}</b> (Flat ₹300 OFF)!\n\nScan & pay directly to FoneZone Verified Merchant account to eliminate COD fee.`,
    time: 'Just now'
  });

  renderWhatsAppChat();
  showToast(`⚡ Sent ₹300 Instant UPI Discount incentive to ${order.name}`);
}

// 8. Simulate Customer Confirming Address
function simulateCustomerConfirmAddress() {
  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId);
  if (!order) return;

  order.status = 'verified';
  order.risk = 'Low Risk (Address OTP Confirmed)';

  if (!dashboardState.chatHistory[order.id]) dashboardState.chatHistory[order.id] = [];
  dashboardState.chatHistory[order.id].push({
    sender: 'customer',
    text: '✅ Yes, address is 100% correct! I will be at home to pay COD. Please dispatch immediately.',
    time: 'Just now'
  });

  dashboardState.chatHistory[order.id].push({
    sender: 'system',
    text: `🎉 <b>Verified!</b> Airway Bill (AWB #FZ-BLUEDART-${Math.floor(1000 + Math.random() * 9000)}) generated. Package packed in tamper-proof seal. Estimated delivery: 48h.`,
    time: 'Just now'
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`🟢 ${order.name} verified address via WhatsApp! Order marked Verified COD.`);
}

// 9. Simulate Customer Prepaying via UPI
function simulateCustomerPrepayUPI() {
  const order = dashboardState.orders.find(o => o.id === dashboardState.selectedOrderId);
  if (!order) return;

  const discounted = order.amount - 300;
  order.amount = discounted;
  order.status = 'prepaid';
  order.risk = 'Zero Risk (Prepaid UPI via ₹300 Off)';

  if (!dashboardState.chatHistory[order.id]) dashboardState.chatHistory[order.id] = [];
  dashboardState.chatHistory[order.id].push({
    sender: 'customer',
    text: `⚡ Paid ₹${discounted.toLocaleString('en-IN')} via Google Pay UPI! Transaction ID: UPI-RZP-${Math.floor(100000 + Math.random() * 900000)}.`,
    time: 'Just now'
  });

  dashboardState.chatHistory[order.id].push({
    sender: 'system',
    text: `💎 <b>Payment Confirmed!</b> ₹${discounted.toLocaleString('en-IN')} credited. Flat ₹300 discount applied. ZERO RTO risk order dispatched with Priority Express.`,
    time: 'Just now'
  });

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`💎 Order converted to Prepaid UPI! 0% RTO Risk achieved for ${order.name}.`);
}

// 10. Simulate Incoming Order
function simulateIncomingOrder() {
  const names = ['Ananya Roy', 'Rohan Kulkarni', 'Deepak Nair', 'Manoj Tiwari', 'Kavita Singh'];
  const cities = [
    { city: 'Pune', pin: '411038', addr: 'Flat 12, Kothrud, Paud Road' },
    { city: 'Chandigarh', pin: '160017', addr: 'House 88, Sector 17-C' },
    { city: 'Jaipur', pin: '302001', addr: 'Plot 5, C-Scheme, Ashok Nagar' },
    { city: 'Lucknow', pin: '226010', addr: 'B-19, Gomti Nagar' }
  ];
  const products = [
    { name: 'iPhone 14 Pro 128GB (Deep Purple)', price: 74999 },
    { name: 'Samsung Galaxy S22 Ultra 256GB (Phantom Black)', price: 56999 },
    { name: 'Google Pixel 8 Pro 128GB (Bay Blue)', price: 58999 },
    { name: 'MacBook Air M1 256GB (Space Gray)', price: 54999 }
  ];

  const pickName = names[Math.floor(Math.random() * names.length)];
  const pickLoc = cities[Math.floor(Math.random() * cities.length)];
  const pickProd = products[Math.floor(Math.random() * products.length)];

  const newId = 'FZ-' + Math.floor(1055 + Math.random() * 40);
  const newOrder = {
    id: newId,
    name: pickName,
    phone: '+91 9' + Math.floor(100000000 + Math.random() * 900000000),
    address: pickLoc.addr,
    city: pickLoc.city,
    pincode: pickLoc.pin,
    product: pickProd.name,
    amount: pickProd.price,
    status: 'unverified',
    risk: 'High RTO Risk (Unconfirmed Doorstep)',
    timestamp: 'Just now'
  };

  dashboardState.orders.unshift(newOrder);
  dashboardState.selectedOrderId = newId;

  const kpiEl = document.getElementById('kpiTotalOrders');
  if (kpiEl) {
    const current = parseInt(kpiEl.textContent) || 148;
    kpiEl.textContent = `${current + 1} Orders`;
  }

  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  showToast(`🔔 New Live COD Order Ingested: #${newId} from ${pickName} (${pickLoc.city})`);
}

// 11. Logistics ROI Calculator
function updateLogisticsCalc() {
  const slider = document.getElementById('calcOrdersSlider');
  const valLabel = document.getElementById('calcOrdersVal');
  const annualSavingsLabel = document.getElementById('calcAnnualSavings');

  if (!slider) return;

  const orders = parseInt(slider.value);
  if (valLabel) valLabel.textContent = `${orders.toLocaleString('en-IN')} orders / mo`;

  const monthlyAvoidedReturns = Math.round(orders * 0.212);
  const annualFreightSaved = monthlyAvoidedReturns * 350 * 12;

  if (annualSavingsLabel) {
    annualSavingsLabel.textContent = `₹${annualFreightSaved.toLocaleString('en-IN')} / yr`;
  }
}

// 12. Theme Engine
function applyTheme(theme) {
  dashboardState.theme = theme;
  localStorage.setItem('fz_theme', theme);
  const html = document.documentElement;
  const icon = document.getElementById('themeIcon');

  if (theme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (icon) icon.setAttribute('data-lucide', 'sun');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    if (icon) icon.setAttribute('data-lucide', 'moon');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleTheme() {
  const next = dashboardState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  showToast(`Theme switched to ${next === 'dark' ? 'Midnight Dark' : 'Clean Light'} Mode`);
}

// 13. Toast System
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.innerHTML = msg;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(dashboardState.theme);
  renderOrdersTable();
  updateSelectedCustomerCard();
  renderWhatsAppChat();
  updateLogisticsCalc();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});