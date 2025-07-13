'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// TYPES of Sphynx — текст с https://ya2aj.weblium.site/breed-information
const sphynxTypes = [
  {
    title: "Classic Type",
    img: "/images/bulochka/bulochka9.jpg",
    desc: `This is the original form of the Sphynx, known for its naturally hairless body, gentle wrinkles, and friendly personality. It embodies the traditional look that started it all.

`
  },
  {
    title: "Extreme Type",
    img: "/images/afelia/afelia18.jpg",
    desc: `Very similar to the Classic Type, the Extreme Type differs mainly in its distinctive head shape, giving it a bold and unique appearance.
`
  },
  {
    title: "Velour Type",
    img: "/images/liliana/liliana3.jpg",
    desc: `These Sphynx cats have a very soft, velvety texture to their skin. They often have a slight covering of hair, which makes them easier to keep clean while still maintaining their unique look.`
  },
  {
    title: "Silky Skin Type",
    img: "/images/coming-soon-banner.jpg",
    desc: `With what we call “silky skin,” these cats have exceptionally smooth and soft skin to the touch. (photo will be later, the cat is coming..)`
  },
  {
    title: "Semi-Sphynx",
    img: "/images/vera/vera1.jpg",
    desc: `In this variation, one parent is a Sphynx and the other has a full coat. The resulting kittens have a thin, delicate coat that does not shed excessively. They combine the unique charm of the Sphynx with the practicality of a coated cat, making them both attractive and low-maintenance.`
  },
];

