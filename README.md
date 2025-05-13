# GreenShop

SpiceShop is a modern, responsive e-commerce frontend application for a food shop built with React and Vite. It provides a seamless shopping experience with product browsing, cart management, user authentication, and checkout features.

## Technologies Used

- **React 19**: A popular JavaScript library for building user interfaces.
- **Redux Toolkit**: Simplifies state management with Redux.
- **React Redux**: Official React bindings for Redux.
- **React Router DOM**: Declarative routing for React applications.
- **Ant Design (antd)**: A comprehensive UI component library, patched for React 19 compatibility.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Swiper**: Modern mobile touch slider for product carousels and image galleries.
- **Axios**: Promise-based HTTP client for making API requests.
- **Vite**: Next-generation frontend build tool for fast development and optimized builds.
- **ESLint**: Code linting and quality enforcement.

## Features

- Browse a variety of plants and products with detailed views.
- Add products to a shopping cart and manage quantities.
- User authentication with sign-in and sign-up functionality.
- Responsive design optimized for desktop and mobile devices.
- Smooth product image sliders and interactive UI components.
- Checkout process with order summary and user information.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port Vite specifies).

## Project Structure

- `src/components/`: Reusable React components such as Navbar, Footer, ProductCart, etc.
- `src/pages/`: Page components like Shop, ProductView, ShoppingCart, CheckOut.
- `src/slices/`: Redux slices for managing state (products, cart, authentication).
- `src/services/`: API service modules for authentication and product data.
- `src/assets/` and `public/images/`: Static assets including images and fonts.

## License

This project is licensed under the MIT License.
