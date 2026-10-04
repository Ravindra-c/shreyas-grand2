import {useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import {Check} from 'lucide-react';
import {Img,Btn,Lightbox} from '../components/common.jsx';
import RoomCard from '../components/RoomCard.jsx';
import {rooms,fmt} from '../data/rooms.js';
import {hotel,tel} from '../data/hotel.js';
import {wa,msgs} from '../utils/links.js';
import NotFound from './NotFound.jsx';
const List=({title,items})=><><h2 className="mt-12 text-3xl">{title}</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map(a=><li key={a} className="flex items-center gap-2"><Check size={16} className="text-gold"/>{a}</li>)}</ul></>;
export default function RoomDetails(){const {id}=useParams();const room=rooms.find(r=>r.id===id);const [lb,setLb]=useState(null);const [cur,setCur]=useState(0);
if(!room)return <NotFound/>;const items=room.gallery.map(src=>({src,alt:room.name}));
return <div className="px-5 pb-16 pt-28 md:px-10"><div className="mx-auto max-w-6xl"><Link to="/rooms" className="text-sm text-mist hover:text-ink">← All rooms</Link>
<div className="mt-4 grid gap-8 lg:grid-cols-2"><div><button onClick={()=>setLb(cur)} aria-label="Open fullscreen gallery" className="group block w-full overflow-hidden rounded-2xl"><Img src={items[cur].src} alt={room.name}/></button>
<div className="mt-3 flex gap-2">{items.map((it,i)=><button key={it.src} onClick={()=>setCur(i)} aria-label={`Show image ${i+1}`} aria-current={i===cur} className={`w-24 overflow-hidden rounded-lg border-2 ${i===cur?'border-gold':'border-transparent'}`}><Img src={it.src} alt=""/></button>)}</div></div>
<div><h1 className="text-4xl md:text-5xl">{room.name}</h1><p className="mt-2 text-mist">{room.size} · {room.bed} · Sleeps up to {room.guests}</p><p className="mt-5 leading-relaxed">{room.desc}</p>
<p className="mt-5 text-sm text-mist">Starting from <span className="font-display text-4xl text-ink">{fmt(room.price)}</span> / night</p>
<div className="mt-6 flex flex-wrap gap-3"><Btn to={`/booking?room=${room.id}`} variant="dark">Enquire to Book</Btn><Btn href={wa(msgs.room(room.name))}>WhatsApp</Btn><Btn href={tel(hotel.phone)} variant="dark">Call</Btn></div></div></div>
<List title="Amenities" items={room.amenities}/>{room.included&&<List title="What's included" items={room.included}/>}
<h2 className="mt-14 text-3xl">Other rooms</h2><div className="mt-6 grid gap-6 sm:grid-cols-3">{rooms.filter(r=>r.id!==id).map((r,i)=><RoomCard key={r.id} room={r} i={i}/>)}</div></div>
{lb!==null&&<Lightbox items={items} index={lb} setIndex={i=>{setLb(i);setCur(i)}} onClose={()=>setLb(null)}/>}</div>}
