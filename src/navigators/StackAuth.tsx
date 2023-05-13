import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { COLORS } from "../constants/constantsFiles"
import { Index, Register, ForgetPassword } from "../screens/AllAuthScreens"
import Drawer from "./Drawer"

export type StackTypes = {
    Index: undefined
    Register: undefined
    ForgetPassword: { id: string }
    Home: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<StackTypes>()

function Stack() {
    return (
        <Navigator initialRouteName="Index">
            <Screen
                name="Index"
                component={Index}
                options={{ headerShown: false }}
            />
            <Screen
                name="Register"
                component={Register}
                options={{
                    headerTintColor: COLORS.get("primary"),
                    headerStyle: {
                        backgroundColor: "white",
                    },
                }}
            />
            <Screen
                name="ForgetPassword"
                component={ForgetPassword}
                options={({ route }) => ({
                    headerStyle: {
                        backgroundColor: COLORS.get("primary"),
                    },
                    title: route.params.id,
                    headerTintColor: COLORS.get("white"),
                })}
            />
            <Screen name="Home" component={Drawer} />
        </Navigator>
    )
}

export default Stack
