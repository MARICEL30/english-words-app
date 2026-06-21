import React from "react";
import { Form } from "./SearchBar.styled";

interface SearchBarProps {
  onSearch: (word: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const input = target.query as HTMLInputElement;
    const value = input.value.trim();

    if (value) {
      onSearch(value); // Call the parent's search function
      console.log("Searching for:", value);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input placeholder="Search Word" name="query" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
