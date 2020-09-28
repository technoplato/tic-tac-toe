import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import Game from "./src/Game"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Game type={"local"} size={3} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bd9ccd",
  },
})
