/**
 * ==========================================================================
 * TOUQAS FOODS - REUSABLE DATA STRUCTURE & BACKEND ENGINE ARCHITECTURE (2026)
 * ==========================================================================
 */

// 1. REUSABLE MENU OBJECT COLLECTION ARRAY 
const MENU_DATA = [
    // --- CATEGORY: SIGNATURE MOMOS ---
    { id: "m1", name: "Chicken Steamed Momos", category: "momos", price: 650, image: "placeholder-momo-steam.jpg", desc: "Calibrated wrap casing packed with minced hand-cleared chicken and micro-herbs.", availability: true, tag: "Signature" },
    { id: "m2", name: "Chicken Fried Momos", category: "momos", price: 720, image: "placeholder-momo-fried.jpg", desc: "Golden flash-fried crispy exterior preserving rich operational hot juices inside.", availability: true, tag: "Popular" },
    { id: "m3", name: "Cheese Momos", category: "momos", price: 890, image: "placeholder-momo-cheese.jpg", desc: "Gourmet molten cheddar and mozzarella blend fused inside dynamic seasoned chicken meat.", availability: true, tag: "Cheesy" },
    { id: "m4", name: "Tandoori Momos", category: "momos", price: 820, image: "placeholder-momo-tandoori.jpg", desc: "Skewered charfired dumplings basted with high-vibrancy smoky red tandoori marinade.", availability: true, tag: "Spicy" },
    { id: "m5", name: "Beef Momos", category: "momos", price: 950, image: "placeholder-momo-beef.jpg", desc: "Prime zero-fat minced beef cuts mixed with aromatic targeting local black pepper matrix.", availability: true, tag: "Premium" },
    { id: "m6", name: "Schezwan Momos", category: "momos", price: 790, image: "placeholder-momo-schezwan.jpg", desc: "Steamed units tossed aggressively in imported spicy hot Chinese Schezwan pepper glaze.", availability: true, tag: "Hot" },
    { id: "m7", name: "Jhol Momos", category: "momos", price: 850, image: "placeholder-momo-jhol.jpg", desc: "Served immersed inside a deep structural cold-pressed sesame and spicy peanut soup base.", availability: true, tag: "Traditional" },
    { id: "m8", name: "Veg Momos", category: "momos", price: 590, image: "placeholder-momo-veg.jpg", desc: "Shredded crisp farm cabbage, sweet carrots, and button mushrooms seasoned perfectly.", availability: true, tag: "Healthy" },

    // --- CATEGORY: PREMIUM BURGERS ---
    { id: "b1", name: "Classic Beef Burger", category: "burgers", price: 790, image: "placeholder-burger-classic.jpg", desc: "150g smashed ground beef patty on toasted brioche with house compound special butter.", availability: true, tag: "Core Classic" },
    { id: "b2", name: "Double Beef Burger", category: "burgers", price: 1150, image: "placeholder-burger-double.jpg", desc: "Twin stack beef patties, double cheddar sheets, layered meticulously to optimize scale.", availability: true, tag: "Best Seller" },
    { id: "b3", name: "Cheese Beef Burger", category: "burgers", price: 890, image: "placeholder-burger-cheese.jpg", desc: "Standard beef model featuring intense molten white Monterey Jack cheese flooding.", availability: true, tag: "Cheesy" },
    { id: "b4", name: "Signature Touqas Burger", category: "burgers", price: 1250, image: "placeholder-burger-sig.jpg", desc: "Gourmet beef combined with crispy pulled broast fibers, drizzled in rich gold amber sauce.", availability: true, tag: "Elite Tier" },

    // --- CATEGORY: LOADED FRIES ---
    { id: "f1", name: "Regular Fries", category: "fries", price: 350, image: "placeholder-fries-reg.jpg", desc: "Straight-cut premium potatoes crisp-fried to golden perfection and lightly salted.", availability: true, tag: "Basic" },
    { id: "f2", name: "Masala Fries", category: "fries", price: 390, image: "placeholder-fries-masala.jpg", desc: "Tossed inside high-grade local crushed chaat spices and hot red chili dust particles.", availability: true, tag: "Zesty" },
    { id: "f3", name: "Cheese Fries", category: "fries", price: 550, image: "placeholder-fries-cheese.jpg", desc: "Drenched under industrial hot cheddar cheese fluid matrix from our processing tap.", availability: true, tag: "Trending" },
    { id: "f4", name: "Loaded Touqas Fries", category: "fries", price: 790, image: "placeholder-fries-loaded.jpg", desc: "Massive box filled with fries, chopped chicken tenders, jalapeño rings, and custom sauces.", availability: true, tag: "Heavyweight" },

    // --- CATEGORY: PIZZA LINE ---
    { id: "p1", name: "Chicken Tikka Pizza", category: "pizza", price: 1450, image: "placeholder-pizza-tikka.jpg", desc: "Traditional charcoal tikka chunks, red onions, deep house marinara sauce, cheese.", availability: true, tag: "Local Favorite" },
    { id: "p2", name: "Fajita Pizza", category: "pizza", price: 1450, image: "placeholder-pizza-fajita.jpg", desc: "Smoked fajita meat strips, bell pepper matrices, sweet corn grains, mozzarella layer.", availability: true, tag: "Classic" },
    { id: "p3", name: "Cheese Lover Pizza", category: "pizza", price: 1290, image: "placeholder-pizza-cheese.jpg", desc: "Zero meat profile. Heavy blend concentration of Mozzarella, Cheddar, Parmesan, and Feta.", availability: true, tag: "Vegetarian" },
    { id: "p4", name: "Kabab Crust Pizza", category: "pizza", price: 1750, image: "placeholder-pizza-kabab.jpg", desc: "Outer rim crust stuffed with succulent traditional beef seekh kabab cells.", availability: true, tag: "Premium Craft" },
    { id: "p5", name: "Special Touqas Pizza", category: "pizza", price: 1950, image: "placeholder-pizza-special.jpg", desc: "Ultimate luxury build combining momos on top of pizza dough with loaded chicken layers.", availability: true, tag: "Chef Special" },

    // --- CATEGORY: INJECTED BROAST ---
    { id: "br1", name: "Single Piece Injected Broast", category: "broast", price: 450, image: "placeholder-broast-single.jpg", desc: "Quarter chicken cut deep-marinated internally via automatic pressure injection syringes.", availability: true, tag: "Crispy" },
    { id: "br2", name: "Full Broast Meal", category: "broast", price: 1490, image: "placeholder-broast-meal.jpg", desc: "4 golden pieces of broast served alongside regular fries, bun units, and garlic dip.", availability: true, tag: "Value Bundle" },
    { id: "br3", name: "Spicy Injected Broast", category: "broast", price: 490, image: "placeholder-broast-spicy.jpg", desc: "Injected with hyper-concentrated local ghost chili and lemon juice processing fluid.", availability: true, tag: "Extremely Hot" },

    // --- CATEGORY: COMBO DEALS ---
    { id: "c1", name: "Burger + Fries + Drink", category: "combos", price: 1050, image: "placeholder-combo-1.jpg", desc: "Classic Beef Burger matched with regular fries box and a 350ml beverage unit.", availability: true, tag: "Solo Deal" },
    { id: "c2", name: "Pizza Slice Combo", category: "combos", price: 850, image: "placeholder-combo-2.jpg", desc: "Two jumbo pizza slices paired alongside a mint margarita glass container.", availability: true, tag: "Quick Lunch" },
    { id: "c3", name: "Momos + Drink Combo", category: "combos", price: 890, image: "placeholder-combo-3.jpg", desc: "1 plate Chicken Steamed Momos linked up directly with cold coffee bottle.", availability: true, tag: "Cafe Match" },
    { id: "c4", name: "Family Feast Combo", category: "combos", price: 3950, image: "placeholder-combo-4.jpg", desc: "1 Special Pizza, 4 Steamed Momos, 2 Classic Burgers, and 1.5L soft drink bottle.", availability: true, tag: "Mega Saver" },
    { id: "c5", name: "Friends Hangout Combo", category: "combos", price: 2200, image: "placeholder-combo-5.jpg", desc: "2 Double Beef Burgers, 1 Large Loaded Fries, and 2 soft drink cans.", availability: true, tag: "Popular Group" },
    { id: "c6", name: "Broast Box Combo", category: "combos", price: 1290, image: "placeholder-combo-6.jpg", desc: "3 pieces of Spicy Injected Broast coupled with small masala fries and drink.", availability: true, tag: "Crunch Pack" },

    // --- CATEGORY: DRINKS ---
    { id: "d1", name: "Soft Drinks (Cans)", category: "drinks", price: 150, image: "placeholder-drink-soda.jpg", desc: "Chilled selection including Pepsi, Coke, Sprite, Fanta 350ml sizes.", availability: true, tag: "Cold" },
    { id: "d2", name: "Mineral Water", category: "drinks", price: 90, image: "placeholder-drink-water.jpg", desc: "Reverse osmosis purified clean drinking water flask.", availability: true, tag: "Pure" },
    { id: "d3", name: "Mint Margarita", category: "drinks", price: 290, image: "placeholder-drink-mint.jpg", desc: "Blended fresh mint leaves, lemon juice matrices, rock salt, carbonated fizz.", availability: true, tag: "Highly Refreshing" },
    { id: "d4", name: "Fresh Lime", category: "drinks", price: 180, image: "placeholder-drink-lime.jpg", desc: "Squeezed fresh citrus lime metrics dissolved over mineral soda water lines.", availability: true, tag: "Tangy" },
    { id: "d5", name: "Cold Coffee", category: "drinks", price: 390, image: "placeholder-drink-coffee.jpg", desc: "Bespoke dark espresso drops whipped cold with rich vanilla cream fats and milk.", availability: true, tag: "Cafe Style" },

    // --- CATEGORY: UPCOMING DISHES (COMING SOON SPECIFICATION) ---
    { id: "u1", name: "Korean Sticky Wings", category: "upcoming", price: 0, image: "placeholder-up-korean.jpg", desc: "Deep-fried chicken wing matrices glazed in sweet-heat fermented gochujang paste paste.", availability: false, tag: "Pipeline" },
    { id: "u2", name: "White Sauce Pasta Bowls", category: "upcoming", price: 0, image: "placeholder-up-pasta.jpg", desc: "Penne pasta bound inside rich emulsified parmesan flour cream sauce matrix.", availability: false, tag: "Formulating" },
    { id: "u3", name: "Loaded Shawarma Fries", category: "upcoming", price: 0, image: "placeholder-up-shawarma.jpg", desc: "Fries layered with shaved spiced pita meat sheets and intense garlic aioli.", availability: false, tag: "Pipeline" },
    { id: "u4", name: "Special Tortilla Wraps", category: "upcoming", price: 0, image: "placeholder-up-wrap.jpg", desc: "Flour wraps enclosing crispy tender strips, shredded lettuce, and chipotle emulsion strips.", availability: false, tag: "Testing" },
    { id: "u5", name: "Gourmet Dessert Cups", category: "upcoming", price: 0, image: "placeholder-up-dessert.jpg", desc: "Layered lotus biscoff crumbles, cream cheese mousse, and liquid caramel toppings.", availability: false, tag: "R&D Lab" }
];

