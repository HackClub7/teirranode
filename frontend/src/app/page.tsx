"use client";
import Link from "next/link";
import Image from "next/image";
import landingImage from "../../public/assets/global-img.png"
import Header from "./components/internal/Header";

export default function Home() {

  return (
    <main className="min-h-svh text-black bg-[#EFEDE7]">
      <div className="fixed w-full">
      <Header />
      </div>
     
      <div className="flex items-center bg-no-repeat bg-cover"
      >
        <div className="text-center xl:w-3/5 lg:w-3/4 m-auto px-10 mt-12">
          <div className="ml-16">
            <Image src={landingImage} alt="" />
          </div>
          <div>
            <h1 className="lg:text-xl text-lg font-semibold m-auto my-2">Revolutionizing Land Ownership with Blockchain</h1>
            <h2 className="lg:text-sm text-xs font-light">Secure, transparent, and borderless land transactions, powered by smart contracts.</h2>

            <div className="flex justify-center gap-5 mt-8">
              <Link href={'/register'} className="border border-[#22331D] lg:py-2 lg:px-4 py-1 px-2 lg:text-[15px] text-xs hover:bg-[#22331D] hover:text-white rounded">Register Land</Link>
              <Link href={'/lands-listed'} className="bg-[#22331D] text-white lg:px-4 lg:text-[15px] lg:py-2 py-1 px-2 text-xs rounded hover:bg-[#F65A11]">View Lands</Link>
            </div>
          </div>

        </div>
      </div>


    </main>
  );
}
