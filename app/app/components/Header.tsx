'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-image: url('/home-bg-m.png');
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
        .nav-title {
          color: #1f2937;
        }
        .logo {
          height: 40px;
        }
      `}</style>
      <nav>
        <div className="flex items-center py-5 md:py-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-gray-800">
            <img src="/palm_logo_cicle.png" alt="Palm Logo" className="logo" />
            <div className="nav-title">SEU PALM Lab</div>
          </Link>
        </div>
      </nav>
    </>
  );
}