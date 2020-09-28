import React from "react"
import { StyleSheet, View } from "react-native"
import Square from "./Square"
import { Mark, SquareValue } from "./types"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    height: 400,
  },
})

type BoardProps = {
  board: SquareValue[]
  mark: Mark
}

const Board: React.FC<BoardProps> = ({ board, mark }) => {
  return (
    <View style={styles.container}>
      {board.map((value, index) => {
        return (
          <Square
            key={index}
            value={value}
            handleClick={() => mark(index)}
            size={board.length}
          />
        )
      })}
    </View>
  )
}

export default Board
