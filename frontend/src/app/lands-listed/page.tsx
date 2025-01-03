"use client";
import { useEffect, useState } from "react";
import Header from "../components/internal/Header";
import Image from "next/image";
import Link from "next/link";
import { Contract, RpcProvider } from "starknet";
import landAbi from "../Abis/landAbi.json";
import {feltToString} from "../helper"

const hexToString = (hex: string): string => {
  try {
    return Buffer.from(hex.replace(/^0x/, ""), "hex").toString("utf8").trim();
  } catch {
    return "";
  }
};

const hexToNumber = (hex: string): number => {
  try {
    return parseInt(hex, 16);
  } catch {
    return 0;
  }
};

export default function LandListed() {
  const [lands, setLands] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const ContractAddress =
    "0x04c7a85f15645aebe0a9d742c5b4b0e7af11f41468e7910369f63e3e6bcad564";
  const rpcNodeUrl =
    "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/y9ouA2N4KnJfXf0cIFBYCAo1DYJLAKQ7";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new RpcProvider({ nodeUrl: rpcNodeUrl });
        const contract = new Contract(landAbi, ContractAddress, provider);

        const response = await contract.get_lands();

        if (!response || !Array.isArray(response)) {
          throw new Error("Invalid response structure from contract.");
        }

        const formattedLands = response.map((land: any) => ({
          location: (land?.location),
          numberOfPlots: hexToNumber(land.number_of_plots),
          title: (land.title_no),
          registrationNumber: (land.registration_no),
          pricePerPlot: hexToNumber(land.price_per_plot),
          owner: hexToString(land.owner),
          status: hexToString(land.status),
        }));

        setLands(formattedLands);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching lands:", err);
        setError("Failed to fetch land data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#EFEDE7] text-black">
      <Header />
      <div className="xl:px-32 px-10 lg:24 pt-10">
        <div className="min-h-svh">
          <h1 className="lg:text-[1.7rem] text-xl font-semibold mb-5 ">
            Listed Lands
          </h1>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
              {lands.length > 0 ? (
                lands.map((land, index) => (
                  <div
                    key={index}
                    className="p-3 border border-slate-300 shadow-xl"
                  >
                    <div className="mb-3">
                      <Image
                        src={"/images/placeholder.png"} 
                        alt={`Land ${index}`}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="text-sm mb-3">
                      <p>
                        <strong>Location:</strong> {feltToString(land.location || "Unknown")}
                      </p>
                      <p>
                        <strong>Number of Plots:</strong>{" "}
                        {land.numberOfPlots || "N/A"}
                      </p>
                      <p>
                        <strong>Title:</strong> {feltToString(land.title || "N/A")}
                      </p>
                      <p>
                        <strong>Registration Number:</strong>{" "}
                        {feltToString(land.registrationNumber || "N/A")}
                      </p>
                      <p>
                        <strong>Price Per Plot:</strong>{" "}
                        {land.pricePerPlot || "N/A"}
                      </p>
                      <p>
                        <strong>Status:</strong> {land.status || "Verified"}
                      </p>
                    </div>
                    <div className="flex justify-between mt-3">
                      <Link
                        href={"/land-details/"}
                        className="text-white bg-[#F65A11] text-xs py-1 px-3 rounded-lg hover:text-white hover:bg-[#22331D]"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No lands listed yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
