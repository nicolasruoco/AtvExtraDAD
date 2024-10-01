import styles from './ProductType.module.css'

export default function ProductType({ text, image }) {
    return (
        <div className={styles.container}>
            <img src={image} />
            <p>{text}</p>
        </div>
    )
}