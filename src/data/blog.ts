import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import street1 from "@/assets/street-1.jpg";
import conceptual1 from "@/assets/conceptual-1.jpg";

export type BlogCategory = "Tutorial" | "Behind the Lens" | "Philosophy" | "Gear";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-art-of-seeing-light",
    title: "The Art of Seeing Light",
    excerpt: "How training your eye to read light transforms ordinary scenes into extraordinary photographs.",
    coverImage: hero1,
    category: "Philosophy",
    date: "2024-12-15",
    readTime: "6 min",
    content: `Light is the fundamental material of photography. Not the camera, not the lens — light. Every photograph is, at its core, a record of how light interacted with the world at a specific moment in time.

## Learning to See

Most people walk through the world without truly seeing the light around them. They notice "bright" or "dark," "sunny" or "cloudy." But a photographer must see beyond these simple observations. You must notice the quality of light — is it hard or soft? The direction — where are the shadows falling? The color temperature — is it the warm gold of sunrise or the cool blue of shade?

## The Golden Hours

The hours just after sunrise and before sunset are called the golden hours for good reason. The sun sits low on the horizon, casting long shadows and bathing everything in warm, directional light. This is when the world becomes three-dimensional in photographs — when texture becomes visible, when depth emerges.

## Embracing Difficult Light

But great photographs can be made in any light. Harsh midday sun creates dramatic contrasts. Overcast skies provide the world's largest softbox. Rain adds reflections and mood. Fog creates mystery and depth through atmospheric perspective.

The key is not to wait for perfect light, but to understand the light you have and use it intentionally.

## Practice

Spend a week photographing the same scene at different times of day. Watch how the light transforms it. You'll begin to see light not as something that happens to you, but as a tool you can wield.`,
  },
  {
    slug: "patagonia-expedition-journal",
    title: "Patagonia: An Expedition Journal",
    excerpt: "Two weeks in the wild — documenting the raw beauty of South America's last frontier.",
    coverImage: hero2,
    category: "Behind the Lens",
    date: "2024-11-28",
    readTime: "10 min",
    content: `The wind in Patagonia is a living thing. It doesn't just blow — it howls, pushes, and relentlessly tests your resolve. But within that chaos lies some of the most breathtaking landscapes on Earth.

## Day One: Torres del Paine

We arrived at the park entrance at dawn. The Torres — three granite pillars — were hidden behind clouds. We waited. In landscape photography, waiting is the primary skill. Patience is your most important piece of equipment.

## The Light Below the Storm

On day four, something remarkable happened. A storm rolled in from the west, heavy and dark. We considered retreating. Then, in the gap between the horizon and the storm clouds, the sun found a way through. The entire valley was illuminated in gold while the sky above remained dark and dramatic.

## Lessons from the Wild

Patagonia taught me that the best photographs come from discomfort. From waking at 4 AM in freezing temperatures. From carrying heavy equipment up steep trails. From standing in wind so strong you can barely hold the camera steady.

The wilderness doesn't care about your comfort. It offers its beauty on its own terms. Your job is simply to be there when it does.`,
  },
  {
    slug: "mastering-black-and-white",
    title: "Mastering Black & White Photography",
    excerpt: "Why removing color can reveal the deeper truth of a photograph.",
    coverImage: portrait1,
    category: "Tutorial",
    date: "2024-11-10",
    readTime: "8 min",
    content: `Color is information. Sometimes, too much information. When you remove color from a photograph, what remains is the essence — light, shadow, form, and texture.

## Why Shoot in Black and White?

Color photographs show you what things looked like. Black and white photographs show you how things felt. When you strip away the distraction of color, viewers are forced to engage with the composition, the emotional weight of the image, the story being told through light and shadow alone.

## Seeing in Monochrome

The hardest part of black and white photography is learning to see the world without color. You must train your eye to notice tonal contrast rather than color contrast. A red flower against green leaves is dramatic in color but may appear as similar tones of gray in black and white.

## The Zone System

Ansel Adams and Fred Archer developed the Zone System to give photographers precise control over tonal reproduction. While originally designed for film, the principles apply perfectly to digital photography. Understanding where your shadows fall, where your highlights sit, and how many zones of tonal range you can capture is fundamental.

## Post-Processing

The conversion from color to black and white is where the magic happens. Don't simply desaturate — use channel mixing to control how different colors map to different gray tones. This gives you immense creative control over the final image.`,
  },
  {
    slug: "night-street-photography-guide",
    title: "Night Street Photography: A Complete Guide",
    excerpt: "Techniques for capturing the electric atmosphere of cities after dark.",
    coverImage: street1,
    category: "Tutorial",
    date: "2024-10-22",
    readTime: "7 min",
    content: `When the sun goes down, a different city emerges. Neon signs paint the streets in vivid color. Headlights streak through intersections. Shadows become deep and mysterious. This is when street photography becomes truly cinematic.

## Embrace High ISO

Modern cameras handle high ISO remarkably well. Don't be afraid to push to ISO 3200, 6400, or even higher. A sharp image with grain is infinitely better than a blurry image at ISO 100. Noise can even add atmosphere and grit to your night images.

## Find Your Light Sources

At night, light becomes scarce and precious. Look for neon signs, shop windows, street lamps, car headlights, phone screens. These become your studio lights. Position your subjects — or wait for subjects to walk through — these pools of light.

## Reflections Are Your Friend

After rain, the city becomes a mirror. Every surface reflects light back at you, doubling the visual information in your frame. Puddles become portals to an inverted world. Wet asphalt glows with reflected neon. Always shoot after rain.

## The Decisive Moment, Extended

Henri Cartier-Bresson spoke of the decisive moment — that split second when everything aligns. At night, with longer exposure times, the decisive moment stretches. Movement becomes blur. People become ghosts. Time itself becomes visible in your photographs.`,
  },
  {
    slug: "the-philosophy-of-conceptual-art",
    title: "The Philosophy Behind Conceptual Photography",
    excerpt: "Exploring the intersection of idea and image in contemporary art photography.",
    coverImage: conceptual1,
    category: "Philosophy",
    date: "2024-10-05",
    readTime: "9 min",
    content: `In conceptual photography, the idea precedes the image. The photograph is not an end in itself but a vehicle for communicating a concept, a feeling, or a question about the nature of reality.

## Beyond Documentation

Traditional photography documents what exists. Conceptual photography creates what doesn't exist — or reveals what exists beneath the surface of the visible world. It asks the viewer to look beyond the literal content of the image and engage with its deeper meaning.

## The Role of the Viewer

A conceptual photograph is incomplete without its viewer. The meaning is not embedded in the image alone — it emerges in the space between the photograph and the person looking at it. Each viewer brings their own experiences, memories, and emotions to the interpretation.

## Techniques of Transformation

Double exposure, long exposure, intentional camera movement, selective focus, unusual perspectives — these are not just techniques but languages. Each one speaks differently about the relationship between reality and perception.

## Creating Your Own Visual Language

The goal of conceptual photography is not to master someone else's style but to develop your own visual vocabulary. What symbols recur in your work? What themes do you keep returning to? These patterns are the beginning of your artistic voice.`,
  },
  {
    slug: "choosing-your-first-professional-camera",
    title: "Choosing Your First Professional Camera",
    excerpt: "A no-nonsense guide to selecting the right camera body for serious photography work.",
    coverImage: hero3,
    category: "Gear",
    date: "2024-09-18",
    readTime: "5 min",
    content: `The best camera is the one you have with you — but when you're ready to invest in professional equipment, the choices can be overwhelming. Here's how to think about it clearly.

## Sensor Size Matters

Full-frame sensors capture more light, produce better low-light performance, and offer shallower depth of field. APS-C sensors are lighter, cheaper, and give you extra reach with telephoto lenses. Medium format offers unparalleled detail and dynamic range. Choose based on your primary genre.

## Autofocus Performance

If you shoot moving subjects — sports, wildlife, street photography — autofocus speed and accuracy are critical. Modern mirrorless cameras with phase-detection AF across the entire sensor have revolutionized tracking performance.

## Build Quality and Weather Sealing

Professional cameras need to withstand harsh conditions. If you shoot outdoors, especially in rain, snow, or dusty environments, invest in a body with proper weather sealing. Your camera should be the last thing you worry about in the field.

## The Ecosystem

You're not just buying a camera — you're buying into a lens ecosystem. Consider the available lenses, their quality and price, and the brand's commitment to the mount system. Switching systems later is expensive and painful.

## My Recommendation

Start with a mid-range mirrorless body from any of the major brands. Invest the money you save into one excellent lens. A great lens on a good body will always outperform a great body with a mediocre lens.`,
  },
];

export const blogCategories: BlogCategory[] = ["Tutorial", "Behind the Lens", "Philosophy", "Gear"];
