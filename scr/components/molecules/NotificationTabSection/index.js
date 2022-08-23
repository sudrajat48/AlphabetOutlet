import { StyleSheet, Text, View, useWindowDimensions, ScrollView  } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProductDummy1, ProductDummy2, ProductDummy3, ProductDummy4, ProductDummy5 } from '../../../foto';
import { useNavigation } from '@react-navigation/native';
import ItemListProduct from '../ItemListProduct';
import { useFonts } from 'expo-font';


const renderTabBar = props => (
    
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#2196F3' }}
        style={styles.garis}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{
                fontFamily: 'Poppins-Medium',
                color: focused ? '#FFFFFF' : '#E0D2D2'
            }}>
                {route.title}
            </Text>
        )}
    />
);

const InProgress = () => {
    const navigation = useNavigation();
    
    const [loaded] = useFonts({
        'Poppins-Medium': require('../../../../assets/fonts/Poppins-Medium.ttf'),
      });
      
      if (!loaded) {
        return null;
      }

    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ScrollView>
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy1} 
                onPress={() => navigation.navigate('OrderDetail') }
                type="in-progress"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy2} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="in-progress"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy3} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="in-progress"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy4} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="in-progress"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="in-progress"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                />
            </ScrollView>
        </View>
    )
};

const PastOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ScrollView>
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="past-order"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                date="Juni 12, 14:00"
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy3} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="past-order"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                date="Juni 12, 14:00"
                status={'Cancel'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy2} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="past-order"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                date="Juni 12, 14:00"
                status={'Cancel'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy1} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="past-order"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                date="Juni 12, 14:00"
                status={'Cancel'}
                />
                <ItemListProduct 
                ratting={3} 
                image={ProductDummy4} 
                onPress={() => navigation.navigate('OrderDetail') } 
                type="past-order"
                items={3}
                price="250.000"
                name={'Tinta Toner'}
                date="Juni 12, 14:00"
                />
            </ScrollView>
        </View>
    )
};

const NotificationTabSection = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Order' },
    ]);

    const renderScene = SceneMap({
        1: InProgress,
        2: PastOrder,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{backgroundColor: '#2196F3'}}
        />
    )
}

export default NotificationTabSection

const styles = StyleSheet.create({
garis: { 
    backgroundColor: '#2196F3', 
    elevation: 0, 
    shadowOpacity: 0, 
    borderBottomColor: '#FFFFFF', 
    borderBottomWidth: 1 
},
})