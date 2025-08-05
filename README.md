# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh  

---

## 🚀 "Pimp the List" – Challenge Solution

This project was created as a response to the **"Pimpeld fel a listát"** (Pimp the List) React challenge.  
The goal was to take a raw user list and transform it into a beautiful, interactive, and performant user interface.

### ✅ Features Implemented

- Clean, dark UI with green accents (Tailwind CSS)
- Custom font and consistent spacing
- Hover effect on user list items
- Live search (by name, city, or occupation)
- Sorting functionality (A–Z, Z–A)
- Detailed user view on click
- Pagination (showing 20 users per page)
- Optimized performance with `useMemo`
- Component-based structure
- Scales to 3000+ items with smooth performance

### 📂 Project Structure

- `App.tsx`: main application logic (searching, sorting, pagination)
- `UserList.tsx`: renders user items and handles selection
- `Pagination.tsx`: displays dynamic page numbers and handles navigation
- `types/User.ts`: defines the user data structure

### ⚙️ How to Run Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
