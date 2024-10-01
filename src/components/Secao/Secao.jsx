import styles from "./Secao.module.css"
import Setas from "../Setas/Setas"
import Product from "../Product/Product"

const product = {
    photo: "https://m.media-amazon.com/images/I/61Dd3qGySmL._AC_UF894,1000_QL80_.jpg",
    name: "HAVIT HV-G92 Gamepad",
    discountedPrice: 120,
    originalPrice: 160,
    rating: 4,
    reviews: 88
  };
  
export default function Secao({title, subtitle, products, days, hours, minutes, seconds, isTimer, isViewAll}) {
    return (<div>
        <div className={styles.secao}>
                    <div className={styles.subtitulo}>
                    <div className={styles.redDiv}></div> <p className={styles.subtitleText}>{subtitle}</p>
                </div>
                <div className={styles.linhaTitulo}>
                    <h2 className={styles.title}>{title}</h2>
        
                    { isTimer && (
                        <div className={styles.cronometro}>
                        <div className={styles.agrupamento}>
                            <p className= {styles.indicador}>Days</p>
                            <h3 className={styles.timer}>{days}</h3>
                        </div>
                        <h3 className={styles.doisPontos}>:</h3>
                        <div className={styles.agrupamento}>
                            <p className= {styles.indicador}>Hours</p>
                            <h3 className={styles.timer}>{hours}</h3>
                        </div>
                        <h3 className={styles.doisPontos}>:</h3>
                        <div className={styles.agrupamento}>
                            <p className= {styles.indicador}>Minutes</p>
                            <h3 className={styles.timer}>{minutes}</h3>
                        </div>
                        <h3 className={styles.doisPontos}>:</h3>
                        <div className={styles.agrupamento}>
                            <p className= {styles.indicador}>Seconds</p>
                            <h3 className={styles.timer}>{seconds}</h3>
                        </div>
                    </div>
                    )}
                    <div className={styles.setas}>
                        <Setas/>
                    </div>
                </div>
                    <div className={styles.containerProdutos}>
                        {
                            products.map((produto) =>(
                                <Product product={produto}/>
                            ))
                        }
                    </div>
                    { isViewAll && (
                        <div className={styles.viewAllContainer}>
                            <div className={styles.viewAll}>
                                View All Products
                            </div>
                        </div>
                    )}
                </div>
                <hr className={styles.hr}/>
    </div>
            )

}