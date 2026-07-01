import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
  width: min(100%, 42rem);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 38rem;
  padding: 0.5rem;
  border-radius: 999px;
  background: transparent;
  border: 1px solid #e8d8b5;
  box-shadow: 0 10px 28px rgba(78, 57, 20, 0.12);

  @media (max-width: 640px) {
    border-radius: 1rem;
    flex-wrap: wrap;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 13rem;
  border: none;
  outline: none;
  border-radius: 999px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  color: #3a2a14;
  box-shadow: none;
  caret-color: #3a2a14;

  &:focus,
  &:active {
    background: transparent;
    background-color: transparent;
  }

  &::placeholder {
    color: #9a7a45;
  }

  &:focus::placeholder {
    color: #b18d52;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #3a2a14;
    transition: background-color 9999s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    box-shadow: 0 0 0 1000px transparent inset;
  }
`;

export const SearchButton = styled.button`
  border: none;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(140deg, #274c77 0%, #1c3a5b 100%);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
  box-shadow: 0 8px 18px rgba(28, 58, 91, 0.28);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(28, 58, 91, 0.35);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(28, 58, 91, 0.3);
  }

  &:focus-visible {
    outline: 3px solid rgba(39, 76, 119, 0.35);
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
