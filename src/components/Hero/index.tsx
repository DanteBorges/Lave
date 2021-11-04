import Image from 'next/image'
import styles from './styles.module.css'

const Hero = () => {
    return (
        <div className={styles.container} id="Hero">
            <Image
                src="/image/washing machine.jpg"
                width={620}
                height={679}
                quality={100}
                alt="Image washing machine"
            />

            <div className={styles.whapper}>
                <h1 className={styles.title}>
                    Conheça a <b className={styles.bold}>Lave</b>
                </h1>

                <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam mi ipsum, cursus nec erat quis, lobortis ornare
                    libero. Ut porta convallis fermentum.
                </p>
                <button className={styles.btn}>Veja os planos!</button>
            </div>
            <span className={styles.circle}></span>
        </div>
    )
}

export default Hero
