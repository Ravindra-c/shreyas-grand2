// All room data and prices live here. Prices are "starting" prices from the current official website.
const common=['Wi-Fi','Tea/coffee maker','Mini refrigerator','Electronic safety locker'];
export const rooms=[
{id:'executive-king',name:'Executive King Size Room',size:'290 sq ft',bed:'Twin beds (as per current website — please verify)',price:2899,guests:2,img:'/images/executive-king.webp',gallery:['/images/executive-king.webp','/images/executive-king-2.webp'],
desc:'Approx. 290 sq ft with twin beds, tea/coffee maker, mini refrigerator, Wi-Fi and an electronic safety locker.',amenities:common},
{id:'executive-twin',name:'Executive Twin Bed Room',size:'260 sq ft',bed:'King-size bed (as per current website — please verify)',price:2499,guests:2,img:'/images/executive-twin.webp',gallery:['/images/executive-twin.webp','/images/executive-twin-2.webp'],
desc:'Approx. 260 sq ft with mini refrigerator, tea/coffee maker and an electronic safety locker.',amenities:['Tea/coffee maker','Mini refrigerator','Electronic safety locker']},
{id:'suite',name:'Suite Room',size:'482 sq ft',bed:'King-size bed',price:3499,guests:3,img:'/images/suite.webp',gallery:['/images/suite.webp','/images/suite-2.webp'],
desc:'Approx. 482 sq ft with a separate bedroom and a living room with sofa seating.',
amenities:['Separate bedroom','Sitting sofa','Tea/coffee maker','Foot massaging','Mini refrigerator','Mini bar','Coffee dispenser','Hair dryer','Newspaper'],
included:['Air conditioning','24-hour check-in/out','Electronic access','Complimentary breakfast','Room food service','Free Wi-Fi','Doctor on call','Travel assistance','Car parking','Laundry service','Wheelchair assistance','Multi-cuisine restaurant']},
{id:'royal-suite',name:'Royal Suite Room',size:'475 sq ft',bed:'King-size bed',price:6099,guests:3,img:'/images/royal-suite.webp',gallery:['/images/royal-suite.webp','/images/royal-suite-2.webp'],
desc:'Approx. 475 sq ft with a separate bedroom, a living room with sofa and a dining table.',
amenities:['Separate bedroom','Sitting sofa','Dining table','Tea/coffee maker','Foot massaging','Mini refrigerator']}];
export const fmt=n=>'₹'+n.toLocaleString('en-IN');
