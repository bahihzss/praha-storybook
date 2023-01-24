import { Square } from './index'
import { action } from '@storybook/addon-actions'

export default {
  component: Square
}

export const Circle = {
  args: {
    value: 'O',
    onClick: action('click')
  }
}
export const Cross = {
  args: {
    value: 'X',
    onClick: action('click')
  }
}

export const Triangle = {
  args: {
    value: '△',
    onClick: action('click')
  }
}