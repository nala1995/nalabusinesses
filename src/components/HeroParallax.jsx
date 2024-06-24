import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const HeroParallax = ({ products }) => {
  const rows = chunkArray(products, 4); 
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const createContinuousTranslate = (direction = "normal") => {
    const fromX = direction === "reverse" ? 200 : -200;
    const toX = direction === "reverse" ? -200 : 200;
    const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [fromX, toX]),
      springConfig
    );
    return translateX;
  };

  const translateX = createContinuousTranslate("normal");
  const translateXReverse = createContinuousTranslate("reverse");

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, 400]), // Ajusta los valores aquí
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-[300vh] py-40 pb-60 overflow-hidden antialiased relative flex flex-col items-center [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center mb-5 max-w-screen-lg mx-auto"
          >
            {row.map((product, index) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
              />
            ))}
            {/* Rellena con placeholders si la fila tiene menos de 2 imágenes */}
            {row.length < 2 && (
              <>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-grey-300">
        Environmental crimes <br /> in Colombia.
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-900">
      In the whole Colombia's history period the inner conflict has taken a huge center stage, without shadow of doubt the most affected have been the rural population and the local ecosystems, for one side we've got the locals who have been intimidated or killed, if they didn't have the same lucky as the others, since a lot of time ago, as they have been involved unwilling to be but for living and making their lands be respected against those who only wanted to take advantage of an illegal business. on the other side we've got the lands and ecosystems that have been exploted by organized groups controlled or supported by political strenghts and politicians with power.
      ... 
      </p>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-72 relative flex-shrink-0 m-4"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};


function chunkArray(array, size) {
  return array.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}

export default HeroParallax;
