# React + TypeScript + Vite

This project is built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
It provides a fast development setup with modern tools and clean UI components.

---

## 🚀 "Pimp the List" – Challenge Solution

This project was created as a response to the **"Pimpeld fel a listát"** (Pimp the List) React challenge.  
The goal was to take a raw user list and transform it into a beautiful, interactive, and performant user interface.

---

## ✅ Features Implemented

### 💅 UI / UX

- Clean, dark UI with green highlights (Tailwind CSS)
- Custom Google Font (Fira Code)
- Spacing and consistent layout
- Hover effect on list items
- Modal window for displaying detailed user information

### 🔍 Functionality

- Live search (by name, city, or occupation)
- Sorting (A–Z, Z–A) with toggle buttons
- Pagination (20 users per page)
- Smooth UI interaction without reloads

### ⚡ Performance

- `useMemo` optimizations for filtering, sorting, and slicing
- Efficient rendering for large lists (tested with 3000+ users)
- Component-based structure for better maintainability

---

## 🧱 Project Structure

src/
│
├── App.tsx # Main logic (search, sort, pagination, modal)
├── components/
│ ├── UserList.tsx # List of users with selection
│ ├── Pagination.tsx # Custom pagination component
│ └── UserModal.tsx # Modal popup for detailed user view
├── types/
│ └── User.ts # User type definition
└── index.css # Tailwind config & font imports

## ⚙️ Getting Started Locally

```bash
git clone https://github.com/Arnold19970330/react-user-list.git
cd your-repo-name
npm install
npm run dev