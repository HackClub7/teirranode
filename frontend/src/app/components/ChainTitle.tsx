const chantitles = [
    {
        id: 1,
        status: "Current owner",
        name: "Sarah Math",
        date: "December 25, 2024",
        method: "Direct Purchase (Smart Contract: 0xA3F...8D91)",
        details: "Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims."
    },
    {
        id: 2,
        status: "Previous owner",
        name: "Sarah Math",
        date: "December 25, 2024",
        method: "Direct Purchase (Smart Contract: 0xA3F...8D91)",
        details: "Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims."
    },
    {
        id: 3,
        status: "Previous owner",
        name: "Sarah Math",
        date: "December 25, 2024",
        method: "Direct Purchase (Smart Contract: 0xA3F...8D91)",
        details: "Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims."
    },
    {
        id: 4,
        status: "Previous owner",
        name: "Sarah Math",
        date: "December 25, 2024",
        method: "Direct Purchase (Smart Contract: 0xA3F...8D91)",
        details: "Acquired through a direct sale from the previous owner with verified ownership and no outstanding claims."
    },
]

export default function ChainTitle() {
    return (
        <div className="lg:px-32 px-10 py-10 text-black text-sm">
            <h2 className="text-[#22331D] font-semibold pb-3 text-lg">Chain Title</h2>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 text-sm">
                {chantitles.map((title) => (
                    <div className="p-5 flex flex-col gap-3 rounded shadow-xl border border-slate-00" key={title.id}>
                        <h4 className="pb-2 font-semibold text-[16px]">{title.status}</h4>
                        <p>Name: <span className="text-[#F65A11] font-semibold">{title.name}</span></p>
                        <p>Acquistion date: <span className="text-[#F65A11] font-semibold">{title.date}</span></p>
                        <p>Tranfer method: <span className="text-[#F65A11] font-semibold">{title.method}</span></p>
                        <div>
                            <h4>Details</h4>
                            <p className="mt-1 text-xs">{title.details}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}