import { splitWords } from "./Header";

describe("Header Component", () => {
  it("tests if words in sentence are split to array items", () => {
    const result = splitWords("My name is Letam Bossman Barinua");
    expect(result).toEqual(["My", "name", "is", "Letam", "Bossman", "Barinua"]);
  });
});
