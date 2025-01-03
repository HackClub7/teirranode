"use client"
import SideMenue from "../components/SideMenu"
import TopMenu from "../components/TopMenu"
import logos from "public/assets/logoss.png"
import Image from "next/image";
import UserLands from "../components/UserLands"
import { BsCalendar2DateFill } from "react-icons/bs";

export default function Dashboard() {
    return (
        <div className="">
            <div className="flex">
                <SideMenue />
                <div className="w-full bg-[#EFEDE7] pb-5">
                    <TopMenu />

                    {/* ad card */}
                    <div className="mt-10 text-white bg-[#22331D] p-8 rounded-xl mx-10 flex justify-between">
                        <div>
                            <p className="text-[30px] mb-3">Get the very best apps for your land</p>
                            <p className="mb-3 text-sm font-light">Upgrade to the new whatever words</p>
                            <button className="bg-white text-[#F65A11] px-3 py-1 rounded-lg text-sm">Find App</button>
                        </div>
                        <div className="self-center flex">
                            <div className="bg-white p-4 rounded-full relative left-10 opacity-30">
                                <Image src={logos} alt="" className="w-7 h-7" />
                            </div>
                            <div className="bg-white p-4 rounded-full relative left-5 opacity-80">
                                <Image src={logos} alt="" className="w-7 h-7" />
                            </div>
                            <div className="bg-white p-4 rounded-full z-20">
                                <Image src={logos} alt="" className="w-7 h-7" />
                            </div>
                            <div className="bg-white p-4 rounded-full relative right-5 z-10 opacity-80">
                                <Image src={logos} alt="" className="w-7 h-7" />
                            </div>
                            <div className="bg-white p-4 rounded-full relative right-10 opacity-30">
                                <Image src={logos} alt="" className="w-7 h-7" />
                            </div>

                        </div>
                    </div>

                    {/* lands orders */}
                    <div>
                        <div className="mx-10 mt-7 flex justify-between">
                            <h2 className="text-[25px] text-[#22331D] font-semibold">Lands</h2>
                            <div className="self-center flex gap-4 text-sm">
                                <button className="text-black bg-white py-2 px-3 rounded-lg shadow">Exports</button>
                                <button className="bg-[#F65A11] text-white py-2 px-3 rounded-lg shadow">Create Order</button>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-6 text-xs bg-white shadow-xl rounded-xl mx-10 px-5 mt-5">
                            <div className="border-r py-5 xl:px-2 lg:px-1 text-[15px] self-center"><p><BsCalendar2DateFill className="inline mr-2 text-[#22331D]" />Today</p></div>
                            <div className="border-r py-5 xl:px-2 lg:px-1"><p>Total orders</p> <p className="text-[15px] font-semibold text-black">48</p></div>
                            <div className="border-r py-5 xl:px-2 lg:px-1"><p>Ordered items overtime</p><p className="text-[15px] font-semibold text-black">493</p></div>
                            <div className="border-r py-5 xl:px-2 lg:px-1"><p>Returns</p><p className="text-[15px] font-semibold text-black">6</p></div>
                            <div className="border-r py-5 xl:px-2 lg:px-1"><p>Fufilled orders overtime</p><p className="text-[15px] font-semibold text-black">359</p></div>
                            <div className="py-5 xl:px-2 lg:px-1"><p>Delivered orders overtime</p><p className="text-[15px] font-semibold text-black">353</p></div>
                        </div>
                    </div>
                    <UserLands />
                </div>
            </div>
        </div>
    )
}