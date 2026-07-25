/* Kai Seng site content — plain data, no build step. */
window.SITE = {
  brand:{
    legal:'Syarikat Perniagaan Kai Seng Sdn Bhd',
    short:'Kai Seng',
    slogan:'Your brand starts with a single package.',
    positioning:'One-stop food packaging, small-batch customisation and brand printing for small businesses — so a modest budget can still look professional.',
    keywords:['Professional','Reliable','Creative'],
    mission:'To make branded packaging affordable for every small business.',
    vision:'To be the packaging partner small and medium businesses trust most.',
    voice:'Small order? No problem. We can print a small batch first — start with one carton and make it your own brand.'
  },
  contact:{
    phone:'+603 9082 0712', email:'admin@kaiseng.com.my', web:'kaiseng.com.my',
    address:'15GF, Jalan Alam Jaya 17, Taman Alam Jaya Bt. 8 1/2, Cheras, Selangor, Malaysia',
    addressShort:'15GF, Jalan Alam Jaya 17, Taman Alam Jaya, Cheras, Selangor',
    hours:['Mon – Sat : 8.30am – 5.30pm','Sunday : Off'],
    whatsapp:'012-394 3353', whatsappHref:'https://wa.me/60123943353',
    maps:'https://maps.app.goo.gl/uLKqzJNF4qdNSqXFA',
    mapsEmbed:'https://maps.google.com/maps?q=Jalan%20Alam%20Jaya%2017%20Taman%20Alam%20Jaya%20Cheras%20Selangor&z=15&output=embed',
    socials:[
      {label:'WhatsApp', href:'https://wa.me/60123943353', note:'012-394 3353'},
      {label:'Facebook', href:'https://www.facebook.com/kaisengsb/', note:'@kaisengsb'},
      {label:'Instagram', href:'https://www.instagram.com/kaisengsb/', note:'@kaisengsb'},
      {label:'Email', href:'mailto:admin@kaiseng.com.my', note:'admin@kaiseng.com.my'}
    ]
  },
  why:[
    {t:'Small runs, still customised', b:'No need to stock a warehouse. Print your own branded packaging from one carton, on a budget that fits a small business.'},
    {t:'Packaging and design in one place', b:'From choosing the packaging to brand design to printing, we stay with you through every step — one supplier, one conversation.'},
    {t:'Professional, and honest about it', b:'We recommend what suits your product, use and budget, so you don\u2019t buy the wrong thing or spend more than you need to.'}
  ],
  values:[
    {t:'Professional', b:'Real product knowledge and hands-on experience, turned into packaging advice that fits your product.'},
    {t:'Reliable', b:'Consultation, design, production — every step is clear, careful and worth trusting.'},
    {t:'Achievement', b:'We help businesses of every size build a brand of their own on a limited budget.'}
  ],
  stats:[
    {n:'1 ctn', l:'Minimum order', s:'Small runs welcome'},
    {n:'5', l:'Steps from brief to delivery', s:'Nothing hidden'},
    {n:'9', l:'Product families in stock', s:'Paper, plastic, bio and more'},
    {n:'6 days', l:'We are open, Mon to Sat', s:'8.30am – 5.30pm'}
  ],
  steps:[
    {t:'Tell us what you need', b:'Your product, the packaging you have in mind, and roughly how many you need.'},
    {t:'Advice and a clear quote', b:'We suggest the right product and give you plain pricing — no surprises later.'},
    {t:'Confirm the design', b:'We prepare your brand design or print artwork, and only start once you are happy with it.'},
    {t:'Small-batch printing', b:'Your packaging is printed on our own printing machinery, so output stays consistent.'},
    {t:'Delivery', b:'Packaging in your hands, and your brand is officially on the shelf.'}
  ],
  highlights:[
    {t:'Our own printing machinery', b:'Printing is done in-house, so quality stays stable and lead times stay in our hands.'},
    {t:'Low minimum order supported', b:'A small business can own branded packaging without committing to a bulk order.'}
  ],
  series:[
    {id:'paper', label:'Paper Products', image:'assets/imagery/scene-cafe.png', tone:'kraft', count:42, b:'Hot cups, lunch bags, kraft bags, paper containers and serviettes — all printable.'},
    {id:'plastic', label:'Plastic Products', image:'assets/imagery/scene-buffet.png', tone:'clay', count:64, b:'PP containers, lunch boxes and party cups, food grade and microwavable.'},
    {id:'cutlery', label:'Cutlery', image:'assets/imagery/scene-restaurant.png', tone:'ink', count:31, b:'Plates, forks, spoons and straws, loose or individually wrapped.'},
    {id:'bio', label:'Bio Products', image:'assets/imagery/scene-cafe.png', tone:'sage', count:27, b:'Kraft and biodegradable lines for cafés that want a greener counter.'},
    {id:'kitchen', label:'Kitchen Consumables', image:'assets/imagery/scene-kitchen.png', tone:'kraft', count:22, b:'Gloves, aprons, hair nets, dish wash liquid — the daily back-of-house list.'},
    {id:'bags', label:'Plastic & Garbage Bags', image:'assets/imagery/scene-restaurant.png', tone:'sage', count:38, b:'Carrier bags, garbage bags, foam and aluminium trays by the carton.'}
  ],
  products:[
    {id:'hot-cup-8oz', cat:'Paper Products', name:'Custom Printed Coffee Hot Cup 8oz', sku:'KS-PPR-HC08', image:'assets/products/coffee-hot-cup-8oz.png',
     pack:'50 pcs × 20 / ctn', moq:'1 carton', material:'Single-wall paper, PE lined', size:'8 oz / 240 ml', print:'1 – 4 colour, full wrap', lead:'10 – 14 working days',
     stock:{tone:'ok',label:'In stock'}, featured:true,
     b:'The everyday café cup. Print your logo around the wrap and every takeaway coffee carries your brand out the door.',
     uses:['Café takeaway','Bakery hot drinks','Event booths'],
     options:['Plain stock, ready to collect','1-colour logo print','Full-wrap 4-colour print','Matching sip lid and cup sleeve']},
    {id:'kraft-bag', cat:'Paper Products', name:'Custom Printed Kraft Paper Bag', sku:'KS-PPR-KB02', image:'assets/products/kraft-paper-bag.png',
     pack:'50 pcs × 10 / ctn', moq:'1 carton', material:'Kraft paper, twisted handle', size:'S / M / L', print:'1 – 2 colour, one or both sides', lead:'12 – 16 working days',
     stock:{tone:'warn',label:'Low stock'}, featured:true,
     b:'A carry bag customers keep. Sturdy kraft with a twisted handle, printed with your name on one or both faces.',
     uses:['Bakery and dessert takeaway','Retail gifting','Market stalls'],
     options:['Plain kraft','1-colour front print','Front and back print','Custom size on request']},
    {id:'lunch-bag', cat:'Paper Products', name:'Printed Brown Paper Lunch Bag', sku:'KS-PPR-LB01', image:'assets/products/brown-paper-lunch-bag.png',
     pack:'100 pcs × 10 / ctn', moq:'1 carton', material:'Kraft paper 60 gsm', size:'S / M / L', print:'1 colour, single side', lead:'8 – 12 working days',
     stock:{tone:'ok',label:'In stock'}, featured:true,
     b:'The cheapest way to start branding. One colour, one side, and your bread or snack bag stops being generic.',
     uses:['Bread and pastry','Snack counters','Home-based sellers'],
     options:['Plain brown','1-colour stamp print','Grease-resistant liner']},
    {id:'paper-container', cat:'Paper Products', name:'Printed Paper Food Container', sku:'KS-PPR-PC03', image:'assets/products/paper-container-open.png',
     pack:'50 pcs × 8 / ctn', moq:'1 carton', material:'Kraft board, greaseproof', size:'750 ml', print:'Wrap or lid sticker', lead:'12 – 16 working days',
     stock:{tone:'ok',label:'In stock'},
     b:'For rice bowls, pasta and salads. Print the body wrap, or start smaller with a printed lid sticker.',
     uses:['Rice and noodle sets','Salad bars','Catering'],
     options:['Plain kraft','Printed lid sticker','Full body print','With clear lid']},
    {id:'pp-lunch-box', cat:'Plastic Products', name:'PP Lunch Box with Printed Sticker', sku:'KS-PP-LB650', image:'assets/products/pp-lunch-box.png',
     pack:'50 pcs × 8 / ctn', moq:'1 carton', material:'PP, food grade, microwavable', size:'650 ml', print:'Printed label / sticker', lead:'7 – 10 working days',
     stock:{tone:'ok',label:'In stock'},
     b:'Leak-resistant and microwavable. Branding goes on a printed sticker, which keeps small orders affordable.',
     uses:['Daily lunch sets','Delivery orders','Meal prep sellers'],
     options:['Plain box','Printed round sticker','Printed sleeve band']},
    {id:'pp-round', cat:'Plastic Products', name:'PP Round Container 500 ml', sku:'KS-PP-RD500', image:'assets/products/pp-round-container.png',
     pack:'50 pcs × 10 / ctn', moq:'1 carton', material:'PP, food grade', size:'500 ml', print:'Lid sticker or in-mould label', lead:'7 – 10 working days',
     stock:{tone:'warn',label:'Low stock'},
     b:'Soup, dessert, sauces and sambal. A printed lid turns a plain tub into a shelf-ready product.',
     uses:['Desserts and puddings','Sauces and pastes','Frozen goods'],
     options:['Plain container','Printed lid sticker','Tamper-evident seal']},
    {id:'party-cup', cat:'Plastic Products', name:'PP Party Cup 22oz', sku:'KS-CUT-PC22', image:'assets/products/pp-party-cup.png',
     pack:'50 pcs × 20 / ctn', moq:'1 carton', material:'PP', size:'22 oz', print:'1 – 2 colour body print', lead:'12 – 16 working days',
     stock:{tone:'ok',label:'In stock'},
     b:'Cold drinks, bubble tea and juice bars. Body print on a clear cup reads well on every table.',
     uses:['Bubble tea','Juice and smoothies','Events'],
     options:['Plain clear','1-colour print','2-colour print','Matching dome lid']},
    {id:'serviette', cat:'Paper Products', name:'Printed Serviette Tissue', sku:'KS-PPR-SV01', image:'assets/products/serviette-tissue.png',
     pack:'100 pcs × 30 / ctn', moq:'1 carton', material:'Virgin pulp, 1-ply', size:'30 × 30 cm', print:'1 colour, corner logo', lead:'10 – 14 working days',
     stock:{tone:'ok',label:'In stock'},
     b:'A quiet brand touch on every table. One-colour corner logo, low cost per piece.',
     uses:['Dine-in tables','Takeaway sets','Cafés'],
     options:['Plain white','Corner logo print','Centre logo print']},
    {id:'cutlery-set', cat:'Cutlery', name:'Plastic Fork & Spoon, Wrapped', sku:'KS-CUT-FS01', image:'assets/products/plastic-fork-spoon.png',
     pack:'100 pcs × 20 / ctn', moq:'1 carton', material:'PS, individually wrapped', size:'Standard', print:'Printed wrapper', lead:'14 – 18 working days',
     stock:{tone:'alert',label:'Back-order'},
     b:'Individually wrapped for hygiene, with your name printed on the wrapper for delivery orders.',
     uses:['Delivery sets','Catering','Hotel buffet'],
     options:['Plain wrapper','Printed wrapper','Fork, spoon or set']},
    {id:'glove', cat:'Kitchen Consumables', name:'Nitrile Powder-Free Glove', sku:'KS-KC-NG01', image:'assets/products/nitrile-glove.png',
     pack:'100 pcs × 10 / ctn', moq:'1 carton', material:'Nitrile, powder-free', size:'S – XL', print:'Not printable', lead:'Ready stock',
     stock:{tone:'warn',label:'Low stock'},
     b:'Back-of-house essentials, bought by the carton along with your printed packaging.',
     uses:['Food handling','Cleaning','Prep kitchens'],
     options:['S / M / L / XL']},
    {id:'apron', cat:'Kitchen Consumables', name:'Disposable Apron', sku:'KS-KC-AP01', image:'assets/products/disposable-apron.png',
     pack:'100 pcs × 10 / ctn', moq:'1 carton', material:'HDPE', size:'One size', print:'Not printable', lead:'Ready stock',
     stock:{tone:'ok',label:'In stock'},
     b:'Simple, clean, cheap by the carton. Add it to any packaging order.',
     uses:['Prep kitchens','Catering crews','Cleaning'],
     options:['One size, 100 pcs per pack']}
  ],
  packages:[
    {name:'Test Print', tag:'Start here', b:'For a first look before you commit.',
     items:['One packaging item','1-colour logo print','Small test batch','Physical sample sent to you'],price:'Quoted on enquiry'},
    {name:'Starter Brand', tag:'Most chosen', b:'Enough to put your brand on the counter.',
     items:['Two to three packaging items','Logo or artwork touch-up','Small-run print from 1 carton','Advice on sizes and pack counts'],price:'Quoted on enquiry',feature:true},
    {name:'Full Counter', tag:'Growing', b:'Everything a busy shop hands over daily.',
     items:['Cups, bags, containers and serviettes','Matched print across all items','Repeat-order schedule','Stock held for your next run'],price:'Quoted on enquiry'}
  ],
  faq:[
    {q:'How small can my order be?', a:'One carton. That is the minimum for both plain and printed stock, so you can start with a small batch and reorder once it sells.'},
    {q:'Can I see the print before the full run?', a:'Yes. Ask for a test print. We print a small batch first so you can hold it, check the colour and confirm before we run the rest.'},
    {q:'I don\u2019t have a logo yet. Can you help?', a:'Yes. We prepare brand design and print artwork for you, and only start printing after you confirm you are happy with it.'},
    {q:'How long does printing take?', a:'Most printed items take 7 to 18 working days depending on the product and number of colours. Plain stock is ready to collect.'},
    {q:'What do prices depend on?', a:'The product, print colours, quantity and finishing. Tell us those four things and we will send a clear quote — no hidden charges.'},
    {q:'Can I collect instead of paying for delivery?', a:'Yes. Self collect at our Cheras warehouse during opening hours, or we deliver across the Klang Valley.'},
    {q:'How do I pay?', a:'No online payment on this site. After you send your order on WhatsApp we confirm the total and send our bank details \u2014 pay by online transfer or DuitNow QR. Cash is accepted on self collect. Printed jobs need a 50% deposit before we start; plain stock is paid in full before delivery.'},
    {q:'What is the delivery fee?', a:'Klang Valley delivery is RM15 per trip, free for orders above RM500. Self collect at Cheras is free. Outside the Klang Valley we quote courier at cost, charged by carton.'},
    {q:'How soon will I get my order?', a:'Plain stock: same day self collect, or 1 to 3 working days for Klang Valley delivery. Printed items follow the lead time on each product page \u2014 usually 7 to 18 working days after you confirm the artwork.'}
  ]
};

