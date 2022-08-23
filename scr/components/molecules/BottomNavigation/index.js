import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcHomeOff, IcHomeOn, IcNotificationOff, IcNotificationOn, IcProfileOff, IcProfileOn } from '../../../foto';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Home':
        return focus ? <IcHomeOn /> : <IcHomeOff />;
        case 'Notification':
        return focus ? <IcNotificationOn /> : <IcNotificationOff />;
        case 'Profile':
        return focus ? <IcProfileOn /> : <IcProfileOff />
        default:
    }
}
const BottomNavigation = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.bottomContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}>
                        <Icon label={label} focus={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigation

const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 50,
        marginRight: -99,
        justifyContent: 'space-between'
    },
})