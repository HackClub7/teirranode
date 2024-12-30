"use client";
import Link from "next/link";
// import Image from "next/image";
// import landingImage from "../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"
import Header from "./components/internal/Header";

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


export default function Home() {
  
  return (
    <main className="min-h-svh text-black bg-[#EFEDE7]">
      <Header />
      <div className="min-h-svh flex items-center bg-no-repeat bg-cover" 
      // style={{backgroundImage: `url(${landingImage.src})`}}
      >
        <div className="text-center xl:w-3/5 lg:w-3/5 m-auto px-10">
          <div className="">
          </div>
          <h1 className="lg:text-xl text-lg font-semibold m-auto my-2">Revolutionizing Land Ownership with Blockchain</h1>
          <h2 className="lg:text-sm text-xs font-light">Secure, transparent, and borderless land transactions, powered by smart contracts.</h2>

          <div className="flex justify-center gap-5 mt-5">
            <Link href={'/register'} className="border border-[#22331D] lg:py-2 lg:px-4 py-1 px-2 lg:text-[15px] text-xs hover:bg-[#22331D] hover:text-white rounded">Register Land</Link>
            <Link href={'/lands-listed'} className="bg-[#22331D] text-white lg:px-4 lg:text-[15px] lg:py-2 py-1 px-2 text-xs rounded hover:bg-[#F65A11]">View Lands</Link>
          </div>
        </div>
      </div>


    </main>
  );
}
