import { NavigationContainer } from "@react-navigation/native"
import Stack from "./src/navigators/StackAuth"

export default function App() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    )
}
