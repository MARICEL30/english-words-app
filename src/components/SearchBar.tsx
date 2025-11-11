import React from "react";
import { Form } from "./SearchBar.styled";

type InputValue = {
  input?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SearchBar = ({ input }: InputValue) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Get the query value from form, could be string or null
    const word = formData.get("query") as typeof input;
    // Show alert, using ?? to display empty string if query is null
    alert(`You searched for '${word ?? ""}'`);
    console.log("give the type", typeof word);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Search Word" name="query" />
      <button type="submit">submit</button>
    </Form>
  );
};
