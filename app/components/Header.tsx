'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type MenuItem = { label: string; id?: string; href?: string; type: 'scroll' | 'link' };

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('about');

  const menuItems: MenuItem[] = isHome
    ? [
        { label: 'About Us', id: 'about', type: 'scroll' },
        { label: 'Our Sphynxes', id: 'sphynxes', type: 'scroll' },
        { label: 'Gallery', href: '/gallery', type: 'link' },
        { label: 'Breed Info', href: '/breed-info', type: 'link' },
        { label: 'Contact', id: 'contact', type: 'scroll' },
      ]
    : [
        { label: 'Home', href: '/', type: 'link' },
        { label: 'Our Sphynxes', href: '/sphynxes', type: 'link' },
        { label: 'Gallery', href: '/gallery', type: 'link' },
        { label: 'Breed Info', href: '/breed-info', type: 'link' },
        { label: 'Contact', id: 'contact', type: 'scroll' },
      ];

  useEffect(() => {
    if (!isHome) return;
    const handler = () => {
      const ids = ['about', 'sphynxes', 'faq', 'contact'];
      let current = 'about';
      for (const id of ids) {
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
  }, [isHome]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 60,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header className="bg-white shadow-md px-4 md:px-10 py-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-4 flex-shrink-0">
          <img src="/images/logo.png" alt="Logo" className="h-20 w-auto hover-scale" />
          <span className="text-2xl font-bold hover:text-[#ac824e] transition-colors">Nude&apos;n Satin</span>
        </Link>
        <nav className="flex-1 flex justify-center space-x-4 md:space-x-8 text-lg font-bold">
          {menuItems.map((item) =>
            item.type === 'link' ? (
              <Link
                key={item.label}
                href={item.href || '#'}
                className={`px-2 py-1 rounded hover-color ${pathname === item.href ? 'text-[#ac824e]' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToId(item.id!)}
                className={`px-2 py-1 rounded hover-color ${activeSection === item.id ? 'text-[#ac824e]' : ''}`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>
        <div className="flex space-x-4 flex-shrink-0">
          <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener">
            <img src="/icons/instagram.png" alt="Instagram" className="h-6 w-6 hover-scale" />
          </a>
          <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener">
            <img src="/icons/Facebook.png" alt="Facebook" className="h-6 w-6 hover-scale" />
          </a>
          <a href="https://tiktok.com/" aria-label="TikTok" target="_blank" rel="noopener">
            <img src="/icons/tiktok.png" alt="TikTok" className="h-6 w-6 hover-scale" />
          </a>
        </div>
      </div>
    </header>
  );
}