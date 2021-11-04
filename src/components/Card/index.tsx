import Image from 'next/image'
import styles from './styles.module.css'

export type Props = {
    src: string
    title: string
    description: string
}

const Card = ({ src, title, description }: Props) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src={src}
                height={200}
                width={400}
                quality={100}
                alt="Representação do conteúdo do card"
            />
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default Card
