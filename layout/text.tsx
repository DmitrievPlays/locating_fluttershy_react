import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Text } from "react-native-paper";

interface CustomTextLabelProps {
  adjustsFontSizeToFit: boolean;
  numberOfLines: number;
  children: ReactNode;
  style: ViewStyle
}

export const TextLabel: React.FC<CustomTextLabelProps> = ({adjustsFontSizeToFit,
  numberOfLines,
  children,
  style,}) =>
  (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}
      style={[{ fontFamily: "comfortaa-bold", fontSize: 56 }, style]}>
        {children}
    </Text>
  );

  export default TextLabel;
