import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
      <Link href={"/explore"}>go to next screen</Link>
    </View>
  );
};

export default HomeScreen;
