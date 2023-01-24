import { Game } from './index'

export default {
  component: Game
}

const Template = (args) => {
  return (
    <Game {...args} />
  )
}

export const Basic = Template.bind({})
