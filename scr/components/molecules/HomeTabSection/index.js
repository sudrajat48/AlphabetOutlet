import { StyleSheet, Text, View, useWindowDimensions, ScrollView  } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProductDummy1, ProductDummy2, ProductDummy3, ProductDummy4, ProductDummy5 } from '../../../foto';
import { useNavigation } from '@react-navigation/native';
import ItemListProduct  from '../ItemListProduct';

const renderTabBar = props => (
    
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#2196F3' }}
        style={styles.garis}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{
                fontFamily: 'Poppins-Medium',
                color: focused ? '#2196F3' : '#8D92A3'
            }}>
                {route.title}
            </Text>
        )}
    />
);

const NewTeste = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy1} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy2} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy3} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy4} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
            </ScrollView>
        </View>
    )
};

const Popular = () => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy3} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy2} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy1} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy4} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
            </ScrollView>
        </View>
    )
};

const Recommended =()=> {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy3} 
                onPress={() =>navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('ProductDetial') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy1} 
                onPress={() => navigation.navigate('ProdutDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy2} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
                <ItemListProduct
                type={'product'}
                name={'Tinta Toner'}
                price={'250.000'} 
                ratting={3} 
                image={ProductDummy5} 
                onPress={() => navigation.navigate('ProductDetail') } 
                />
            </ScrollView>
        </View>
    )
}

const HomeTabSection = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Test' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTeste,
        2: Popular,
        3: Recommended,
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

export default HomeTabSection

const styles = StyleSheet.create({
garis: { 
    backgroundColor: '#FFFFFF', 
    elevation: 0, 
    shadowOpacity: 0, 
    borderBottomColor: '#F2F2F2', 
    borderBottomWidth: 1 
},
})