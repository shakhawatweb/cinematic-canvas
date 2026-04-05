import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import fineart1 from "@/assets/fineart-1.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import conceptual1 from "@/assets/conceptual-1.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export type ShopCategory = "All" | "Portrait" | "Fine Art" | "Street" | "Conceptual";

export interface ShopImage {
  id: string;
  slug: string;
  src: string;
  title: string;
  description: string;
  category: Exclude<ShopCategory, "All">;
  price: number;
  dimensions: string;
  format: string;
  aspect: string;
}

export const shopImages: ShopImage[] = [
  {
    id: "shop-1",
    slug: "portrait-in-light",
    src: portrait1,
    title: "Portrait in Light",
    description: "A study of natural light falling across the subject's features, capturing the interplay between shadow and illumination. This intimate portrait reveals the quiet strength found in stillness.",
    category: "Portrait",
    price: 29,
    dimensions: "4000 × 5333",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[3/4]",
  },
  {
    id: "shop-2",
    slug: "mountain-solitude",
    src: hero1,
    title: "Mountain Solitude",
    description: "Dawn breaks over the Patagonian peaks, painting the sky in gradients of amber and violet. The absolute silence of the mountains at this hour is almost palpable in the frame.",
    category: "Fine Art",
    price: 49,
    dimensions: "6000 × 3375",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[16/9]",
  },
  {
    id: "shop-3",
    slug: "rainy-night-city",
    src: street1,
    title: "Rainy Night City",
    description: "Neon reflections scatter across rain-soaked asphalt, transforming an ordinary city street into a canvas of light and color. A solitary figure navigates the urban glow.",
    category: "Street",
    price: 35,
    dimensions: "4000 × 4000",
    format: "JPEG, 300 DPI",
    aspect: "aspect-square",
  },
  {
    id: "shop-4",
    slug: "double-exposure-forest",
    src: conceptual1,
    title: "Double Exposure Forest",
    description: "Human consciousness merges with ancient woodland in this double exposure piece. The boundary between self and nature dissolves into a single, haunting composition.",
    category: "Conceptual",
    price: 45,
    dimensions: "4000 × 4000",
    format: "JPEG, 300 DPI",
    aspect: "aspect-square",
  },
  {
    id: "shop-5",
    slug: "desert-resilience",
    src: hero2,
    title: "Desert Resilience",
    description: "A lone tree stands against the vastness of the desert, its silhouette etched against a burning sunset. A testament to the tenacity of life in the harshest conditions.",
    category: "Fine Art",
    price: 49,
    dimensions: "6000 × 3375",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[16/9]",
  },
  {
    id: "shop-6",
    slug: "character-study",
    src: portrait2,
    title: "Character Study",
    description: "An unguarded moment captured in available light. The subject's expression carries the weight of a thousand unspoken stories, rendered in rich tonal gradations.",
    category: "Portrait",
    price: 29,
    dimensions: "4000 × 5333",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[3/4]",
  },
  {
    id: "shop-7",
    slug: "urban-fog",
    src: street2,
    title: "Urban Fog",
    description: "Morning fog transforms the cityscape into a dreamlike vision. Buildings emerge and disappear like memories, while the city slowly awakens beneath the mist.",
    category: "Street",
    price: 35,
    dimensions: "5000 × 3333",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[3/2]",
  },
  {
    id: "shop-8",
    slug: "ocean-eternal",
    src: hero3,
    title: "Ocean Eternal",
    description: "The relentless rhythm of ocean waves crashing against ancient rock formations. Shot with long exposure to render the water as ethereal silk against solid stone.",
    category: "Fine Art",
    price: 55,
    dimensions: "6000 × 3375",
    format: "JPEG, 300 DPI",
    aspect: "aspect-[16/9]",
  },
  {
    id: "shop-9",
    slug: "light-abstract",
    src: fineart1,
    title: "Light Abstract",
    description: "Pure light becomes the subject in this abstract exploration. Refracted and reflected through prisms of glass and water, light reveals its hidden spectrum.",
    category: "Fine Art",
    price: 39,
    dimensions: "4000 × 4000",
    format: "JPEG, 300 DPI",
    aspect: "aspect-square",
  },
];

export const shopCategories: ShopCategory[] = ["All", "Portrait", "Fine Art", "Street", "Conceptual"];
