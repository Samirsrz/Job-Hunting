import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const JobApplicationModal = ({ isOpen, onClose, id }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading status
    const [submitMessage, setSubmitMessage] = useState(""); // New state for success message
    const axiosSecure = useAxiosSecure();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Set submitting state to true and clear previous message
        setIsSubmitting(true);
        setSubmitMessage("");

        const formData = new FormData();
        formData.append("applicantName", name);
        formData.append("jobTitle", "Frontend Developer");
        formData.append("email", email);
        formData.append("company", "Microsoft");
        formData.append("file", resume);

        if (coverLetter) {
            formData.append("coverLetter", coverLetter);
        }

        axiosSecure
            .post(`/jobs/${id}/apply`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
                console.log(res);
                setSubmitMessage("Submitted successfully!");
                setIsSubmitting(false);

                // Clear the message after 3 seconds
                setTimeout(() => {
                    setSubmitMessage("");
                    onClose(); // Close the modal after showing the message
                }, 3000);
            })
            .catch((err) => {
                setSubmitMessage("Submission failed. Please try again.");
                setIsSubmitting(false);
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Job Application</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
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

                    {/* Email Input */}
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

                    {/* Resume Upload */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Upload Resume</label>
                        <div className="flex items-center">
                            <label className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
                                <span>Choose File</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    required
                                />
                            </label>
                            <span className="ml-3 text-gray-600">
                                {resume ? resume.name : "No file selected"}
                            </span>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Cover Letter</label>
                        <textarea
                            placeholder="Write your cover letter here..."
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-2 px-4 py-2 bg-gray-300 rounded-md"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Please wait..." : "Submit"}
                        </button>
                    </div>

                    {/* Submission Message */}
                    {submitMessage && (
                        <div className="mt-4 text-center text-green-600">{submitMessage}</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
