# 💰 Finance Dashboard UI

A modern and responsive Finance Dashboard built using React.js. This project demonstrates frontend development skills including UI design, state management, data visualization, and role-based interaction.

---

## 🚀 Live Demo

(Optional: Add your deployed link here)

---

## 📌 Project Overview

This dashboard allows users to:

* View financial summary (Balance, Income, Expenses)
* Track and explore transactions
* Analyze spending patterns using charts
* Switch between **Admin** and **Viewer** roles
* Manage accounts and financial data (UI level)

---

## 🎯 Features

### 📊 Dashboard Overview

* Summary cards (Total Expense, Budget Remaining, Highest Category)
* Balance trend (Line Chart)
* Spending breakdown (Pie Chart)

### 💸 Transactions

* View transaction list (Date, Amount, Category, Type)
* Filter by Income / Expense
* Role-based actions (Admin can edit/delete)

### 🏦 Accounts

* List of accounts (Bank, Wallet, Credit, Cash)
* Balance display with color indicators
* Account types with badges

### 🔐 Role-Based UI (RBAC)

* **Viewer**: Read-only access
* **Admin**: Add / Edit / Delete UI controls
* Role switch using dropdown

### 📈 Insights

* Highest transaction (excluding salary)
* Expense-based analysis

### 📱 Responsive Design

* Mobile-first design
* Hamburger menu for sidebar
* Works across devices (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Styling**: Tailwind CSS
* **Charts**: Recharts
* **Icons**: Lucide React
* **State Management**: React Context API

---

## 🧠 State Management

* Global state handled using **Context API**
* Managed:

  * Transactions data
  * Accounts data
  * Filters
  * User role (Admin / Viewer)

---

## 🎨 Design & UX

* Clean and minimal UI
* Consistent design system
* Color-coded insights (income vs expense)
* Smooth interactions and transitions
* Responsive sidebar with hamburger menu

---

## ⚙️ Setup Instructions

```bash
# Clone repository
git clone <your-repo-link>

# Navigate to project
cd finance-dashboard

# Install dependencies
npm install

# Install charts library (important)
npm install recharts --legacy-peer-deps

# Run project
npm run dev
```

---

## 📂 Folder Structure

```
src/
 ┣ components/
 ┃ ┣ UI/                # reusable small components
 ┃ ┃ ┣ AccountCard.jsx
 ┃ ┃ ┣ ExpenseSummeryCard.jsx
 ┃ ┃ ┣ ListItemCard.jsx
 ┃ ┃ ┣ NavItem.jsx
 ┃ ┃ ┗ ...
 ┃ ┃
 ┃ ┣ layout/            # layout related
 ┃ ┃ ┣ Sidebar.jsx
 ┃ ┃ ┣ Navbar.jsx
 ┃ ┃ ┗ RightPanel.jsx
 ┃ ┃
 ┃ ┣ features/          # main features
 ┃ ┃ ┣ dashboard/
 ┃ ┃ ┃ ┣ MainContent.jsx
 ┃ ┃ ┃ ┣ Charts.jsx
 ┃ ┃ ┃ ┗ Insight.jsx
 ┃ ┃ ┃
 ┃ ┃ ┣ transactions/
 ┃ ┃ ┃ ┗ Transactions.jsx
 ┃ ┃ ┃
 ┃ ┃ ┣ accounts/
 ┃ ┃ ┃ ┗ AccountTab.jsx
 ┃ ┃
 ┃ ┗ pages/
 ┃    ┗ DashBoard.jsx
 ┃
 ┣ context/
 ┃ ┗ Context.jsx
 ┃
 ┣ data/
 ┃ ┣ AccData.js
 ┃ ┗ TransData.js
 ┃
 ┗ App.jsx
```

---

## ⚡ Key Highlights

* Dynamic data rendering (no hardcoded UI)
* Real-time calculations (expenses, insights)
* Reusable components
* Clean and scalable structure
* Role-based UI behavior

---

## 🧪 Edge Cases Handled

* Empty transaction list
* No data for insights
* Safe reduce operations
* Responsive overflow handling

---

## 🏆 Evaluation Mapping

| Criteria            | Implementation                       |
| ------------------- | ------------------------------------ |
| Design & Creativity | Clean UI, modern dashboard layout    |
| Responsiveness      | Mobile-first, responsive sidebar     |
| Functionality       | Transactions, Accounts, Charts, RBAC |
| UX                  | Intuitive navigation, filtering      |
| Technical Quality   | Modular components, reusable logic   |
| State Management    | Context API used effectively         |
| Documentation       | Detailed README                      |
| Attention to Detail | Edge cases + UI polish               |

---

## 🚀 Future Improvements

* Add/Edit Transaction modal
* Data persistence (localStorage / API)
* Authentication system
* Advanced filters (date, category)
* Dark mode

---

## 👨‍💻 Author

**Shivam Sahu**


---

## ⭐ Final Note

This project focuses on demonstrating frontend skills, UI thinking, and problem-solving approach rather than production-level backend integration.

---
