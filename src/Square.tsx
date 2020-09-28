import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { SquareValue } from "./types"

const styles = StyleSheet.create({
  square: {
    borderWidth: 2,
    backgroundColor: "#333",
    borderColor: "#bd9ccd",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    padding: 12,
    color: "#a8b8d4",
  },
})

type SquareProps = {
  value: SquareValue
  handleClick: () => void
  size: number
}

const Square: React.FC<SquareProps> = ({
  value,
  size,
  handleClick,
}) => {
  const boxSize = `${100 / Math.sqrt(size)}%`
  const squareStyles = [
    styles.square,
    { width: boxSize, height: boxSize },
  ]
  return (
    <TouchableOpacity onPress={handleClick} style={squareStyles}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Square
