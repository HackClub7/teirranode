export default function ChainTitle(){
    return(
        <div className="lg:px-32 px-10 py-10 text-black text-sm">
            <h2 className="text-[#22331D] font-semibold pb-3 text-lg">Chain Title</h2>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 text-sm">
                <div className="p-5 flex flex-col gap-3 rounded shadow-xl border border-slate-00">
                    <h4 className="pb-2 font-semibold text-[16px]">Current Owner</h4>
                    <p>Name: <span className="text-[#F65A11] font-semibold">Sarah Math</span></p>
                    <p>Acquistion date: <span className="text-[#F65A11] font-semibold">December 25, 2024</span></p>
                    <p>Tranfer method: <span  className="text-[#F65A11] font-semibold">Direct Purchase (Smart Contract: 0xA3F...8D91)</span></p>
                    <div>
                        <h4>Details</h4>
                        <p className="mt-1 text-xs">Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims.</p>
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-3 rounded shadow-xl border border-slate-00">
                    <h4 className="pb-2 font-semibold text-[16px]">Previous Owner</h4>
                    <p>Name: <span className="text-[#F65A11] font-semibold">Sarah Math</span></p>
                    <p>Acquistion date: <span className="text-[#F65A11] font-semibold">December 25, 2024</span></p>
                    <p>Tranfer method: <span  className="text-[#F65A11] font-semibold">Direct Purchase (Smart Contract: 0xA3F...8D91)</span></p>
                    <div>
                        <h4>Details</h4>
                        <p className="mt-1 text-xs">Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}