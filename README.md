# 💎 the.fabette — Luxury Jewellery Digital Maison

> “Jewellery is not a product. It is a presence.”

**the.fabette** is an avant-garde digital luxury gallery engineered to recreate the high-end sensory experience of legacy houses like Cartier, Bvlgari, and Tiffany & Co. This platform prioritizes emotion over commerce, space over content, and image over text, executing absolute visual silence around every curation.

---

## 🖤 Design System Philosophy (Luxury Grade)

* **Color Restraint:** Governed by strict black (`#000000`) and white (`#FFFFFF`) tokens. Zero decorative gradients, zero flashing neon accents. Luxury equals restraint and silence.
* **Typography Typography:** Editorial headlines utilize wide-tracked, uppercase `Cormorant Garamond` typography balanced by a clean mono-tonal body font layout (`Inter`).
* **Visual Silence:** Absolute white space dominance. Clean, strict boundaries with `border-radius: 0px` ensuring sharp minimalist architecture. One focal element per view screen section.
* **Museum-Exhibit UX:** Product interfaces are sculpted like gallery halls rather than commercial grid layouts, discarding generic badges, discount tags, and user ratings.

---

## 🛠️ Operational Stack

### Front-End Gallery Engine
* **Framework:** React (Vite Ecosystem)
* **Styling Tokens:** Tailwind CSS (Custom production grade utilities)
* **Cinematic Micro-Motions:** GSAP Core & Framer Motion (Slow, high-end editorial pacing and viewport fade-ins)
* **Routing System:** React Router DOM

### Commerce & Session Infrastructure
* **State Management:** Core Context API (Dedicated Cart & Persistent Authentication Matrices)
* **Local Workspace Persistence:** Dedicated `localStorage` handlers locking active user states across browser refresh cycles.
* **Automated Dispatch Ecosystem:** Node.js Backend API executing parallel SMTP relays via Nodemailer to deliver confirmation invoices to the customer and real-time ledger updates to the Maison admin core.

---

## 📁 System Architecture Blueprint

```text
src/
├── assets/
│   ├── images/
│   └── videos/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx        # Glass-blur responsive navigation drawer
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx        # Strict raw edge subscription interface
│       ├── LuxuryCard.jsx
│       ├── ProductTile.jsx
│       └── SectionTitle.jsx
├── pages/
│   ├── Home.jsx              # Cinematic editorial landing interface
│   ├── Collection.jsx        # Image dominant 3-column shop exhibit
│   ├── Product.jsx           # 70/30 spatial split museum layout
│   ├── Cart.jsx              # Minimal list transactional workspace
│   └── Checkout.jsx          # Silent UI distraction-free payment core
├── context/
│   └── CartContext.jsx
├── data/
│   ├── collections.js        # 4 core maximal matrices (Rings, Earrings, etc.)
│   └── products.js
└── main.jsx




## 🚀 Execution Guide

### 1. Replicate the Architecture
```bash
git clone [https://github.com/YOUR_USERNAME/the.fabette-unisex-jewellery-website.git](https://github.com/YOUR_USERNAME/the.fabette-unisex-jewellery-website.git)
cd the.fabette


PORT=5000
EMAIL_USER=maison_management_email@gmail.com
EMAIL_PASS=your_secure_smtp_app_password

cd my-backend-server
npm install
node server.js


cd my-app
npm install
npm run dev
