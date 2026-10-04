// PLACEHOLDER MENU — replace with the real menu. price:null shows "Price on request".
export const categories=['Pulao','Biryani','Starters','South Indian','Chinese','Tandoori','Main Course','Breads','Desserts','Beverages'];
const i=(category,name,veg,popular=false)=>({id:category+name,category,name,veg,popular,price:null,desc:'Description to be added by the restaurant.',img:'/images/food-placeholder.webp'});
export const menu=[i('Pulao','Signature Pulao (edit name)',true,true),i('Pulao','Chicken Pulao (edit name)',false,true),i('Biryani','Veg Biryani (edit name)',true),i('Biryani','Chicken Biryani (edit name)',false,true),
i('Starters','Paneer Starter (edit name)',true),i('Starters','Chicken Starter (edit name)',false),i('South Indian','Dosa (edit name)',true),i('Chinese','Veg Noodles (edit name)',true),
i('Tandoori','Tandoori Platter (edit name)',false),i('Main Course','Dal / Curry (edit name)',true),i('Breads','Naan / Roti (edit name)',true),i('Desserts','Dessert (edit name)',true),i('Beverages','Beverage (edit name)',true)];
export const dishes=['Pulao','Biryani','Tandoori'];
