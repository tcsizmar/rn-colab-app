import { StyleSheet } from 'react-native'
import { Colors, Typography } from '_styles'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  welcomeText: {
    textAlign: 'center',
    top: '40%',
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textTransform: 'uppercase',
    color: Colors.BLACK
  },
})

export default Styles