// 2. LIVE APPLICATIVE CLIENT-SIDE CART STATE LOGIC
let cartState = [];

// Hardcoded System Rules Constants
const SYSTEM_WHATSAPP_NUM = "923079308372";
const EARN_LOYALTY_SPENDING_UNIT = 200; // Earn 1 point per 200 PKR
const VALUE_PER_LOYALTY_POINT = 10;     // 1 Point = 10 PKR discount
const MIN_LOYALTY_REDEMPTION_LIMIT = 100; // Minimum points floor

/**
 * 3. APPLICATION RUNTIME ENGINE INITIALIZATION INIT
 */
document.addEventListener("DOMContentLoaded", () => {
    renderMenuGrid("all");
    setupCategoryTabEventListeners();
    setupCartDrawerTriggers();
    setupCheckoutFormProcessing();
    setupScrollRevealSystem();
    setupNavbarScrollState();
    setupScrollTopAction();
});

/**
 * 4. DYNAMIC MENU GENERATION DOM MANIPULATION COMPONENT
 */
function renderMenuGrid(selectedCategory) {
    const gridContainer = document.getElementById("menuGrid");
    if (!gridContainer) return;
    
    gridContainer.innerHTML = ""; // Wipe state
    
    // Process filtering logic
    const filteredItems = selectedCategory === "all" 
        ? MENU_DATA 
        : MENU_DATA.filter(item => item.category === selectedCategory);
        
    filteredItems.forEach(item => {
        const cardNode = document.createElement("div");
        cardNode.className = "product-card";
        
        // Handle availability conditional states
        const actionButtonMarkup = item.availability 
            ? `<button class="btn btn-primary btn-sm" onclick="addItemToCartEngine('${item.id}')"><i class="fa-solid fa-plus"></i> Add To Bag</button>
               <button class="btn btn-whatsapp btn-sm" onclick="triggerDirectWhatsAppOrder('${item.id}')"><i class="fa-brands fa-whatsapp"></i> Order Now</button>`
            : `<button class="btn btn-outline btn-block btn-sm disabled-state" disabled style="grid-column: span 2; opacity:0.6; cursor:not-allowed;"><i class="fa-solid fa-hourglass-start"></i> Coming Soon / Notify Me</button>`;
            
        const priceDisplayMarkup = item.availability
            ? `PKR ${item.price}`
            : `TBD`;

        cardNode.innerHTML = `
            <div class="card-media">
                <span class="card-badge ${!item.availability ? 'upcoming' : ''}">${item.tag}</span>
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'">
            </div>
            <div class="card-body-content">
                <h3 class="card-item-title">${item.name}</h3>
                <p class="card-item-desc">${item.desc}</p>
                <div class="card-footer-action-row">
                    <span class="card-price-tag">${priceDisplayMarkup}</span>
                </div>
                <div class="card-btn-stack">
                    ${actionButtonMarkup}
                </div>
            </div>
        `;
        gridContainer.appendChild(cardNode);
    });
}

