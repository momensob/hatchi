// Leave empty to show "SOMETHING IS BREWING." Dates are ISO (YYYY-MM-DD), time is local Cairo.
export type HatchiEvent = { title:string; date:string; time:string; description:string; location?:string; image?:string; bookingURL?:string; calendarURL?:string };
export const events: HatchiEvent[] = [
  // { title:"Vinyl Session", date:"2026-11-14", time:"20:00", description:"Records, filter coffee, no rush.", bookingURL:"" },
];
