'use client'
import Image from "next/image";
import Header from "../components/internal/Header";
import landImage from "../../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"
import ownerImage from "../../../public/assets/user-image.jpeg"
import { FaEthereum } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ChainTitle from "../components/ChainTitle";
import { useState } from "react";


export default function LandDetails() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="text-black">
            <Header />
            <div className="py-10 border-b lg:px-32 px-10">
                <div className="grid lg:grid-cols-2 xl:gap-14 lg:gap-7 gap-14">
                    <div>
                        <Image src={landImage} alt="" />
                    </div>
                    <div className="text-black xl:text-sm text-xs">
                        <div className="flex gap-3 pt-1">
                            <Image src={ownerImage} alt="" className="w-6 h-6 self-center" />
                            <p className="pt-3 font-semibold text-[#22331D]">0XmghZR3UgYMCr...pC</p>
                        </div>

                        <p className="pt-3 font-semibold text-slate-500">Description</p>
                        <p className="pt-3 xl:leading-6 lg:leading-4 leading-6 text-slate-500">Lorem ipsum dolor sit amet consectetur. Blandit adipiscing lectus odio netus sed nam lobortis amet. Id ut lorem magna iaculis suspendisse eget. Pharetra sed egestas auctor eget. Aliquam sodales quis enim amet blandit in natoque sed elementum.</p>
                        {/* <div className="bg-[#22331D] text-white rounded p-5"> */}
                        <div className="flex justify-between xl:pt-5 lg:pt-2 pt-5">
                            <p className="">Smart contract: <span className="font-semibold text-[#22331D]">0xDF3...F1A2</span></p>
                            <p className="">Verified: <span className="text-[#F65A11]"><IoIosCheckmarkCircleOutline className="inline" /></span></p>
                        </div>

                        <p className="xl:pt-5 lg:pt-2 pt-5">Land ID: <span className="font-semibold text-[#22331D]"> Pl 234009</span></p>
                        <p className="text-base pt-3 font-semibold self-center"><FaEthereum className="inline mr-1" />10 eth</p>
                        {/* </div> */}
                        <div className="flex justify-between xl:pt-5 lg:pt-2 pt-5">
                            <div><button className="bg-[#F65A11] hover:bg-[#22331D] text-white text-sm py-2 px-3 rounded" onClick={openModal}>Buy Land</button></div>
                            <p className="pt-3 text-xs text-slate-400">Last updated: <span className="">October 6, 2025</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* pop up modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white lg:w-1/3 rounded shadow-lg p-6 relative">
                        
                        <p className="text-black mb-6">Do you want to buy this land?</p>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                               className="hover:bg-[#F65A11] bg-[#22331D] text-white text-sm lg:py-2 lg:px-3 py-1 px-5 rounded"
                            >
                                Yes
                            </button>
                            <button
                                onClick={closeModal}
                                className="border border-[#22331D] text-sm lg:py-2 py-1 px-3 rounded text-[#22331D] hover:text-white hover:bg-[#F65A11] hover:border-transparent"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ChainTitle />
        </div>
    )
}