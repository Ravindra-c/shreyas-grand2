// Replace file names with real client photos in /public/images
const g=(cat,file,caption)=>({cat,src:'/images/'+file,caption});
export const galleryCategories=['Property','Rooms','Dining','Food','Banquet','Exterior'];
export const gallery=[g('Exterior','hotel-exterior.webp','Shreyas Grand, opposite Anantapur Railway Station'),g('Property','lobby.webp','Reception and lobby'),g('Rooms','executive-king.webp','Executive King Size Room'),g('Rooms','executive-twin.webp','Executive Twin Bed Room'),g('Rooms','suite.webp','Suite Room'),g('Rooms','royal-suite.webp','Royal Suite Room'),g('Dining','restaurant.webp','Taste of Pulao'),g('Food','food-1.webp','From the kitchen'),g('Banquet','banquet.webp','Banquet hall')];
