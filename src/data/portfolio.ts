import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import fineart1 from "@/assets/fineart-1.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import conceptual1 from "@/assets/conceptual-1.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

export type Category = "Portrait" | "Fine Art" | "Street" | "Conceptual";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
  aspect: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "p1", src: portrait1, alt: "Portrait study in light", category: "Portrait", aspect: "aspect-[3/4]" },
  { id: "fa1", src: hero1, alt: "Mountain solitude", category: "Fine Art", aspect: "aspect-[16/9]" },
  { id: "s1", src: street1, alt: "Rainy night city", category: "Street", aspect: "aspect-square" },
  { id: "c1", src: conceptual1, alt: "Double exposure forest", category: "Conceptual", aspect: "aspect-square" },
  { id: "fa2", src: hero2, alt: "Desert tree at sunset", category: "Fine Art", aspect: "aspect-[16/9]" },
  { id: "p2", src: portrait2, alt: "Character study", category: "Portrait", aspect: "aspect-[3/4]" },
  { id: "s2", src: street2, alt: "Urban fog", category: "Street", aspect: "aspect-[3/2]" },
  { id: "fa3", src: hero3, alt: "Ocean waves", category: "Fine Art", aspect: "aspect-[16/9]" },
  { id: "fa4", src: fineart1, alt: "Light abstract", category: "Fine Art", aspect: "aspect-square" },
];

export const categories: Category[] = ["Portrait", "Fine Art", "Street", "Conceptual"];

export interface Project {
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "solitude",
    image: hero1,
    title: "Solitude",
    subtitle: "A meditation on isolation and the grandeur of untouched landscapes",
    year: "2024",
    description:
      "This series explores the vast emptiness of mountain ranges at dawn, when the world holds its breath. Shot across remote locations in Patagonia and the Swiss Alps over the course of two years, each frame captures the profound stillness that exists when human presence fades into the enormity of nature.",
    images: [hero1, hero3, fineart1],
  },
  {
    slug: "duality",
    image: conceptual1,
    title: "Duality",
    subtitle: "Exploring the boundary between human consciousness and nature",
    year: "2023",
    description:
      "Duality examines the thin veil between our inner worlds and the natural environment. Through double exposures and careful compositions, human forms merge with forests, rivers, and skies — revealing the deep interconnection we often forget.",
    images: [conceptual1, portrait1, street1],
  },
  {
    slug: "remnants",
    image: hero2,
    title: "Remnants",
    subtitle: "Finding beauty in the stark resilience of the natural world",
    year: "2023",
    description:
      "Remnants documents the tenacity of life in arid and abandoned landscapes. From lone desert trees to weathered coastal rocks, this project celebrates the quiet persistence of nature in the face of time and entropy.",
    images: [hero2, street2, portrait2],
  },
];
