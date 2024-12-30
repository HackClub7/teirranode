// import Image from "next/image";
// import faucet from "../../public/assets/faucetBanner.svg";
// import deployer from "../../public/assets/deployerBanner.svg";
// import wikipedia from "../../public/assets/wikipediaBanner.svg";
// import addressBook from "../../public/assets/addressBook.svg";
// import converter from "../../public/assets/converterBanner.svg";
// import burnerWallet from "../../public/assets/burnerWallet.svg";
// import Link from "next/link";
// import Upright from "public/svg/Upright";
// import NetworkSwitcher from "./components/lib/NetworkSwitcher";
// import Header from "./components/internal/Header";
// import AddTokenButton from "./components/lib/AddToken";

"use client";
import Link from "next/link";
import landingImage from "../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"
import Header from "./components/internal/Header";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-svh  bg-[#EFEDE7] text-black">
      <Header />
      <div className="min-h-svh flex items-center bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60 text-white lg:px-32"
      style={{backgroundImage: `url(${landingImage.src})`}}
      >
        <div className="text-center xl:w-4/5 lg:w-4/5 m-auto px-10">

          <div className="">
          <h1 className="lg:text-2xl text-lg font-semibold m-auto my-2">Revolutionizing Land Ownership with Blockchain</h1>
          <h2 className="lg:text-sm text-xs font-semibold">Secure, transparent, and borderless land transactions, powered by smart contracts.</h2>

          <div className="flex justify-center gap-5 mt-5">
            <Link href={'/register'} className="border font-semibold border-white lg:py-2 lg:px-4 py-1 px-2 lg:text-[15px] text-xs hover:bg-[#22331D] hover:text-white hover:border-[#22331e] rounded">Register Land</Link>
            <Link href={'/lands-listed'} className="bg-[#22331D] font-semibold text-white lg:px-4 lg:text-[15px] lg:py-2 py-1 px-2 text-xs rounded hover:bg-[#F65A11]">View Lands</Link>
          </div>
          </div>
          <div className="grid">
            <Image src={''} alt=""/>
            <Image src={''} alt=""/>
            <Image src={''} alt=""/>
          </div>
         
        </div>
      </div>


    </main>
  );
}
