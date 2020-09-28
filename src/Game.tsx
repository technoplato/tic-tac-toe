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
  dimension: number
}

const Game: React.FC<GameProps> = ({
  type = "local",
  dimension = 3,
}) => {
  const { board, winner, turn, mark, reset } = useTicTacToe(
    type,
    dimension,
  )

  return (
    <View style={styles.container}>
      {winner ? (
        <Text>Winner: {winner}</Text>
      ) : (
        <Text>Turn: {turn}</Text>
      )}
      <Board {...{ board, mark }} />
      <Button onPress={reset} title={"Reset"} />
    </View>
  )
}

export default Game
