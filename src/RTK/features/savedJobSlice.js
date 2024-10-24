import { createSlice } from "@reduxjs/toolkit";
import { localGetJobs } from "../../libs/localJobs";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  jobs: localGetJobs() || [],
};

const savedJobSlice = createSlice({
  name: "savedJob",
  initialState,
  reducers: {
    updateSavedJobs: (state) => {
      state.jobs = localGetJobs() || [];
    },
  },
});

export default savedJobSlice.reducer;

export const useSavedJobs = () => {
  const dispatch = useDispatch();
  const savedJobs = useSelector((state) => state.savedJob.jobs);

  const updateSavedJobs = () => {
    dispatch(savedJobSlice.actions.updateSavedJobs());
  };

  return { savedJobs, updateSavedJobs };
};
