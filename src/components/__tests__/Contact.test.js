import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//////////UNIT TESTING

//We will try to render contact comp and see wether is loads or not

//describe - group multiple test cases into a single block called describe. We can multiple describe blocks and we can have describe block inside another describe block
//we can write test or it
describe("Contact Us Page Test Case", () => {

    // beforeAll(() => { //it will run the fun before all the test case. Uses -> cleanup, log, test
    //   console.log("Before All");
    // });

    // beforeEach(() => { //it will run the fun before each test case. Usage -> cleanup
    //   console.log("Before Each");
    // });

    // afterAll(() => { //it will run after it has completed all the test 
    //   console.log("After All");
    // });

    // afterEach(() => { //it will run after each test
    //   console.log("After Each");
    // });

    //Finding heading is there on the page or not 
    it("Should load contact us component", () => {
        render(<Contact />) //render the comp onto jsdom
        const heading = screen.getByRole("heading"); //screen is an object. whatever we will render we will get the access through screen
        expect(heading).toBeInTheDocument(); //whether heading is present in the document or not
    })

    //Finding Button is there on the page or not 
    it("Should load button inside Contact component", () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit"); 

        // Assertion
        expect(button).toBeInTheDocument();
    });

    //Finding by placeholder="name"
    it("Should load input name inside Contact component", () => {
        render(<Contact />); //1.render
        const inputName = screen.getByPlaceholderText("name");//2. Query
        expect(inputName).toBeInTheDocument();//3. Assert
    });

    it("Should load 2 input boxes on the Contact component", () => {
        render(<Contact />);
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");//return jsx/react elements/object/react fiber nodes, return multiple result, getBy... - return one result(eg - getByPlaceholderText)
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(3);
    });
});
