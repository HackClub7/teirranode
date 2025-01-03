import Logo from "./Logo"
import Link from "next/link"
import { GoHomeFill } from "react-icons/go";
import { BiSolidLandscape } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdIntegrationInstructions } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

export default function SideMenue(){
    return(
        <div className="bg-[#22331D] text-white p-5 min-h-svh w-[22%]">
            <Logo/>
            <div className=" flex flex-col pt-10">
                <ul className="flex flex-col gap-7 text-sm">
                    <li><Link href={"/"} className="flex gap-3"> <GoHomeFill className="inline text-lg"/>Home</Link></li>
                    <li><Link href={"/"} className="flex gap-3"> <BiSolidLandscape  className="inline text-lg"/>Lands</Link></li>
                    <li><Link href={"/"} className="flex gap-3"> <FaUserFriends  className="inline text-lg"/>Customers</Link></li>
                    <li><Link href={"/"} className="flex gap-3"> <MdIntegrationInstructions className="inline text-lg"/>Intergrations</Link></li>
                    <li><Link href={"/"} className="flex gap-3"> <GoHomeFill className="inline text-lg"/>Discounts</Link></li>
                    <li><Link href={"/"} className="flex gap-3"> <SiGoogleanalytics className="inline text-lg"/>Analytics</Link></li>
                </ul>
                {/* <div className="item">
                    <Link href={"/"}>Settings</Link>
                </div> */}
            </div>
        </div>
    )
}