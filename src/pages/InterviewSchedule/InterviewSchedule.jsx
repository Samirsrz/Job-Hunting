import { useState } from "react";

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
      const response = await fetch("http://localhost:8000/interviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  

  return (
    <div className="flex h-screen">
      {/* Left Side: Create Event Form */}
      <div className="w-1/3 p-6  bg-sky-300 text-white">
        <button className="btn btn-ghost mb-4  text-white">Cancel</button>
        <h1 className="text-2xl font-bold mb-6">Create New Interview</h1>

        <div className="form-control mb-4">
          <label className="label text-sm font-bold">Interview Name *</label>
          <input
            type="text"
            placeholder="Related interview name"
            className="input input-bordered"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>

        <div className="form-control mb-4">
          <label className="label text-sm font-bold">Short Description</label>
          <input
            type="text"
            placeholder="Short Description"
            className="input input-bordered"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-control mb-6">
          <label className="label text-sm font-bold">Duration *</label>
          <select
            className="select select-bordered bg-slate-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>15 min</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>1 hour</option>
          </select>
        </div>

        {/* <div className="flex justify-between mb-6">
          <button className="btn btn-circle btn-primary">
            <img src="/zoom-icon.png" alt="Zoom" />
          </button>
          <button className="btn btn-circle btn-primary">
            <img src="/google-icon.png" alt="Google Meet" />
          </button>
        </div> */}

        <button className="btn  bg-slate-500 text-white w-full" onClick={handleCreateEvent}>
          Create
        </button>
      </div>

      {/* Right Side: Calendar & Time Picker */}
      <div className="w-2/3 bg-white p-6">
        <h2 className="text-3xl font-bold mb-4">Interview Schedule</h2>

        <div className="form-control mb-4">
          <label className="label text-sm font-bold">Select Date & Time</label>
          <input
            type="date"
            className="input input-bordered mb-4"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <div className="overflow-y-scroll h-48">
            {timeSlots.map((time, idx) => (
              <button
                key={idx}
                className={`btn btn-outline btn-block mb-2 ${
                  selectedTime === time ? " btn-info" : ""
                }`}
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
