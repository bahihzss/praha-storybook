import { Board } from './index'
import { action } from '@storybook/addon-actions'

export default {
  component: Board
}

export const Basic = {
  args: {
    squares: Array(9).fill(0).map((_, i) => i % 2 ? "O" : "X"),
    onClick: action('click')
  }
}

export const AllTriangle = {
  args: {
    squares: Array(9).fill("△"),
    onClick: action('click')
  }
}