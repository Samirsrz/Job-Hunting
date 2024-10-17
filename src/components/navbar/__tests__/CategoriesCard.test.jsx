import { render, screen } from "@testing-library/react";
import CategoriesCard from "../CategoriesCard"; // Adjust the import path according to your file structure
import { describe, it, expect } from "vitest"; // Use vitest for testing

describe("CategoriesCard Component", () => {
  const imgSrc = "https://via.placeholder.com/150"; // Example image URL
  const title = "Example Category";

  it("renders the card with the correct title and image", () => {
    render(<CategoriesCard img={imgSrc} title={title} />);

    // Check if the image is rendered correctly
    const imgElement = screen.getByRole("img", { name: /shoes/i }); // Adjust alt text based on your prop
    expect(imgElement).toHaveAttribute("src", imgSrc);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("applies correct styles and class names", () => {
    render(<CategoriesCard img={imgSrc} title={title} />);

    const cardElement = screen.getByText(title).closest(".card"); // Find the closest card element
    expect(cardElement).toHaveClass("bg-base-100");
    expect(cardElement).toHaveClass("shadow-xl");
    expect(cardElement).toHaveClass("border");
    expect(cardElement).toHaveClass("border-primary");
  });
});
