import {
  searchWord,
  splitWords,
  StringToJSX,
  addSuperScript,
  replaceWithEditedWords,
} from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  describe("Split words into array items", () => {
    it("tests if words in sentence are split to array items", () => {
      const result = splitWords("Letam Bossman Barinua");
      expect(result).toEqual(["Letam", "Bossman", "Barinua"]);
    });
  });

  describe("If searchWord function has Realtor or Realtors it returns array of object containing word and its index", () => {
    it("tests if Realtor exists", () => {
      const result = searchWord(["My", "Bossman", "Barinua", "Realtor"]);
      expect(result).toEqual([{ word: "Realtor", index: 3 }]);
    });

    it("tests if realtors exists", () => {
      const result = searchWord(["realtors", "My", "Bossman", "Barinua"]);
      expect(result).toEqual([{ word: "realtors", index: 0 }]);
    });

    it("tests if no word like realtor or realtors and return empty array", () => {
      const result = searchWord(["My", "Bossman", "Barinua"]);
      expect(result).toEqual([]);
    });
  });

  describe("replaceWithEditedWords returns array of strings", () => {
    it("replaces splitWords array item with object property from supScript array both passed as arguements to replaceWithEditedWords", () => {
      const supScript = [
        {
          word: (
            <>
              Realtor<sup>&reg;</sup>
            </>
          ),
          index: 3,
        },
        {
          word: (
            <>
              realtors<sup>&reg;</sup>
            </>
          ),
          index: 0,
        },
      ];
      const splitWords = ["realtors", "Bossman", "Barinua", "Realtor"];
      const result = replaceWithEditedWords(supScript, splitWords);
      expect(result).toEqual([
        <>
          realtors
          <sup>&reg;</sup>
        </>,
        "Bossman",
        "Barinua",
        <>
          Realtor
          <sup>&reg;</sup>
        </>,
      ]);
    });

    it("returns splitWords array if supScript array is empty", () => {
      const splitWords = ["realtors", "Bossman", "Barinua", "Realtor"];
      const result = replaceWithEditedWords([], splitWords);
      expect(result).toEqual(["realtors", "Bossman", "Barinua", "Realtor"]);
    });
  });

  describe("addSuperScript", () => {
    it("adds a superscript to the word", () => {
      const array = [
        { word: "hello", index: 1 },
        { word: "world", index: 2 },
      ];

      const result = addSuperScript(array);

      expect(result).toEqual([
        {
          word: (
            <>
              hello
              <sup>&reg;</sup>
            </>
          ),
          index: 1,
        },
        {
          word: (
            <>
              world
              <sup>&reg;</sup>
            </>
          ),
          index: 2,
        },
      ]);
    });
  });

  describe("StringToJSX", () => {
    it("displays all string items in array", () => {
      const stringArray = ["Letam", "Bossman", "Barinua"];

      render(<StringToJSX stringArray={stringArray} />);

      const headerElement = screen.getByText(/Letam Bossman Barinua/);
      expect(headerElement).toBeInTheDocument();
    });

    it("renders JSX elements", () => {
      const stringArray = [
        <p key={1}>JSX element 1</p>,
        <p key={2}>JSX element 2</p>,
      ];
      render(<StringToJSX stringArray={stringArray} />);

      expect(screen.getByText("JSX element 1")).toBeInTheDocument();
      expect(screen.getByText("JSX element 2")).toBeInTheDocument();
    });
  });
});
