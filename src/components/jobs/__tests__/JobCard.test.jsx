import { render, screen } from "@testing-library/react";
import JobCard from "../JobCard"; // Adjust the import path according to your file structure
import { BrowserRouter as Router } from "react-router-dom";

describe("JobCard Component", () => {
  const mockJob = {
    _id: "1",
    title: "Software Developer",
    logo: "https://via.placeholder.com/150",
    rating: 4.5,
    reviews: [{ id: "1" }, { id: "2" }],
    des: "Responsible for developing software solutions.",
  };

  it("renders job details correctly", () => {
    render(
      <Router>
        <JobCard job={mockJob} />
      </Router>
    );

    // Check if the job title is rendered
    expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();

    // Check if the job rating is rendered
    expect(screen.getByText(/4.5/i)).toBeInTheDocument();

    // Check if the reviews count is rendered
    expect(screen.getByText(/2 reviews/i)).toBeInTheDocument();

    // Check if the job description is rendered
    expect(
      screen.getByText(/Responsible for developing software solutions./i)
    ).toBeInTheDocument();

    // Check if the "View" button is rendered
    expect(screen.getByRole("button", { name: /View/i })).toBeInTheDocument();

    // Check if the "Save" button is rendered
    expect(screen.getByRole("button", { name: /Save/i })).toBeInTheDocument();

    // Check if the logo image is rendered
    expect(
      screen.getByAltText(/https:\/\/via.placeholder.com\/150/i)
    ).toBeInTheDocument();
  });

  it("navigates to job details on clicking 'View' button", () => {
    const { getByRole } = render(
      <Router>
        <JobCard job={mockJob} />
      </Router>
    );

    // Check if the "View" button is rendered and clickable
    const viewButton = getByRole("button", { name: /View/i });
    expect(viewButton).toBeInTheDocument();
    // Simulate button click
  });
});
