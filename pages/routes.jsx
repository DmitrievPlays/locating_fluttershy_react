import { ScrollView, View } from "react-native";
import { Card, List, Text } from "react-native-paper";
import useIsFocused from "@react-navigation/core/src/useIsFocused"
import { useEffect } from "react";
import { dbService } from "../App";

function RoutesScreen() {
  const isFocused = useIsFocused(); //
  useEffect(() => {}, [isFocused]); // Screen update on reopen

  let db = dbService.db;
  let { rows } = db.execute("SELECT * FROM ROUTES");
  return (
    <View>
      <Card mode="elevated" style={{ margin: 8 }}>
        <Card.Content>
          <Text
            style={{
              fontFamily: "comfortaa-bold",
              fontSize: 24,
              color: "black",
            }}
          >
            Routes travelled
          </Text>
          <ScrollView>
            {
              rows._array.map((item) => (
                <List.Item key={item["id"]} title={item["id"]}></List.Item>
              ))}
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
}

export default RoutesScreen;
