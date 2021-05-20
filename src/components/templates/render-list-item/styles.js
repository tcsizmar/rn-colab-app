import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 30,
    backgroundColor: Colors.WHITE,
    height: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 4
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    fontSize: Typography.FONT_SIZE_22
  },
  textSmall: {
    fontSize: Typography.FONT_SIZE_18
  }
})

export default Styles
