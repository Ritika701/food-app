import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//////////UNIT TESTING

it("Should render Header Component with a login button", () => {
    //jest doesnot understand redux so we need to provide store to Header
    //jest doesnot link comp so we will provide a router to this header(link doesnot come from react, it come from react-router-dom)
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", { name: "Login" }); //if there are multiple button but we want button which has name as login

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart - (0 items)");
  
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
    //check card item is there or not irrespective of 0 or 1 or 2 etc items
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/); //using regex 
  
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    fireEvent.click(loginButton); //simulate click event
  
    const logoutButton = screen.getByRole("button", { name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
});