import AsyncStorage from '@react-native-community/async-storage'

export const storeData = async (keyName, data) => {
  try {
    await AsyncStorage.setItem(keyName, data)
  } catch (error) {
    throw new Error(error)
  }
}

export const retrieveData = async keyName => {
  try {
    const value = await AsyncStorage.getItem(keyName)
    if (value !== null) {
      return value
    }
    return ''
  } catch (error) {
    throw new Error(error)
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    throw new Error(error)
  }
}
