import { generateALoadOfHooey, generateHooey } from "../src/hooey";

test("generate hooey without adjective", () => {
  expect(
    generateHooey({
      includeAdjectives: "never",
      nouns: ["Monkeys"],
      verbs: ["Wrangling"],
    })
  ).toBe("Wrangling Monkeys");
});

test("generate hooey with adjectives sometimes", () => {
  expect(
    generateHooey({
      includeAdjectives: "sometimes",
      adjectives: ["Howling"],
      nouns: ["Monkeys"],
      verbs: ["Wrangling"],
    })
  ).toMatch(/Wrangling (Howling )?Monkeys/);
});

test("generate hooey with adjectives", () => {
  expect(
    generateHooey({
      includeAdjectives: "always",
      adjectives: ["Howling"],
      nouns: ["Monkeys"],
      verbs: ["Wrangling"],
    })
  ).toBe("Wrangling Howling Monkeys");
});

test("generate a load of hooey without adjectives", () => {
  expect(
    generateALoadOfHooey(3, {
      includeAdjectives: "never",
      nouns: ["Monkeys"],
      verbs: ["Wrangling"],
    })
  ).toEqual(["Wrangling Monkeys", "Wrangling Monkeys", "Wrangling Monkeys"]);
});
