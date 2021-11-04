import styles from './styles.module.css'
import Card, { Props as CardProps } from 'components/Card'

const Works = () => {
    const cards: CardProps[] = [
        {
            src: '/image/card.svg',
            title: 'Performace',
            description:
                'Utilizamos produtos importados, de qualidade premium, com alto poder de limpeza e proteção das roupas.'
        },
        {
            src: '/image/economia-image-card.jpg',
            title: 'Economia',
            description:
                'Todos os produtos de lavagem inclusos. Mais tempo para você.'
        },
        {
            src: '/image/felicidade-image-card.jpg',
            title: 'Facilidade',
            description:
                'Horário de funcionamento estendido. Local com acessibilidade.'
        }
    ]

    return (
        <section className={styles.section} id="works_card">
            <h2 className={styles.title}>Nossos trabalhos</h2>
            <div className={styles.cards}>
                {cards.map(({ description, src, title }, index) => (
                    <Card
                        key={`card-${index}`}
                        src={src}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Works
