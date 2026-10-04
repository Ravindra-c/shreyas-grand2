import {useSearchParams} from 'react-router-dom';
import {PageHead,Section} from '../components/common.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import {rooms} from '../data/rooms.js';
export default function Booking(){const [p]=useSearchParams();const r=rooms.find(x=>x.id===p.get('room'));
return <><PageHead title="Book Your Stay" sub="Send an enquiry — our team will confirm availability and rates." img="/images/suite.webp"/><Section><div className="max-w-3xl"><EnquiryForm defaultRoom={r?.name||''}/></div></Section></>}
