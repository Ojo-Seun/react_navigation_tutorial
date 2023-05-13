import { StyleSheet, StatusBar, Platform } from "react-native"
import { COLORS } from "../constants/constantsFiles"

export default StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.get("white"),
    },
})
