import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { EmptyNotification, Header, NotificationTabSection } from '../../components'

const Notification = () => {
  const [isEmpty] = useState(false)
  return (
    <View style={styles.page}>
      {isEmpty ? (<EmptyNotification />) : (
        <View style={styles.content}>
          <Header title={'Your Notification'} subTitle="Wait For The Best Product" />
          <View style={styles.tabContainer}>
            <NotificationTabSection />
          </View>
        </View>
      )}

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  content: {
    flex: 1
  },
  tabContainer: {
    flex: 1,
    marginTop: 24
  }
})