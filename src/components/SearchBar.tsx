import React from "react";
import { Form } from "./SearchBar.styled";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SearchBar = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      const target = event.target as HTMLFormElement;
      const input = target.query as HTMLInputElement;
      const value = input.value;
      // Get the query value from form, could be string or null
      // const word = formData as typeof input;
      // Show alert, using ?? to display empty string if query is null
      alert(`You searched for '${value}'`);
      console.log("search valuel", value);
      console.log(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Search Word" name="query" />
      <button type="submit">submit</button>
    </Form>
  );
};
