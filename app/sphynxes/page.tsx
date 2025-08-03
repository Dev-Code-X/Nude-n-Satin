// app/sphynxes/page.tsx
'use client';
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css"

type LooseCssProperties = React.CSSProperties & { [key: string]: string };

const keywords = [
  /* …твой список ключевых слов… */
].join(", ");

const parents = [
  {
    name: "Bulochka",
    role: "Dad",
    images: ["/images/bulochka/bulochka1.jpg" /* … */],
  },
  {
    name: "Vera",
    role: "Mom",
    images: ["/images/vera/vera1.jpg" /* … */],
  },
];

const kittens = [
  {
    name: "Boy with Odd Eyes",
    features: ["Odd-eyed", "Pink nose", "Gentle & playful"],
    price: "2000–3000$",
    images: Array.from({ length: 8 }, (_, i) => `/images/Litter1/litter${i + 1}.jpg`),
  },
  {
    name: "Girl with Odd Eyes",
    features: ["Odd-eyed", "Very sweet", "Soft skin"],
    price: "2000–3000$",
    images: Array.from({ length: 12 }, (_, i) => `/images/Litter1/litter${21 + i}.jpg`),
  },
  {
    name: "Dark Girl",
    features: ["Bright yellow eyes", "Dark skin", "Active & cuddly"],
    price: "2000–3000$",
    images: Array.from({ length: 13 }, (_, i) => `/images/Litter1/litter${45 + i}.jpg`),
  },
  {
    name: "Light Girl",
    features: ["Blue eyes", "Cream-pink", "Gentle & sociable"],
    price: "2000–3000$",
    images: Array.from({ length: 14 }, (_, i) => `/images/Litter1/litter${70 + i}.jpg`).concat(
      ["/images/Litter1/litter85.jpg"]
    ),
  },
];

export default function SphynxesPage() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [index, setIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
const lightboxStyles: Record<string, LooseCssProperties> = {
  // фон-оверлей (backdrop) — полупрозрачный чёрный
  root: {
    '--yarl-backdrop-background': 'rgba(0, 0, 0, 0.88)',
  },
  // убираем фон у контейнера самого изображения
  container: {
    backgroundColor: 'transparent',
  },
  // фон и паддинги для списка миниатюр
  thumbnails: {
    backgroundColor: 'transparent',
    padding: '8px 0',
  },
  // у самих «коробочек» миниатюр убираем чёрный фон и тень
  thumbnail: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: '0 4px',
  },
};
  return (
    <div className="bg-[#fff8f3] min-h-screen font-sans text-[#3d2b1f]">
      <Head>
        <title>Our Sphynxes | Nude'n Satin Cattery</title>
        <meta
          name="description"
          content="Meet our Canadian Sphynx cats and kittens from Nude'n Satin cattery."
        />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      <main className="max-w-7xl mx-auto py-10 px-4">
        {/* First Litter */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Sphynxes: First Litter
        </h1>
        <section className="max-w-6xl mx-auto border-2 border-[#be915b] rounded-xl bg-white p-8 mb-20">
          {/* Parents Row */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            {/* Dad */}
            <div className="relative group w-52 transition-transform duration-200 hover:scale-105">
              <img
                src={parents[0].images[0]}
                alt={parents[0].name}
                className="rounded-lg object-cover w-full h-56 opacity-100 group-hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => {
                  setSlides(parents[0].images.map((src) => ({ src })));
                  setIndex(0);
                  setOpen(true);
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#be915b] bg-opacity-70 text-[#3d2b1f] text-sm px-2 py-1 rounded">                  See more photos
                </span>
              </div>
              <p className="mt-2 text-center font-medium group-hover:text-[#be915b]">
                Dad: {parents[0].name}
              </p>
            </div>

            {/* Heart Icon */}
            <img
              src="/icons/heart.png"
              alt="Heart"
              className="w-18 h-18"
            />

            {/* Mom */}
            <div className="relative group w-52 transition-transform duration-200 hover:scale-105">
              <img
                src={parents[1].images[0]}
                alt={parents[1].name}
                className="rounded-lg object-cover w-full h-56 opacity-100 group-hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => {
                  setSlides(parents[1].images.map((src) => ({ src })));
                  setIndex(0);
                  setOpen(true);
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-[#be915b] bg-opacity-70 text-[#3d2b1f] text-sm px-2 py-1 rounded">
                  See more photos
                </span>
              </div>
              <p className="mt-2 text-center font-medium group-hover:text-[#be915b]">
                Mom: {parents[1].name}
              </p>
            </div>
          </div>

          {/* Kittens Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {kittens.map((kitten, idx) => (
              <div
                key={idx}
                className="group border border-gray-200 rounded-xl p-8 bg-white transition-transform duration-200 hover:scale-105"
              >
                <Slider {...sliderSettings}>
                  {kitten.images.map((src, j) => (
                    <div
                      key={j}
                      className="relative cursor-pointer"
                      onClick={() => {
                        setSlides(kitten.images.map((s) => ({ src: s })));
                        setIndex(j);
                        setOpen(true);
                      }}
                    >
                      <img
                       src={src}
                       alt={kitten.name}
                       className="rounded-lg object-cover w-full aspect-square opacity-100 group-hover:opacity-60 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-[#be915b] bg-opacity-70 text-[#3d2b1f] text-sm px-2 py-1 rounded">                          See more photos
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>

                <h3 className="text-2xl font-semibold mt-6 mb-2 group-hover:text-[#be915b]">
                  {kitten.name}
                </h3>
                <ul className="list-disc list-inside mb-3">
                  {kitten.features.map((f, k) => (
                    <li
                      key={k}
                      className="group-hover:text-[#be915b]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-medium text-[#be915b] mb-1">
                  Price: {kitten.price}
                </p>
                <p className="text-xs text-gray-500">
                  * Final price depends on age, appearance & personality
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 bg-[#f8f2eb]">
          {/* …форма связи из твоего кода… */}
        </section>
      </main>

      {open && (
  <Lightbox
    open={open}
    close={() => setOpen(false)}
    slides={slides}
    index={index}
    plugins={[Thumbnails]}
    carousel={{ finite: true }}
    thumbnails={{
      position: 'bottom',
      width: 100,
      height: 80,
      gap: 4,
      padding: 8,
    }}
    styles={lightboxStyles}
  />
)}

</div>  
  );     
} 
