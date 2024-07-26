import { FlatList, View } from "react-native";
import useIsFocused from "@react-navigation/core/src/useIsFocused";
import { useEffect } from "react";
import { dbService, styles } from "../App";
import CardView from "../layout/card";
import TextLabel from "../layout/text";

function RoutesScreen() {
    const isFocused = useIsFocused(); //
    useEffect(() => {}, [isFocused]); // Screen update on reopen

    let db = dbService.db;
    let { rows } = db.execute("SELECT * FROM ROUTES");
    return (
        <View>
            <CardView>
                <FlatList
                    data={rows._array}
                    keyExtractor={(item) => item["id"].toString()}
                    renderItem={({ item }) => (
                        <CardView>
                            <TextLabel style={styles.textSmall}>
                                DISTANCE: {item["distance"]}
                            </TextLabel>
                            <TextLabel style={styles.textSmall}>
                                AVERAGE SPEED: {item["speed_avg"]}
                            </TextLabel>
                            <TextLabel style={styles.textSmall}>
                                STARTED AT:{" "}
                                {new Date(item["date_start"]).toISOString()}
                            </TextLabel>
                            <TextLabel style={styles.textSmall}>
                                FINISHED AT:{" "}
                                {new Date(item["date_finish"]).toISOString()}
                            </TextLabel>
                        </CardView>
                    )}
                ></FlatList>
            </CardView>
        </View>
    );
}

export default RoutesScreen;