// MAIN SECTIONS with *expanded* content and FAQ (2x more info)
const breedSections = [
  {
    id: 'history',
    title: 'History',
    img: "/images/bulochka/bulochka1.jpg",
    content: (
      <>
        <p>
          The <b>Canadian Sphynx</b> story began in Toronto, Canada, in 1966, with a hairless kitten named Prune. Through selective breeding with other cats (including Devon Rex and American Shorthair), breeders refined the line, balancing health and the unique hairless gene. 
        </p>
        <p>
          Sphynxes gained recognition in the 1970s and 80s, and the breed has continued to grow in popularity thanks to its social nature and “living sculpture” look. Today, Sphynxes are adored worldwide for their warm personalities and unforgettable appearance.
        </p>
        <ul className="list-disc list-inside my-3">
          <li>Originated in Canada, but now bred worldwide.</li>
          <li>Accepted by TICA and CFA cat registries in the 1980s–90s.</li>
          <li>Known as the “Velcro cat” for their attachment to people.</li>
          <li>Influenced the creation of several other hairless breeds (Elf, Bambino, etc.).</li>
        </ul>
      </>
    ),
    faq: [
      { q: "How did Sphynxes become hairless?", a: "The hairless trait started as a natural genetic mutation. Breeders carefully worked to ensure healthy, friendly cats with this unique look." },
      { q: "Are Sphynxes the only hairless cats?", a: "No, but they are the most popular and best known. Other breeds like the Donskoy and Peterbald also have hairless varieties." },
      { q: "Is the breed still rare?", a: "They are rare compared to most cats, but are now bred by reputable catteries worldwide." },
      { q: "Do Sphynxes have roots in Russia?", a: "The Canadian Sphynx is from Canada, but Russia has its own hairless breeds (Donskoy, Peterbald) developed later." },
      { q: "Why do people love Sphynxes?", a: "For their intelligence, loyalty, and unique appearance—they are unforgettable companions!" },
      { q: "Do all Sphynxes have the same personality?", a: "Most are very affectionate and playful, but individual personalities can vary as with any cat." },
    ]
  },
  {
    id: 'personality',
    title: 'Personality',
    img: "/images/afelia/afelia2.jpg",
    content: (
      <>
        <p>
          Sphynxes are famous for being the <b>most loving and people-oriented cats in the world</b>. They love to be the center of attention, will follow you from room to room, and never want to be left out of family activities.
        </p>
        <ul className="list-disc list-inside my-3">
          <li>Endlessly curious and energetic; love to play fetch and invent games.</li>
          <li>Often sleep under the blankets, on your pillow, or in your arms.</li>
          <li>Get along well with children, other cats, and even dogs.</li>
          <li>Known for being vocal—expect “conversations” and purring!</li>
          <li>They are loyal, sometimes described as “dog-like” in their devotion.</li>
          <li>Rarely aggressive—more likely to cuddle than scratch.</li>
          <li>Crave warmth and will always seek out your lap or the sunniest spot.</li>
          <li>Intelligent and easy to train (leash, tricks, routines).</li>
        </ul>
        <p>
          A Sphynx will be your shadow, confidant, and constant source of smiles!
        </p>
      </>
    ),
    faq: [
      { q: "Can Sphynxes live with children?", a: "Absolutely. Their gentle, patient, and playful nature makes them perfect family cats." },
      { q: "Are Sphynxes destructive?", a: "No. Their social temperament and need for companionship reduce boredom and bad behavior." },
      { q: "Will my Sphynx get lonely?", a: "Sphynxes are happiest with company—human or animal. If you work long hours, consider a second pet." },
      { q: "Do Sphynxes have a favorite person?", a: "They often form a deep bond with one person, but love everyone in the household." },
      { q: "Are Sphynxes high-energy?", a: "Yes. They are playful and athletic, needing plenty of toys and interaction." },
      { q: "Do they talk a lot?", a: "Many Sphynxes are chatty—expect purrs, meows, and funny chirps." },
      { q: "Are Sphynxes affectionate to strangers?", a: "Usually, yes! They are outgoing and curious, eager to make new friends." },
      { q: "Will my Sphynx try to escape outdoors?", a: "Most prefer indoor comfort, but be cautious—keep windows and doors secure." },
    ]
  },
  {
    id: 'care',
    title: 'Care',
    img: "/images/vera/vera7.jpg",
    content: (
      <>
        <p>
          Sphynxes are easy to care for with a little attention to their unique needs:
        </p>
        <ul className="list-disc list-inside my-3">
          <li><b>Weekly Bath:</b> Gently bathe your Sphynx to remove natural oils from the skin. Use lukewarm water and a hypoallergenic pet shampoo.</li>
          <li><b>Ear Cleaning:</b> Their ears produce more wax—wipe gently with a damp cotton pad every week.</li>
          <li><b>Nail Care:</b> Trim claws every 1-2 weeks; check between toes for dirt.</li>
          <li><b>Skin Check:</b> Watch for scratches or irritation—clean gently if needed.</li>
          <li><b>Warmth:</b> Sphynxes crave heat. Provide soft blankets, cozy cat beds, and sweaters for chilly days.</li>
          <li><b>Healthy Diet:</b> Feed a high-protein, quality food. Sphynxes have a fast metabolism and may eat more than furry cats.</li>
          <li><b>Sun & Outdoor Safety:</b> Indoors only is safest! If you go outside, use pet-safe sunscreen or light clothing.</li>
          <li><b>Regular vet visits:</b> Annual checkups and preventive care are essential.</li>
        </ul>
        <p>
          Grooming your Sphynx is a bonding experience—most enjoy bath and cuddle time!
        </p>
      </>
    ),
    faq: [
      { q: "Do Sphynxes need a lot of grooming?", a: "Just a gentle weekly bath, ear cleaning, and nail trims. No fur, no shedding!" },
      { q: "Do they get dirty?", a: "Their skin collects oil, so regular baths are a must. They don’t get ‘cat smell’ like furry breeds." },
      { q: "Do Sphynxes need clothes?", a: "Many owners use sweaters in cold weather, but let your cat decide. They love warmth!" },
      { q: "What if I’m allergic to cats?", a: "Many allergy sufferers find Sphynxes more tolerable, but they're not 100% hypoallergenic." },
      { q: "How often do I need to clean their ears?", a: "Usually once a week. Gently wipe away wax—don’t use cotton swabs inside the canal." },
      { q: "Do Sphynxes scratch furniture?", a: "They are less likely, but still enjoy scratching posts and toys." },
      { q: "Do Sphynxes shed?", a: "No! You’ll never find hair on your clothes or furniture." },
      { q: "Are Sphynxes prone to fleas?", a: "They can get fleas like any cat, so keep up with preventive care." },
    ]
  },
  {
    id: 'health',
    title: 'Health',
    img: "/images/vera/vera1.jpg",
    content: (
      <>
        <p>
          Sphynxes are robust, healthy cats when bred responsibly. At our cattery, we screen parents for genetic issues—especially <b>HCM (hypertrophic cardiomyopathy)</b>, a heart condition all breeders must test for. Sphynxes have a typical lifespan of 12–16 years.
        </p>
        <ul className="list-disc list-inside my-3">
          <li>Routine health checks and HCM screening are crucial.</li>
          <li>Keep skin clean and check for irritation, especially in folds.</li>
          <li>Dental hygiene is important—brush teeth or use dental treats.</li>
          <li>All our kittens leave with a health guarantee and vaccinations.</li>
          <li>Sphynxes are less likely to get respiratory illnesses, but monitor for sneezing or coughing.</li>
          <li>Keep them at a healthy weight—treats in moderation!</li>
        </ul>
        <p>
          With love, care, and good nutrition, your Sphynx will be a happy, healthy family member for years!
        </p>
      </>
    ),
    faq: [
      { q: "Is HCM a risk for all Sphynxes?", a: "It can affect any Sphynx, but reputable breeders scan adults regularly and avoid affected lines." },
      { q: "Do Sphynxes get sunburned?", a: "Without fur, they can burn easily—keep them indoors or use pet-safe sunscreen for outings." },
      { q: "Are Sphynxes fragile?", a: "No. Well-bred Sphynxes are strong and resilient, but their skin needs gentle care." },
      { q: "What health guarantee do you offer?", a: "All our kittens come with a written health guarantee and vet certificate." },
      { q: "Are vaccines important for Sphynxes?", a: "Yes! Regular vaccinations and vet checkups keep them protected from disease." },
      { q: "Can Sphynxes get cold easily?", a: "Yes, but they quickly find warmth or ask for a sweater or blanket." },
      { q: "Do Sphynxes have genetic diseases?", a: "Responsible breeding greatly reduces the risk—always choose a cattery that tests parents." },
      { q: "How long do Sphynxes live?", a: "With proper care, most live well into their teens (12–16+ years)." },
    ]
  },
  {
    id: 'types',
  title: 'Types of Sphynx',
  content: (
    <>
      <p className="mb-6 text-lg text-center">
        There are several fascinating varieties of hairless cats. Here’s an overview:
      </p>
      <div className="flex flex-col gap-6">
        {sphynxTypes.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#fff8f3] rounded-2xl shadow-md flex flex-col sm:flex-row items-center p-5 border border-[#ede3d6] transition hover:shadow-xl"
          >
            <img
              src={t.img}
              alt={t.title}
              className="w-32 h-32 object-cover rounded-xl mb-3 sm:mb-0 sm:mr-6 border border-[#ebdbca] shadow-sm"
            />
            <div>
              <div className="font-bold text-lg mb-1 text-[#ac824e]">{t.title}</div>
              <div className="text-base">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  ),
  faq: [
      { q: "Which Sphynx variety is most popular?", a: "The Canadian Sphynx is the original and most widely recognized hairless cat." },
      { q: "Are Bambino and Elf Sphynxes pure Sphynx?", a: "They are hybrids, bred from Sphynxes and other breeds. All have loving personalities and are great pets!" },
      { q: "Can Peterbalds be hairless?", a: "Yes, Peterbalds can be born hairless or lose their fur as they grow." },
      { q: "Is there a difference in temperament between types?", a: "All hairless breeds are affectionate and social, though some (like Bambino) are extra playful due to their size." },
      { q: "What about allergies and types?", a: "No Sphynx is fully hypoallergenic, but many allergy sufferers report fewer symptoms." },
      { q: "Can I visit to see different types?", a: "Absolutely! We’re happy to show you the beautiful cats and explain the differences." },
      { q: "Are Russian hairless cats recognized internationally?", a: "The Donskoy and Peterbald have recognition in Europe and some US cat registries." },
      { q: "What type should I choose?", a: "Choose based on personality, appearance, and the breeder’s reputation—Sphynxes are wonderful in all types!" },
    ]
  },
  {
    id: 'facts',
    title: 'Interesting Facts',
    img: "/images/afelia/afelia14.jpg",
    content: (
      <>
        <ul className="list-disc list-inside my-3">
          <li>Sphynxes feel warmer than they are—body temp is slightly higher than other cats.</li>
          <li>They often greet you at the door, like a little dog.</li>
          <li>Sphynxes sweat through their skin—another reason for regular baths.</li>
          <li>They love wearing soft, comfy sweaters in winter.</li>
          <li>Most Sphynxes enjoy riding in carriers and traveling with their people.</li>
          <li>They “hug” with their paws—so affectionate!</li>
          <li>No fur, but whiskers can be curly, straight, or missing.</li>
          <li>Sphynxes are natural climbers and love cat trees.</li>
          <li>Some Sphynxes “sing” to their owners or chirp when excited.</li>
          <li>Despite the look, Sphynxes are very healthy and not genetically engineered.</li>
          <li>They are a favorite among celebrities and artists for their unique look.</li>
          <li>All colors and patterns are possible—even calico and tabby!</li>
        </ul>
      </>
    ),
    faq: [
      { q: "Do Sphynxes get along with other pets?", a: "They thrive in social environments, often befriending cats, dogs, and even birds!" },
      { q: "Do they have hair at all?", a: "Most have a fine fuzz—like suede or peach skin." },
      { q: "Are they hypoallergenic?", a: "They produce fewer allergens, but no cat is truly hypoallergenic." },
      { q: "Do they enjoy traveling?", a: "Many do! Sphynxes bond so closely with people, they adapt well to new places." },
      { q: "Can Sphynxes learn tricks?", a: "Yes! Many owners teach fetch, leash walking, or even agility courses." },
      { q: "Will a Sphynx destroy my furniture?", a: "Not likely, but provide scratching posts and toys for healthy activity." },
      { q: "Are Sphynxes good for first-time cat owners?", a: "They are one of the best breeds for beginners due to their gentle and social nature." },
      { q: "What’s the most fun fact about Sphynxes?", a: "They love to snuggle, “talk,” and keep you entertained with their funny personalities!" },
    ]
  },
];

export default function BreedInfo() {
  const [tab, setTab] = useState(0);

  return (
    <div className="bg-[#f7f2ee] min-h-screen text-[#42362a] font-sans">
      <Head>
        <title>Breed Info | Nude’n Satin - Canadian Sphynx Cattery</title>
        <meta name="description" content="Everything about the Canadian Sphynx: history, types, character, care, health, facts. With unique photos from our cattery!" />
      </Head>
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

      <main className="max-w-5xl mx-auto py-10 px-2">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">The Sphynx Cat: A Proudly Canadian Breed</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {breedSections.map((s, i) => (
            <button
              key={s.id}
              className={`px-4 py-2 rounded-2xl text-base font-semibold transition ${
                tab === i
                  ? "bg-[#ac824e] text-white shadow"
                  : "bg-[#fff8f3] text-[#42362a] shadow hover:bg-[#faeadc]"
              }`}
              onClick={() => setTab(i)}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Active section */}
        <section className="mb-12">
  <div className="flex flex-col md:flex-row gap-6 items-center">
    {breedSections[tab].img && (
      <img
        src={breedSections[tab].img}
        alt={breedSections[tab].title}
        className="rounded-2xl shadow-lg object-cover w-full md:w-72 h-56 md:h-64 mb-4 md:mb-0"
        style={tab % 2 ? { order: 2 } : {}}
      />
    )}
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-2">{breedSections[tab].title}</h2>
      <div className="text-lg leading-relaxed">{breedSections[tab].content}</div>
    </div>
  </div>
  {/* FAQ */}
  <div className="mt-7 bg-[#fff8f3] rounded-xl shadow p-5">
    <h3 className="font-bold text-lg mb-3 text-[#ac824e]">FAQ</h3>
    <ul>
      {breedSections[tab].faq.map((item, i) => (
        <li key={i} className="mb-3">
          <span className="font-semibold">Q:</span> {item.q}<br />
          <span className="font-semibold text-[#ac824e]">A:</span> {item.a}
        </li>
      ))}
    </ul>
  </div>
</section>
<section id="contact" className="py-16 md:py-20 bg-[#f8f2eb]">
  <h2 className="text-4xl font-semibold mb-18 -mt-15 text-center pl-1">Contacts</h2>
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

      </main>

      <footer className="text-center py-8 md:py-10 bg-[#f5e6da] text-sm">
        © Nude'n Satin. All rights Reserved. Created by DevCodeX.
      </footer>
    </div>

    
  );
}
