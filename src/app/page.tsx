import Link from "next/link"
export default function Home(){
return(
  <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
  
  <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 ">
    <h1 className="text-white text-4xl font-bold sm:text-6xl">Hi, I&apos;m Imaan</h1>
    <p className="text-white text-xl mt-4 sm:text-2xl 
    
    ">Aspiring Full Stack Developer</p>
    <Link href="/about"><button className="mt-8 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-white hover:text-sky-600">
      Learn More About Me
    </button></Link>
  </div>
</section>
)  
}