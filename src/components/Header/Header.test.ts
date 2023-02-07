import { searchWord, splitWords } from "./Header";

describe("Header Component", () => {
  describe("Split words into array items", () => {
    it("tests if words in sentence are split to array items", () => {
      const result = splitWords("Letam Bossman Barinua");
      expect(result).toEqual(["Letam", "Bossman", "Barinua"]);
    });
  });

  describe("tests if array has Realtor or Realtors and returns each instances of the words along with its index", () => {
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
});
