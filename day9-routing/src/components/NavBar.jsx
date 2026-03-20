import { Link } from "react-router";
import styles from "../components/NavBar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.main_container}>
      <h3 className={styles.heading_title}>My App</h3>
      <div className={styles.right_container}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
export { Navbar };
