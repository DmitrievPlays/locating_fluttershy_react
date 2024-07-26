import { View } from "react-native";
import { Card } from "react-native-paper";
import { PressButton } from "../layout/button";
import { dbService } from "../App";
import { TextLabel } from "../layout/text";

function AboutScreen() {
  return (
    <View>
      <Card mode="elevated" style={{ margin: 8 }}>
        <Card.Content>
          <TextLabel adjustsFontSizeToFit={true} numberOfLines={1} style={{ color: "black", textAlign: "center"}}>
            {require("../package.json").name}
          </TextLabel>
          <TextLabel adjustsFontSizeToFit={true} numberOfLines={1} style={{fontSize: 28, color: "black", textAlign: "center" }}>
            {"Version " + require("../package.json").version}
          </TextLabel>
          <PressButton
            title="🗑️ DELETE DATABASE"
            onPress={async () => {
              dbService.db.execute("DELETE FROM ROUTES")
            }}
          ></PressButton>
        </Card.Content>
      </Card>
    </View>
  );
}

export default AboutScreen;
