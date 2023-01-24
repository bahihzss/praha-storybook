import { Board } from './index'

export default {
  component: Board
}

export const Basic = {
  args: {
    squares: Array(9).fill(0).map((_, i) => i % 2 ? "O" : "X")
  }
}

export const AllTriangle = {
  args: {
    squares: Array(9).fill("△")
  }
}