import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './pages/home';
import RoutesScreen from './pages/routes';
import AboutScreen from './pages/about';
import {
    MD3LightTheme as LightTheme,
    MD3DarkTheme as DarkTheme,
    PaperProvider,
    Appbar,
} from 'react-native-paper';



const light_theme = {
    ...LightTheme,
    "roundness": 10,
    "colors": {
        "primary": "rgb(0, 104, 116)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(151, 240, 255)",
        "onPrimaryContainer": "rgb(0, 31, 36)",
        "secondary": "rgb(0, 99, 154)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgba(255, 255, 255, 0.3)",
        "onSecondaryContainer": "rgb(0, 29, 50)",
        "tertiary": "rgb(82, 94, 125)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(218, 226, 255)",
        "onTertiaryContainer": "rgb(14, 27, 55)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(250, 253, 253)",
        "onBackground": "rgb(25, 28, 29)",
        "surface": "rgb(250, 253, 253)",
        "onSurface": "rgb(25, 28, 29)",
        "surfaceVariant": "rgb(219, 228, 230)",
        "onSurfaceVariant": "rgb(63, 72, 74)",
        "outline": "rgb(111, 121, 122)",
        "outlineVariant": "rgb(191, 200, 202)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(46, 49, 50)",
        "inverseOnSurface": "rgb(239, 241, 241)",
        "inversePrimary": "rgb(79, 216, 235)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(238, 246, 246)",
            "level2": "rgb(230, 241, 242)",
            "level3": "rgb(223, 237, 238)",
            "level4": "rgb(220, 235, 237)",
            "level5": "rgb(215, 232, 234)"
        },
        "surfaceDisabled": "rgba(25, 28, 29, 0.12)",
        "onSurfaceDisabled": "rgba(25, 28, 29, 0.38)",
        "backdrop": "rgba(41, 50, 52, 0.4)"
    }
};

const dark_theme = {
    ...DarkTheme,
    "roundness": 10,
    "colors": {
        "primary": "rgb(79, 216, 235)",
        "onPrimary": "rgb(0, 54, 61)",
        "primaryContainer": "rgb(0, 79, 88)",
        "onPrimaryContainer": "rgb(151, 240, 255)",
        "secondary": "rgb(150, 204, 255)",
        "onSecondary": "rgb(0, 51, 83)",
        "secondaryContainer": "rgb(0, 74, 117)",
        "onSecondaryContainer": "rgb(206, 229, 255)",
        "tertiary": "rgb(186, 198, 234)",
        "onTertiary": "rgb(36, 48, 77)",
        "tertiaryContainer": "rgb(59, 70, 100)",
        "onTertiaryContainer": "rgb(218, 226, 255)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(25, 28, 29)",
        "onBackground": "rgb(225, 227, 227)",
        "surface": "rgb(25, 28, 29)",
        "onSurface": "rgb(225, 227, 227)",
        "surfaceVariant": "rgb(63, 72, 74)",
        "onSurfaceVariant": "rgb(191, 200, 202)",
        "outline": "rgb(137, 146, 148)",
        "outlineVariant": "rgb(63, 72, 74)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(225, 227, 227)",
        "inverseOnSurface": "rgb(46, 49, 50)",
        "inversePrimary": "rgb(0, 104, 116)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(28, 37, 39)",
            "level2": "rgb(29, 43, 46)",
            "level3": "rgb(31, 49, 52)",
            "level4": "rgb(32, 51, 54)",
            "level5": "rgb(33, 54, 58)"
        },
        "surfaceDisabled": "rgba(225, 227, 227, 0.12)",
        "onSurfaceDisabled": "rgba(225, 227, 227, 0.38)",
        "backdrop": "rgba(41, 50, 52, 0.4)"
    }
};


const Navigator = createMaterialBottomTabNavigator();


function App() {
    return (
        <PaperProvider theme={light_theme}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Appbar.Header mode="center-aligned">
                        <Appbar.Content title="Locating Fluttershy"></Appbar.Content>
                    </Appbar.Header>
                    <Navigator.Navigator inactiveColor='#ffffffbb' activeColor='#ffffffbb' barStyle={{
                        position: "absolute",
                        right: 6,
                        left: 6,
                        bottom: 6,
                        borderWidth: 2,
                        borderBottomWidth: 4,
                        borderRadius: 20,
                        backgroundColor: "#49A4A4",
                        elevation: 10,
                        borderColor: "#00000000",
                        overflow: 'hidden',
                    }}>
                        <Navigator.Screen name="Home" component={HomeScreen} options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons
                                    name="bike"
                                    size={24}
                                />
                            )
                        }} />
                        <Navigator.Screen name="Routes" component={RoutesScreen} options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons
                                    name="chart-line-variant"
                                    size={24}
                                />
                            )
                        }} />
                        < Navigator.Screen name="About" component={AboutScreen} options={{
                            tabBarIcon: () => (
                                <MaterialCommunityIcons
                                    name="information-outline"
                                    size={24}
                                />
                            )
                        }} />
                    </Navigator.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    )
}

export default App;