function setupCategoryTabEventListeners() {
    const tabs = document.querySelectorAll("#categoryTabs .tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => t.classList.remove("active"));
            e.currentTarget.classList.add("active");
            const targetCat = e.currentTarget.getAttribute("data-category");
            renderMenuGrid(targetCat);
        });
    });
}

/**
 * 5. CORE SHOPPING CART MANAGEMENT UTILITY FUNCTIONS
 */
window.addItemToCartEngine = function(itemId) {
    const targetProduct = MENU_DATA.find(p => p.id === itemId);
    if (!targetProduct || !targetProduct.availability) return;
    
    const operationalItemIndex = cartState.findIndex(item => item.id === itemId);
    
    if (operationalItemIndex > -1) {
        cartState[operationalItemIndex].quantity += 1;
    } else {
        cartState.push({
            id: targetProduct.id,
            name: targetProduct.name,
            price: targetProduct.price,
            image: targetProduct.image,
            quantity: 1
        });
    }
    
    synchronizeCartDOM();
    flashCartTriggerVisualFeedback();
};

function synchronizeCartDOM() {
    // 1. Calculate running counts
    const totalCount = cartState.reduce((sum, current) => sum + current.quantity, 0);
    document.getElementById("cartCount").innerText = totalCount;
    
    const itemsWrapper = document.getElementById("cartItemsContainer");
    if (!itemsWrapper) return;
    
    itemsWrapper.innerHTML = ""; // Wipe DOM nodes
    
    if (cartState.length === 0) {
        itemsWrapper.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your delivery bag is empty.</p>
            </div>
        `;
        updateFinancialCalculations(0);
        return;
    }
    
    // 2. Loop and generate structures
    cartState.forEach(item => {
        const rowNode = document.createElement("div");
        rowNode.className = "cart-item-node";
        rowNode.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&q=80'">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <span class="cart-item-unit-cost">PKR ${item.price * item.quantity}</span>
            </div>
            <div class="cart-qty-control">
                <button class="qty-btn" onclick="mutateCartItemQty('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="mutateCartItemQty('${item.id}', 1)">+</button>
            </div>
            <button class="cart-item-rem-btn" onclick="removeCartItemEntirely('${item.id}')" aria-label="Delete item"><i class="fa-solid fa-trash-can"></i></button>
        `;
        itemsWrapper.appendChild(rowNode);
    });
    
    // 3. Compute monetary states
    const calculatedSubtotal = cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    updateFinancialCalculations(calculatedSubtotal);
}

