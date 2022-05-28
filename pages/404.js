import styles from '../styles/404.module.scss';
import Button from '../components/Button';
import {useRouter} from 'next/router';

export default function NotFoundPage() {
    const { push } = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>Custom Error 404 page</p>
                <Button callback={() => push('/')}>
                    Вернуться на главную
                </Button>
            </div>
        </div>
    );
};