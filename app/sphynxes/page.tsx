// app/sphynxes/page.tsx
'use client';
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import ContactForm from "../components/ContactForm";

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
    name: "Ofeliya",
    role: "Mom",
    images: ["/images/afelia/afelia1.jpg" /* … */],
  },
];

const kittens = [
  {
    name: "Boy with Odd Eyes",
    features: ["Odd-eyed", "Pink nose", "Gentle & playful"],
    price: "2000–3000$",
images: [
      '/images/Litter1/litter64.jpg',
      '/images/Litter1/litter65.jpg',
      '/images/Litter1/litter66.jpg',
      '/images/Litter1/litter68.jpg',
      '/images/Litter1/litter69.jpg',
      '/images/Litter1/litter70.jpg',
      '/images/Litter1/litter71.jpg',
      '/images/Litter1/litter72.jpg',
      '/images/Litter1/litter73.jpg',
      '/images/Litter1/litter74.jpg',
      '/images/Litter1/litter77.jpg',
      '/images/Litter1/litter78.jpg',
      '/images/Litter1/litter79.jpg',
      '/images/Litter1/litter80.jpg',
      '/images/Litter1/litter81.jpg',
      '/images/Litter1/litter82.jpg',
      '/images/Litter1/litter83.jpg',
      '/images/Litter1/litter84.jpg',  ]},
  {
    name: "Girl with Odd Eyes",
    features: ["Odd-eyed", "Very sweet", "Soft skin"],
    price: "2000–3000$",
images: [
        '/images/Litter1/litter6.jpg',

      '/images/Litter1/litter5.jpg',
      '/images/Litter1/litter7.jpg',
      '/images/Litter1/litter8.jpg',
      '/images/Litter1/litter9.jpg',
      '/images/Litter1/litter10.jpg',
      '/images/Litter1/litter11.jpg',
      '/images/Litter1/litter12.jpg',
      '/images/Litter1/litter13.jpg',
      '/images/Litter1/litter14.jpg',
      '/images/Litter1/litter15.jpg',
      '/images/Litter1/litter16.jpg',
      '/images/Litter1/litter17.jpg',
      '/images/Litter1/litter18.jpg',
      '/images/Litter1/litter19.jpg',
      '/images/Litter1/litter20.jpg',
      '/images/Litter1/litter21.jpg',
      '/images/Litter1/litter22.jpg',
      '/images/Litter1/litter23.jpg',
      '/images/Litter1/litter24.jpg',
      '/images/Litter1/litter25.jpg',
      '/images/Litter1/litter99.jpg',
      '/images/Litter1/litter100.jpg',
      '/images/Litter1/litter101.jpg',
      '/images/Litter1/litter102.jpg',
      '/images/Litter1/litter103.jpg',
      '/images/Litter1/litter104.jpg',
      '/images/Litter1/litter105.jpg',
      '/images/Litter1/litter106.jpg',
      '/images/Litter1/litter107.jpg',
      '/images/Litter1/litter109.jpg',
      '/images/Litter1/litter110.jpg',
      '/images/Litter1/litter139.jpg',
      '/images/Litter1/litter140.jpg',
      '/images/Litter1/litter141.jpg',
      '/images/Litter1/litter142.jpg',
      '/images/Litter1/litter143.jpg',
      '/images/Litter1/litter144.jpg',
    



    ],  },
  {
    name: "Dark Girl",
    features: ["Bright yellow eyes", "Dark skin", "Active & cuddly"],
    price: "2000–3000$",
images: [

      '/images/Litter1/litter61.jpg',
      '/images/Litter1/litter55.jpg',
      '/images/Litter1/litter56.jpg',
      '/images/Litter1/litter57.jpg',
      '/images/Litter1/litter58.jpg',
      '/images/Litter1/litter59.jpg',
      '/images/Litter1/litter60.jpg',
      '/images/Litter1/litter62.jpg',
      '/images/Litter1/litter63.jpg',

      '/images/Litter1/litter123.jpg',
      '/images/Litter1/litter124.jpg',
      '/images/Litter1/litter125.jpg',
      '/images/Litter1/litter126.jpg',
      '/images/Litter1/litter127.jpg',
      '/images/Litter1/litter128.jpg',
      '/images/Litter1/litter129.jpg',
      '/images/Litter1/litter130.jpg',
      '/images/Litter1/litter131.jpg',
      '/images/Litter1/litter132.jpg',
      '/images/Litter1/litter133.jpg', 
      '/images/Litter1/litter134.jpg',
      '/images/Litter1/litter135.jpg',
]  },
  {
    name: "Light Girl",
    features: ["Blue eyes", "Cream-pink", "Gentle & sociable"],
    price: "2000–3000$",
    images: [

      '/images/Litter1/litter27.jpg',
      '/images/Litter1/litter28.jpg',
      '/images/Litter1/litter29.jpg',
      '/images/Litter1/litter30.jpg',
      '/images/Litter1/litter31.jpg',
      '/images/Litter1/litter32.jpg',
      '/images/Litter1/litter33.jpg',
      '/images/Litter1/litter34.jpg',
      '/images/Litter1/litter35.jpg',
      '/images/Litter1/litter36.jpg',
      '/images/Litter1/litter37.jpg',
      '/images/Litter1/litter38.jpg',
      '/images/Litter1/litter39.jpg',
      '/images/Litter1/litter40.jpg',
      '/images/Litter1/litter41.jpg',
      '/images/Litter1/litter42.jpg',
      '/images/Litter1/litter43.jpg',
      '/images/Litter1/litter44.jpg',
      '/images/Litter1/litter45.jpg',
      '/images/Litter1/litter46.jpg',
      '/images/Litter1/litter47.jpg',
      '/images/Litter1/litter48.jpg',
      '/images/Litter1/litter49.jpg',
      '/images/Litter1/litter50.jpg',
      '/images/Litter1/litter51.jpg',
      '/images/Litter1/litter52.jpg',
      '/images/Litter1/litter53.jpg',
      '/images/Litter1/litter54.jpg', ]
    ,
  },
];
const parents2 = [
  {
    name: "Bulochka",
    role: "Dad",
    images: ["/images/bulochka/bulochka1.jpg" /* … */],
  },
  {
    name: "Ofeliya",
    role: "Mom",
    images: ["/images/afelia/afelia1.jpg" /* … */],
  },
];

