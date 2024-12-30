import Header from "../components/internal/Header";
import Image from "next/image";
import lands from "../../../public/assets/point3d-commercial-imaging-ltd-mYXDtOxxuJo-unsplash.jpg"
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaEthereum } from "react-icons/fa";

const listedLands = [
    {
        id: 1,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 2,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 3,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 4,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 5,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 6,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 7,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
    {
        id: 8,
        landImage: lands,
        landID: "PI 39101",
        address: "0xjhfjvjbxsndskeru...pA",
        price: 10,
    },
]

export default function LandListed() {
    return (
        <div className="bg-[#EFEDE7] text-black">
            <Header />
            <div className="xl:px-32 px-10 lg:24 py-10">
                <div className="min-h-svh ">
                    <h1 className="lg:text-[23px] text-lg font-semibold mb-5 ">Listed Lands</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {listedLands.map((land) => (
                            <div className="p-3 border  border-slate-300 shadow-xl" key={land.id}>
                                <div className="mb-3">
                                    <Image src={land.landImage} alt="" className="" />
                                </div>
                                <div className="flex justify-between text-[10px] mb-3">
                                    <p className="">Owner</p>
                                    <p className="">Verified: <span className="text-[#F65A11]"><IoIosCheckmarkCircleOutline className="inline" /></span></p>
                                </div>
                                <p className="text-sm mb-3"><ImLocation2 className="inline text-[#22331D] text-lg mr-2" />{land.address}</p>
                                <p className="mb-3 text-sm">Land ID: <span className="text-[#F65A11]">{land.landID}</span></p>
                                {/* <p className="text-sm mb-2">Available plots: <span className="text-[#22331D] font-semibold">10</span></p> */}
                                <div className="flex justify-between">
                                    <p className="text-[14px] font-semibold"><FaEthereum className="inline mr-1" /><span>{land.price}</span> eth</p>
                                    <Link href={"/land-details"} className="text-white bg-[#F65A11] text-xs py-1 px-3 rounded-lg hover:text-white hover:bg-[#22331D]">View details</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}