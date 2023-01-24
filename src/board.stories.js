import { Board } from './index'

export default {
  component: Board
}

const Template = (args) => {
  return (
    <Board {...args} />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  squares: Array(9).fill(0).map((_, i) => i % 2 ? "O" : "X")
}

export const AllTriangle = Template.bind({})
AllTriangle.args = {
  squares: Array(9).fill("△")
}