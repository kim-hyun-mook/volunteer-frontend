import Footer from '@components/ui/footer/Footer';
import Header from '@components/ui/header/Header';
import { Outlet } from 'react-router-dom';

const PageOutlet = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default PageOutlet;
