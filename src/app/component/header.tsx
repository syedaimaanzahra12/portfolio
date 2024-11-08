import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="bg-sky-300 bg-opacity-70 text-sky-950 w-full top-0 fixed">
      <nav>
        <div className="flex justify-between items-center w-full h-14 text-sm font-medium font-serif sm:h-16 sm:text-base lg:h-20 lg:text-2xl">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={50}
            className="pt-2 sm:w-20 sm:h-{60px} lg:w-32 lg:h-{92px}"
          ></Image>
          <div className="flex">
            <ul className=" hidden sm:flex space-x-4 lg:space-x-28">
              <li>
                <Link href="/" className=" hover:text-teal-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-teal-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="pr-4 lg:pr-8 hover:text-teal-700">
                  Contact
                </Link>
              </li>
            </ul>

            
            <Sheet>
              <SheetTrigger><Menu className="sm:hidden mr-4" /></SheetTrigger>
              <SheetContent className="bg-sky-300 bg-opacity-70">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ul >
              <li>
                <Link href="/" className=" hover:text-sky-950">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className=" hover:text-sky-950">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-950">
                  Contact
                </Link>
              </li>
            </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
