// import Link from "next/link"
// import Logo from "../components/Logo"
// import bgImage from "../../../public/assets/bg-image.jpeg"
import { FiUploadCloud } from "react-icons/fi";
import Header from "../components/internal/Header";
// import Logo from "../components/Logo";
import landingImage from "../../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"

export default function Register() {
    return (
        <div className="text-black">
            <Header />
            <div className=" min-h-svh xl:px-40 lg:px-32 px-10 flex items-center bg-[#EFEDE7]  bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/60 "
            //style={{backgroundImage: `url(${bgImage.src})`}}
            style={{backgroundImage: `url(${landingImage.src})`}}
            >
                
                <div className="w-full">
                    
                    <form action="" className=" shadow-xl py-10 lg:px-20 px-7 bg-white">
                        <h2 className="lg:text-[24px] text-lg font-semibold text-[#22331D] lg:mb-5 mb-3 text-center">Register your land</h2>
                        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-10">
                            <div className="border-2 border-dashed border-[#22331D] rounded-lg flex items-center justify-center py-5 lg:mb-0 mb-4">
                                <label
                                    htmlFor="landImage"
                                    className="text-sm text-[#22331D] flex flex-col items-center cursor-pointer"
                                >
                                    <input
                                        type="file"
                                        id="landImage"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <span className="text-[#22331D] mb-5 text-2xl"><FiUploadCloud /></span>
                                    <span className="mb-2">Drag & Drop or Click to Upload</span>
                                    <span className="text-xs text-gray-500">(Max size: 5MB)</span>
                                </label>
                            </div>
                            <div className="">
                                <div><label htmlFor="" className="text-[#22331D] text-sm">Title</label> <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                                <div><label htmlFor="" className="text-[#22331D] text-sm">Land name</label> <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                                <div><label htmlFor="" className="text-[#22331D] text-sm">Land Reg Number</label> <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                                <div><label htmlFor="" className="text-[#22331D] text-sm">Location</label> <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                                <div className="lg:flex justify-center lg:justify-start hidden">
                                    <button className="bg-[#F65A11] hover:bg-[#22331D] text-[#EFEDE7] text-sm py-2 px-5 mt-4 rounded">Register Land</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden flex justify-center lg:justify-start">
                            <button className="bg-[#F65A11] hover:bg-[#22331D] text-[#EFEDE7] text-sm py-2 px-5 mt-4 rounded">Register Land</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}