import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {darkTheme ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default ThemeToggle;
