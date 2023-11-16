import NavBar from "@/components/NavBar"
import MockupPrimary from "@/assets/mockup-primary.png"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-500">Hello World</h1>
      <Image className="px-4" src={MockupPrimary} width={300} priority={true} alt="placeholder" />

    </div>
  )
}

