import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
    padding: 20,
  },
  inputView: {
    marginBottom: 20,
  },
  inputContainer: {
    height: 50,
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    paddingHorizontal: 5
  },
  inputLabel: {
    marginBottom: 5,
    marginLeft: 15,
    color: Colors.GRAY_DIM,
    fontSize: Typography.FONT_SIZE_16,
  },
  inputText: {
  },
  textError: {
    marginTop: 5,
    marginLeft: 15,
    color: Colors.RED,
    fontSize: Typography.FONT_SIZE_14,
  },
})

export default Styles
