import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcf5ef] text-[#715f4a] text-sm md:text-base border-t border-[#e6ddd4] py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div>© 2025 Nude&apos;n Satin Cattery. All rights reserved. Created DevCodeX.</div>
        <nav className="flex gap-4">
          <Link href="/breed-info" className="no-underline hover:underline text-[#715f4a]">
            Breed Info
          </Link>
          <Link href="/gallery" className="no-underline hover:underline text-[#715f4a]">
            Gallery
          </Link>
          <a
            href="https://www.facebook.com/profile.php?id=61578072431552"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline text-[#715f4a]"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}