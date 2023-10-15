import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/////////INTEGRATION TESTING 
global.fetch = jest.fn(() => { //jsom,jest doesnot understand fetch(written in body), so we have to write mock function for fetch (we will have to fake fetch)
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should Search Res List for burger text input ", async () => {
    await act(async () =>   //whever we are using fetch(async operation), doing state updates then we need to wrap our render method inside act function
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } }); //typing in input box

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    //screen should load 4 res cards
    expect(cardsAfterSearch.length).toBe(4);
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(20);
  
    const topRatedBtn = screen.getByRole("button", {
        name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);
});