import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <section
        className="relative h-auto sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Overlay with text and profile */}
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-60 p-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center md:flex-row  max-w-4xl  p-6 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Image */}
            <Image
              src="/profile.jpeg"
              alt="Imaan's Profile"
              className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 xl:mr-11"
            ></Image>

            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl text-center font-bold text-white mb-4 lg:text-5xl">
                {`Hi, I'm Imaan!`}
              </h1>
              <h2 className="text-cyan-400 text-xl font-semibold italic lg:text-2xl ">My Story:</h2>
              <p className="text-slate-100 mb-5 italic lg:text-xl">
                My journey into web development is quite an unexpected one.
                Initially, I had little interest in computer-related subjects,
                which is why I pursued my matriculation in Biology. But as I
                explored web development, I found myself genuinely interested
                and excited by the possibilities.
              </p>
              <h2 className="text-cyan-400 text-xl font-semibold italic lg:text-2xl">Current Progress:</h2>
              <p className="text-slate-100 mb-5 italic lg:text-xl">
                {`I’ve learned a lot, especially from building pixel-perfect designs in Next.js and Tailwind CSS.
                 Currently, I'm focused on mastering Next.js, with plans to dive deeper into React and other frontend skills.`}
              </p>
              <h2 className="text-cyan-400 text-xl font-semibold italic lg:text-2xl">Future Plans:</h2>
              <p className="text-slate-100 mb-4 italic lg:text-xl">
                I also have a strong interest in 3D web technologies like
                Three.js, which I plan to explore in the future.
              </p>
              <Link href="/contact">
                <button className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