window.mutateCartItemQty = function(itemId, direction) {
    const targetIdx = cartState.findIndex(i => i.id === itemId);
    if (targetIdx === -1) return;
    
    cartState[targetIdx].quantity += direction;
    if (cartState[targetIdx].quantity <= 0) {
        cartState.splice(targetIdx, 1);
    }
    synchronizeCartDOM();
};

window.removeCartItemEntirely = function(itemId) {
    cartState = cartState.filter(item => item.id !== itemId);
    synchronizeCartDOM();
};

function updateFinancialCalculations(subtotalValue) {
    let currentSubtotal = subtotalValue;
    let pointDeductionSaving = 0;
    const deliveryServiceFee = currentSubtotal > 0 ? 150 : 0;
    
    // Handle checkbox tracking parameters for simulated loyalty redemption
    const loyaltyCheckbox = document.getElementById("redeemPointsCheckbox");
    const loyaltyInput = document.getElementById("redeemPointsAmount");
    
    if (loyaltyCheckbox && loyaltyCheckbox.checked && currentSubtotal > 0) {
        if (loyaltyInput) loyaltyInput.classList.remove("hidden-input");
        const pointsEntered = parseInt(loyaltyInput.value) || 0;
        
        if (pointsEntered >= MIN_LOYALTY_REDEMPTION_LIMIT) {
            pointDeductionSaving = pointsEntered * VALUE_PER_LOYALTY_POINT;
            // Bound safety check to prevent negative balances
            if (pointDeductionSaving > currentSubtotal) {
                pointDeductionSaving = currentSubtotal;
            }
            document.getElementById("loyaltyDiscountRow").classList.remove("hidden");
            document.getElementById("loyaltyDiscountValue").innerText = `-PKR ${pointDeductionSaving}`;
        } else {
            document.getElementById("loyaltyDiscountRow").classList.add("hidden");
        }
    } else {
        if (loyaltyInput) {
            loyaltyInput.classList.add("hidden-input");
        }
        document.getElementById("loyaltyDiscountRow").classList.add("hidden");
    }

    const calculatedGrandTotal = (currentSubtotal + deliveryServiceFee) - pointDeductionSaving;
    
    document.getElementById("cartSubtotal").innerText = `PKR ${currentSubtotal}`;
    document.getElementById("cartGrandTotal").innerText = `PKR ${calculatedGrandTotal}`;
    
    // Loyalty Point Accrual Projection Model
    const projectedAccruedPoints = Math.floor(currentSubtotal / EARN_LOYALTY_SPENDING_UNIT);
    document.getElementById("loyaltyEarningNotice").innerHTML = `
        <i class="fa-solid fa-award"></i> You will earn <strong>${projectedAccruedPoints} loyalty points</strong> on this transaction.
    `;
}

