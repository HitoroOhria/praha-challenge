import { Game } from "./Game";

export default {
  component: Game,
}

const Template = {
  args: {
    squares: Array(9).fill(null),
  }
}

export const Default = {
  ...Template,
}
