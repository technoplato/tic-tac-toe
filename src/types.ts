export type GameType = "local" | "single" | "remote"

export type SquareValue = "X" | "O" | null

export type BoardValues = SquareValue[]

export type Winner = SquareValue

export type Turn = "X" | "O"

export type CanMark = (index: number) => boolean

export type Mark = (index: number) => void

export type Reset = () => void

export type TicTacToe = {
  board: BoardValues
  winner: Winner
  turn: Turn
  canMark: CanMark
  mark: Mark
  reset: Reset
}

export type UseTicTacToe = (type: GameType, size: number) => TicTacToe

export type DetermineWinner = (board: BoardValues) => Winner
