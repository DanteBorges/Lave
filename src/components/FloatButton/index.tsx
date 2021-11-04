import Image from 'next/image'
import styles from './styles.module.css'

const FloatButton = () => {
    return (
        <button className={styles.btn}>
            <a
                href="https://web.whatsapp.com/send?phone=5538988330330"
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    src="/image/whatsapp.svg"
                    quality={100}
                    width={58}
                    height={60}
                />
            </a>
        </button>
    )
}

export default FloatButton
