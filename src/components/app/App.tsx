import { ProductList } from '../ProductList';
import styles from './app.module.css';

function App() {
  return (
    <>
      <h1 className={styles.title}>Ты сегодня покормил&#160;кота?</h1>
      <ProductList />;
    </>
  );
}

export default App;
