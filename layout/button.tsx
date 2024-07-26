import React from "react";
import { ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../App";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    style: ViewStyle;
}

export const PressButton: React.FC<CustomButtonProps> = ({
    onPress,
    title,
    style,
}) => (
    <Button
        onPress={onPress}
        style={[styles.button, style]}
        rippleColor={"#ffffff33"}
        labelStyle={{ color: "white", fontWeight: "bold" }}
        contentStyle={{ flexDirection: "row-reverse" }}
    >
        {title}
    </Button>
);

export default PressButton;
