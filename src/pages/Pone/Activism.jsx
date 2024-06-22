import React from 'react';
import { CommandDialogDemo } from '../../components/CommandDialogDemo';
import HeroParallax from '../../components/HeroParallax';
import actimg1 from '../../assets/imgs/activ1.jpeg';
import actimg2 from '../../assets/imgs/activ2.jpeg';
import actimg3 from '../../assets/imgs/activ3.jpeg';
import actimg4 from '../../assets/imgs/activ4.jpeg';
import damages1 from '../../assets/imgs/damages1.jpeg';
import damages2 from '../../assets/imgs/damages2.jpeg';
import damages3 from '../../assets/imgs/damages3.jpeg';
import damages4 from '../../assets/imgs/damages4.jpeg';

const Activism = () => {
  const products = [
    { title: 'Boyaca, -belencito', link: '/product1', thumbnail: actimg1 },
    { title: 'Choco - timbiqui', link: '/product2', thumbnail: actimg2 },
    { title: 'Bolivar -la meseta', link: '/product3', thumbnail: actimg3 },
    { title: 'Product 4', link: '/product4', thumbnail: actimg4 },
    { title: 'Product 5', link: '/product5', thumbnail: damages1 },
    { title: 'Product 6', link: '/product6', thumbnail: damages2 },
    { title: 'Product 7', link: '/product7', thumbnail: damages3 },
    { title: 'Product 8', link: '/product8', thumbnail: damages4 },
    // ...más productos
  ];

  return (
    <div>
      <HeroParallax products={products} />
      <div className='hidden ...'>
          <CommandDialogDemo />
      </div>
    </div>
  );
};

export default Activism;
