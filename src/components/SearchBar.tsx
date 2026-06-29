import React from "react";
import {
  Form,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./SearchBar.styled";

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
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search for a word..."
          name="query"
          aria-label="Search for a word"
        />
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </SearchContainer>
  );
};
