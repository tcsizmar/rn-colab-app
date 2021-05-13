import React, { useContext, useRef } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContext } from '_services'
import { StorageHelper } from '_utils'
import { STORAGE_LIST } from '../../../src/config'
import Styles from './styles'

const InputWithLabel = ({ref, value, handleChange, error, labels, keyboardType}) => (
  <View style={Styles.inputView}>
    <Text style={Styles.inputLabel}>{labels}:</Text>
    <View style={Styles.inputContainer}>
      <TextInput ref={ref} value={value} style={Styles.textInput} keyboardType={keyboardType} onChangeText={handleChange} />
    </View>
    {error && <Text style={Styles.textError}>{error}</Text>}
  </View>
)

const Register = ({ navigation }) => {
  const context = useContext(AppContext)

  const nome = useRef(null)
  const endereco = useRef(null)
  const telefone = useRef(null)

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
      <Formik initialValues={formikInitialValues} onSubmit={_handleSubmit} validationSchema={FormSchema}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <InputWithLabel
              ref={nome}
              labels='Nome'
              error={errors.nome}
              value={values.nome}
              handleChange={handleChange('nome')}
            />
            <InputWithLabel
              ref={endereco}
              labels='Endereço'
              error={errors.endereco}
              value={values.endereco}
              handleChange={handleChange('endereco')}
            />
            <InputWithLabel
              ref={telefone}
              labels='Telefone'
              error={errors.telefone}
              value={values.telefone}
              keyboardType='phone-pad'
              handleChange={handleChange('telefone')}
            />
            <Button title='Salvar' onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Register
