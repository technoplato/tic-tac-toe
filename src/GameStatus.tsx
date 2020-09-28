import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Turn, Winner } from "./types"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 32,
  },
})

type GameStatusProps = {
  winner: Winner
  draw: boolean
  turn: Turn
}

const GameStatus: React.FC<GameStatusProps> = ({
  winner,
  draw,
  turn,
}) => {
  return (
    <View style={styles.container}>
      {winner && (
        <Text style={styles.statusText}>Winner: {winner}</Text>
      )}

      {!winner && !draw && (
        <Text style={styles.statusText}>Turn: {turn}</Text>
      )}

      {draw && <Text style={styles.statusText}>Draw</Text>}
    </View>
  )
}

export default GameStatus
