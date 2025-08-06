'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import ContactForm from '../components/ContactForm';
import type { Slide } from 'yet-another-react-lightbox';

interface ImageItem {
  src: string;
  type: 'img';
  objectPosition?: string;
}

interface VideoItem {
  src: string;
  type: 'video';
  poster: string;
}

type MediaItem = ImageItem | VideoItem;

interface GalleryBlock {
  title: string;
  description: string;
  media: MediaItem[];
}
const keywords = [
  'sphynx cat', 'sphynx kitten', 'hairless cat', 'canadian sphynx',
  'sphynx cattery', 'sphynx breeder', 'sphynx adoption',
  'sphynx kittens for sale', 'elite cattery', 'hypoallergenic cat',
  'sphynx health', 'sphynx care', 'sphynx grooming', 'sphynx diet',
  'sphynx personality', 'sphynx temperament', 'sphynx kitten price',
  'sphynx cat Canada', 'sphynx kittens Canada', 'sphynx breeder Canada',
  'hairless kitten', 'naked cat', 'sphynx home', 'sphynx cat video',
  'cat show sphynx', 'champion sphynx', 'sphynx cat photos',
  'hairless cat pictures', 'sphynx kitten delivery',
  'sphynx cat vaccination', 'sphynx cat shipping',
  'sphynx cattery Vancouver', 'sphynx cattery British Columbia',
  'sphynx kittens Vancouver', 'sphynx kittens BC', 'cfa sphynx breeder',
  'tica sphynx breeder', 'sphynx kitten reservation',
  'sphynx adoption Canada', 'sphynx cat grooming tips',
  'sphynx cat health guarantee', 'sphynx cat colors',
  'sphynx cat patterns', 'hairless cat love', 'exotic sphynx',
  'purebred sphynx', 'rare sphynx', 'blue sphynx', 'odd-eyed sphynx',
  'family sphynx pet', 'канадский сфинкс', 'купить сфинкса',
  'питомник сфинксов', 'сфинкс котенок', 'голый кот',
  'котенок без шерсти', 'элитный питомник', 'сфинкс заводчик',
  'сфинкс Канада', 'продажа сфинксов', 'сфинкс цены', 'уход за сфинксом',
  'здоровье сфинкса', 'кормление сфинкса', 'характер сфинкса',
  'сфинкс фото', 'сфинкс видео', 'сфинкс доставка', 'прививки сфинкса',
  'выставка сфинксов', 'породистый сфинкс', 'редкий сфинкс',
  'голубой сфинкс', 'разноглазый сфинкс', 'канадский сфинкс купить',
  'котята сфинкса Ванкувер', 'сфинксы в Канаде', 'сфинкс на заказ',
  'лучший питомник сфинксов', 'сертифицированный питомник',
  'канадский сфинкс цена', 'уход за кожей сфинкса', 'гипоаллергенный кот',
  'лысый котенок', 'сфинкс здоровье', 'сфинкс характер',
  'сфинкс в добрые руки', 'сфинкс окрасы', 'элитные котята',
  'канадский сфинкс Ванкувер', 'заводчик сфинксов Канада',
  'фото котят сфинкса', 'любовь к сфинксам', 'отзыв о питомнике',
  'рекомендации по содержанию', 'официальные документы CFA',
  'TICA сертификат', 'международный питомник сфинксов', 'розовые сфинксы',
  'котята шоу-класса'
].join(', ');

