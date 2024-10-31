import AppRoutes from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
