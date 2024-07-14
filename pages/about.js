import { View } from "react-native";
import { Card, Text } from "react-native-paper";


function AboutScreen() {
    return (
        <View>
            <Card mode="elevated" style={{ marginVertical: 8 }}>
                <Card.Content>
                    <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>{require('../package.json').name}</Text>
                    <Text style={{ fontSize: 32, color: "black", fontWeight: "bold", textAlign: "center" }}>{"Version " + require('../package.json').version}</Text>
                </Card.Content>
            </Card>
        </View>
    );
}

export default AboutScreen;