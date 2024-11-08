'use client'; 

import Link from "next/link";

export default function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950  text-white py-3 mt-0 bottom-0  w-full">
      <div className="container mx-auto text-center text-xs lg:text-base">
        <p className="mb-2">© 2024 Imaan. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mb-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button
          className="mt-2 px-2 py-2 bg-sky-600 rounded hover:bg-white hover:text-sky-600"
          onClick={handleClick} 
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}
