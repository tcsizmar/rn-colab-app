import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BLUE_DARK,
    borderRadius: 25,
    backgroundColor: Colors.BLUE_LIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_18,
    textTransform: 'uppercase'
  },
  icon: {
    marginRight: 5
  }
})

export default Styles
