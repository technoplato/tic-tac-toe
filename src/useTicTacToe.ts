import {
  BoardValues,
  CanMark,
  Mark,
  Reset,
  TicTacToe,
  Turn,
  UseTicTacToe,
  Winner,
} from "./types"
import { useEffect, useState } from "react"
import { determineWinner } from "./gameUtils"

const initialBoard = (size: number) => Array(size * size).fill(null)

export const useTicTacToe: UseTicTacToe = (
  type = "local",
  size = 3,
) => {
  const [turn, setTurn] = useState<Turn>("X")

  const [board, setBoard] = useState<BoardValues>(initialBoard(size))

  const [winner, setWinner] = useState<Winner>(null)

  useEffect(() => {
    setWinner(determineWinner(board))
  }, [board, setWinner])

  /**
   * Further considerations required here for remote multiplayer.
   */
  const canMark: CanMark = (index) => board[index] === null && !winner

  const mark: Mark = (index) => {
    if (!canMark(index)) {
      return
    }

    setBoard((board) => {
      const copy = [...board]
      copy[index] = turn
      return copy
    })

    setTurn(turn === "X" ? "O" : "X")
  }

  const reset: Reset = () => {
    setTurn("X")
    setBoard(initialBoard(size))
  }

  const draw =
    board.filter((square) => square === null).length === 0 && !winner

  return {
    board,
    canMark,
    mark,
    reset,
    turn,
    winner,
    draw,
  } as TicTacToe
}
