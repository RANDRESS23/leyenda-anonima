import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4 flex gap-x-5 min-h-screen justify-center">
      <div className="flex flex-col justify-center">
        <header className="my-8 text-white">
          <div className="flex items-center gap-x-2 h-20">
            <span className="text-2xl">📺</span><TypingAnimation>Canal 0x23 - Leyenda Anónima</TypingAnimation>
          </div>
          <p className="mb-3 text-[#888] md:-mt-4">Transmisión capturada. Verificando integridad...</p>
        </header>
        <div className="flex justify-center items-center md:hidden mb-7">
          <Image src="/images/leyenda-anonima.webp" width={150} height={150} alt="Imagen estilo televisón CRT" className="transition-all duration-500 hover:shadow-[0_0_60px_#60cc8ae6] rounded-xl rotate-3 glitch-image-animation" />
        </div>
        <section className="text-white flex flex-col items-start">
          <span className="text-xl text-balance">La red guarda <span className="text-green-300">secretos</span>. Algunos están <span className="text-green-300">ocultos</span>, otros solo esperan ser <span className="text-green-300">descubiertos</span>.</span>
          <button className="text-lg mt-8 bg-black border border-[#333] hover:bg-white transition px-4 py-2 text-white hover:text-black cursor-pointer animate-[floatGlitch_3s_infinite] hover:animate-[glitchEffect_0.5s_infinite] duration-300 shadow-lg hover:shadow-[0_0_20px_#00ffcc]">
            <div className="flex items-center justify-center font-bold gap-x-2 text-base sm:text-xl">
              Desbloquear transmisión
            </div>
          </button>
        </section>
        <footer className="flex flex-col justify-between items-start pt-24 text-white">
          <div className="flex flex-col md:flex-row space-x-4">
            <span>Hecho con <span className="text-red-400">❤</span> por Raúl Quimbaya</span>
            <span className="hidden md:flex justify-center items-center">-</span>
            <div className="flex space-x-2 md:space-x-4">
              <Link href="https://www.linkedin.com/in/raul-quimbaya/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors text-blue-200">LinkedIn</Link>
              <Link href="https://github.com/RANDRESS23" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300 transition-colors text-violet-200">GitHub</Link>
            </div>
          </div>
          <div className="flex space-x-2 text-sm text-[#888]">
            <span>Diseño inspirado en</span>
            <Link href="https://codember.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300/70 transition-colors text-yellow-200/70 underline">Codember</Link>
          </div>
        </footer>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center">
        <Image src="/images/leyenda-anonima.webp" width={600} height={600} alt="Imagen estilo televisón CRT" className="transition-all duration-500 hover:shadow-[0_0_60px_#60cc8ae6] rounded-xl rotate-3 glitch-image-animation" />
      </div>
    </main>
  );
}
