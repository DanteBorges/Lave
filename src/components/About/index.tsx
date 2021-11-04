import styles from './styles.module.css'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.foolter} id="about">
            <div className={styles.texts_containers}>
                <div className={styles.whapper}>
                    <h1 className={styles.title}>Sobre a lave</h1>
                    <div className={styles.container}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam mi ipsum, cursus nec erat quis, lobortis
                            ornare libero. Ut porta convallis fermentum. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam mi ipsum, cursus nec erat quis, lobortis
                            ornare libero. Ut porta convallis fermentum.
                        </p>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.contato}>
                        <Image
                            src="/image/icon_local.svg"
                            width={40}
                            height={34}
                            quality={100}
                            alt="Icone de local"
                        />
                        <p>
                            Av. Dep. Esteves Rodrigues, 1001 - Melo, Montes
                            Claros - MG, 39400-634
                        </p>
                    </div>
                    <div className={styles.contato}>
                        <Image
                            src="/image/icon_telefone.svg"
                            width={20}
                            height={34}
                            quality={100}
                            alt="Icone de telefone"
                        />
                        <p>40028922</p>
                    </div>
                    <div className={styles.contato}>
                        <Image
                            src="/image/icon_email.svg"
                            width={20}
                            height={34}
                            quality={100}
                            alt="Icone de email"
                        />
                        <p>lave.example@email.com</p>
                    </div>
                </div>
                <div className={styles.footer_container}>
                    <div className={styles.footer_text}>
                        <p>@ 2021 lecode, Inc. Todos os direitos reservados</p>
                    </div>
                    <div className={styles.footer_icons}>
                        <a href="#">
                            <Image
                                src="/image/vector-instagram.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="Icone de instagram"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src="/image/vector-github.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="Icone de github"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src="/image/vector-facebook.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="Icone de facebook"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src="/image/vector-twitter.png"
                                width={24}
                                height={24}
                                quality={100}
                                alt="Icone de twitter"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer_image_washing_machine}>
                <Image
                    src="/image/washing machine 2.jpg"
                    width={900}
                    height={900}
                    quality={100}
                    alt="Homem lavando roupa"
                />
            </div>
        </div>
    )
}

export default About
