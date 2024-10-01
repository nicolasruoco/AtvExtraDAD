import styles from './Promotion.module.css'

export default function Promotion(){
    return (
        <div className={styles.promotion}>
                <p className={styles.Text}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a className={styles.Link}href="">Shop Now</a>
                </p>
                <select className={styles.select}>
                    <option value="English" className={styles.option}>English</option>
                    <option value="Portuguese" className={styles.option}>Português</option>
                    <option value="Espanol" className={styles.option}>Español</option>
                </select>
            </div>
    )
}