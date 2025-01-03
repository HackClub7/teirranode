import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/assets/tierra-logo.png"

export default function Logo() {
    return (
        <div>
            <div className="lg:text-[25px] md:text-[20px] text-lg font-semibold flex justify-center items-center ">
                <Link href='/'><Image src={logo} alt="" className="lg:w-14 w-10"/></Link>
                Teirranode
            </div>
        </div>
    )
}