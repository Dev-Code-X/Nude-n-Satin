'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '/Users/kuz/nude-n-satin-site/app/components/Header.tsx';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';


// ----- Галерея
const galleryBlocks = [
  {
    title: 'Bullochka — Our King',
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
    title: 'Afeliya — Our Queen',
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

  {
    title: 'Vera — Our Queen',
    description: 'Energetic and caring sphynx-mix.',
    media: [
      { src: '/images/vera/vera1.jpg', type: 'img' },
      { src: '/images/vera/vera2.jpg', type: 'img' },
      { src: '/images/vera/vera3.jpg', type: 'img' },
      { src: '/images/vera/vera4.jpg', type: 'img' },
      { src: '/images/vera/vera5.jpg', type: 'img' },
      { src: '/images/vera/vera6.jpg', type: 'img' },
      { src: '/images/vera/vera7.jpg', type: 'img' },
      { src: '/images/vera/vera8.jpg', type: 'img' },
      { src: '/images/vera/vera9.jpg', type: 'img' },
      { type: 'video', src: '/images/vera/vera10.mp4', poster: '/images/vera/vera1010.jpg' },
      { type: 'video', src: '/images/vera/vera11.mp4', poster: '/images/vera/vera1111.jpg' },
      { type: 'video', src: '/images/vera/vera12.mp4', poster: '/images/vera/vera1212.jpg' },
      { type: 'video', src: '/images/vera/vera13.mp4', poster: '/images/vera/vera1313.jpg' },
      { type: 'video', src: '/images/vera/vera14.mp4', poster: '/images/vera/vera1414.jpg' },
      { type: 'video', src: '/images/vera/vera15.mp4', poster: '/images/vera/vera1515.jpg' },
      { type: 'video', src: '/images/vera/vera16.mp4', poster: '/images/vera/vera1616.jpg' },
    ],
  },
  {
    title: 'First Litter — Bullochka × Vera',
    description: 'Born from Bullochka and Vera, wonderful kittens.',
    media: [
      ...Array.from({ length: 68 }, (_, i) => ({
        src: `/images/Litter1/litter${i + 1}.jpg`,
        type: 'img'
      }))
    ],
  },
  {
    title: 'Second Litter — Bullochka × Afeliya',
    description: 'Parents: Bullochka & Afeliya. Photos coming soon.',
    media: [
      { src: '/images/coming-soon-banner.jpg', type: 'img' }
    ],
  },
];

// Формируем массив для лайтбокса с поддержкой видео!
const slides = galleryBlocks.flatMap(block =>
  block.media.map(item =>
    item.type === 'img'
      ? { src: item.src, type: 'image' }
      : {
          type: 'video',
          sources: [{ src: item.src, type: 'video/mp4' }],
          poster: item.poster,
        }
  )
);

let cursor = 0;
const offsets = galleryBlocks.map(block => {
  const start = cursor; cursor += block.media.length; return start;
});

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);


  // ---- Анимация появления блоков при скролле
  useEffect(() => {
    const blocks = document.querySelectorAll('.anim-scroll');
    const showOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(showOnScroll, {
      threshold: 0.18,
    });
    blocks.forEach((block) => observer.observe(block));
    return () => blocks.forEach((block) => observer.unobserve(block));
  }, []);


  // --- Исправление полноэкранного видео (object-fit)
  useEffect(() => {
    function handleFullscreenChange() {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (document.fullscreenElement === video) {
          video.classList.remove('object-cover');
          video.classList.add('object-contain');
          video.style.background = "#111";
        } else {
          video.classList.remove('object-contain');
          video.classList.add('object-cover');
          video.style.background = "";
        }
      });
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="bg-[#fff8f3] min-h-screen font-sans text-[#3d2b1f]">
      <Head>
        <title>Gallery | Nude&apos;n Satin - Canadian Sphynx Cattery</title>
      </Head>
      {/* --- МЕНЮ --- */}
      <Header />

      <main className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 anim-scroll opacity-0 transition-all duration-700">Full Gallery</h1>
        {galleryBlocks.map((block, bi) => (
          <section key={bi} className="mb-16 anim-scroll opacity-0 transition-all duration-700">
            <h2 className="text-2xl font-bold mb-2">{block.title}</h2>
            <p className="mb-6 text-[#6c584a]">{block.description}</p>
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {block.media.map((m, mi) => {
                const gi = offsets[bi] + mi;
                const extraImgStyle = m.objectPosition
                  ? { objectPosition: m.objectPosition }
                  : {};
                return (
                  <div
                    key={gi}
                    className="relative rounded-2xl overflow-hidden shadow-md bg-white cursor-pointer transform transition hover:scale-105 hover:bg-[#f7f0e7]"                    style={{ aspectRatio: '4/3', minHeight: 230 }}
                    onClick={() => { setIndex(gi); setOpen(true); }}
                  >
                    {m.type === 'img' ? (
                      <img
                        src={m.src}
                        alt=""
                        className="w-full h-full object-cover"
                        style={extraImgStyle}
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
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
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
            plugins={[Video]}
            styles={{ container: { background: 'rgba(0,0,0,0.95)' } }}
          />
        )}

        {/* ---- Контакты ---- */}
        <section id="contact" className="py-16 md:py-20 bg-[#f8f2eb] anim-scroll opacity-0 transition-all duration-700">
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
            <form className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-5 justify-center">
              <input type="text" placeholder="Enter your full name*" className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition" required />
              <input type="tel" placeholder="Enter your phone number*" className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition" />
              <input type="email" placeholder="Enter your e-mail*" className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition" required />
              <textarea placeholder="Type your message" className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition" rows={4}></textarea>
              <button type="submit" className="px-6 py-3 bg-[#d6b890] text-[#473b2a] rounded-lg hover:bg-[#edd6b6] transition font-semibold shadow uppercase tracking-wider">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 md:py-10 bg-[#f5e6da] text-sm">
        © Nude&apos;n Satin. All rights Reserved. Created by DevCodeX.
      </footer>

      {/* --- SCROLL FADE-UP ANIMATION --- */}
      <style jsx global>{`
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0px) scale(1) !important;
          transition: all 0.7s cubic-bezier(.23,1.1,.32,1) !important;
        }
        .anim-scroll {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
        }
      `}</style>
    </div>
  );
}