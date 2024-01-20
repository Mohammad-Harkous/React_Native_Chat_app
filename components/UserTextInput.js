import { View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import React, { useLayoutEffect, useState } from 'react'

const UserTextInput = ({placeholder, isPass, setStateValue}) => {
  const [value, setValue] = useState('')
  const [showPass, setShowPass] = useState(true)
  const [icon, setIcon] = useState(null)

  const handleTextChange = (text) => {
    // update the local value
    setValue(text) 
    // send the value to the parent component
    setStateValue(value)
  }

  useLayoutEffect(() => {
    switch(placeholder) {
      case 'Full Name':
        return setIcon('person')
      case 'Email':
        return setIcon('email')
      case 'Password':
        return setIcon('lock')
      
    }
  }, [])

  return (
    <View className={`border rounded-2xl px-4 py-4 flex-row items-center justify-between space-x-4 my-2 border-gray-200` }>
      <MaterialIcons name={icon} size={24} color={"#6c6d83"} />
      <TextInput 
      className='flex-1 text-base text-primaryText font-semibold -mt-1' 
      placeholder={placeholder}
      value={value}
      onChange={handleTextChange}
      secureTextEntry={isPass && showPass}
      autoCapitalize='none'
     />

     {
      isPass && (
      <TouchableOpacity onPress={() => setShowPass(!showPass)}>
        <Entypo
          name={`${showPass ? 'eye' : 'eye-with-line'}`}
          size={24}
          color={"#6c6d83"}
        />
       </TouchableOpacity>
      )
     }
    </View>
  )
}

export default UserTextInput