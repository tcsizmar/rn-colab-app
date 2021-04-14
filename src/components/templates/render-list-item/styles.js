import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 30,
    backgroundColor: Colors.WHITE,
    height: 90,
    padding: 10,
    marginBottom: 10,
  },
  textName: {
    fontSize: Typography.FONT_SIZE_24
  },
  textSmall: {
    fontSize: Typography.FONT_SIZE_20
  }
})

export default Styles
