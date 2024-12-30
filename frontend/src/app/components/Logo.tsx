import Link from "next/link"

export default function Logo() {
    return (
        <div>
            <div className="lg:text-[25px] md:text-[20px] text-lg font-semibold">
                <Link href='/'>Tierranode</Link>
            </div>
        </div>
    )
}