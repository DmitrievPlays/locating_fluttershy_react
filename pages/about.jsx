import { View } from "react-native";
import { PressButton } from "../layout/button";
import { dbService } from "../App";
import { TextLabel } from "../layout/text";
import CardView from "../layout/card";

function AboutScreen() {
    return (
        <View>
            <CardView>
                <TextLabel
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={{ color: "black", textAlign: "center" }}
                >
                    {require("../package.json").name}
                </TextLabel>
                <TextLabel
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}
                    style={{
                        fontSize: 28,
                        color: "black",
                        textAlign: "center",
                    }}
                >
                    {"Version " + require("../package.json").version}
                </TextLabel>
                <PressButton
                    title="🗑️ DELETE DATABASE"
                    onPress={async () => {
                        dbService.db.execute("DELETE FROM ROUTES");
                    }}
                ></PressButton>
            </CardView>
        </View>
    );
}

export default AboutScreen;
