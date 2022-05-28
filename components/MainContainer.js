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
            <div className="content">
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        z-index: 1;
                        background: mediumpurple;
                        color: snow;
                        padding: 15px;
                        box-shadow: 0px 4px 10px rgba(20, 20, 20, 0.5);
                        transition: 0.2s ease all;
                    }
                    .navbar:hover {
                        box-shadow: 0px 4px 5px rgba(100, 100, 100, 0.2);
                    }
                    .link {
                        text-decoration: none;
                        color: white;
                        font-size: 20px;
                        margin: 10px;
                    }
                    .content {
                       z-index: 10;
                       margin-top: 10px;
                       display: flex;
                       justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;