function flashCartTriggerVisualFeedback() {
    const trigger = document.getElementById("cartTrigger");
    trigger.style.transform = "scale(1.2)";
    setTimeout(() => trigger.style.transform = "scale(1)", 200);
}

/**
 * 6. UI INTERACTION DRAWER CONTROL LAYOUT MECHANICS
 */
function setupCartDrawerTriggers() {
    const openBtn = document.getElementById("cartTrigger");
    const closeBtn = document.getElementById("cartClose");
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");
    const clearBtn = document.getElementById("clearCartBtn");
    const mobileToggle = document.getElementById("menuToggle");
    const navLinksNode = document.getElementById("navLinks");
    const innerLinks = document.querySelectorAll(".nav-link");

    // Responsive Mobile Bar Trigger Toggle
    mobileToggle.addEventListener("click", () => {
        navLinksNode.classList.toggle("active");
    });

    innerLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinksNode.classList.remove("active");
        });
    });

    openBtn.addEventListener("click", () => {
        drawer.classList.add("active");
        overlay.classList.add("active");
    });

    const closeMechanism = () => {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    };

    closeBtn.addEventListener("click", closeMechanism);
    overlay.addEventListener("click", closeMechanism);
    
    clearBtn.addEventListener("click", () => {
        cartState = [];
        synchronizeCartDOM();
    });

    // Event monitoring hook for real-time calculation balancing on checkbox state mutation
    document.getElementById("redeemPointsCheckbox").addEventListener("change", () => {
        const calculatedSubtotal = cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        updateFinancialCalculations(calculatedSubtotal);
    });
    document.getElementById("redeemPointsAmount").addEventListener("input", () => {
        const calculatedSubtotal = cartState.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        updateFinancialCalculations(calculatedSubtotal);
    });
}

