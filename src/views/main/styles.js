import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewEntries: {
    flex: 9,
    padding: 20
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_24
  },
  registerBtn: {
    
  }
})

export default Styles
