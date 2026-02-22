# 📌 Product-Pin

Product-Pin is a full-stack **product discovery platform** , where users can explore visually curated products and seamlessly redirect to external marketplaces to purchase them.

Unlike traditional e-commerce applications, Product-Pin focuses on **visual exploration and marketplace redirection**, acting as a product aggregation and discovery platform.

---

## 🚀 Features

- 🔐 User Authentication (Clerk)
- 🛍️ Add, Edit & Delete Products (CRUD)
- 🖼️ Responsive Image-Based Grid Layout
- 🔎 Product Discovery Interface
- 🔗 External Marketplace Redirect Integration
- 💬 Comment System
- ⚡ Optimized Data Fetching with React Query
- 🗄️ Type-Safe Database Queries using Drizzle ORM
- 🌐 CORS-enabled Backend for Production Deployment
- 🚀 Deployed Frontend & Backend

---

## 🧠 Concept

Product-Pin works like a visual inspiration board for products:

- Users browse products in a Clean grid
- Each product includes a marketplace link and visual inspo-board
- Clicking a product redirects users to the external platform to complete the purchase

This makes Product-Pin a **Product Discovery & Aggregation Platform** rather than a direct-selling store.

---

## 🏗️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- TanStack React Query

### Backend
- Node.js
- Express.js
- TypeScript

### Authentication
- Clerk

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```

product-pin/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── api/
│
└── backend/
├── controllers/
├── routes/
├── db/
├── config/
└── middleware/

```

---

## 🔄 How It Works

1. User signs in via Clerk authentication.
2. Frontend fetches products from the Express API.
3. Products are displayed in a responsive grid layout.
4. Each product card includes:
   - Image
   - Title
   - Description
   - Marketplace URL
5. Clicking the product redirects the user to the external marketplace.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```

git clone <your-repository-url>

```

### 2️⃣ Setup Frontend

```

cd frontend
npm install
npm run dev

```

### 3️⃣ Setup Backend

```

cd backend
npm install
npm run dev

```

---

## 💡 Future Improvements

- Bookmark / Save Products
- Like System
- Categories & Filtering
- Infinite Scrolling
- User Profiles
- AI-based Recommendations

---

## 👩‍💻 Author

Tanishka Agarwal  
Full-Stack Developer (React | Node.js | TypeScript)

---

⭐ If you found this project interesting, feel free to star the repository!
```