/**
 * 7. FORM VERIFICATION & WHATSAPP DATA API PACKING
 */
function setupCheckoutFormProcessing() {
    const formElement = document.getElementById("checkoutForm");
    if (!formElement) return;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        
        if (cartState.length === 0) {
            alert("Operational Failure: Cannot process validation with an empty cart bag structure.");
            return;
        }

        // Gather structured client context data inputs
        const formData = {
            name: document.getElementById("custName").value,
            phone: document.getElementById("custPhone").value,
            whatsapp: document.getElementById("custWhatsApp").value,
            email: document.getElementById("custEmail").value || "N/A",
            address: document.getElementById("custAddress").value,
            city: document.getElementById("custCity").value,
            fulfillment: document.getElementById("orderType").value,
            notes: document.getElementById("orderNotes").value || "None",
            settlement: document.querySelector('input[name="paymentChannel"]:checked').value,
            redeemRequested: document.getElementById("redeemPointsCheckbox").checked,
            pointsToRedeem: document.getElementById("redeemPointsAmount").value || "0"
        };

        // Construct mathematical string manifest arrays
        let itemsStringManifest = "";
        let transactionalSubtotal = 0;
        
        cartState.forEach((item, index) => {
            const itemCostLine = item.price * item.quantity;
            transactionalSubtotal += itemCostLine;
            itemsStringManifest += `${index + 1}. ${item.name} [Qty: ${item.quantity}] - PKR ${itemCostLine}\n`;
        });

        const analyticalDeliveryFee = formData.fulfillment === "Home Delivery" ? 150 : 0;
        let finalDedSavings = 0;
        if (formData.redeemRequested && parseInt(formData.pointsToRedeem) >= MIN_LOYALTY_REDEMPTION_LIMIT) {
            finalDedSavings = parseInt(formData.pointsToRedeem) * VALUE_PER_LOYALTY_POINT;
            if (finalDedSavings > transactionalSubtotal) finalDedSavings = transactionalSubtotal;
        }
        
        const finalComputedGrandTotal = (transactionalSubtotal + analyticalDeliveryFee) - finalDedSavings;

        // --- OPTION A: ENCODE PACKED WHATSAPP API URI STRING ---
        const outboundMsgText = 
`*NEW ORDER VALIDATION - TOUQAS FOODS*
----------------------------------------
*TAGLINE:* good food, great living
----------------------------------------
*CUSTOMER PROFILE CORRELATION:*
• Name: ${formData.name}
• Contact Line: ${formData.phone}
• WhatsApp: ${formData.whatsapp}
• Email Node: ${formData.email}

*LOGISTICAL DISPATCH COORDINATES:*
• Option: ${formData.fulfillment}
• Destination Zone: ${formData.city}
• Dropoff Points: ${formData.address}

*PRODUCT ITEMIZATION MATRIX:*
${itemsStringManifest}
*FINANCIAL CALCULATIONS SUMMARY:*
• Base Subtotal: PKR ${transactionalSubtotal}
• Service Surcharge: PKR ${analyticalDeliveryFee}
• Loyalty Points Adjusted: ${formData.redeemRequested ? formData.pointsToRedeem + ' pts (-PKR ' + finalDedSavings + ')' : 'None'}
• *TOTAL PAYABLE DEBT:* *PKR ${finalComputedGrandTotal}*
• Channel Settlement: ${formData.settlement}

*CUSTOM INSTRUCTIONS SPEC:*
"${formData.notes}"
----------------------------------------
_System Notification: Prepared for automated entry integration protocols._`;

        const encodedTargetUri = `https://wa.me/${SYSTEM_WHATSAPP_NUM}?text=${encodeURIComponent(outboundMsgText)}`;
        
        // --- HOOK EXTENSION CHANNELS (FOR COOPERATIVE BACKEND INTEGRATORS) ---
        /**
         * INTERFACE ANCHOR POINT B: EMAIL SUBMISSION ENGINE
         * Example: emailjs.send("service_id","template_id", formData);
         * * INTERFACE ANCHOR POINT C: GOOGLE SHEETS INTERACTIVE REST BRIDGE
         * Example: fetch("https://script.google.com/macros/s/SCRIPT_ID/exec", {method:"POST", body: JSON.stringify(formData)});
         */
        console.log("System Status Payload Mapping Check: Outbound Form verified.", formData);

        // Clear App state and direct window location execution context
        cartState = [];
        synchronizeCartDOM();
        document.getElementById("checkoutForm").reset();
        document.getElementById("cartDrawer").classList.remove("active");
        document.getElementById("cartOverlay").classList.remove("active");
        
        window.open(encodedTargetUri, "_blank");
    });

    // Control structural design selection cards on manual check mutation toggling
    const paymentRadioOptions = document.querySelectorAll('input[name="paymentChannel"]');
    paymentRadioOptions.forEach(radio => {
        radio.addEventListener("change", (e) => {
            document.querySelectorAll(".pay-card").forEach(c => c.classList.remove("active"));
            if (e.target.checked) {
                e.target.closest(".pay-card").classList.add("active");
            }
        });
    });
}

