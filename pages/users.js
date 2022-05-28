import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import styles from '../styles/users.module.scss';

const Users = ({ users }) => {

    return (
        <MainContainer keywords={'users page'}>
            <div className={styles.wrapper}>
                <h1>Список пользователей</h1>
                <ul className={styles.list}>
                    {
                        users.map(user => (
                            <li key={user.id}>
                                <Link href={`/users/${user.id}`}>
                                    <a>
                                        {user.name}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {
            users
        }
    }
}