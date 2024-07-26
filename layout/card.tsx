import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Card, Props } from "react-native-paper";

interface CustomCardProps {
    children: ReactNode;
    style: ViewStyle;
    content: React.JSX.Element;
    mode: Props;
}

export const CardView: React.FC<CustomCardProps> = ({
    mode,
    content,
    children,
    style,
}) => (
    <Card
        style={[
            {
                padding: 16,
                margin: 8,
            },
            style,
        ]}
    >
        {children}
    </Card>
);

export default CardView;
