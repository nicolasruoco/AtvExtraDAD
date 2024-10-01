import styles from './Header.module.css'
import Promotion from '../Promotion/Promotion.jsx'
import lupa from "../../assets/pesquisa.svg"
import wishlist from "../../assets/wishlist.svg"
import carrinho from "../../assets/carrinho.svg"

export default function Header() {
    return (
        <header className={styles.fixed}>
            <Promotion></Promotion>
            <div className = {styles.cabecalho}>
                <h1>Exclusive</h1>
                <nav>
                    <ul className = {styles.lista}>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sing Up</li>
                    </ul>
                </nav>
                <div className={styles.divona}>
                    <div className= {styles.container}>
                        <input type="text" className={styles.input} placeholder='What are you looking for?'/>
                        <img src={lupa} alt="" />
                    </div>
                    <img src={wishlist} alt="" />
                    <img src={carrinho} alt="" />
                </div>
            </div>
        </header>
    )
}