// === 2) Основные галерейные блоки (родители и другие кошки) ===
const baseBlocks: GalleryBlock[] = [

  {
    title: 'Bulochka — Our King',
    description: 'The main sire of Nude’n Satin. Gentle, charismatic and affectionate.',
    media: [
      { src: '/images/bulochka/bulochka1.jpg', type: 'img' },
      { src: '/images/bulochka/bulochka2.jpg', type: 'img' , objectPosition: "top center" },
      { src: '/images/bulochka/bulochka3.jpg', type: 'img' },
      { type: 'video', src: '/images/bulochka/bulochka4.mp4', poster: '/images/bulochka/bulochka44.jpg' },
      { src: '/images/bulochka/bulochka5.jpg', type: 'img' },
      { src: '/images/bulochka/bulochka6.jpg', type: 'img' },
      { src: '/images/bulochka/bulochka7.jpeg', type: 'img' },
      { type: 'video', src: '/images/bulochka/bulochka8.mp4', poster: '/images/bulochka/bulochka88.jpg' },
      { src: '/images/bulochka/bulochka9.jpg', type: 'img' },
      { src: '/images/bulochka/bulochka10.jpg', type: 'img' },
      { src: '/images/bulochka/bulochka11.jpg', type: 'img' },
      { type: 'video', src: '/images/bulochka/bulochka12.mp4', poster: '/images/bulochka/bulochka1212.jpg' },
      { type: 'video', src: '/images/bulochka/bulochka13.mp4', poster: '/images/bulochka/bulochka1313.jpg' },
      { type: 'video', src: '/images/bulochka/bulochka14.mp4', poster: '/images/bulochka/bulochka1414.jpg' },
      { type: 'video', src: '/images/bulochka/bulochka15.mp4', poster: '/images/bulochka/bulochka1515.jpg' },
      { type: 'video', src: '/images/bulochka/bulochka16.mp4', poster: '/images/bulochka/bulochka1616.jpg' },
    ],
  },
  {
    title: 'Ofelya — Our Queen',
    description: 'Graceful, wise, and a caring mother.',
    media: [
      { src: '/images/afelia/afelia1.jpg', type: 'img', objectPosition: "top center" },
      { src: '/images/afelia/afelia2.jpg', type: 'img' , objectPosition: "top center"},
      { src: '/images/afelia/afelia3.jpg', type: 'img', objectPosition: "top center" },
      { src: '/images/afelia/afelia4.jpg', type: 'img' , objectPosition: "top center"},
      { src: '/images/afelia/afelia5.jpg', type: 'img' , objectPosition: "top center"},
      { src: '/images/afelia/afelia6.jpg', type: 'img', objectPosition: "top center" },
      { src: '/images/afelia/afelia7.jpg', type: 'img' , objectPosition: "top center"},
      { src: '/images/afelia/afelia8.jpg', type: 'img' , objectPosition: "top center"},
      { src: '/images/afelia/afelia9.jpg', type: 'img' },
      { src: '/images/afelia/afelia10.jpg', type: 'img' },
      { src: '/images/afelia/afelia11.jpg', type: 'img' },
      { src: '/images/afelia/afelia12.jpg', type: 'img' },
      { src: '/images/afelia/afelia13.jpg', type: 'img' },
      { src: '/images/afelia/afelia14.jpg', type: 'img' },
      { type: 'video', src: '/images/afelia/afelia15.mp4', poster: '/images/afelia/afelia1515.jpg' },
      { type: 'video', src: '/images/afelia/afelia16.mp4', poster: '/images/afelia/afelia1616.jpg' },
      { src: '/images/afelia/afelia17.jpg', type: 'img' },
      { src: '/images/afelia/afelia18.jpg', type: 'img' },
      { type: 'video', src: '/images/afelia/afelia19.mp4', poster: '/images/afelia/afelia1919.jpg' },
    ],
  },
  {
    title: 'Liliana — Our Queen',
    description: 'Playful, elegant, devoted to her kittens.',
    media: [
      { src: '/images/liliana/liliana1.jpg', type: 'img' },
    { src: '/images/liliana/liliana2.jpg', type: 'img' },
    { src: '/images/liliana/liliana3.jpg', type: 'img' },
    { src: '/images/liliana/liliana4.jpg', type: 'img' },
    { src: '/images/liliana/liliana5.jpg', type: 'img' },
    { src: '/images/liliana/liliana6.jpg', type: 'img' },
    { src: '/images/liliana/liliana7.jpg', type: 'img' },
    { type: 'video', src: '/images/liliana/liliana8.mp4', poster: '/images/liliana/liliana88.jpg' },
    { type: 'video', src: '/images/liliana/liliana9.mp4', poster: '/images/liliana/liliana99.jpg' },
    { type: 'video', src: '/images/liliana/liliana10.mp4', poster: '/images/liliana/liliana1010.jpg' },
    { type: 'video', src: '/images/liliana/liliana11.mp4', poster: '/images/liliana/liliana1111.jpg' },
    { type: 'video', src: '/images/liliana/liliana12.mp4', poster: '/images/liliana/liliana1212.jpg' },
    ],
  },
];

