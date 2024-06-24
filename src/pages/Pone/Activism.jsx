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
    { title: 'Risaralda, -Mistrato', link: 'https://ciudadregion.com/regiones/risaralda/capturados-por-mineria-ilegal-mistrato-risaralda_1376711447', thumbnail: actimg1 },
    { title: 'Risaralda, -Pereira, Dos quebradas', link: 'https://revistaraya.com/calzones-el-poderoso-aliado-de-uribe-es-un-narco-para-la-fiscalia.html', thumbnail: actimg2 },
    { title: 'Risaralda, -Pereira', link: 'https://www.pares.com.co/post/qu%C3%A9-es-y-de-d%C3%B3nde-viene-el-grupo-la-cordillera', thumbnail: actimg3 },
    { title: 'Bagado (CHOCO), -Resguardo Indigena del Alto Andágueda', link: 'https://www.unidadvictimas.gov.co/especiales/AltoDeAndagueda/index.html', thumbnail: actimg4 },
    { title: 'Camalito, -Rio Cauca', link: 'https://ligacontraelsilencio.com/2019/05/07/miedo-y-silencio-causa-el-negocio-de-la-arena-en-risaralda/', thumbnail: damages1 },
    { title: 'Amazonas, -Rio caqueta', link: 'https://rutasdelconflicto.com/notas/mineria-ilegal-el-rio-caqueta-continua-el-peligro-los-indigenas-amazonicos-colombia', thumbnail: damages2 },
    { title: 'Amazonas, Resguardo Indigena Inga de Yurayaco', link: 'https://blogs.elespectador.com/medio-ambiente/mongabay-latam/la-marginal-la-selva-la-carretera-trae-deforestacion-narcotrafico-violencia-las-puertas-del-resguardo-inga-yurayaco/', thumbnail: damages3 },
    { title: 'Putumayo, -Resguardo Indigena Inga', link: 'https://www.utadeo.edu.co/es/articulo/crossmedialab/277626/el-resguardo-de-los-indigenas-inga-del-putumayo-en-el-que-entran-todos-menos-ellos', thumbnail: damages4 },
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
