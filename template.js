import { createTemplate } from "bingo";

const template = createTemplate({
  produce() {
    return {
      files: {
        "README.md": `# Hello, world!`,
      },
    };
  },
});

export default template;

export const { createConfig } = template;
