import React from 'react';
import HeroParallax from '../../components/HeroParallax';
import actimg1 from '../../assets/imgs/activ1.jpeg';
import actimg2 from '../../assets/imgs/activ2.jpeg';
import actimg3 from '../../assets/imgs/activ3.jpeg';
import actimg4 from '../../assets/imgs/activ4.jpeg';

const Activism = () => {
  const products = [
    { title: 'Product 1', link: '/product1', thumbnail: actimg1 },
    { title: 'Product 2', link: '/product2', thumbnail: actimg2 },
    { title: 'Product 3', link: '/product3', thumbnail: actimg3 },
    { title: 'Product 4', link: '/product4', thumbnail: actimg4 },
    // ...más productos
  ];

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Activism;
