import { Game } from './Game'
import { userEvent, within } from '@storybook/testing-library'

export default {
  component: Game
}

export const Basic = {}

export const Draw = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getAllByTestId('square')[0])
    await userEvent.click(canvas.getAllByTestId('square')[1])
    await userEvent.click(canvas.getAllByTestId('square')[2])
    await userEvent.click(canvas.getAllByTestId('square')[4])
    await userEvent.click(canvas.getAllByTestId('square')[3])
    await userEvent.click(canvas.getAllByTestId('square')[5])
    await userEvent.click(canvas.getAllByTestId('square')[7])
    await userEvent.click(canvas.getAllByTestId('square')[6])
    await userEvent.click(canvas.getAllByTestId('square')[8])

  }
}