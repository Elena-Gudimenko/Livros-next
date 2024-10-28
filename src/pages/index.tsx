/*const Home = () => {
  return <h1>Добро пожаловать в приложение для управления книгами!</h1>;
};

export default Home;
*/

// pages/index.tsx
import Head from 'next/head';
import styles from './styles.module.css'; // Убедитесь, что путь к стилям правильный
import { Menu } from '../componentes/Menu'; // Импортируем компонент Menu

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title> {/* Измените заголовок на "Loja Next" */}
            </Head>
            <Menu /> {/* Добавляем компонент Menu */}
            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1> {/* Заголовок страницы */}
            </main>
        </div>
    );
};

export default Home;
