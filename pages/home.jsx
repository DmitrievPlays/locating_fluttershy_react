import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { locationService, styles } from "../App";
import { TextLabel } from "../layout/text";
import { PressButton } from "../layout/button";
import { useEffect, useState } from "react";
import eventEmitter from "../src/events";
import CardView from "../layout/card";

function HomeScreen() {
    const [speed, changeSpeed] = useState(0);
    const [distance, changeDistance] = useState(0);
    const [buttonStatus, changeButtonStatus] = useState("START");

    useEffect(() => {
        eventEmitter.addListener("locationUpdateEvent", (data) => {
            changeSpeed(data.speed);
            changeDistance(data.distance / 1000);
        });
        changeButtonStatus(
            locationService.getServiceStatus() ? "STOP" : "START"
        );
    }, []);

    return (
        <View
            style={[
                styles.quicksandRegular,
                { height: "100%", marginHorizontal: 8 },
            ]}
        >
            <CardView>
                <View
                    style={{
                        height: "auto",
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{ flex: 1, fontSize: 20, textAlign: "center" }}
                    >
                        --°C
                    </Text>
                    <Text
                        style={{ flex: 1, fontSize: 20, textAlign: "center" }}
                    >
                        --°C
                    </Text>
                </View>
            </CardView>
            <CardView>
                <TextLabel>{speed.toFixed(1)} km/h</TextLabel>
            </CardView>
            <Card mode="contained"></Card>
            <CardView>
                <TextLabel>{distance.toFixed(2)} km</TextLabel>
            </CardView>
            <PressButton
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                }}
                title={buttonStatus}
                onPress={async () => {
                    changeButtonStatus(
                        (await locationService.toggleService())
                            ? "STOP"
                            : "START"
                    );
                }}
            ></PressButton>
        </View>
    );
}

export default HomeScreen;
