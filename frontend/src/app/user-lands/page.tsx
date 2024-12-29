import Header from "../components/internal/Header"
import Image from "next/image"
import { ImLocation2 } from "react-icons/im"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import lands from "../../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"
import { FaEthereum } from "react-icons/fa"
import Link from "next/link"

export default function UserLands(){
    return (
        <div className="bg-[#EFEDE7] text-black">
        <Header />
        <div className="xl:px-32 px-10 lg:24 pt-10">
            <div className="min-h-svh ">
                <h1 className="lg:text-[1.7rem] text-xl font-semibold mb-5 ">My Lands</h1>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="p-3 border  border-slate-300 shadow-xl">
                        <div className="mb-3">
                            <Image src={lands} alt="" className="" />
                        </div>
                        <div className="flex justify-between text-[10px] mb-3">
                            <p className="">Owner</p>
                            <p className="">Verified: <span className="text-[#F65A11]"><IoIosCheckmarkCircleOutline className="inline" /></span></p>
                        </div>
                        <p className="text-sm mb-3"><ImLocation2 className="inline text-[#22331D] text-lg mr-2"/>0xjhfjvjbxsndskeru...pA</p>
                        <p className="mb-3 text-sm">Land ID: <span  className="text-[#F65A11]">PI 39101</span></p>
                        {/* <p className="text-sm mb-2">Available plots: <span className="text-[#22331D] font-semibold">10</span></p> */}
                        <div className="flex justify-between">
                            <p className="text-[14px] font-semibold"><FaEthereum className="inline mr-1" />10 eth</p>
                            <Link href={"/user-land-details"} className="text-white bg-[#F65A11] text-xs py-1 px-3 rounded-lg hover:text-white hover:bg-[#22331D]">View details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}