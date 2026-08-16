import { render, screen } from "@testing-library/react"
import Contact from '../contact'
import "@testing-library/jest-dom";

test(" should load  heading in contact component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()

})
test(" should load button in contact component", () => {
    render(<Contact />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()

})
test(" should load button in contact component", () => {
    render(<Contact />)

    const button = screen.getByText("submit")

    expect(button).toBeInTheDocument()

})
test("should load input by placeholdertext in contact component", () => {
    render(<Contact />)

    const inputBox = screen.getByPlaceholderText("name")

    expect(inputBox).toBeInTheDocument()

})
test(" should load inputby getAllByRole in contact component", () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2)

})
test(" should load inputby getAllByRole in contact component", () => {
    render(<Contact />)
    //quering
    const inputBoxes = screen.getAllByRole("textbox")
    console.log(inputBoxes) // return react elemet

    expect(inputBoxes.length).toBe(2)

})
test(" should load inputby getAllByRole by not in contact component", () => {
    render(<Contact />)
    //quering
    const inputBoxes = screen.getAllByRole("textbox")
    console.log(inputBoxes) // return react elemet

    expect(inputBoxes.length).not.toBe(3)

})