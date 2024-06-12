import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import ODDBALL from "../assets/imgs/oddballs.webp";
import palillos from "../assets/imgs/pickem.webp";
import sketchone from "../assets/imgs/sketch1.jpeg";
import promone from "../assets/imgs/Promo1.jpeg";
import promotwo from "../assets/imgs/Promo2.jpeg";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const carouselItems = [
  {
    image: ODDBALL,
    title: "Music ball",
    linking: "https://checkout.wompi.co/l/3IpI18",
    description: "This is an interesting product which is a ball that plays music when you throw it. you can create your own music and melodies with the Ball's movement.",
  },
  {
    image: palillos,
    title: "Toothpicks with flavours",
    linking: "https://checkout.wompi.co/l/z5XUIc",
    description: "This is a product that comes with a variety of flavours, you can choose the one you like the most and enjoy the taste of your toothpicks.",
  },
  {
    image: sketchone,
    title: "Website sketch Aesthetic",
    linking: "https://checkout.wompi.co/l/VPOS_MJRNLU",
    description: "This is a website sketch that you can use to create your own website with a unique aesthetic style and with a database added.",
  },
  {
    image: promone,
    title: "Your products could be here!",
    linking: "https://checkout.wompi.co/l/VPOS_MJRNLU",
    description: "This is a visible space for your products, you can add your products here and get more visibility or if you need an independent site to sell it.",
  },
  {
    image: promotwo,
    title: "Your product could be here!",
    linking: "https://checkout.wompi.co/l/VPOS_MJRNLU",
    description: "This is a visible space for your products, you can add your products here and get more visibility or if you need an independent site to sell it.",
  },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img src={item.image} alt={`Carousel item ${index + 1}`} className="mb-4 w-full h-auto object-cover" />
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <div className="mb-2 carouselbtn"><a href={item.linking} className="btn btn-primary mb-2">Buy</a></div>
                  <p className="text-center">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

