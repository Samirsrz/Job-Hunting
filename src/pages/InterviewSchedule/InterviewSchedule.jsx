import { useState } from "react";
import toast from "react-hot-toast";

const InterviewSchedule = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("15 min");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "08:00 AM",
    "08:15 AM",
    "08:30 AM",
    "08:45 AM",
    "09:00 AM",
    "09:15 AM",
    "09:30 AM",
  ];

  const handleCreateEvent = async () => {
    const newEvent = {
      eventName,
      description,
      duration,
      selectedDate,
      selectedTime,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.status === 201) {
        toast.success("Successfully created interview schedule");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <hr className="flex md:hidden" />
      {/* Left Side: Create Event Form */}
      <div className="w-full mt-3 md:w-1/3 bg-white rounded-lg shadow-md p-8">
        <button className="text-gray-600 mb-4 text-sm hover:text-gray-800">
          Cancel
        </button>
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          New Interview
        </h1>

        <div className="form-group mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Interview Name *
          </label>
          <input
            type="text"
            placeholder="Enter interview name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="form-group mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Short Description
          </label>
          <input
            type="text"
            placeholder="Enter a short description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Duration *
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>15 min</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>1 hour</option>
          </select>
        </div>

        <button
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          onClick={handleCreateEvent}
        >
          Create Interview
        </button>
      </div>

      {/* Right Side: Calendar & Time Picker */}
      <div className="w-full mt-8 md:w-2/3 px-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Schedule Interview
        </h2>

        <div className="form-group mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Select Date & Time
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <div className="grid grid-cols-3 gap-4">
            {timeSlots.map((time, idx) => (
              <button
                key={idx}
                className={`py-2 px-4 rounded-lg border text-center transition-colors duration-200 ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "border-gray-300 text-gray-600"
                } hover:bg-blue-100`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSchedule;
