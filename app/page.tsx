'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Функция для плавного скролла по id (только на главной!)
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 60,
      behavior: 'smooth',
    });
  }
}

const menuItems = [
  { label: 'About Us', id: 'about', type: 'scroll' },
  { label: 'Our Sphynxes', id: 'sphynxes', type: 'scroll' },
  { label: 'Gallery', href: '/gallery', type: 'link' },
  { label: 'Breed Info', href: '/breed-info', type: 'link' },
  { label: 'Contact', id: 'contact', type: 'scroll' },
];

export default function Home() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('about');

  // Выделение для якорей (только на главной!)
  useEffect(() => {
    if (pathname !== '/') return;
    const handler = () => {
      const ids = ['about', 'sphynxes', 'faq', 'contact'];
      let current = 'about';
      for (let id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [pathname]);

  // Анимация появления секций
  useEffect(() => {
    const blocks = document.querySelectorAll('.anim-scroll');
    const showOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(showOnScroll, { threshold: 0.2 });
    blocks.forEach((block) => observer.observe(block));
    return () => blocks.forEach((block) => observer.unobserve(block));
  }, []);

  // Адаптация видео в fullscreen
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
    <div className="bg-[#fff8f3] text-[#3d2b1f] font-sans">
      <Head>
        <title>Nude'n Satin - Canadian Sphynx Cattery</title>
        <meta name="description" content="Premium Canadian Sphynx cattery offering elegant, healthy kittens. Discover the Nude'n Satin difference." />
        <meta property="og:title" content="Nude'n Satin - Canadian Sphynx Cattery" />
        <meta property="og:description" content="Premium Canadian Sphynx cattery offering elegant, healthy kittens. Discover the Nude'n Satin difference." />
        <meta property="og:image" content="/og-preview.jpg" />
      </Head>

      {/* Хедер */}
      <header className="flex flex-col md:flex-row items-center px-4 md:px-10 py-4 shadow-md bg-white gap-2 md:gap-0">
        <Link href="/" className="flex items-center space-x-4 mb-2 md:mb-0 hover:opacity-90 transition">
          <img src="/images/logo.png" alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold">Nude'n Satin</span>
        </Link>
        <nav className="text-lg flex flex-wrap space-x-4 md:space-x-8 font-bold md:ml-24 mt-2 md:mt-0">
          {menuItems.map((item, idx) =>
            item.type === 'link' ? (
              <Link
              key={item.label}
             href={item.href || '#'}
             className={
             (pathname === item.href
              ? "underline text-[#ac824e]"
             : "hover:underline") +
             " bg-transparent px-2 py-1 rounded transition"
  }
>
  {item.label}
</Link>

            ) : (
              <button
                key={item.label}
                onClick={() => scrollToId(item.id)}
                className={
                  (pathname === '/' && activeSection === item.id
                    ? "underline text-[#ac824e]"
                    : "hover:underline") +
                  " bg-transparent px-2 py-1 rounded transition"
                }
              >
                {item.label}
              </button>
            )
          )}
        </nav>
        <div className="flex space-x-4 md:ml-auto mt-2 md:mt-0">
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener"><img src="/icons/instagram.png" alt="Instagram" className="h-6 w-6" /></a>
          <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener"><img src="/icons/Facebook.png" alt="Facebook" className="h-6 w-6" /></a>
          <a href="https://tiktok.com/" aria-label="TikTok" target="_blank" rel="noopener"><img src="/icons/tiktok.png" alt="TikTok" className="h-6 w-6" /></a>
        </div>
      </header>
      <section className="w-full anim-scroll opacity-0 transition-all duration-700 ">
        <img src="/images/banner.png" alt="Nude'n Satin Banner" className="w-full h-auto object-cover" />
      </section>

      <main className="px-4 md:px-8 py-0 space-y-16 md:space-y-24" >
        {/* About Section */}
        <section id="about" className="py-10 px-2 md:px-6 bg-[#fff8f3] anim-scroll opacity-0 transition-all duration-700 mb-10">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="space-y-5 text-[1.15rem] leading-relaxed text-[#3d2b1f] flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">About Nude’n Satin</h2>
                <p>Welcome to Nude’n Satin — an elite Canadian Sphynx cattery where technology meets boundless love for our elegant companions.</p>
                <p>We strive to create a harmonious environment for our Sphynxes, using innovative care approaches like climate control, personalized diets, and regular veterinary checks. Our goal is to gift every family a companion that brings joy and warmth, preserving the Canadian breed’s legacy.</p>
                <p>Nude’n Satin offers exclusive care packages, including virtual consultations, premium kitten delivery, and personalized adaptation tips for Sphynxes in your home. We pride ourselves on our approach, inspired by world-class design and care standards. We combine cutting-edge knowledge with love to ensure each kitten is healthy and happy.</p>
                <p>In 2024, Nude’n Satin stands out among other catteries with our focus on aesthetics, modernity, and personalized service. We create not just pets, but family members who inspire and delight.</p>
              </div>
              <div className="flex flex-col gap-6">
                <img src="/images/cat5.jpg" alt="Cat 5" className="w-full h-[320px] object-cover rounded-xl shadow-md" />
                <img src="/images/cat6.jpeg" alt="Cat 6" className="w-full h-[520px] object-cover rounded-xl shadow-md" />
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
              <img src="/images/cat1.jpeg" alt="Cat 1" className="w-full h-full object-cover rounded-xl shadow-md" />
              <img src="/images/cat2.jpeg" alt="Cat 2" className="w-full h-full object-cover rounded-xl shadow-md" />
              <img src="/images/cat3.jpg" alt="Cat 3" className="w-full h-full object-cover rounded-xl shadow-md" />
              <img src="/images/cat4.jpeg" alt="Cat 4" className="w-full h-full object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </section>

        {/* Why Adopt From Us */}
        <section className="bg-white py-10 md:py-14 anim-scroll opacity-0 transition-all duration-700">
          <h2 className="text-3xl font-semibold text-center mb-15 ">Why Adopt From Us</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col md:flex-row gap-7 w-full">
              {/* Карточка 1 */}
              <div className="flex-1 p-7 rounded-2xl bg-[#f8f2eb] border border-[#ebddc7] flex flex-col items-center shadow-md transition-transform duration-150 hover:scale-110 hover:shadow-2xl">
                <img src="/icons/health.svg" alt="Healthy Sphynxes" className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Exceptional Health</h3>
                <p className="text-base text-[#71604a] text-center">
                  All of our Sphynxes are tested and cleared for skin health, heart conditions, and genetic issues, certified with leading veterinary organizations.
                </p>
              </div>
              {/* Карточка 2 */}
              <div className="flex-1 p-7 rounded-2xl bg-[#f8f2eb] border border-[#ebddc7] flex flex-col items-center shadow-md transition-transform duration-150 hover:scale-110 hover:shadow-2xl">
                <img src="/icons/instructions.svg" alt="Useful Instructions" className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Clear Instructions</h3>
                <p className="text-base text-[#71604a] text-center">
                  We will provide CFA papers, health records, feeding instructions, and a care manual for your Sphynx kitten.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-7 w-full">
              {/* Карточка 3 */}
              <div className="flex-1 p-7 rounded-2xl bg-[#f8f2eb] border border-[#ebddc7] flex flex-col items-center shadow-md transition-transform duration-150 hover:scale-110 hover:shadow-2xl">
                <img src="/icons/contact.svg" alt="Always in Touch" className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Always In Touch</h3>
                <p className="text-base text-[#71604a] text-center">
                  We keep in touch with new owners, checking the Sphynxes’ condition and offering ongoing support from time to time.
                </p>
              </div>
              {/* Карточка 4 */}
              <div className="flex-1 p-7 rounded-2xl bg-[#f8f2eb] border border-[#ebddc7] flex flex-col items-center shadow-md transition-transform duration-150 hover:scale-110 hover:shadow-2xl">
                <img src="/icons/advice.svg" alt="Useful Advice" className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Expert Advice</h3>
                <p className="text-base text-[#71604a] text-center">
                  Free advice on grooming, socializing, adaptation and every stage of your Sphynx’s happy life.
                </p>
              </div>
            </div>
          </div >
        </section>

        <section id="sphynxes" className="py-12 md:py-0 bg-[#fffaf6] anim-scroll opacity-0 transition-all duration-700 mb-12">
          <h2 className="text-3xl font-semibold text-center mb-15 -mt-10">Our Sphynxes</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 px-2 md:px-6">
            {/* КОТ 1 */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden anim-scroll opacity-0 transition-all duration-700 hover:scale-110 transition-transform duration-150">
              <img src="/images/father.jpg" alt="Bullochka - Father" className="w-full md:w-72 h-72 object-cover" />
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-2xl font-bold mb-1">Bullochka</h3>
                <p className="text-base text-gray-500 mb-2">King (Father)</p>
                <p className="text-gray-700">Canadian Sphynx, affectionate, calm and charismatic, the father of many kittens in our cattery.</p>
              </div>
            </div>
            {/* КОТ 2 */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden anim-scroll opacity-0 transition-all duration-700 hover:scale-110 transition-transform duration-150">
              <img src="/images/mother1.jpg" alt="Afeliya - Queen Mom" className="w-full md:w-72 h-72 object-cover" />
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-2xl font-bold mb-1">Afeliya</h3>
                <p className="text-base text-gray-500 mb-2">Queen Mom</p>
                <p className="text-gray-700">Gentle and wise, Canadian Sphynx, our affectionate mother cat, always brings up healthy kittens.</p>
              </div>
            </div>
            {/* КОТ 3 */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden anim-scroll opacity-0 transition-all duration-700 hover:scale-110 transition-transform duration-150">
              <img src="/images/mother2.jpg" alt="Liliana - Queen Mom" className="w-full md:w-72 h-72 object-cover" />
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-2xl font-bold mb-1">Liliana</h3>
                <p className="text-base text-gray-500 mb-2">Queen Mom</p>
                <p className="text-gray-700">Elegant and playful, our Canadian Sphynx queen, loves to play and cares deeply for her kittens.</p>
              </div>
            </div>
            {/* КОТ 4 */}
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden anim-scroll opacity-0 transition-all duration-700 hover:scale-110 transition-transform duration-150">
              <img src="/images/mother3.jpg" alt="Vera - Queen Mom" className="w-full md:w-72 h-72 object-cover" />
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-2xl font-bold mb-1">Vera</h3>
                <p className="text-base text-gray-500 mb-2">Queen Mom</p>
                <p className="text-gray-700">Our beautiful sphynx-mix, energetic and caring, brings unique charm and joy to our cattery.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/sphynxes" className="inline-block px-8 py-3 bg-[#57382d] text-white rounded-xl font-semibold text-lg hover:bg-[#77524b] transition-all shadow-lg">
              Buy Kittens
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#f4edea] py-12 md:py-16 anim-scroll opacity-0 transition-all duration-700">
          <h2 className="text-3xl font-semibold text-center mb-12 -mt-4">FAQ</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
             {[
              {
                q: "Are Sphynxes suitable for families with children?",
                a: "Sphynxes are affectionate and sociable, making them wonderful with children, especially if socialized early. Supervise to ensure gentle play and protect delicate skin.",
              },
              {
                q: "Are Sphynxes hypoallergenic?",
                a: "Sphynxes are almost hypoallergenic: less fur and dander, but not 100%. Some people may react to skin oils or saliva. Regular bathing reduces allergens.",
              },
              {
                q: "Do Sphynxes get along with other pets?",
                a: "Friendly and curious, Sphynxes usually get along with cats, dogs, and more, if socialized properly.",
              },
              {
                q: "How much exercise do Sphynxes need?",
                a: "Very playful and active — daily games and climbing keep them happy. Mental stimulation is just as important!",
              },
              {
                q: "Do Sphynxes need special clothing?",
                a: "Only in cold weather or strong sun. Sweaters help in winter, sunscreen in summer — protect their delicate skin.",
              },
              {
                q: "How long do Sphynxes live?",
                a: "12–15 years with good care! Veterinary checkups and a balanced diet keep your friend healthy and happy.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-md p-6 border border-[#e4d3be] hover:shadow-xl transition">
                <h3 className="font-bold mb-2">{q}</h3>
                <p className="text-sm text-[#715f4a]">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/breed-info" className="inline-block px-8 py-3 bg-[#57382d] text-white rounded-xl font-semibold text-lg hover:bg-[#77524b] transition-all shadow-lg mb-0 mt-5">
              Learn More
            </Link>
          </div>
        </section>

        {/* MINI GALLERY */}
        <section id="gallery" className=" py-14 md:py-5 anim-scroll opacity-0 transition-all duration-700 -mt-15">
          <h2 className="text-3xl font-semibold text-center mb-13 ">Mini Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5].map(i => (
              <video
                key={i}
                src={`/images/gallery${i}.mp4`}
                controls
                className="rounded shadow w-full h-[340px] object-cover"
                poster={`/images/preview${i}.jpg`}
              />
            ))}
          </div>
          <div className="text-center mt-15">
            <Link href="/gallery" className=" -mb-0 inline-block px-8 py-3 bg-[#57382d] text-white rounded-xl font-semibold text-lg hover:bg-[#77524b] transition-all shadow-lg">
              View Full Gallery
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 bg-[#f8f2eb] anim-scroll opacity-0 transition-all duration-700 -mt-13">
          <h2 className="text-4xl font-semibold mb-15 text-center pl-1 -mt-6">Contacts</h2>
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
        © Nude'n Satin. All rights Reserved. Created by DevCodeX.
      </footer>

      {/* --- SCROLL FADE-UP ANIMATION --- */}
      <style >{`
        .animate-fade-up {
  opacity: 1 !important;
  transform: translateY(0px) scale(1) !important;
  transition: all 0.7s cubic-bezier(.23,1.1,.32,1) !important;
}
.anim-scroll {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: all 0.7s cubic-bezier(.23,1.1,.32,1);
}
      `}</style>
    </div>
  );
}
