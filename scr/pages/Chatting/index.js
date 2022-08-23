import { StyleSheet, Text, View } from 'react-native'
import React, {useCallback, useState, useEffect} from 'react'
import {ChatProfile} from '../../components/molecules'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import { IcBackSend, IcSendOn } from '../../foto'

const Chatting = ({navigation}) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

const renderSend = (props) => {
  return (
    <Send {...props}>
      <View style={styles.icon}>
      <IcSendOn />
      </View>
    </Send>
  )
}
  
  const renderBubble = (props) => {
    return (
    <Bubble 
    {...props}         
    wrapperStyle={{
      right: {
        backgroundColor: '#27C6E9',
      },
    }}
    textStyle={{
      right: {
        color: '#FFFFFF',
      },
      left: {
        color: '#2196F3'
      }
    }} />
    )
  }

  const scrollToBottomComponent = () => {
    return(
     <IcBackSend />
    );
  }

  return (
    <View style={styles.container}>
      <ChatProfile onBack={() => navigation.goBack()} />
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
      </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  content: {
    flex: 1
  },
  chatDate: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#D9D9D9',
    marginVertical: 20,
    textAlign: 'center'
  },
  icon: {
    marginBottom: 10
  },
})