/**
 * 8. SINGLE ITEM DIRECT WHATSAPP ORDER SHORTCUT INTERFACE
 */
window.triggerDirectWhatsAppOrder = function(productId) {
    const productItem = MENU_DATA.find(p => p.id === productId);
    if (!productItem) return;

    const preciseMessageBody = `*DIRECT ITEM INQUIRY - TOUQAS FOODS*\n====================================\nI want to place this order immediately from the Touqas Foods online platform:\n\n• *Product Code Reference:* [${productItem.id}]\n• *Item Name Design:* ${productItem.name}\n• *Base Price Calculation:* PKR ${productItem.price}\n• *Quantity Specification:* 1 Unit Base\n====================================\nPlease dispatch delivery verification coordinates step parameters back to this loop.`;
    
    const operationalTargetUri = `https://wa.me/${SYSTEM_WHATSAPP_NUM}?text=${encodeURIComponent(preciseMessageBody)}`;
    window.open(operationalTargetUri, "_blank");
};

/**
 * 9. MICRO ANIMATIONS & INTERACTIVE ENGINE STAGES
 */
function setupScrollRevealSystem() {
    const revealTargets = document.querySelectorAll(".reveal");
    const monitoringObserver = new IntersectionObserver((detectedEntries, observerRef) => {
        detectedEntries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerRef.unobserve(entry.target); // Release memory allocation locks
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(element => monitoringObserver.observe(element));
}

function setupNavbarScrollState() {
    const targetNavbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            targetNavbar.classList.add("scrolled");
        } else {
            targetNavbar.classList.remove("scrolled");
        }
        
        // High-performance mapping check tracking active element visibility coordinates
        const sections = document.querySelectorAll("section, footer");
        const navLinks = document.querySelectorAll(".nav-link");
        
        let currentActiveId = "";
        sections.forEach(sec => {
            const sectionTopDistance = sec.offsetTop - 120;
            if (window.scrollY >= sectionTopDistance) {
                currentActiveId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentActiveId}`) {
                link.classList.add("active");
            }
        });
    });
}

function setupScrollTopAction() {
    const scrollButton = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            scrollButton.classList.add("active");
        } else {
            scrollButton.classList.remove("active");
        }
    });
    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
