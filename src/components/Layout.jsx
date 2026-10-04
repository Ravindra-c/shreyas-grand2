import {useState,useEffect} from 'react';
import {Link,NavLink,Outlet,useLocation} from 'react-router-dom';
import {Menu,X,Phone,MessageCircle,MapPin,CalendarCheck} from 'lucide-react';
import {hotel,nav,tel,timings} from '../data/hotel.js';
import {wa,msgs} from '../utils/links.js';
import {Btn} from './common.jsx';
export default function Layout(){const [open,setOpen]=useState(false);const [sc,setSc]=useState(false);const {pathname}=useLocation();
useEffect(()=>{const f=()=>setSc(window.scrollY>40);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname]);
const solid=sc||open||pathname!=='/';
return <>
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:p-3">Skip to content</a>
<header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid?'bg-emerald/95 py-2 shadow-lg backdrop-blur':'py-4'} text-ivory`}>
<div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-10"><Link to="/" className="font-display text-xl tracking-wide md:text-2xl">SHREYAS <span className="text-gold">GRAND</span></Link>
<nav aria-label="Main" className="hidden items-center gap-7 text-sm lg:flex">{nav.map(([to,l])=><NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all ${isActive?'after:w-full':'after:w-0 hover:after:w-full'}`}>{l}</NavLink>)}</nav>
<div className="flex items-center gap-3"><Btn to="/booking" className="hidden !py-2 lg:inline-flex">Book Now</Btn><button className="grid h-11 w-11 place-items-center lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div>
{open&&<nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto px-5 pb-6 lg:hidden">{nav.map(([to,l])=><NavLink key={to} to={to} end={to==='/'} className="block border-b border-white/10 py-3 font-display text-2xl">{l}</NavLink>)}
<div className="mt-5 grid gap-3"><Btn to="/booking">Book Your Stay</Btn><Btn href={wa(msgs.general)} variant="ghost">WhatsApp</Btn><Btn href={tel(hotel.phone)} variant="ghost">Call {hotel.phone}</Btn></div></nav>}</header>
<main id="main"><Outlet/></main>
<footer className="bg-navy px-5 pb-10 pt-16 text-ivory/75 md:px-10"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
<div><p className="font-display text-2xl text-ivory">SHREYAS <span className="text-gold">GRAND</span></p><p className="mt-3 text-sm">Luxury rooms, dining and banquets opposite Anantapur Railway Station.</p></div>
<div><h3 className="mb-3 text-lg text-ivory">Explore</h3><ul className="space-y-2 text-sm">{[['/rooms','Luxury Rooms'],['/dining','Dining'],['/banquets','Banquets'],['/gallery','Gallery'],['/contact','Contact']].map(([t,l])=><li key={t}><Link className="hover:text-gold" to={t}>{l}</Link></li>)}</ul></div>
<div className="text-sm"><h3 className="mb-3 text-lg text-ivory">Contact</h3><address className="not-italic">{hotel.address}</address><p className="mt-2"><a className="hover:text-gold" href={tel(hotel.phone)}>{hotel.phone}</a><br/><a className="hover:text-gold" href={tel(hotel.phoneAlt)}>{hotel.phoneAlt}</a><br/><a className="break-all hover:text-gold" href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
<div className="mt-3 flex gap-4">{[['Instagram',hotel.instagram],['Facebook',hotel.facebook]].filter(s=>s[1]).map(([n,u])=><a key={n} href={u} className="hover:text-gold" target="_blank" rel="noopener noreferrer">{n}</a>)}</div></div>
<div className="text-sm"><h3 className="mb-3 text-lg text-ivory">Restaurant hours</h3>{timings.map(t=><p key={t.meal}>{t.meal}: {t.time}</p>)}<Btn href={hotel.mapsUrl} variant="ghost" className="mt-4">Open in Google Maps</Btn></div></div>
<p className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-xs">© Shreyas Grand. All rights reserved.</p></footer>
<nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-white/10 bg-emerald text-[11px] text-ivory md:hidden">
{[[Phone,'Call',tel(hotel.phone)],[MessageCircle,'WhatsApp',wa(msgs.general)],[MapPin,'Directions',hotel.directionsUrl],[CalendarCheck,'Book','/booking']].map(([I,l,h])=>h.startsWith('/')?<Link key={l} to={h} className="flex h-16 flex-col items-center justify-center gap-1 text-gold"><I size={20}/>{l}</Link>:<a key={l} href={h} {...(h.startsWith('http')?{target:'_blank',rel:'noopener noreferrer'}:{})} className="flex h-16 flex-col items-center justify-center gap-1"><I size={20}/>{l}</a>)}</nav></>}
