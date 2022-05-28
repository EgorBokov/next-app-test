import styles from '../styles/button.module.scss';

export default function Button({ children, callback }) {
    return (
        <div onClick={callback} className={styles.buttonWrapper}>
            { children }
        </div>
    )
}