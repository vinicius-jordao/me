import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
    return (
        <>
            <Head>
                <title>Vinicius Jordão</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="container">
                    <div className="row">

                        <div className="col-3">
                            <div className="profile">
                                <div className="image">
                                    <img src="/me-full.png" alt="Vinicius Jordão" className="img"/>
                                </div>
                                <div className="initial">
                                    <h2>Vinicius <span>Jordão</span></h2>
                                    <div className="badge">Diretor de criação</div>
                                    <div className="social-media">
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                        <a href="https://github.com/vinicius-jordao" target="_blank" rel="noopener noreferrer">
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </div>
                                </div>
                                <div className="information">
                                    <ul>
                                        <li>
                                            <i>
                                                <ion-icon name="calendar-clear-outline"></ion-icon>
                                            </i>
                                            <span>21 anos</span>
                                            <div className="tooltip">29 de Outubro, 1999</div>
                                        </li>
                                        <li>
                                            <i>
                                                <ion-icon name="location-outline"></ion-icon>
                                            </i>
                                            <span>Curitiba PR, Brasil</span>
                                            <div className="tooltip">Localidade</div>
                                        </li>
                                        <li className="min-text">
                                            <a href="mailto:">
                                                <i>
                                                    <ion-icon name="mail-outline"></ion-icon>
                                                </i>
                                                <span>viniciusjordao.contact@gmail.com</span>
                                            </a>
                                            <div className="tooltip">E-mail</div>
                                        </li>
                                        <li>
                                            <a href="tel:">
                                                <i>
                                                    <ion-icon name="call-outline"></ion-icon>
                                                </i>
                                                <span>(41) 9 8835-8677</span>
                                            </a>
                                            <div className="tooltip">Celular/Whatsapp</div>
                                        </li>
                                    </ul>
                                    <a href="" className="btn">
                                        <ion-icon name="arrow-down"></ion-icon>
                                        <span>Baixar CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="main-content">

                                <section className="section-default">
                                    <h1>Sobre mim</h1>
                                    <p>Sou Diretor de Criação, Programagador e UI/UX Designer de Curitiba PR, Brasil, trabalhando em desenvolvimento web e mobile. Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos.</p>
                                    <p>Meu trabalho é construir seu site de forma que seja funcional e amigável, mas ao mesmo tempo atraente. Além disso, adiciono um toque pessoal ao seu produto e me certifico de que ele seja atraente e fácil de usar. Meu objetivo é transmitir sua mensagem e identidade da maneira mais criativa. Criei web design para muitas empresas.</p>
                                </section>

                                <section className="section-default light">
                                    <h2>O que eu faço</h2>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="item-service">
                                                <i>
                                                    <ion-icon name="laptop-outline"></ion-icon>
                                                </i>
                                                <div>
                                                    <h4>Web Design</h4>
                                                    <p>O design mais moderno e de alta qualidade.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="item-service">
                                                <i>
                                                    <ion-icon name="desktop-outline"></ion-icon>
                                                </i>
                                                <div>
                                                    <h4>Web Development</h4>
                                                    <p>Desenvolvimento de sites de alta qualidade e profissional.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="item-service mb-0">
                                                <i>
                                                    <ion-icon name="phone-portrait-outline"></ion-icon>
                                                </i>
                                                <div>
                                                    <h4>Mobile Apps</h4>
                                                    <p>Desenvolvimento profissional de aplicativos para iOS e Android.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="item-service mb-0">
                                                <i>
                                                    <ion-icon name="image-outline"></ion-icon>
                                                </i>
                                                <div>
                                                    <h4>Design</h4>
                                                    <p>Eu faço imagens de alta qualidade de qualquer categoria a nível profissional.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="section-default">
                                    <h2>Preço dos planos</h2>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="item-plan">
                                                <i>
                                                    <ion-icon name="battery-dead"></ion-icon>
                                                </i>
                                                <h5>Pacote Básico</h5>
                                                <div className="amount">
                                                    <small>R$</small>
                                                    <span>39</span>
                                                    <small>/hora</small>
                                                </div>
                                                <ul>
                                                    <li>Web Design</li>
                                                    <li>Responsive</li>
                                                    <li className="through">Mobile Apps</li>
                                                    <li className="through">Web Development</li>
                                                </ul>
                                                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">Vamos começar</a>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item-plan">
                                                <i>
                                                    <ion-icon name="battery-half"></ion-icon>
                                                </i>
                                                <h5>Pacote Pro</h5>
                                                <div className="amount">
                                                    <small>R$</small>
                                                    <span>59</span>
                                                    <small>/hora</small>
                                                </div>
                                                <ul>
                                                    <li>Web Design</li>
                                                    <li>Responsive</li>
                                                    <li>Web Development</li>
                                                    <li className="through">Mobile Apps</li>
                                                </ul>
                                                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">Vamos começar</a>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="item-plan">
                                                <i>
                                                    <ion-icon name="battery-full"></ion-icon>
                                                </i>
                                                <h5>Pacote Premium</h5>
                                                <div className="amount">
                                                    <small>R$</small>
                                                    <span>99</span>
                                                    <small>/hora</small>
                                                </div>
                                                <ul>
                                                    <li>Web Design</li>
                                                    <li>Responsive</li>
                                                    <li>Web Development</li>
                                                    <li>Mobile Apps</li>
                                                </ul>
                                                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">Vamos começar</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="section-default light">
                                    <h2>Clientes</h2>
                                    <div className="row align-center">
                                        <div className="col">
                                            <div className="item-brand">
                                                <img src="/kfc.png" alt="KFC Brasil" className="img"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="item-brand">
                                                <img src="/programa-sites.png" alt="Programa sites" className="img"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="item-brand">
                                                <img src="/ttenx.png" alt="TTENX" className="img"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="item-brand">
                                                <img src="/autentica-online.png" alt="Autentica online" className="img"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="item-brand">
                                                <img src="/manu-sim.png" alt="Manu sim" className="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="section-default">
                                    <h5 className="copyright">© 2021 All Rights Reserved.</h5>
                                </section>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>

            <style jsx>{`
                main {
                    background-image: url('triangle.svg'), url('triangle-2.svg');
                }
            `}</style>

        </>
    )
}
