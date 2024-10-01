import styles from "./Product.module.css";

import iconeCoracao from "../../assets/FillHeart.png";
import iconeOlho from "../../assets/FillEye.png";

export default function Product({ product }) {
  return (
    <div className={styles.product}>

        <div className={styles.botoes}>
          <img src={iconeCoracao} alt="favorito" className={styles.icon}/>
          <img src={iconeOlho} alt="visualizar" className={styles.icon}/>
        </div>

        <div className={styles.desconto}>-{product.desconto}%</div>

        <div className={styles.imagem}>
          <img src={product.imagem} alt="Produto" className={styles.imagemProd}/>
          <div className={styles.addToCart}>
              Add To Cart
          </div>
        </div>

        <p className={styles.tituloProd}>{product.titulo}</p>
        
        <div className={styles.preco}>
          <p className={styles.valorAtual}>${product.valorAtual}</p>
          <p className={styles.precoOriginal}>${product.precoOriginal}</p>
        </div>

        <div className={styles.notas}>
          <img src={product.estrelas} alt="Avaliação" />
          <p className={styles.qtAvaliacoes}>({product.qtAvaliacoes})</p>
        </div>
    </div>
  );
}