const defaultVerbs: Array<string> = [
  "Wrangling",
  "Locking",
  "Creafting",
  "Executing",
  "Generating",
  "Removing",
  "Destroying",
  "Burning",
  "Analyzing",
  "Spoofing",
  "Obfuscating",
];

const defaultNouns: Array<string> = [
  "Kittens",
  "Monkeys",
  "the Mainframe",
  "Everything",
  "Protocol",
  "Proxies",
];

const defaultAdjectives: Array<string> = [
  "Charming",
  "Curel",
  "Fantastic",
  "Motivated",
  "Reliable",
];

interface hooeyOptions {
  includeAdjectives?: "always" | "sometimes" | "never";
  adjectives?: Array<string>;
  verbs?: Array<string>;
  nouns?: Array<string>;
}

export const generateHooey = (options: hooeyOptions = {}): string => {
  const {
    includeAdjectives = "sometimes",
    adjectives = defaultAdjectives,
    verbs = defaultVerbs,
    nouns = defaultNouns,
  } = options;

  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective =
    includeAdjectives == "always" ||
    (includeAdjectives == "sometimes" && Math.random() > 0.5)
      ? adjectives[Math.floor(Math.random() * adjectives.length)]
      : undefined;

  return `${verb}${adjective ? ` ${adjective} ` : " "}${noun}`;
};

export const generateALoadOfHooey = (
  amountOfHooey: number,
  options: hooeyOptions = {}
): Array<string> => {
  return new Array(amountOfHooey).fill(null).map(() => generateHooey(options));
};
