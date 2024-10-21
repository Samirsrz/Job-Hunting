import React, { createContext, useContext, useState, useEffect } from "react";
import { localGetJobs } from "../libs/localJobs";

const SavedJobsContext = createContext();

export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(localGetJobs() || []);

  const updateSavedJobs = () => {
    setSavedJobs(localGetJobs() || []);
  };

  return (
    <SavedJobsContext.Provider value={{ savedJobs, updateSavedJobs }}>
      {children}
    </SavedJobsContext.Provider>
  );
};

export const useSavedJobs = () => {
  return useContext(SavedJobsContext);
};
