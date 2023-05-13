import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import globalStyle from "../../styles/global.style"
import { COLORS } from "../../constants/constantsFiles"

const Register = () => {
    return (
        <SafeAreaView style={globalStyle.main}>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={COLORS.get("white")}
            />
            <View style={styles.container}>
                <Text>Register</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Register
