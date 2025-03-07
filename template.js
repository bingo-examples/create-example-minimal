import { createTemplate } from "bingo";

const template = createTemplate({
  produce() {
    return {
      files: {
        "README.md": `# create-example-minimal

Minimal example of a template repository built with Bingo. 💝

See [create.bingo > Building Templates](https://www.create.bingo/build/about) for more information.
`
      },
    };
  },
});

export default template;

export const { createConfig } = template;