(function(){
  var meta = {
    'hot-cup-8oz':{price:78,opts:[{label:'Size',values:['8 oz','12 oz']},{label:'Print',values:['Plain','1-colour logo','Full wrap 4-colour']}]},
    'kraft-bag':{price:96,opts:[{label:'Size',values:['S','M','L']},{label:'Print',values:['Plain kraft','1-colour front','Front and back']}]},
    'lunch-bag':{price:52,opts:[{label:'Size',values:['S','M','L']},{label:'Print',values:['Plain brown','1-colour stamp']}]},
    'paper-container':{price:110,opts:[{label:'Lid',values:['Kraft lid','Clear lid']},{label:'Print',values:['Plain','Lid sticker','Full body']}]},
    'pp-lunch-box':{price:88,opts:[{label:'Size',values:['650 ml','850 ml']},{label:'Print',values:['Plain','Round sticker','Sleeve band']}]},
    'pp-round':{price:74,opts:[{label:'Size',values:['350 ml','500 ml','650 ml']},{label:'Print',values:['Plain','Lid sticker']}]},
    'party-cup':{price:92,opts:[{label:'Size',values:['16 oz','22 oz']},{label:'Print',values:['Plain clear','1-colour','2-colour']}]},
    'serviette':{price:64,opts:[{label:'Print',values:['Plain white','Corner logo','Centre logo']}]},
    'cutlery-set':{price:58,opts:[{label:'Item',values:['Fork','Spoon','Fork + spoon set']}]},
    'glove':{price:46,opts:[{label:'Size',values:['S','M','L','XL']}]},
    'apron':{price:38,opts:[{label:'Size',values:['One size']}]}
  };
  window.SITE.products.forEach(function(p){
    var m = meta[p.id] || {};
    p.price = m.price || 60;
    p.opts = m.opts || [];
    p.soldOut = p.stock.tone === 'alert';
    if (p.soldOut) p.stock = {tone:'alert', label:'Sold out'};
  });
})();
