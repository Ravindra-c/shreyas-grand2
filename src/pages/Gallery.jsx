import {useState} from 'react';
import {PageHead,Section,Img,Lightbox} from '../components/common.jsx';
import {gallery,galleryCategories} from '../data/gallery.js';
export default function Gallery(){const [cat,setCat]=useState('All');const [i,setI]=useState(null);const list=gallery.filter(g=>cat==='All'||g.cat===cat);
return <><PageHead title="Gallery" img="/images/hotel-exterior.webp"/><Section><div className="mb-8 flex flex-wrap gap-2">{['All',...galleryCategories].map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`rounded-full px-4 py-2 text-sm ${cat===c?'bg-emerald text-ivory':'bg-white'}`}>{c}</button>)}</div>
{list.length?<ul className="grid grid-cols-2 gap-3 md:grid-cols-3">{list.map((g,n)=><li key={g.src}><button onClick={()=>setI(n)} aria-label={`Open ${g.caption}`} className="group block w-full overflow-hidden rounded-xl"><Img src={g.src} alt={g.caption} ratio={n%3===0?'aspect-[3/4]':'aspect-[4/3]'}/></button></li>)}</ul>:<p className="py-16 text-center text-mist">No photos in this category yet.</p>}
{i!==null&&<Lightbox items={list} index={i} setIndex={setI} onClose={()=>setI(null)}/>}</Section></>}
