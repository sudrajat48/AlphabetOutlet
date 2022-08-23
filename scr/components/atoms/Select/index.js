import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

const Select = ({label}) => {

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
            <Picker
                // selectedValue={selectedLanguage}
                // onValueChange={(itemValue, itemIndex) =>
                //     setSelectedLanguage(itemValue)
                // }
                >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
            
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF'
      },
      input: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 2,
        paddingVertical: 0
      }
})