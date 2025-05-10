

# Gadget Heaven

Gadget Heaven is an e-commerce platform offering a wide range of electronics, gadgets, and accessories. The website provides users with a seamless shopping experience, a product dashboard, customer support, and more.

---

## Live Website Link

You can check out the live website here:
**[Gadget Heaven Live Website](https://gadget-heaven-sv.netlify.app/)**

---

## React Fundamentals Used in the Project

This project makes use of the following core React concepts:

1. **JSX (JavaScript XML)**: Used to define the structure of the UI components.
2. **Functional Components**: Created to display different views, such as Home, Support, and Product Detail pages.
3. **State Management**: React `useState` hook to manage component-level states like menu toggles, modal visibility, etc.
4. **React Router**: Used for handling navigation between pages like Home, Support, Dashboard, etc.
5. **Event Handling**: Functions to handle user actions such as button clicks, form submissions, etc.
6. **Conditional Rendering**: Dynamic rendering based on route and user interactions (e.g., showing modals or banners based on the current route).
7. **useEffect**: To handle side effects like fetching data from APIs or local storage.
8. **useContext**: For managing global state across components (e.g., for managing the shopping cart and wishlist).
9. **Hooks**: Utilizing built-in React hooks such as `useState`, `useEffect`, `useContext`, and `useLocation`.

---

## Data Handling and Management

### Context API and Local Storage

1. **Context API**: Used to manage global state across different components such as cart details, wishlist, and product data. Context helps avoid prop drilling and ensures a cleaner state management solution.

   Example:

   ```jsx
   const CartContext = createContext();
   ```

2. **Local Storage**: Used for persisting cart and wishlist data even after the user reloads the page. This allows users to continue shopping without losing their selections.

   Example:

   ```jsx
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
   ```

---

## Features of the Website/Project

1. **Product Dashboard**: A comprehensive dashboard that displays added products, provides options to remove items, and shows a summary of the total cost.
2. **Dynamic Banners**: Custom banners displayed based on the current route (Home, Dashboard, etc.), offering a tailored experience for users.
3. **Cart Management**: Users can add products to the cart, view cart details, and proceed to checkout. Cart data is persisted using local storage.
4. **Mobile-Friendly Design**: A fully responsive design ensuring users have a smooth experience on both desktop and mobile devices.
5. **Support & Help Center**: A dedicated support section with FAQs, contact information, shipping/returns policy, and a store locator on Google Maps.

---

## Installation

To run this project locally, clone this repository and install the dependencies.

```bash
git clone https://github.com/your-repository-name/gadget-heaven.git
cd gadget-heaven
npm install
npm start
```

The website will be available at `http://localhost:3000/`.

---

## Technologies Used

* **React** for building the UI
* **React Router** for page routing
* **Context API** for state management
* **LocalStorage** for data persistence
* **Tailwind CSS** for styling
* **Lucide React Icons** for UI icons

---

