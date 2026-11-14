export const Arrow = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowUR = ({ s = 18 }: { s?: number }) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>);
export const Starburst = () => (<svg className="sb" viewBox="-50 -50 100 100" fill="none" stroke="#B05A3A" strokeWidth="1.1" strokeLinecap="round" aria-hidden>{Array.from({ length: 36 }, (_, k) => <line key={k} y1="-14" y2={k % 2 ? -34 : -46} transform={`rotate(${k * 10})`} />)}</svg>);
const ic = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
export const PhoneIcon = () => (<svg {...ic}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>);
export const MailIcon = () => (<svg {...ic}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
export const InstaIcon = () => (<svg {...ic}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>);
