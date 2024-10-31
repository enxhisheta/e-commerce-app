import AppRoutes from "./routes";
import { ThemeProvider } from "./store/ThemeContext";
import { CartProvider } from "./store/CartContext";
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
