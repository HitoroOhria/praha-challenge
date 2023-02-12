import { Board } from "./Board";

export default {
  component: Board,
}

const Template = {
  args: {
    squares: Array(9).fill(null),
  }
}

export const Default = {
  ...Template,
}

export const Filled = {
  ...Template,
  args: {
    squares: [
      "X", "O", "X",
      "O", "X", "O",
      "X", "O", "X",
    ]
  }
}

export const AllTriangle = {
  ...Template,
  args: {
    squares: [
      "△", "△", "△",
      "△", "△", "△",
      "△", "△", "△",
    ]
  }
}
