import Board from "./Board"

import React from "react"
import { StyleSheet, View, Button } from "react-native"
import { GameType } from "./types"
import { useTicTacToe } from "./useTicTacToe"
import GameStatus from "./GameStatus"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

type GameProps = {
  type?: GameType
  dimension?: number
}

const Game: React.FC<GameProps> = ({
  type = "local",
  dimension = 3,
}) => {
  const { board, winner, turn, mark, reset, draw } = useTicTacToe(
    type,
    dimension,
  )

  return (
    <View style={styles.container}>
      <GameStatus {...{ winner, turn, draw }} />
      <Board {...{ board, mark }} />
      <Button onPress={reset} title={"Reset"} />
    </View>
  )
}

export default Game
