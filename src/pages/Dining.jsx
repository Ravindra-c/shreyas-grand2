import {PageHead,Section,Btn} from '../components/common.jsx';
import {hotel,timings} from '../data/hotel.js';
import {wa,msgs} from '../utils/links.js';
import {dishes} from '../data/menu.js';
export default function Dining(){const svc=[['Dine-in','Enjoy pulao and Indian flavours at Taste of Pulao.'],['Takeaway','Take your favourites with you.'],['Delivery','Online delivery through partner platforms.'],['Private dining','Business dinners and special occasions.'],['Events','Customisable menus for celebrations.']];
return <><PageHead title="Taste of Pulao" sub="Pulao and Indian flavours, at the heart of the Shreyas Grand experience." img="/images/restaurant.webp"/>
<Section eyebrow="Signature" title="Pulao, biryani and more" intro={`Explore ${dishes.join(', ')} and many more categories on our menu.`}><Btn to="/menu" variant="dark">View Menu</Btn></Section>
<Section tone="emerald" title="Ways to dine"><ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{svc.map(([t,d])=><li key={t} className="rounded-2xl border border-white/15 p-6"><h3 className="text-2xl text-gold">{t}</h3><p className="mt-2 text-sm text-ivory/70">{d}</p></li>)}</ul>{hotel.orderUrl&&<Btn href={hotel.orderUrl} className="mt-6">Order Online</Btn>}</Section>
<Section tone="sand" title="Timings"><ul className="max-w-md space-y-3">{timings.map(t=><li key={t.meal} className="flex justify-between border-b border-ink/10 pb-2"><span>{t.meal}</span><span>{t.time}</span></li>)}</ul><Btn href={wa(msgs.dining)} className="mt-8">Reserve a Table</Btn></Section></>}
