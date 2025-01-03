import Link from "next/link"
import { RiNotification4Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import userImage from "public/assets/user-image.jpeg"
import Image from "next/image";

export default function TopMenu() {
    return (
        <div className="flex justify-between px-10 py-5 bg-white">
            <div className="flex gap-2 bg-[#EFEDE7] px-3 py-2 rounded-lg">
                <CiSearch />
                <input type="search" placeholder="Search..." className=" bg-transparent outline-0 border-0 text-sm" />
            </div>
            <div className="flex gap-5">
                <div className="">
                    <button className="bg-[#EFEDE7] p-1.5 rounded-lg"><RiNotification4Fill className="text-lg"/></button>
                </div>
                <div className="">
                    <Link href={"/"}>
                    <Image src={userImage} alt="user" className="h-6 w-6"/>
                    </Link>
                </div>

            </div>
        </div>
    )
}