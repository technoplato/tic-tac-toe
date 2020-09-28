import { useComponentSize } from "./useComponentSize"

const PADDING_PERCENT = 5 / 100

/**
 * Determines the size a Square in an N x N tic tac toe board should
 * be.
 *
 * @param boardDimensionality If a tic tac toe board is N x N, N is
 * N is the boardDimensionality.
 */
export const useSquareSize = (boardDimensionality: number) => {
  const { size, onLayout } = useComponentSize()

  const constraint = Math.min(...Object.values(size))
  const squareSize =
    constraint / ((1 + PADDING_PERCENT) * boardDimensionality)

  return { squareSize, onLayout }
}
