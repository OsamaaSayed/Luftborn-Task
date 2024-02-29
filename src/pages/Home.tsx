import Aside from '../components/layout/Aside';
import ProductList from '../components/home/ProductList';

const Home = () => {
  return (
    <main className='u-min-h-screen u-container u-mx-auto u-flex u-justify-center u-items-center u-py-80'>
      <div className='u-flex u-gap-33'>
        <Aside />
        <ProductList />
      </div>
    </main>
  );
};

export default Home;
