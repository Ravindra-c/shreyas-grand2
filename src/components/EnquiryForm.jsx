import {useState} from 'react';
import {hotel} from '../data/hotel.js';
import {rooms} from '../data/rooms.js';
import {wa} from '../utils/links.js';
const F={stay:[['name','Full name','text',1],['phone','Phone','tel',1],['email','Email','email'],['checkin','Check-in','date',1],['checkout','Check-out','date',1],['adults','Adults','number'],['children','Children','number'],['rooms','Rooms','number'],['roomType','Room type','select'],['message','Special request','textarea']],
event:[['name','Full name','text',1],['phone','Phone','tel',1],['email','Email','email'],['eventType','Event type','text',1],['date','Event date','date'],['guests','Expected guests (max 350)','number'],['message','Details','textarea']]};
export default function EnquiryForm({kind='stay',defaultRoom=''}){
const [v,setV]=useState({adults:'2',children:'0',rooms:'1',roomType:defaultRoom});const [err,setErr]=useState({});const [st,setSt]=useState('idle');
const set=(k,val)=>setV(p=>({...p,[k]:val}));
const validate=()=>{const e={};F[kind].forEach(([k,l,,r])=>{if(r&&!v[k]?.trim())e[k]=`${l} is required`});
if(v.phone&&!/^[+\d][\d\s-]{8,14}$/.test(v.phone))e.phone='Enter a valid phone number';if(v.email&&!/^\S+@\S+\.\S+$/.test(v.email))e.email='Enter a valid email';
if(v.checkin&&v.checkout&&v.checkout<=v.checkin)e.checkout='Check-out must be after check-in';if(kind==='event'&&v.guests&&(+v.guests<1||+v.guests>350))e.guests='Capacity is up to 350 guests';return e};
const submit=async ev=>{ev.preventDefault();if(st==='loading')return;const e=validate();setErr(e);if(Object.keys(e).length)return;setSt('loading');
const text=(kind==='stay'?'Hello Shreyas Grand, I would like to enquire about a stay.':'Hello Shreyas Grand, I would like to enquire about a banquet event.')+'\n'+F[kind].filter(([k])=>v[k]).map(([k,l])=>`${l}: ${v[k]}`).join('\n');
try{if(hotel.formEndpoint){const r=await fetch(hotel.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind,...v})});if(!r.ok)throw new Error('failed')}else window.open(wa(text),'_blank','noopener');setSt('success')}catch{setSt('error')}};
if(st==='success')return <div role="status" className="rounded-2xl border border-gold/40 bg-white p-8 text-center"><h3 className="text-2xl">Thank you</h3><p className="mt-2 text-mist">Your enquiry has been sent. This is an enquiry, not a confirmed booking — our team will contact you to confirm availability and rates.</p></div>;
const cls='mt-1 w-full rounded-lg border border-ink/20 bg-white px-3 py-2.5 text-base';
return <form onSubmit={submit} noValidate className="grid gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm sm:grid-cols-2 md:p-8">
{F[kind].map(([k,l,t,r])=><div key={k} className={t==='textarea'?'sm:col-span-2':''}><label htmlFor={k} className="text-sm font-medium">{l}{r&&<span aria-hidden="true"> *</span>}</label>
{t==='textarea'?<textarea id={k} rows={3} className={cls} value={v[k]||''} onChange={e=>set(k,e.target.value)}/>:t==='select'?<select id={k} className={cls} value={v[k]||''} onChange={e=>set(k,e.target.value)}><option value="">No preference</option>{rooms.map(r=><option key={r.id} value={r.name}>{r.name}</option>)}</select>:
<input id={k} type={t} min={t==='number'?0:undefined} required={!!r} aria-invalid={!!err[k]} aria-describedby={err[k]?k+'-e':undefined} className={cls} value={v[k]||''} onChange={e=>set(k,e.target.value)}/>}
{err[k]&&<p id={k+'-e'} role="alert" className="mt-1 text-sm text-red-700">{err[k]}</p>}</div>)}
<div className="sm:col-span-2"><button disabled={st==='loading'} className="min-h-11 w-full rounded-full bg-emerald px-6 py-3 font-medium text-ivory transition hover:bg-wine disabled:opacity-60">{st==='loading'?'Sending…':kind==='stay'?'Send Enquiry':'Plan Your Event'}</button>
{st==='error'&&<p role="alert" className="mt-2 text-sm text-red-700">Something went wrong. Please try again or call {hotel.phone}.</p>}
<p className="mt-3 text-xs text-mist">Availability is confirmed by our team. {hotel.formEndpoint?'':'Submitting opens WhatsApp with your details.'}</p></div></form>}
