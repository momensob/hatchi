import { siteConfig } from "@/data/siteConfig";
export default function sitemap(){ return [{ url: siteConfig.url, lastModified: new Date() }]; }
