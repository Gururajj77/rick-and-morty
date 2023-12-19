import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterCard from "../components/Characters/CharacterCard/CharacterCard";

jest.mock("../store/store.ts", () => ({
  useCharacterStore: () => ({
    setCharacter: jest.fn(),
  }),
}));

jest.mock("../components/Characters/Utils/CharacterUtilFunctions.ts", () => ({
  getStatusClass: jest.fn().mockReturnValue("alive-class"),
}));

describe("CharacterCard", () => {
  const mockOnNavigate = jest.fn();
  const character = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    location: { name: "Earth", url: "" },
    image: "image-url",
    type: "",
    gender: "",
    origin: { name: "", url: "" },
    episode: [],
    url: "",
    created: "",
  };

  const characterCard = {
    pages: [{ results: [character] }],
  };

  it("renders correctly", () => {
    render(
      <CharacterCard
        characterCard={characterCard}
        onNavigate={mockOnNavigate}
      />
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Alive - Human")).toBeInTheDocument();
    expect(screen.getByText("Earth")).toBeInTheDocument();
  });

  it("calls onNavigate with character id on card click", () => {
    render(
      <CharacterCard
        characterCard={characterCard}
        onNavigate={mockOnNavigate}
      />
    );

    fireEvent.click(screen.getByText("Rick Sanchez"));
    expect(mockOnNavigate).toHaveBeenCalledWith(character.id);
  });
});
