import React from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isMobile, setMobile] = React.useState(false);

  function handleClick(){
    setMobile(!isMobile)
  }
  
  return (
    <header className={`${styles.header} ${isMobile ? styles.mobile : ""}`}>
      <nav className={`${styles.navegacao}`}>
        <h1>NARCISO.</h1>
    
        <ul className={styles.listButtons}>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>

        <button onClick={handleClick} className={styles.buttonHambur}>Menu</button>
                
      </nav>
    </header>
  );
};

export default Header;
