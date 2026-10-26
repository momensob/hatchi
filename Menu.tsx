"use client";
import { useState } from "react";
import { products } from "@/data/products";
const tabs = ["all","espresso","filter","matcha","signature","beans"] as const;
export default function Menu() {
  const [t, setT] = useState<(typeof tabs)[number]>("all");
  const list = products.filter(p => t==="all" || p.category===t);
  return (<div>
    <div role="tablist" aria-label="Filter coffee" className="tabs">
      {tabs.map(x => <button key={x} role="tab" aria-selected={t===x} onClick={()=>setT(x)}>{x}</button>)}
    </div>
    <ul className="menu">
      {list.map(p => (<li key={p.name+p.category}>
        <div className="mh"><h3>{p.name}</h3>{p.price && <span>{p.price} EGP</span>}</div>
        <p className="meta">{[p.country,p.region,p.variety,p.process,p.altitude].filter(Boolean).join(" / ")}</p>
        {p.tastingNotes && <p className="notes">{p.tastingNotes}</p>}
      </li>))}
    </ul></div>);
}
