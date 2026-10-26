import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { siteConfig as c } from "@/data/siteConfig";
import "./globals.css";
const display = Bebas_Neue({ weight:"400", subsets:["latin"], variable:"--f-display", display:"swap" });
const body = Manrope({ subsets:["latin"], variable:"--f-body", display:"swap" });
const title = "Hatchi Specialty Coffee | Japanese-Inspired Coffee in Sheikh Zayed";
const description = "Hatchi Specialty Coffee brings Japanese-inspired coffee culture to Sheikh Zayed, Egypt. Discover specialty espresso, V60, matcha, rotating coffee origins, events and the Hatchi community.";
export const metadata: Metadata = {
  metadataBase: new URL(c.url), title, description, alternates:{canonical:"/"},
  openGraph:{ title, description, url:c.url, siteName:c.name, type:"website", images:["/images/hero/hero.jpg"] },
  twitter:{ card:"summary_large_image", title, description, images:["/images/hero/hero.jpg"] },
};
const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const ld = { "@context":"https://schema.org", "@type":"CafeOrCoffeeShop", name:c.name, url:c.url,
  image:`${c.url}/images/hero/hero.jpg`, priceRange:"EGP 80 - 210",
  description:"A Tokyo-inspired specialty coffee experience in Sheikh Zayed, Egypt.",
  address:{ "@type":"PostalAddress", streetAddress:c.address.street, addressLocality:c.address.locality, addressRegion:c.address.region, addressCountry:c.address.country },
  openingHoursSpecification:[{ "@type":"OpeningHoursSpecification", dayOfWeek:days, opens:c.hours.open, closes:c.hours.close }],
  ...(c.phone && { telephone:c.phone }),
  ...(c.latitude && c.longitude && { geo:{ "@type":"GeoCoordinates", latitude:c.latitude, longitude:c.longitude } }),
  ...(c.googleMapsURL && { hasMap:c.googleMapsURL }),
  sameAs:[c.instagramURL, c.googleMapsURL].filter(Boolean) };
export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}} />
    {children}</body></html>);
}
