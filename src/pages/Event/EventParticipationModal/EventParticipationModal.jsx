
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { IoClose } from "react-icons/io5";
// import useAxiosCommon from "../../../hooks/useAxiosCommon";
// import Select from "react-select";
// import countries from "react-select-country-list";
// import toast, { Toaster } from "react-hot-toast";

// const EventParticipationModal = ({ isOpen, onClose }) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [zipCode, setZipCode] = useState("");
//     const [state, setState] = useState("");
//     const [thana, setThana] = useState("");
//     const [district, setDistrict] = useState("");
//     const [division, setDivision] = useState("");
//     const [country, setCountry] = useState("");
//     const [reason, setReason] = useState("");
//     const [skill, setSkill] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const axiosCommon = useAxiosCommon();

//     const countryOptions = countries().getData().map(country => ({
//         value: country.value,
//         label: (
//             <div className="flex items-center">
//                 <img
//                     src={`https://flagcdn.com/w20/${country.value.toLowerCase()}.png`}
//                     alt={country.label}
//                     className="w-6 h-4 mr-2"
//                 />
//                 {country.label}
//             </div>
//         )
//     }));

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         const formData = {
//             name,
//             email,
//             mobileNumber,
//             zipCode,
//             state,
//             thana,
//             district,
//             division,
//             country,
//             reason,
//             skill,
//         };

//         try {
//             const response = await axiosCommon.post('/event/participate', formData);
// console.log(response);

//             if (response.status === 200) {
//                 console.log("Form submitted:", formData);
//                 toast.success('successfully submitted')
//                 setIsSubmitted(true);
//                 // Clear form fields after submission
//                 setName("");
//                 setEmail("");
//                 setMobileNumber("");
//                 setZipCode("");
//                 setState("");
//                 setThana("");
//                 setDistrict("");
//                 setDivision("");
//                 setCountry("");
//                 setReason("");
//                 setSkill("");
//                 setTimeout(() => {
//                     setIsSubmitted(false);
//                     onClose();
//                 }, 2000);
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             // Optionally, you can handle error state here
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
         
//             <div className="relative bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] max-h-[90vh] overflow-hidden">
//                 <div className="flex justify-between items-center p-4 border-b">
//                     <h2 className="text-2xl font-semibold">Event Participation</h2>
//                     <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
//                         <IoClose size={24} />
//                     </button>
//                 </div>

//                 <form
//                     onSubmit={handleSubmit}
//                     className="overflow-y-auto p-4"
//                     style={{ maxHeight: "70vh" }}
//                 >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Mobile Number</label>
//                             <PhoneInput
//                                 country={"us"}
//                                 value={mobileNumber}
//                                 onChange={setMobileNumber}
//                                 inputClass="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 containerClass="w-full"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Zip Code</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter zip code"
//                                 value={zipCode}
//                                 onChange={(e) => setZipCode(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">State</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter state"
//                                 value={state}
//                                 onChange={(e) => setState(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Thana</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter thana"
//                                 value={thana}
//                                 onChange={(e) => setThana(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">District</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter district"
//                                 value={district}
//                                 onChange={(e) => setDistrict(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Division</label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter division"
//                                 value={division}
//                                 onChange={(e) => setDivision(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-1">Country</label>
//                             <Select
//                                 options={countryOptions}
//                                 onChange={(selectedOption) => setCountry(selectedOption.value)}
//                                 className="w-full"
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4 md:col-span-2">
//                             <label className="block text-sm font-medium mb-1">Why do you want to participate?</label>
//                             <textarea
//                                 placeholder="Explain why you want to participate..."
//                                 value={reason}
//                                 onChange={(e) => setReason(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 rows="3"
//                             ></textarea>
//                         </div>
//                         <div className="mb-4 md:col-span-2">
//                             <label className="block text-sm font-medium mb-1">Skills</label>
//                             <select
//                                 value={skill}
//                                 onChange={(e) => setSkill(e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                                 required
//                             >
//                                 <option value="">Select your skill</option>
//                                 <option value="Backend Developer">Backend Developer</option>
//                                 <option value="Frontend Developer">Frontend Developer</option>
//                                 <option value="Fullstack Developer">Fullstack Developer</option>
//                                 <option value="DevOps Engineer">DevOps Engineer</option>
//                                 <option value="Data Scientist">Data Scientist</option>
//                             </select>
//                         </div>
//                     </div>
//                 </form>

//                 <div className="sticky bottom-0 flex justify-end bg-white p-4 border-t">
                  
//                     <button onClick={onClose} disabled={isSubmitting} className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
//                         Cancel
//                     </button>
//                     <button onClick={handleSubmit} disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                         Submit
//                     </button>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default EventParticipationModal;









import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoClose } from "react-icons/io5";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Select from "react-select";
import countries from "react-select-country-list";
import toast, { Toaster } from "react-hot-toast";

const EventParticipationModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [state, setState] = useState("");
    const [thana, setThana] = useState("");
    const [district, setDistrict] = useState("");
    const [division, setDivision] = useState("");
    const [country, setCountry] = useState("");
    const [reason, setReason] = useState("");
    const [skill, setSkill] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const axiosCommon = useAxiosCommon();

    const countryOptions = countries().getData().map(country => ({
        value: country.value,
        label: (
            <div className="flex items-center">
                <img
                    src={`https://flagcdn.com/w20/${country.value.toLowerCase()}.png`}
                    alt={country.label}
                    className="w-6 h-4 mr-2"
                />
                {country.label}
            </div>
        )
    }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = {
            name,
            email,
            mobileNumber,
            zipCode,
            state,
            thana,
            district,
            division,
            country,
            reason,
            skill,
        };

        try {
            const response = await axiosCommon.post('/event/participate', formData);
            console.log(response);

            if (response.status === 200) {
                console.log("Form submitted:", formData);
                toast.success('Successfully submitted');
                setIsSubmitted(true);
                // Clear form fields after submission
                setName("");
                setEmail("");
                setMobileNumber("");
                setZipCode("");
                setState("");
                setThana("");
                setDistrict("");
                setDivision("");
                setCountry("");
                setReason("");
                setSkill("");
                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                }, 2000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Optionally, you can handle error state here
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] max-h-[90vh] overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-2xl font-semibold">Event Participation</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <IoClose size={24} />
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto p-4"
                    style={{ maxHeight: "70vh" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Form Fields */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Mobile Number</label>
                            <PhoneInput
                                country={"us"}
                                value={mobileNumber}
                                onChange={setMobileNumber}
                                inputClass="w-full px-3 py-2 border border-gray-300 rounded-md"
                                containerClass="w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Zip Code</label>
                            <input
                                type="text"
                                placeholder="Enter zip code"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">State</label>
                            <input
                                type="text"
                                placeholder="Enter state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Thana</label>
                            <input
                                type="text"
                                placeholder="Enter thana"
                                value={thana}
                                onChange={(e) => setThana(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">District</label>
                            <input
                                type="text"
                                placeholder="Enter district"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Division</label>
                            <input
                                type="text"
                                placeholder="Enter division"
                                value={division}
                                onChange={(e) => setDivision(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Country</label>
                            <Select
                                options={countryOptions}
                                onChange={(selectedOption) => setCountry(selectedOption.value)}
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4 md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Why do you want to participate?</label>
                            <textarea
                                placeholder="Explain why you want to participate..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-4 md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Skills</label>
                            <select
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                            >
                                <option value="">Select your skill</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Fullstack Developer">Fullstack Developer</option>
                                <option value="DevOps Engineer">DevOps Engineer</option>
                                <option value="Data Scientist">Data Scientist</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div className="sticky bottom-0 flex justify-end bg-white p-4 border-t">
                    {isSubmitting ? (
                        <span className="text-blue-600">Submitting...</span>
                    ) : isSubmitted ? (
                        <span className="text-green-600">Submitted successfully!</span>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default EventParticipationModal;
