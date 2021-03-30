import React, { useRef } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Main = () => {
  const nome = useRef(null)
  const endereco = useRef(null)
  const telefone = useRef(null)
  const formikInitialValues = {
    nome: '',
    endereco: '',
    telefone: ''
  }
  const FormSchema = Yup.object().shape({
    nome: Yup.string()
      .required('O Campo Nome é Obrigatório'),
    endereco: Yup.string()
      .required('O Campo Endereço é Obrigatório'),
    telefone: Yup.string()
      .required('O Campo Telefone é Obrigatório')
      .min(10, 'DDD e nº de telefone')

  })
  return (
    <View>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={values =>
          console.log(values)
        }
        validationSchema={FormSchema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>


            <Text>Nome:</Text>
            <TextInput
              ref={nome}
              value={values.nome}
              onChangeText={handleChange('nome')} />
            {errors.nome && <Text>{errors.nome}</Text>}
            <Text>Endereço:</Text>
            <TextInput
              ref={endereco}
              value={values.endereco}
              onChangeText={handleChange('endereco')} />
            {errors.endereco && <Text>{errors.endereco}</Text>}
            <Text>Telefone:</Text>
            <TextInput
              ref={telefone}
              value={values.telefone}
              onChangeText={handleChange('telefone')} />

            {errors.telefone && <Text>{errors.telefone}</Text>}
            <Button title='Salvar' onPress={handleSubmit} />
          </View>
        )}

      </Formik>
    </View>

  )
}

export default Main
