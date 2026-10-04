import {PageHead,Section,Btn} from '../components/common.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import {banquet} from '../data/hotel.js';
import {wa,msgs} from '../utils/links.js';
export default function Banquet(){return <><PageHead title="Celebrate Moments That Matter" sub={`Celebrate at Shreyas Grand — capacity up to ${banquet.capacity} guests.`} img="/images/banquet.webp"/>
<Section tone="sand" eyebrow="Occasions" title="Events we host"><ul className="flex flex-wrap gap-3">{banquet.events.map(e=><li key={e} className="rounded-full border border-gold/60 px-5 py-2">{e}</li>)}</ul></Section>
<Section tone="wine" title="Venue features"><ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{banquet.features.map(f=><li key={f} className="rounded-xl border border-white/15 p-5">{f}</li>)}</ul><Btn href={wa(msgs.banquet)} className="mt-8">Enquire on WhatsApp</Btn></Section>
<Section id="enquire" title="Plan Your Event" intro="Tell us about your event and our team will get back to you."><div className="max-w-3xl"><EnquiryForm kind="event"/></div></Section></>}
