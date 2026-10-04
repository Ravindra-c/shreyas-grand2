// Single source of truth: contact, config, timings, banquet, nearby, review summary.
export const hotel={name:'Shreyas Grand',publicName:'Shreyas Grand Luxury Rooms',
phone:'+91 95535 55856',phoneAlt:'+91 95535 55847',whatsapp:'919553555856',email:'info@hotelshreyasgrand.com',
address:'#13-2754/756, Srinivas Nagar, Opposite Railway Station, Anantapur, Andhra Pradesh 515001, India',
mapsUrl:'https://www.google.com/maps/search/?api=1&query=Shreyas+Grand+Luxury+Rooms+Anantapur',
directionsUrl:'https://www.google.com/maps/dir/?api=1&destination=Shreyas+Grand+Luxury+Rooms+Anantapur',
reviewsUrl:'https://www.google.com/maps/search/?api=1&query=Shreyas+Grand+Luxury+Rooms+Anantapur',
instagram:'',facebook:'',orderUrl:'',bookingUrl:'',
formEndpoint:import.meta.env.VITE_FORM_ENDPOINT||'',
rating:'4.7',reviewsLabel:'1,000+'};
export const tel=p=>'tel:'+p.replace(/\s/g,'');
export const timings=[{meal:'Breakfast',time:'07:30 AM – 10:30 AM'},{meal:'Lunch',time:'12:00 PM – 04:00 PM'},{meal:'Dinner',time:'07:00 PM – 11:00 PM'}];
export const trust=['Free Wi-Fi','Complimentary breakfast','Free parking','Air conditioning'];
export const reviewThemes=['Breakfast','Dining','Service','Atmosphere','Location','Cleanliness','Family stays','Business stays'];
export const banquet={capacity:350,events:['Weddings','Corporate events','Birthdays','Anniversaries','Private celebrations','Conferences','Product launches','Family gatherings'],
features:['Modern AV technology','Professional sound system','High-speed internet','Parking','Customized menus','Custom seating & dance floor','Decorations','Professional event planning']};
// distance: add e.g. '2 km' only when verified
export const nearby=['Anantapur Railway Station','Clock Tower','ISKCON Temple','Rajiv Park','Sri Vasavi Kanyakaparameswari Temple','Anantapur Museum','Venkateshwara Swamy Temple','Sri Baktha Anjaneya Swamy Temple','National Park','Aqua Thrills Water Park'].map(name=>({name,distance:''}));
export const nav=[['/','Home'],['/rooms','Stay'],['/dining','Dining'],['/banquets','Banquets'],['/gallery','Gallery'],['/about','About'],['/contact','Contact']];
