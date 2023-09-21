import { SafeAreaWithScroll } from "@components/SafeAreaWithScroll";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaWithScroll>
      <View>
        <Text>HOME</Text>

        <TouchableOpacity onPress={() => navigation.navigate("RegisterFood")}>
          <Text>Send to Register Food</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaWithScroll>
  );
}
