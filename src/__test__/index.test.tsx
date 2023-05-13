import { render, screen } from "@testing-library/react-native"
import App from "../../App"

describe("App componet", () => {
    describe("testID -> 'message'", () => {
        test("Returns 'Hello World'", () => {
            const { toJSON, getByTestId } = render(<App />)
            const textTag = getByTestId("message")
            expect(textTag.children[0]).toBe("Hello World")
        })
    })
})
