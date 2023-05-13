import React from "react"
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { StackTypes } from "../../navigators/StackAuth"
import globalStyle from "../../styles/global.style"
import { COLORS } from "../../constants/constantsFiles"

type Props = NativeStackScreenProps<StackTypes, "ForgetPassword">

const ForgetPassword = ({ route, navigation }: Props) => {
    return (
        <SafeAreaView style={globalStyle.main}>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={COLORS.get("primary")}
            />
            <View style={styles.container}>
                <Text>Forget Password</Text>
                <Text>Params: {route.params.id}</Text>
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

export default ForgetPassword