const kittens2 = [
  {
    name: "Kitten coming soon",
    features: ["Details coming soon"],
    price: "2000–3000$",
    images: ["/images/coming-soon-banner.jpg"],
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

  return (
    <div className="bg-[#fff8f3] min-h-screen font-sans text-[#3d2b1f]">
      <Head>
        <title>Our Sphynxes | Nude&apos;n Satin Cattery</title>
        <meta
          name="description"
          content="Meet our Canadian Sphynx cats and kittens from Nude&apos;n Satin cattery."
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

          {/* Kittens Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {kittens.map((kitten, idx) => (
              <div
                key={idx}
                className="group overflow-hidden border border-gray-200 rounded-xl p-8 bg-white transition-transform duration-200 hover:scale-105"
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
 {/* Second Litter */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Sphynxes: Second Litter
        </h2>
        <section className="max-w-6xl mx-auto border-2 border-[#be915b] rounded-xl bg-white p-8 mb-20">
          {/* Parents Row */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            {/* Dad */}
            <div className="relative group w-52 transition-transform duration-200 hover:scale-105">
              <img
                src={parents2[0].images[0]}
                alt={parents2[0].name}
                className="rounded-lg object-cover w-full h-56 opacity-100 group-hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => {
                  setSlides(parents2[0].images.map((src) => ({ src })));
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
                Dad: {parents2[0].name}
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
                src={parents2[1].images[0]}
                alt={parents2[1].name}
                className="rounded-lg object-cover w-full h-56 opacity-100 group-hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => {
                  setSlides(parents2[1].images.map((src) => ({ src })));
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
                Mom: {parents2[1].name}
              </p>
            </div>
          </div>

          {/* Kittens Grid (2 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {kittens2.map((kitten, idx) => (
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
                        <span className="bg-[#be915b] bg-opacity-70 text-[#3d2b1f] text-sm px-2 py-1 rounded">
                          See more photos
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
                    <li key={k} className="group-hover:text-[#be915b]">
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
                    <h2 className="text-4xl font-semibold mb-12 text-center pl-1">Contacts</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="mb-5 text-[#473b2a] text-lg">
                We are always happy to clarify any question about owning a Sphynx or provide insights into their unique care and characteristics!
              </div>
              <div className="mb-7">
                <div className="flex mb-2">
                  <span className="w-28 font-semibold">Address</span>
                  <span>Canada, Vancouver</span>
                </div>
                <div className="flex mb-2">
                  <span className="w-28 font-semibold">Hours</span>
                  <span>10 AM - 12 PM</span>
                </div>
                <div className="flex mb-2">
                  <span className="w-28 font-semibold">Contacts</span>
                  <span>
                    <a href="mailto:nudensatin@gmail.com" className="underline hover:text-[#aa8960]">nudensatin@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83285.16669239991!2d-123.20313810688907!3d49.28281178752603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z0JLQsNC90LrRg9Cy0LXRgCwg0JHRgNC40YLQsNC90YHQutCw0Y8g0JrQvtC70YPQvNCx0LjRjywg0JrQsNC90LDQtNCw!5e0!3m2!1sru!2sua!4v1751052835254!5m2!1sru!2sua"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {open && (
          <Lightbox
    open={open}
    close={() => setOpen(false)}
    slides={slides}
    index={index}
    plugins={[Video, Thumbnails]}
    carousel={{ finite: true }}
    thumbnails={{
      position: 'bottom',
      width: 100,
      height: 80,
      gap: 4,
      padding: 8,
      showToggle: false,
    }}
    styles={{
    // 2) фон контейнера слайдов (чтобы картинка не «засветилась»)
    container: {
      backgroundColor: 'rgba(248, 242, 235, 0.90)',
    },
    // 3) фон-подложка для полосы миниатюр
    thumbnailsContainer: {
      backgroundColor: 'rgba(228, 200, 164, 1)',
      padding: '8px 0',
    },
    // 4) стиль самих миниатюр
    thumbnail: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      border: '2px solid #e4c8a4',
      margin: '0 4px',
    },
  }}
/>
      )}
</div>  
  );     
} 
