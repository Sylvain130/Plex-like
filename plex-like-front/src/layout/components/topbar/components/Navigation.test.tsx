import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import {screen } from "@testing-library/dom"
import { BrowserRouter } from "react-router-dom";

test('navigation page films',function(){
    render(<BrowserRouter><Navigation/></BrowserRouter>)
    const text = screen.getByText("Films")
    expect(text).not.toBeNull();
})

