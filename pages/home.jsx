import { View } from "react-native";
import { Card } from "react-native-paper";
import { locationService, styles } from "../App";
import { TextLabel } from "../layout/text";
import { PressButton } from "../layout/button";
import { useEffect, useState } from "react";
import eventEmitter from "../src/events";

function HomeScreen() {
  const [speed, changeSpeed] = useState(0);
  const [distance, changeDistance] = useState(0);
  const [buttonStatus, changeButtonStatus] = useState("START");

  useEffect(() => {
    eventEmitter.addListener("locationUpdateEvent", (data) => {
      changeSpeed(data.speed);
      changeDistance(data.distance / 1000);
    });
    changeButtonStatus(locationService.getServiceStatus() ? "STOP" : "START");
  }, []);

  return (
    <View style={[styles.quicksandRegular, { flex:1, margin: 8 }]}>
      <Card mode="elevated" style={{margin: 8 }}>
        <Card.Content>
          <TextLabel>{speed.toFixed(1)} km/h</TextLabel>
        </Card.Content>
      </Card>
      <Card mode="elevated" style={{ margin: 8 }}>
        <Card.Content>
          <TextLabel>{distance.toFixed(2)} km</TextLabel>
        </Card.Content>
      </Card>
      <Card mode="elevated" style={{ margin: 8, width: "25%"}}>
        <Card.Content>
          <TextLabel style={{fontSize: 20, textAlign: "center"}}>--°C</TextLabel>
        </Card.Content>
      </Card>
      <PressButton
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
        title={buttonStatus}
        onPress={async () => {
          changeButtonStatus(
            (await locationService.toggleService()) ? "STOP" : "START"
          );
        }}
      ></PressButton>
    </View>
  );
}

export default HomeScreen;
