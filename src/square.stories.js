import { Square } from './index'

export default {
  component: Square
}

const Template = (args) => {
  return (
    <Square {...args} />
  )
}

export const Circle = Template.bind({})
Circle.args = {
  value: 'O'
}

export const Cross = Template.bind({})
Cross.args = {
  value: 'X'
}

export const Triangle = Template.bind({})
Triangle.args = {
  value: '△'
}