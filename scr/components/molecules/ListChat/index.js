import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { TokoDummy1, TokoDummy2, TokoDummy3, TokoDummy4, TokoDummy5, TokoDummy6, TokoDummy7 } from '../../../foto'
import ItemListProduct from '../ItemListProduct';
import { useNavigation } from '@react-navigation/native';

const ListChat = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.tabContiner}>
 <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ItemListProduct
                    image={TokoDummy1}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Mampu Tahan Berapa Lama '}
                />
                <ItemListProduct
                    image={TokoDummy2}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Khasiat nya Apa Kak'}
                />
                <ItemListProduct
                    image={TokoDummy3}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Ada Warna Hijau Kak ?'}
                />
                <ItemListProduct
                    image={TokoDummy4}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Sudah Saya Bayar'}
                />
                <ItemListProduct
                    image={TokoDummy5}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Barang Tidak Ada Cacat'}
                />
                <ItemListProduct
                    image={TokoDummy6}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Barang Saya Sudah Kirim'}
                />
                <ItemListProduct
                    image={TokoDummy7}
                    onPress={() => navigation.navigate('Chatting')}
                    type="list-chat"
                    items={3}
                    name={'Tinta Toner'}
                    date="Juni 12, 14:00"
                    status={'Apkah barang Sudah Ready ?'}
                />
            </ScrollView>
        </View>
        </View>
    )
}

export default ListChat

const styles = StyleSheet.create({
    container: { 
        paddingTop: 8, 
        paddingHorizontal: 24 
    },
    tabContiner: { 
        backgroundColor: '#2196F3', 
        elevation: 0, 
        shadowOpacity: 0, 
        borderBottomColor: '#F2F2F2', 
        borderBottomWidth: 1,
        flex: 1 
    },
})