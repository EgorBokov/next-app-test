import { useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';

export default function User({ user }) {
    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div>
                <h1>
                    Пользователь с id {query.id}
                </h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ query }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
    const user = await response.json();
    return {
        props: {
            user
        }
    }
}