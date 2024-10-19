import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Github, Linkedin, University, Mail } from "lucide-react"
import Logo from "./public/logo.png"

export default function DarkNeutralBusinessCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-4">
      <Card className="w-full max-w-lg p-6 bg-neutral-800 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 border border-neutral-700">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center border-2 border-neutral-600 shrink-0 transition duration-300 ease-in-out hover:border-neutral-500">
            <Image src={Logo} alt="Memoji"/>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-neutral-100">Maximilian Zoladz</h2>
            <p className="text-neutral-300">
              Software Engineer at <a href="https://5minds.de" className="text-[#01add5] transition-opacity duration-300 ease-in-out hover:opacity-70"><span className="text-[#f7a823]">5</span>Minds</a>
            </p>
            <p className="text-neutral-400">Studying Business Information Systems</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com/maxzxl" className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/maximilian-zoladz/" className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.w-hs.de/wirtschaftsinformatik-ge/" className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300">
            <University className="w-6 h-6" />
            <span className="sr-only">University</span>
          </a>
          <a href="mailto:maximilian.zoladz@5minds.de" className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Mail</span>
          </a>
        </div>
      </Card>
    </div>
  )
}