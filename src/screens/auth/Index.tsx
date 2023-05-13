import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { StackTypes } from "../../navigators/StackAuth"
import globalStyle from "../../styles/global.style"
import { COLORS } from "../../constants/constantsFiles"
import LOGO from "../../../assets/LOGO.svg"

type Props = NativeStackScreenProps<StackTypes, "Index">

const Index = ({ navigation }: Props) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={globalStyle.main}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={COLORS.get("white")}
                />
                <View style={styles.form}>
                    <View style={styles.logoWrapper}>
                        <LOGO width={55} height={55} />
                        <Text style={styles.brandName}>Oloris</Text>
                    </View>
                    <Text style={{ color: COLORS.get("black") }}>
                        Login to continue
                    </Text>
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Password" style={styles.input} />
                    <TouchableOpacity
                        style={styles.submitBtn}
                        onPress={() => navigation.navigate("Home")}>
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                padding: 5,
                            }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <Pressable
                        onPress={() =>
                            navigation.navigate("ForgetPassword", {
                                id: "X0001",
                            })
                        }>
                        <Text style={{ color: COLORS.get("primary") }}>
                            Forget Password?
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={{ marginTop: "30%" }}>
                            Don&#39t have account?{" "}
                            <Text
                                style={{
                                    color: COLORS.get("primary"),
                                }}>
                                Sign Up
                            </Text>
                        </Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 0.8,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "80%",
        maxWidth: 400,
        gap: 20,
    },
    input: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: COLORS.get("grayLight"),
        padding: 5,
        width: "100%",
        borderRadius: 10,
    },
    submitBtn: {
        width: "100%",
        backgroundColor: COLORS.get("primary"),
        padding: 5,
        borderRadius: 20,
    },

    brandName: {
        color: COLORS.get("primary"),
        fontSize: 42,
    },

    logoWrapper: {
        flexDirection: "row",
    },
})

export default Index
