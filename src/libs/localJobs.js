/**
 * Adds a new job to localStorage.
 * Only the jobId will be stored.
 *
 * @param {string|number} jobId - The ID of the job to be added.
 */
export function localAddJob(jobId) {
  const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const updatedJobs = [...new Set([...storedJobs, jobId])];
  localStorage.setItem("jobs", JSON.stringify(updatedJobs));
}

/**
 * Retrieves all job IDs stored in localStorage.
 *
 * @returns {Array<string|number>} - An array of stored job IDs.
 */
export function localGetJobs() {
  return JSON.parse(localStorage.getItem("jobs")) || [];
}

/**
 * Deletes a job from localStorage using the jobId.
 *
 * @param {string|number} jobId - The ID of the job to be deleted.
 */
export function localDeleteJob(jobId) {
  const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const updatedJobs = storedJobs.filter((storedJobId) => storedJobId !== jobId);
  localStorage.setItem("jobs", JSON.stringify(updatedJobs));
}

/**
 * Checks if a job ID exists in localStorage.
 *
 * @param {string|number} jobId - The ID of the job to check.
 * @returns {boolean} - True if the job ID exists, false otherwise.
 */
export function localJobExists(jobId) {
  const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  return storedJobs.includes(jobId);
}
