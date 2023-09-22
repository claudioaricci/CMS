import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" >         
            <Image src={logo} alt="Logo CMS" />
          
        </Link>
        <nav>
          <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
            Home
          </Link>
          <Link href="/posts" className={router.pathname === "/posts" ? styles.active : ""}>
            Conteúdos
          </Link>
          <Link href="/sobre" className={router.pathname === "/sobre" ? styles.active : ""}>
            Quem somos
          </Link>
        </nav>
        <a className={styles.readyButton} href="#" type="button">
          COMEÇAR
        </a>
      </div>
    </header>
  );
}
