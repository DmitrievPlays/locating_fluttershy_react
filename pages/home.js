import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";




function HomeScreen() {
    return (
        <View style={{ padding: 8 }}>
            <Card mode="elevated" style={{ marginVertical: 8 }} ><Card.Content><Text style={{ fontSize: 56, color: "black", fontWeight: "bold" }}>000</Text></Card.Content></Card>
            <Card mode="elevated" style={{ marginVertical: 8 }} ><Card.Content><Text style={{ fontSize: 56, color: "black", fontWeight: "bold" }}>000</Text></Card.Content></Card>
            <Button mode="contained" rippleColor="#66aaaaaa" onPress={() => { }}>START</Button>
        </View>
    );
}

export default HomeScreen;