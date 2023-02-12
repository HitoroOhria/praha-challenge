import { Square } from "./Square";

export default {
  component: Square,
}

const Template = {}

export const Default = {
  ...Template,
}

export const Circle = {
  ...Template,
  args: {
    value: "O",
  }
}

export const Cross = {
  ...Template,
  args: {
    value: "X",
  }
}
