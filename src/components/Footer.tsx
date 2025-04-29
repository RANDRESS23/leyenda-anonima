import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-start pt-24 pb-10 text-white">
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
  )
}
