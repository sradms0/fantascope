import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Alert, TouchableOpacity, FlatList, TextInput } from 'react-native';

export default function Wallet({ context }) {
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [creditCardZipCode, setCreditCardZipCode] = useState('');
    const [creditCardCVV, setCreditCardCVV] = useState('');

    const onCreditCardNumberChange = text => setCreditCardNumber(text);
    const onCreditCardZipCodeChange = text => setCreditCardZipCode(text);
    const onCreditCardCVVChange = text => setCreditCardCVV(text);

    const change = async() =>{
        let status;
        //used to be make new
    try {
        //change password
      //const res = await context.actions.register(user);
      status = res.message;
    } catch(err) {
      status = err.message;
      
    }
    setSubmissionMessage(status);
    setModalOn(true);
    }

    return(
        <View style={styles.container}>
            <Text>Change Payment Information</Text>
            <Text style={styles.text}>Credit-Card Number</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={text => onCreditCardNumberChange(text)}
            value={creditCardNumber}
            />
            <Text style={styles.text}>Zip Code</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={text => onCreditCardZipCodeChange(text)}
            value={creditCardZipCode}
            />
            <Text style={styles.text}>CVV</Text>
            <TextInput
            style={styles.textInput}
            onChangeText={text => onCreditCardCVVChange(text)}
            value={creditCardCVV}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={change}>
                <Text>Submit Changes</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOn}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
                >
                <View style={styles.modalCenteredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{submissionMessage}
                    </Text>

                    <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => setModalOn(false)}
                    >
                    <Text style={styles.modalTextStyle}>Return</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      fontSize: 24, 
      padding: 30, 
      borderWidth: 1,
      borderColor: "#DDDDDD",
     backgroundColor: '#BB3333',
     alignItems: 'center',
     justifyContent: 'center',
  },
  
    item: {
      backgroundColor:'#a6d1ae',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  
    title: {
      fontSize: 32,
    },
    text: {
        textTransform: 'capitalize',
      },
      textInput: {
        width: 150,
        height: 40,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderRadius:20
      },
      button: {
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#a6d1ae',
        padding: 10
      },
      modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      modalTextStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
  });