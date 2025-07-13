'use client';

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ——— Данные для родителей и котят ———
const parents = [
  {
    name: "Bullochka",
    desc: "Our king. Gentle, charismatic and affectionate. Heterochromia (odd eyes). Warm and very social.",
    images: [
      "/images/bulochka/bulochka1.jpg",
      "/images/bulochka/bulochka2.jpg",
      "/images/bulochka/bulochka3.jpg",
      "/images/bulochka/bulochka5.jpg",
      "/images/bulochka/bulochka6.jpg",
      "/images/bulochka/bulochka7.jpeg",
      "/images/bulochka/bulochka8.jpg",
      "/images/bulochka/bulochka9.jpg",
      "/images/bulochka/bulochka10.jpg",
      "/images/bulochka/bulochka11.jpg",
    ]
  },
  {
    name: "Vera",
    desc: "Our queen. Energetic, affectionate and attentive mother. Large green eyes, elegant build.",
    images: [
      "/images/vera/vera1.jpg",
      "/images/vera/vera2.jpg",
      "/images/vera/vera3.jpg",
      "/images/vera/vera4.jpg",
      "/images/vera/vera5.jpg",
      "/images/vera/vera6.jpg",
      "/images/vera/vera7.jpg",
      "/images/vera/vera8.jpg",
      "/images/vera/vera9.jpg",
    ]
  }
];

// Первый помёт — котята
const kittens = [
  {
    name: "Boy with Odd Eyes",
    features: ["Odd-eyed", "Pink nose", "Gentle & playful"],
    price: "2000–3000$",
    images: Array.from({ length: 8 }, (_, i) => `/images/Litter1/litter${i + 1}.jpg`)
  },
  {
    name: "Girl with Odd Eyes",
    features: ["Odd-eyed", "Very sweet", "Soft skin"],
    price: "2000–3000$",
    images: Array.from({ length: 12 }, (_, i) => `/images/Litter1/litter${21 + i}.jpg`)
  },
  {
    name: "Dark Girl",
    features: ["Bright yellow eyes", "Dark skin", "Active & cuddly"],
    price: "2000–3000$",
    images: Array.from({ length: 13 }, (_, i) => `/images/Litter1/litter${45 + i}.jpg`)
  },
  {
    name: "Light Girl",
    features: ["Blue eyes", "Cream-pink", "Gentle & sociable"],
    price: "2000–3000$",
    images: Array.from({ length: 15 }, (_, i) => `/images/Litter1/litter${70 + i}.jpg`)
  }
];

const parents2 = [
  {
    name: "Bullochka",
    desc: "Our king. Gentle, charismatic and affectionate.",
    images: [
      "/images/bulochka/bulochka1.jpg",
      "/images/bulochka/bulochka2.jpg"
    ]
  },
  {
    name: "Afeliya",
    desc: "Our queen. Graceful, wise, and a caring mother.",
    images: [
      "/images/afelia/afelia1.jpg",
      "/images/afelia/afelia2.jpg"
    ]
  }
];

