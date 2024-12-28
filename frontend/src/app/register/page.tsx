// import Link from "next/link"
// import Logo from "../components/Logo"
// import bgImage from "../../../public/assets/bg-image.jpeg"
import { FiUploadCloud } from "react-icons/fi";
// import Logo from "../components/Logo";

export default function Register() {
    return (
        <div className=" min-h-svh xl:px-40 lg:px-32 flex items-center bg-[#EFEDE7] bg-no-repeat bg-cover "
         //style={{backgroundImage: `url(${bgImage.src})`}}
         >
            <div className="w-full">
                <form action="">
                    <div className="grid grid-cols-2 gap-10 shadow-xl py-10 px-20 bg-white">
                        <div className="border-2 border-dashed border-[#22331D] rounded-lg flex items-center justify-center ">
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
                            <div><label htmlFor="" className="text-[#22331D] mt-3 text-sm">Title</label> <div className="border border-gray-300 rounded mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                            <div><label htmlFor="" className="text-[#22331D] mt-3 text-sm">Land name</label> <div className="border border-gray-300 rounded mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                            <div><label htmlFor="" className="text-[#22331D] mt-3 text-sm">Land Reg Number</label> <div className="border border-gray-300 rounded mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                            <div><label htmlFor="" className="text-[#22331D] mt-3 text-sm">Location</label> <div className="border border-gray-300 rounded mb-3 px-3 py-1"><input type="text" className="border-0 outline-0 bg-transparent " /></div></div>
                            <button className="bg-[#F65A11] hover:bg-[#22331D] text-[#EFEDE7] text-sm py-2 px-5 mt-4 rounded">Register Land</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}