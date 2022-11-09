import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CompositeScreenProps, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//------------types----------------start
//Stack 所有的Screen名称
export type RootStackParamList = {
    TabNav: undefined;
    Details: undefined;
};

//我的理解就是上面的RootStackParamList的一个Copy
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

//Tab中所有的Screen 的名称
export type RootTabParamList = {
    Home: undefined;
    Settings: undefined;
};

//合并Stack 和 Tab中的所有Screen
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>>;
//------------types----------------end
//------------screens--------------start
function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <Text>我是首页20211123!</Text>
            <Button
                title="占我去设置"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button
                title="点我去详情"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({navigation}: RootStackScreenProps<'Details'>) {
    return (
        <View style={styles.container}>
            <Text>详情页面</Text>
            <Button title="详情页面套娃" onPress={() => navigation.push('Details')}/>
        </View>
    );
}

function SettingsScreen({navigation}: RootTabScreenProps<'Settings'>) {
    return (
        <View style={styles.container}>
            <Text>设置页面</Text>
            <Button title="点我去首页" onPress={() => navigation.navigate('Home')}/>
            <Button
                title="点我去详情"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

//tabs
const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{title: '首页'}}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{title: '设置'}}
            />
        </Tab.Navigator>
    );
}

//------------screens--------------end
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNav">
                <Stack.Screen
                    name="TabNav"
                    component={TabNav}
                    options={{title: '首页', headerShown: false}}
                />
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default App;

