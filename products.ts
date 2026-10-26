// Add or remove items freely. category: espresso | filter | matcha | signature | beans
export type Product = { name: string; category: "espresso"|"filter"|"matcha"|"signature"|"beans"; price?: string; country?: string; region?: string; producer?: string; variety?: string; process?: string; altitude?: string; tastingNotes?: string; image?: string; featured?: boolean };
export const products: Product[] = [
  { name:"Double Espresso", category:"espresso", price:"80" },
  { name:"Americano", category:"espresso", price:"100" },
  { name:"Cortado", category:"espresso", price:"110" },
  { name:"Flat White", category:"espresso", price:"120" },
  { name:"Latte", category:"espresso", price:"120" },
  { name:"Spanish Latte", category:"espresso", price:"145" },
  { name:"V60", category:"filter", price:"210", tastingNotes:"Choose from the rotating origins below" },
  { name:"Flight Duo", category:"filter", tastingNotes:"Two origins. Two cups. One comparison. Two V60s brewed side by side." },
  { name:"Matcha", category:"matcha", price:"120+" },
  { name:"Orange Espresso", category:"signature", price:"110" },
  { name:"Iced Pistachio", category:"signature", price:"140" },
  // Origins (from the bag labels: please verify every field)
  { name:"Kintamani", category:"beans", country:"Indonesia", region:"Kintamani, Bali", producer:"Karana Global P.S", variety:"Ateng", altitude:"1800 masl", process:"Anaerobic natural", tastingNotes:"Mango, tropical, pineapple cream", image:"/images/coffee/kintamani.jpg", featured:true },
  { name:"Purple Caturra", category:"beans", country:"Colombia", variety:"Purple Caturra", process:"Co-fermented", tastingNotes:"Yellow lemon, cantaloupe, honeydew" },
  { name:"Chelchele", category:"beans", country:"Ethiopia", process:"Natural", tastingNotes:"Apricot, green tea, floral" },
  { name:"Thiriku", category:"beans", country:"Kenya", tastingNotes:"Stone fruit, brown sugar" },
  { name:"Saul Tapiero", category:"beans", country:"Colombia", tastingNotes:"Baked plum, crisp apple, honey" },
  { name:"Antigua", category:"beans", country:"Guatemala" },
];
