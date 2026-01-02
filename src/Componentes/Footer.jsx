import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}>Minha Aplicação</p>

        <nav className={styles.links}>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Privacidade</a>
        </nav>

        <p className={styles.copy}>
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
