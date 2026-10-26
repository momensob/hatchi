import Image from "next/image";
import { siteConfig as c } from "@/data/siteConfig";
import { products } from "@/data/products";
import { events } from "@/data/events";
import { gallery } from "@/data/gallery";
import { instagramContent } from "@/data/instagram";
import Menu from "@/components/Menu";
const ig = c.instagramURL || "#";
const maps = c.googleMapsURL || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Hatchi Specialty Coffee Eden Plaza Mall Sheikh Zayed")}`;
const f = products.find(p => p.featured);
const ev = events.filter(e => new Date(e.date) >= new Date(new Date().toDateString())).sort((a,b)=>a.date.localeCompare(b.date))[0];
const gcal = (e: NonNullable<typeof ev>) => { const d=e.date.replace(/-/g,""), t=e.time.replace(":","")+"00"; return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&dates=${d}T${t}/${d}T${t}&location=${encodeURIComponent("Hatchi, Eden Plaza Mall, Sheikh Zayed")}`; };
const mailto = `mailto:${c.email}`;
export default function Home() {
  return (<>
    <header className="nav">
      <a href="#top" aria-label="Hatchi home"><img src="/logo.svg" alt="Hatchi" className="logo" /></a>
      <nav aria-label="Primary" className="links">
        <a href="#story">Story</a><a href="#coffee">Coffee</a><a href="#events">Events</a><a href="#gallery">Gallery</a><a href="#visit">Visit</a><a href={ig}>Instagram</a>
      </nav>
      <details className="mnav"><summary aria-label="Menu">Menu</summary>
        <div><a href="#story">Story</a><a href="#coffee">Coffee</a><a href="#events">Events</a><a href="#gallery">Gallery</a><a href="#visit">Visit</a><a href={ig}>Instagram</a></div>
      </details>
    </header>
    <main id="top">
      <section className="hero">
        <Image src="/images/hero/hero.jpg" alt="The Hatchi bar at Eden Plaza in afternoon light" fill priority sizes="100vw" className="cover zoom" />
        <div className="shade" />
        <div className="hero-in">
          <h1>HATCHI</h1>
          <p className="sub">Specialty Coffee<br/>Sheikh Zayed, Cairo</p>
          <p className="tag">Tokyo-inspired coffee culture. Brewed in Egypt.</p>
          <p className="hrs">Open daily<b>09:00 — 23:00</b></p>
          <div className="cta"><a className="btn" href="#coffee">View coffee</a><a className="btn ghost" href="#visit">Visit Hatchi</a></div>
        </div>
        <span className="vlabel">Tokyo 35.6762° N / Cairo 30.0444° N</span>
      </section>

      <section className="manifesto"><p>Good coffee, music and people, without unnecessary noise.</p></section>

      {f && <section className="featured" aria-labelledby="cb">
        <div className="ph"><Image src={f.image!} alt={`Hatchi bag of ${f.country} ${f.name}`} width={848} height={1280} sizes="(max-width:800px) 100vw, 40vw" /></div>
        <div>
          <p id="cb" className="label">Currently brewing</p>
          <h2 className="big">{f.name}</h2><p className="big2">{f.country}</p>
          <dl>
            {f.tastingNotes && <><dt>Tasting notes</dt><dd>{f.tastingNotes}</dd></>}
            {f.process && <><dt>Process</dt><dd>{f.process}</dd></>}
            {f.altitude && <><dt>Altitude</dt><dd>{f.altitude}</dd></>}
            {f.variety && <><dt>Variety</dt><dd>{f.variety}</dd></>}
            <dt>Roast</dt><dd>Filter</dd><dt>Recommended</dt><dd>V60</dd>
          </dl>
        </div>
      </section>}

      <section id="coffee" className="sec"><h2 className="h"><span>01</span> Coffee</h2><Menu /></section>

      <section id="story" className="sec story">
        <h2 className="h"><span>02</span> Our story</h2>
        <p className="lede">From a coffee cart<br/>to a community.</p>
        <div className="cols">
          <div><p>Hatchi started with a simple idea: a place where good coffee, music, people and culture could exist without unnecessary noise.</p>
          <p>Inspired by Japanese attention to detail and omotenashi, every cup is approached with intention, from the beans we choose to how they are served.</p>
          <p>A pop-up became a community around coffee, music, art and shared moments.</p></div>
          <div className="ph"><Image src="/images/gallery/10.jpg" alt="The Hatchi cart and umbrella at Eden Plaza" width={960} height={1280} sizes="(max-width:800px) 100vw, 40vw" loading="lazy" /></div>
        </div>
        <ul className="three"><li><h3>Craft</h3><p>Every variable matters.</p></li><li><h3>Calm</h3><p>Coffee should create space, not noise.</p></li><li><h3>Connection</h3><p>The best coffee experiences are shared.</p></li></ul>
      </section>

      <section id="events" className="sec"><h2 className="h"><span>03</span> Next at Hatchi</h2>
        {ev ? (<article className="event">
          <h3 className="big">{ev.title}</h3>
          <p>{new Date(ev.date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})} / {ev.time} / {ev.location || "Hatchi, Eden Plaza Mall"}</p>
          <p>{ev.description}</p>
          <div className="cta">{ev.bookingURL && <a className="btn" href={ev.bookingURL}>View event</a>}<a className="btn ghost" href={ev.calendarURL || gcal(ev)}>Add to calendar</a><a className="btn ghost" href={maps}>Get directions</a></div>
        </article>) : (<div className="event"><p className="big">Something is brewing.</p><p>Follow Hatchi on Instagram for the next gathering.</p><a className="btn" href={ig}>Instagram</a></div>)}
      </section>

      <section className="sec"><h2 className="h"><span>04</span> Hatchi / in motion</h2>
        <div className="reels">{instagramContent.length ? instagramContent.map(i=>(<a key={i.url} href={i.url} className={`reel ${i.type}`}><span>{i.type}</span><p>{i.caption}</p></a>)) : <a href={ig} className="reel"><span>Instagram</span><p>Reels, brews and nights at Hatchi.</p></a>}</div>
      </section>

      <section id="gallery" className="sec"><h2 className="h"><span>05</span> Moments at Hatchi</h2>
        <div className="grid">{gallery.map(g=>(<figure key={g.image} className={g.size}><Image src={g.image} alt={g.caption} fill sizes="(max-width:800px) 50vw, 33vw" loading="lazy" className="cover" /><figcaption>{g.caption}</figcaption></figure>))}</div>
      </section>

      <section id="visit" className="sec visit"><h2 className="h"><span>06</span> Visit Hatchi</h2>
        <div className="cols"><div><p className="big">Eden Plaza Mall<br/>Sheikh Zayed<br/>Giza, Egypt</p><p className="hrs">Open daily <b>09:00 — 23:00</b></p><a className="btn" href={maps}>Get directions</a></div>
        {c.mapsEmbedURL ? <iframe title="Hatchi on Google Maps" src={c.mapsEmbedURL} loading="lazy" className="map" referrerPolicy="no-referrer-when-downgrade" /> : <div className="map ph2">Add mapsEmbedURL in data/siteConfig.ts</div>}</div>
      </section>

      <section id="contact" className="sec"><h2 className="h"><span>07</span> Collaborate with Hatchi</h2>
        <p>Events, brand collaborations, coffee partnerships, pop-ups, corporate events, community projects.</p>
        <p className="meta">{[c.instagramURL&&"Instagram",c.email,c.phone,c.whatsapp&&`WhatsApp ${c.whatsapp}`].filter(Boolean).join(" / ")}</p>
        <form action={c.formEndpoint || mailto} method="post" encType={c.formEndpoint?undefined:"text/plain"}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows={5} required minLength={10} /></label>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
          <button className="btn" type="submit">Send</button>
        </form>
      </section>
    </main>
    <footer className="foot"><img src="/logo.svg" alt="Hatchi" className="logo" /><p>Specialty Coffee<br/>Sheikh Zayed — Cairo<br/>09:00 — 23:00 daily</p>
      <p><a href={ig}>Instagram</a> <a href={maps}>Google Maps</a> <a href="#contact">Contact</a></p><p className="meta">Coffee / Culture / Connection<br/>© Hatchi Specialty Coffee</p></footer>
    <div className="dock"><a href={maps}>Directions</a><a href="#coffee">Menu</a></div>
  </>);
}
