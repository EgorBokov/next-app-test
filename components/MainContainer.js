import A from './A';
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"Next JS Meta for SEO " + keywords } />
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href="/" text='Главная' />
                <A href="/users" text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                .navbar {
                background: orange;
                padding: 15px;
                }
                .link {
                text-decoration: none;
                color: white;
                font-size: 20px;
                margin: 10px;
                }
            `}
            </style>
        </>
    );
};

export default MainContainer;