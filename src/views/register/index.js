import React, { useContext, useRef } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContext } from '_services'
import { StorageHelper } from '_utils'
import { CustomButton } from '_molecules'
import { STORAGE_LIST } from '../../../src/config'
import Styles from './styles'

const InputWithLabel = ({ touched, handleBlur, value, handleChange, error, labels, keyboardType }) => (
  <View style={Styles.inputView}>
    <Text style={Styles.inputLabel}>{labels}:</Text>
    <View style={Styles.inputContainer}>
      <TextInput
        value={value}
        style={Styles.textInput}
        keyboardType={keyboardType}
        onBlur={handleBlur}
        onChangeText={handleChange}
      />
    </View>
    {error && touched && <Text style={Styles.textError}>{error}</Text>}
  </View>
)

const Register = ({ navigation }) => {
  const context = useContext(AppContext)

  const formikInitialValues = {
    nome: '',
    endereco: '',
    telefone: '',
  }

  const FormSchema = Yup.object().shape({
    nome: Yup.string().required('O Campo Nome é Obrigatório'),
    endereco: Yup.string().required('O Campo Endereço é Obrigatório'),
    telefone: Yup.string().required('O Campo Telefone é Obrigatório').min(10, 'DDD e nº de telefone'),
  })

  const _handleSubmit = async (values) => {
    console.log(values)
    let cntAgendaLocal = context.agenda || []
    const item = {
      id: Math.floor(100000 + Math.random() * 900000),
      nome: values.nome,
      endereco: values.endereco,
      telefone: values.telefone,
    }
    cntAgendaLocal.push(item)
    context.setAgenda(cntAgendaLocal)
    await StorageHelper.storeData(STORAGE_LIST, JSON.stringify({ agendaStorage: cntAgendaLocal }))
    navigation.navigate('Main')
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.inputLabel}>Adicionar novo contato</Text>
      <Formik initialValues={formikInitialValues} onSubmit={_handleSubmit} validationSchema={FormSchema}>
        {({ values, handleChange, handleSubmit, touched, handleBlur, errors }) => (
          <View>
            <InputWithLabel
              labels='Nome'
              error={errors.nome}
              value={values.nome}
              touched={touched.nome}
              handleBlur={handleBlur('nome')}
              handleChange={handleChange('nome')}
            />
            <InputWithLabel
              labels='Endereço'
              error={errors.endereco}
              value={values.endereco}
              touched={touched.endereco}
              handleBlur={handleBlur('endereco')}
              handleChange={handleChange('endereco')}
            />
            <InputWithLabel
              labels='Telefone'
              error={errors.telefone}
              value={values.telefone}
              keyboardType='phone-pad'
              touched={touched.telefone}
              handleBlur={handleBlur('telefone')}
              handleChange={handleChange('telefone')}
            />
            <View style={Styles.buttonContainer}>
              <CustomButton title='Salvar' iconName='save' onPressAction={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Register