// === 1) Первый помёт с 162 фото ===
const firstLitterBlock: GalleryBlock = {
  title: 'First Litter — Bullochka × Ofelya',
  description: 'Born from Bullochka and Ofelya, wonderful kittens.',
  media: Array.from({ length: 162 }, (_, i) => ({
    src: `/images/Litter1/litter${i + 1}.jpg`,
    type: 'img' as const,
  })),
};

// === 3) Второй помёт ===
const secondLitterBlock: GalleryBlock = {
  title: 'Second Litter — Bullochka × Afeliya',
  description: 'Parents: Bullochka & Afeliya. Photos coming soon.',
  media: [
    { src: '/images/coming-soon-banner.jpg', type: 'img' },
  ],
};


// === 4) Собираем все блоки галереи в нужном порядке ===
const galleryBlocks: GalleryBlock[] = [
  ...baseBlocks,       // сначала родители и «другие кошки»
  firstLitterBlock,    // потом первый помёт
  secondLitterBlock,   // и в самом конце — второй помёт
];

export default function Gallery() {
  const [open, setOpen]   = useState(false);
  const [index, setIndex] = useState(0);

  // готовим слайды для Lightbox
  const slides = useMemo<Slide[]>(
    () =>
      galleryBlocks.flatMap(block =>
        block.media.map(item =>
          item.type === 'img'
            ? { src: item.src, type: 'image' as const }
            : {
                type: 'video' as const,
                sources: [{ src: item.src, type: 'video/mp4' as const }],
                poster: item.poster,
              }
        )
      ),
    []
  );

  // вычисляем смещения для каждого блока
  const offsets = useMemo(() => {
    let cursor = 0;
    return galleryBlocks.map(block => {
      const start = cursor;
      cursor += block.media.length;
      return start;
    });
  }, []);

  
  

  return (
    <div className="bg-[#fff8f3] min-h-screen font-sans text-[#3d2b1f]">
      <Head>
        <title>Gallery | Nude&apos;n Satin - Canadian Sphynx Cattery</title>
        <meta
          name="description"
          content="Explore photos and videos of our Canadian Sphynxes and kittens at Nude'n Satin cattery."
        />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Full Gallery</h1>

        {galleryBlocks.map((block, bi) => (
          <section key={bi} className="mb-16">
            <h2 className="text-2xl font-bold mb-2">{block.title}</h2>
            <p className="mb-6 text-[#6c584a]">{block.description}</p>
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {block.media.map((m, mi) => {
                const globalIndex = offsets[bi] + mi;
                return (
                  <div
                    key={globalIndex}
                    className="relative rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer hover:scale-105"
                    style={{ aspectRatio: '4/3', minHeight: 230 }}
                    onClick={() => { setIndex(globalIndex); setOpen(true); }}
                  >
                    {m.type === 'img' ? (
                      <img
                        src={m.src}
                        alt=""
                        loading="lazy"
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={m.src}
                          poster={m.poster}
                          muted
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="#fff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

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

        {/* Контакты */}
        <section id="contact" className="py-16 md:py-20 bg-[#f8f2eb]">
          <h2 className="text-4xl font-semibold mb-12 text-center">Contacts</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="mb-5 text-[#473b2a] text-lg">
                We are always happy to clarify any question about owning a Sphynx or provide insights
                into their unique care and characteristics!
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
                    <a
                      href="mailto:nudensatin@gmail.com"
                      className="underline hover:text-[#aa8960]"
                    >
                      nudensatin@gmail.com
                    </a>
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
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
