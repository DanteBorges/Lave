import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image
                    src="/image/logo.svg"
                    width={108}
                    height={94}
                    quality={100}
                    alt="Logo da lave"
                />
            </div>
            <ul className={styles.ul}>
                <li>
                    <Link href="#hero">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="#works_card">
                        <a className={styles.link}>Trabalhos</a>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <a className={styles.link}>Sobre Nós</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.social}>
                <a href="#">
                    <Image
                        src="/image/facebook.svg"
                        width={24}
                        height={24}
                        quality={100}
                        alt="Logo do Facebook"
                    />
                </a>
                <a href="#">
                    <Image
                        src="/image/instagram.svg"
                        width={24}
                        height={24}
                        quality={100}
                        alt="Logo do Instagram"
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
