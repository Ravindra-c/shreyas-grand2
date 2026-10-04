import {useState} from 'react';
import {PageHead,Section} from '../components/common.jsx';
import RoomCard from '../components/RoomCard.jsx';
import {rooms} from '../data/rooms.js';
export default function Rooms(){const [sort,setSort]=useState('');const list=[...rooms].sort((a,b)=>sort==='asc'?a.price-b.price:sort==='desc'?b.price-a.price:0);
return <><PageHead title="Rooms & Suites" sub="Four room categories, from ₹2,499 per night (starting prices)." img="/images/suite.webp"/><Section>
<label className="mb-6 flex items-center gap-3 text-sm">Sort by price<select value={sort} onChange={e=>setSort(e.target.value)} className="rounded-lg border border-ink/20 bg-white px-3 py-2"><option value="">Featured</option><option value="asc">Low to high</option><option value="desc">High to low</option></select></label>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{list.map((r,i)=><RoomCard key={r.id} room={r} i={i}/>)}</div></Section></>}
