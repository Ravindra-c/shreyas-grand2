import {Link} from 'react-router-dom';
import {Img,Reveal,Btn} from './common.jsx';
import {fmt} from '../data/rooms.js';
import {wa,msgs} from '../utils/links.js';
export default function RoomCard({room,i=0}){return <Reveal delay={i*.08} className="h-full"><article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:shadow-xl">
<Link to={`/rooms/${room.id}`} aria-label={`View ${room.name}`}><Img src={room.img} alt={room.name}/></Link>
<div className="flex flex-1 flex-col p-5"><h3 className="text-2xl">{room.name}</h3><p className="mt-1 text-sm text-mist">{room.size} · {room.bed}</p>
<ul className="mt-3 flex flex-wrap gap-2 text-xs">{room.amenities.slice(0,4).map(a=><li key={a} className="rounded-full bg-ivory px-3 py-1">{a}</li>)}</ul>
<p className="mt-auto pt-5 text-sm text-mist">Starting from <span className="font-display text-2xl text-ink">{fmt(room.price)}</span></p>
<div className="mt-3 flex flex-wrap gap-2"><Btn to={`/rooms/${room.id}`} variant="dark">View details</Btn><Btn href={wa(msgs.room(room.name))} variant="ghost">Enquire</Btn></div></div></article></Reveal>}
