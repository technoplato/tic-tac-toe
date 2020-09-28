import Board from "./Board"

import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { GameType } from "./types"
import { useTicTacToe } from "./useTicTacToe"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

type GameProps = {
  type: GameType
  size: number
}

const Game: React.FC<GameProps> = ({ type = "local", size = 3 }) => {
  const { board, winner, turn, mark, reset } = useTicTacToe(
    type,
    size,
  )

  return (
    <View style={styles.container}>
      <Text>Turn: {turn}</Text>
      <Text>Winner: {winner}</Text>
      <Board {...{ board, mark }} />
      <Button onPress={reset} title={"Reset"} />
    </View>
  )
}

export default Game
