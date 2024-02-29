import Aside from '../components/layout/Aside';
import ProductList from '../components/home/ProductList';

const Home = () => {
  return (
    <main className='section-main u-min-h-screen u-py-80'>
      <div className='u-flex u-gap-33 u-container u-mx-auto '>
        <Aside />
        <ProductList />
      </div>
    </main>
  );
};

export default Home;
