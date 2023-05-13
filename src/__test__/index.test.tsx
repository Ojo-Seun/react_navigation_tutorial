import { render } from "@testing-library/react-native"
import App from "../../App"

describe.skip("App componet", () => {
    describe("testID -> 'message'", () => {
        test("Returns 'Hello World'", () => {
            const { getByTestId } = render(<App />)
            const textTag = getByTestId("message")
            expect(textTag.children[0]).toBe("Hello World")
        })
    })
})
