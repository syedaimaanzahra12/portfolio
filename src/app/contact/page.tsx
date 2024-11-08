import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import Link from 'next/link';
export default function Contact() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 ">  <div className="text-center p-8">

      <h2 className="text-3xl text-white font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-white mb-6">Feel free to reach out to me directly through any of the channels below:</p>
      <div className="flex flex-col items-center space-y-4">
        <Link href="mailto:zahrasyedaimaan@gmail.com" className="text-cyan-400 hover:underline flex items-center space-x-2">
          <FaEnvelope className="text-xl" />
          <span>zahrasyedaimaan@gmail.com</span>
        </Link>
        <Link href="https:www.linkedin.com/in/syedaimaan-z-b6b46b2ba" target="_blank" className="text-cyan-400 hover:underline flex items-center space-x-2">
          <FaLinkedin className="text-xl" />
          <span>SyedaImaanZahra</span>
        </Link>
        <Link href="https://github.com/syedaimaanzahra12" target="_blank" className="text-cyan-400 hover:underline flex items-center space-x-2">
          <FaGithub className="text-xl" />
          <span>syeaimaanzahra12</span>
        </Link>
      </div>
    </div></div>
    </section>
  );
}

