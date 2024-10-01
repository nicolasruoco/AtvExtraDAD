import styles from "./Setas.module.css"
import setaEsquerda from "../../assets/setaEsquerda.svg"
import setaDireita from "../../assets/setaDireita.svg"

export default function Setas(){
    return (
        <div className={styles.container}>
            <div className={styles.fundo}>
                <img src={setaEsquerda} alt="" class={styles.imagem}/>
            </div>
            <div className={styles.fundo}>
                <img src={setaDireita} alt="" class={styles.imagem}/>
            </div>
        </div>
    )
}