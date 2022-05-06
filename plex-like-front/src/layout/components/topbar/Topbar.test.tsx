import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import Topbar from "./Topbar";

jest.mock('./components/Navigation', (): unknown => {
    return (): JSX.Element => <div data-testid='mockNavigation' />
})

jest.mock('./components/Searchbar', (): unknown => {
    return (): JSX.Element => <div data-testid='mockSearchbar' />
})


describe('test Topbar', function () {
    test('display Navigation', function () {
        render(<Topbar /> );
        const testNavigation = screen.getByTestId("mockNavigation");
        expect(testNavigation).toBeInTheDocument();
    })
    
    test('display Searchbar', function () {
        render(<Topbar />);
        const testSearchbar = screen.getByTestId("mockSearchbar");
        expect(testSearchbar).toBeInTheDocument();
    })

    test('logo must have src = "./plex-logo.png" and alt = "logo"', () => {
        render(<Topbar />);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', './plex-logo.png');
        expect(logo).toHaveAttribute('alt', 'logo');
    });

})