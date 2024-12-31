"use client"
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Header from "../components/internal/Header";

export default function Register() {
    // State for input fields
    interface FormData {
        title_id: string;
        registration_no: string;
      }
      
    const [formData, setFormData] = useState<FormData>({
        title_id: "",
        // landName: "",
        registration_no: "",
        // location: "",
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
        const { title_id, registration_no } = formData
        if (!title_id || !registration_no) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({  title_id, registration_no }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              console.log("land exists", data)
            } else {
                console.log("error", data)
            }
          } catch (error) {
            console.error("Error:", error);
          }

        // Validate inputs
        if (file && file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB.");
            return;
        }

        // Submit logic here
        // console.log("Form Data Submitted:", formData);
        // console.log("Uploaded File:", file);

        // alert("Land registered successfully!");
    };

    return (
        <div className="text-black">
            <Header />
            <div className="min-h-svh xl:px-40 lg:px-32 px-10 flex items-center bg-[#EFEDE7] bg-no-repeat bg-cover">
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
                                {/* <div>
                                    <label htmlFor="landName" className="text-[#22331D] text-sm">
                                        Land name
                                    </label>
                                    <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1">
                                        <input
                                            type="text"
                                            id="landName"
                                            name="landName"
                                            value={formData.landName}
                                            onChange={handleChange}
                                            className="border-0 outline-0 bg-transparent"
                                        />
                                    </div>
                                </div> */}
                                <div>
                                    <label htmlFor="resgistration_id" className="text-[#22331D] text-sm">
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
                                {/* <div>
                                    <label htmlFor="location" className="text-[#22331D] text-sm">
                                        Location
                                    </label>
                                    <div className="border border-gray-300 rounded mt-1 mb-3 px-3 py-1">
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="border-0 outline-0 bg-transparent"
                                        />
                                    </div>
                                </div> */}
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
