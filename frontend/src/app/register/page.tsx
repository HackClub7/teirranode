"use client";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Header from "../components/internal/Header";
import bgImage from "../../../public/assets/global-img.png";
import { Contract } from "starknet";
import landAbi from "../Abis/landAbi.json";
import { useAccount } from "@starknet-react/core";
import ConnectButton from "../components/lib/Connect";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Utility function to convert a string to felt252
const stringToFelt252 = (str: string): string => {
  if (!str) throw new Error("Invalid string input for felt conversion.");
  return "0x" + Buffer.from(str, "utf8").toString("hex");
};

export default function Register() {
  const { account } = useAccount(); 
  const ContractAddress =
    "0x04c7a85f15645aebe0a9d742c5b4b0e7af11f41468e7910369f63e3e6bcad564";
  const landContract = account
    ? new Contract(landAbi, ContractAddress, account)
    : null;

  // State for input fields
  const [formData, setFormData] = useState({
    title_id: "",
    registration_no: "",
  });
  const [file, setFile] = useState<File | null>(null);

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  // Function to handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!account) {
      toast.error("Please connect your wallet to register the land.");
      return;
    }

    const { title_id, registration_no } = formData;
    if (!title_id || !registration_no) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ title_id, registration_no }),
      });

      const data = await response.json();

      if (response.ok) {
        const { location, plot, price_per_plot, registration_no, title_id } =
          data.details;

        if (!location || !plot || !price_per_plot || !registration_no || !title_id) {
          toast.error("Invalid data received from the server.");
          return;
        }

        const landLocation = stringToFelt252(location);
        const numberOfPlots = BigInt(plot);
        const tittleDeed = stringToFelt252(title_id);
        const registrationNumber = stringToFelt252(registration_no);
        const pricePerPlot = BigInt(price_per_plot.replace("$", ""));

        try {
          if (!landContract) {
            throw new Error("Land contract is not initialized. Please connect your wallet.");
          }
          const tx = await landContract.register_land(
            landLocation,
            numberOfPlots,
            tittleDeed,
            registrationNumber,
            pricePerPlot
          );

          console.log("Transaction submitted:", tx);

          const receipt = await account.waitForTransaction(tx.transaction_hash);
          console.log("Transaction confirmed:", receipt);

          toast.success("Land registered successfully on the blockchain!");
          
          // Reset the form and file input
          setFormData({ title_id: "", registration_no: "" });
          setFile(null);
        } catch (contractError) {
          console.error("Error interacting with the contract:", contractError);
          toast.error("Failed to write to the blockchain.");
        }
      } else {
        toast.error("Failed to verify land. Please check your inputs.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during form submission. Please try again.");
    }
  };

  return (
    <div className="text-black">
      <Header />
      <ToastContainer />
      <div
        className="min-h-svh xl:px-40 lg:px-32 px-10 flex items-center bg-[#EFEDE7] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="w-full">
          <form
            onSubmit={handleRegister}
            className="shadow-xl py-10 lg:px-20 px-7 bg-white"
          >
            <h2 className="lg:text-[24px] text-lg font-semibold text-[#22331D] lg:mb-5 mb-3 text-center">
              Register your land
            </h2>
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
                    onChange={handleFileChange}
                  />
                  <span className="text-[#22331D] mb-5 text-2xl">
                    <FiUploadCloud />
                  </span>
                  <span className="mb-2">Drag & Drop or Click to Upload</span>
                  <span className="text-xs text-gray-500">(Max size: 5MB)</span>
                </label>
              </div>
              <div>
                <div>
                  <label htmlFor="title_id" className="text-[#22331D] text-sm">
                    Title
                  </label>
                  <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1">
                    <input
                      type="text"
                      id="title_id"
                      name="title_id"
                      value={formData.title_id}
                      onChange={handleChange}
                      className="border-0 outline-0 bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="registration_no"
                    className="text-[#22331D] text-sm"
                  >
                    Land Reg Number
                  </label>
                  <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1">
                    <input
                      type="text"
                      id="registration_no"
                      name="registration_no"
                      value={formData.registration_no}
                      onChange={handleChange}
                      className="border-0 outline-0 bg-transparent"
                    />
                  </div>
                </div>
                <div className="lg:flex justify-center lg:justify-start hidden">
                  <button
                    type="submit"
                    className="bg-[#F65A11] hover:bg-[#22331D] text-[#EFEDE7] text-sm py-2 px-5 mt-4 rounded"
                  >
                    Register Land
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-[#F65A11] hover:bg-[#22331D] text-[#EFEDE7] text-sm py-2 px-5 mt-4 rounded"
              >
                Register Land
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
