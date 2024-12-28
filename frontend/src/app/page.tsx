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
        <div className="text-center w-2/5 m-auto">
          <div className="">
            {/* <Image src={landingImage} alt="" className="w-[45%] m-auto"/> */}
          </div>
          <h1 className="text-[2.1rem] font-semibold m-auto mb-1 mt-2">Revolutionizing Land Ownership with Blockchain</h1>
          <h2 className="text-sm font-light">Secure, transparent, and borderless land transactions, powered by smart contracts.</h2>

          <div className="flex justify-center gap-5 mt-5">
            <Link href={'/register'} className="border border-[#22331D] py-2 px-4 text-[15px] hover:bg-[#22331D] hover:text-white rounded">Register Land</Link>
            <Link href={'/lands-listed'} className="bg-[#22331D] text-white px-4 text-[15px] py-2 rounded hover:bg-[#F65A11]">View Lands</Link>
          </div>
        </div>
      </div>


    </main>
  );
}
