import styles from './ProductType.module.css'

export default function ProductType({ text, image }) {
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image}/>
            <p classname={styles.text}>{text}</p>
        </div>
    )
}