export default function Sphynxes() {
  const sliderSettings = {
    dots: true,
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
        <title>Our Sphynxes | Nude'n Satin Cattery</title>
      </Head>
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center px-4 md:px-10 py-4 shadow-md bg-white gap-2 md:gap-0">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold">Nude'n Satin</span>
        </div>
        <nav className="text-lg flex flex-wrap space-x-4 md:space-x-8 font-bold md:ml-57 mt-2 md:mt-0">
          <Link href="/">Home</Link>
          <Link href="/sphynxes">Our Sphynxes</Link>
          <Link href="/gallery" className="text-[#ac824e] underline">Gallery</Link>
          <Link href="/breed-info">Breed Info</Link>
          <Link href="#contact">Contact</Link></nav>
        <div className="flex space-x-4 md:ml-auto mt-2 md:mt-0">
          <a href="#" aria-label="Instagram"><img src="/icons/instagram.png" alt="Instagram" className="h-6 w-6" /></a>
          <a href="#" aria-label="Facebook"><img src="/icons/Facebook.png" alt="Facebook" className="h-6 w-6" /></a>
          <a href="#" aria-label="TikTok"><img src="/icons/tiktok.png" alt="TikTok" className="h-6 w-6" /></a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Our Sphynxes</h1>

        {/* Родители */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {parents.map((p, i) => (
              <div key={i} className="bg-[#fff] rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <div className="w-full max-w-sm mb-4">
                  <Slider {...sliderSettings}>
                    {p.images.map((src, idx) => (
                      <div key={idx}>
                        <img src={src} alt={p.name} className="rounded-xl w-full object-cover h-80" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <h2 className="text-2xl font-bold mb-1">{p.name}</h2>
                <p className="text-lg text-[#5c4535] mb-2 text-center">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Котята */}
        <h2 className="text-3xl font-bold text-center mb-6">Kittens from First Litter</h2>
        <section className="mb-20 grid md:grid-cols-2 gap-10">
          {kittens.map((kitten, i) => (
            <div key={i} className="bg-[#fff] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-64 mb-4 md:mb-0 md:mr-6">
                <Slider {...sliderSettings}>
                  {kitten.images.map((src, idx) => (
                    <div key={idx}>
                      <img src={src} alt={kitten.name} className="rounded-xl w-full object-cover h-64" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{kitten.name}</h3>
                <ul className="list-disc list-inside mb-2">
                  {kitten.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
                <div className="font-semibold text-[#ac824e] mb-1">Price: <span className="text-base">{kitten.price}</span></div>
                <div className="text-sm text-[#6c584a]">* Final price depends on age, appearance & personality</div>
              </div>
            </div>
          ))}
        </section>

        {/* Второй помёт */}
        <h2 className="text-3xl font-bold text-center mb-6">Second Litter (Coming Soon)</h2>
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-start">
          {parents2.map((p, i) => (
            <div key={i} className="bg-[#fff] rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-full max-w-sm mb-4">
                <Slider {...sliderSettings}>
                  {p.images.map((src, idx) => (
                    <div key={idx}>
                      <img src={src} alt={p.name} className="rounded-xl w-full object-cover h-80" />
                    </div>
                  ))}
                </Slider>
              </div>
              <h2 className="text-2xl font-bold mb-1">{p.name}</h2>
              <p className="text-lg text-[#5c4535] mb-2 text-center">{p.desc}</p>
            </div>
          ))}
        </section>
        <div className="rounded-xl bg-[#fae9d7] border-2 border-[#e4c8a4] p-8 flex flex-col items-center mb-16">
          <img src="/images/coming-soon-banner.jpg" alt="Coming soon" className="w-full max-w-2xl rounded-xl mb-5 shadow" />
          <h3 className="text-2xl font-bold text-[#b0895b] mb-2">Kittens Coming Soon!</h3>
          <p className="text-center text-lg">Pre-order for the second litter is open. Reserve your kitten today!</p>
        </div>
      </main>

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
    <form className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-5 justify-center">
      <input
        type="text"
        placeholder="Enter your full name*"
        className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        required
      />
      <input
        type="tel"
        placeholder="Enter your phone number*"
        className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
      />
      <input
        type="email"
        placeholder="Enter your e-mail*"
        className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        required
      />
      <textarea
        placeholder="Type your message"
        className="p-3 border border-[#ebddc7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca485] transition"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 bg-[#d6b890] text-[#473b2a] rounded-lg hover:bg-[#edd6b6] transition font-semibold shadow uppercase tracking-wider"
      >
        Send message
      </button>
    </form>
  </div>
</section>

      <footer className="text-center py-8 md:py-10 bg-[#f5e6da] text-sm">
        © Nude'n Satin. All rights Reserved. Created by DevCodeX.
      </footer>
    </div>
  );
}
