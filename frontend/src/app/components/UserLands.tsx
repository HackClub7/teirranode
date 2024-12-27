import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image";
import land1 from "public/assets/land1.jpg"

export default function UserLands() {
    return (
        <div className="mx-10">
            {/* userlands tool bar */}
            <div className="my-3 border-b border-slate-300 pt-5 pb-3">
                <ul className="flex gap-7 text-sm">
                    <li className="text-[#F65A11]">All</li>
                    <li>Unpaid</li>
                    <li>Need to ship</li>
                    <li>Sent</li>
                    <li>Completed</li>
                    <li>Cancellations</li>
                    <li>Returns</li>
                </ul>
            </div>

            <div className="mb-5 flex justify-between">
                <div className="flex gap-2 rounded bg-white px-2 py-1 text-sm shadow">
                    <CiSearch />
                    <input
                        type="search"
                        placeholder="Search lands..."
                        className="border-0 outline-0"
                    />
                </div>
                <div className="flex gap-2">
                    <div className="flex rounded bg-white px-1 py-1 shadow">
                        <button className="border-r border-[#6A6D69] px-1"><RxDashboard /></button>{" "}
                        <button className="px-1  text-[#F65A11]"><TfiMenuAlt /></button>
                    </div>
                    <button className="rounded-lg bg-white px-3 py-1 text-xs text-black">
                        <IoFilterOutline className="mr-1 inline" />
                        Filter
                    </button>
                </div>
            </div>

            {/* table for lands */}
            <div className=" bg-white p-5 shadow-lg rounded">
                <table className="w-full table-auto border-collapse  text-xs">
                    <thead className="">
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">
                                <input type="checkbox" className="h-4 w-4" />
                            </th>
                            <th className="p-3 text-left">LAND</th>
                            <th className="p-3 text-left">CUSTOMER</th>
                            <th className="p-3 text-left">DATE</th>
                            <th className="p-3 text-left">TOTAL</th>
                            <th className="p-3 text-left">PAYMENT STATUS</th>
                            <th className="p-3 text-left">ITEMS</th>
                            <th className="p-3 text-left">DELIVERY METHOD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">
                                <input type="checkbox" className="h-4 w-4" />

                            </td>
                            <td className="p-3 flex items-center gap-2">
                                <Image src={land1} alt="" className="h-6 w-6 rounded-full bg-gray-200" />
                                Plateau State land
                            </td>
                            <td className="p-3">
                                <span className="font-semibold bg-gray-200 p-1 rounded-full">DK</span> Debby Kay
                            </td>
                            <td className="p-3">Dec 25, 09:01 PM</td>
                            <td className="p-3">20Eth</td>
                            <td className="p-3 font-semibold">Pending</td>
                            <td className="p-3">1 item</td>
                            <td className="p-3">Free shipping</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">
                                <input type="checkbox" className="h-4 w-4" />
                            </td>
                            <td className="p-3 flex items-center gap-2">
                                <Image src={land1} alt="" className="h-6 w-6 rounded-full bg-gray-200" />
                                Plateau State land
                            </td>
                            <td className="p-3">
                                <span className="font-semibold bg-gray-200 p-1 rounded-full">DK</span> Debby Kay
                            </td>
                            <td className="p-3">Dec 25, 09:01 PM</td>
                            <td className="p-3">20Eth</td>
                            <td className="p-3 font-semibold">Pending</td>
                            <td className="p-3">1 item</td>
                            <td className="p-3">Free shipping</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}
