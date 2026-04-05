
## Photography E-Commerce Website Plan

### Architecture Overview
Transform the existing cinematic portfolio into a secure e-commerce platform for selling digital images, with guest checkout via Stripe and a simple blog system.

### Pages Structure
1. **Home (/)** — Cinematic hero + featured images for sale + blog preview
2. **Shop (/shop)** — Browse all images with category filters, search, pricing
3. **Image Detail (/shop/:slug)** — Watermarked preview, description, price, "Buy Now" button
4. **Cart (/cart)** — Shopping cart with selected images
5. **Checkout Success (/checkout/success)** — Download links after purchase
6. **Portfolio (/portfolio)** — Existing gallery showcase (non-purchasable highlights)
7. **Blog (/blog)** — Article listing with categories
8. **Blog Post (/blog/:slug)** — Individual article page
9. **About (/about)** — Keep existing
10. **Contact (/contact)** — Keep existing

### Backend (Lovable Cloud / Supabase)
- **`products` table** — Image catalog (title, slug, description, category, price, watermarked_url, original stored in private bucket)
- **`orders` table** — Purchase records (email, stripe_session_id, status, created_at)
- **`order_items` table** — Links orders to purchased products
- **Edge Function: `create-checkout`** — Creates Stripe Checkout session for selected images
- **Edge Function: `stripe-webhook`** — Handles payment confirmation, marks order complete
- **Edge Function: `generate-download`** — Generates time-limited signed URLs for purchased images
- **Storage**: Private bucket for originals, public bucket for watermarked previews

### Image Protection Strategy
- Original high-res images stored in a **private** Supabase Storage bucket (no public access)
- Only **watermarked/low-res previews** served on the website (public bucket)
- After purchase, customers receive **time-limited signed download URLs** via the checkout success page
- Right-click/drag protection CSS (basic deterrent)
- No direct URLs to originals ever exposed in frontend code

### Stripe Integration
- Per-image pricing
- Guest checkout (no account needed)
- Stripe Checkout Sessions for payment
- Webhook to confirm payment and unlock downloads

### Blog System
- Static data file (`src/data/blog.ts`) with articles
- Categories, cover images, markdown-style body content
- Simple listing + detail pages with animations

### Design
- Keep existing dark cinematic theme, animations, and custom cursor
- Add shop-specific UI: price badges, "Add to Cart" buttons, cart drawer
- Animated page transitions for all new routes
