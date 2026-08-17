import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";

it("should load the header component with login button", () => {
    render(
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Provider store={appStore}>
                <Header />

            </Provider>
        </BrowserRouter>

    )
    const loginButton = screen.getByRole('button', { name: 'login' })
    expect(loginButton).toBeInTheDocument()

})
it("should load the header component with on click on login button to  logout", () => {
    render(
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Provider store={appStore}>
                <Header />

            </Provider>
        </BrowserRouter>

    )
    const loginButton = screen.getByRole('button', { name: 'login' })
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole('button', { name: 'Logout' })
    expect(logoutButton).toBeInTheDocument()

})

it("should load the header component with Cart-(0items) button", () => {
    render(
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Provider store={appStore}>
                <Header />

            </Provider>
        </BrowserRouter>

    )
    const cart = screen.getByText('Cart-(0items)')
    expect(cart).toBeInTheDocument()

})

it("should load the header component with Cart with rgx button", () => {
    render(
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Provider store={appStore}>
                <Header />

            </Provider>
        </BrowserRouter>

    )
    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()

})