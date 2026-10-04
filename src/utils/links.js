import {hotel} from '../data/hotel.js';
export const wa=msg=>`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(msg)}`;
export const msgs={general:'Hello Shreyas Grand, I would like to enquire about booking a room.',room:n=>`Hello Shreyas Grand, I am interested in the ${n}.`,banquet:'Hello Shreyas Grand, I would like to enquire about a banquet event.',dining:'Hello Shreyas Grand, I would like to enquire about dining / a table reservation.'};
