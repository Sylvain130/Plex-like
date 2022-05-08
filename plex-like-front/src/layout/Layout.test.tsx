import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import Layout from "./Layout";

jest.mock("./components/topbar/Topbar", (): unknown => {
    return (): JSX.Element => <div data-testid='mockTopbar' />
})

describe('test Layout', function () {
    test('display Topbar', function () {
        render(<Layout> <div data-testid='LayoutChildren' /> </Layout>);
        const testTopbar = screen.getByTestId("mockTopbar");
        expect(testTopbar).toBeInTheDocument();
    })
    test('display Layout Children', function () {
        render(<Layout> <div data-testid='LayoutChildren' /> </Layout>);
        const testLayoutChildren = screen.getByTestId("LayoutChildren");
        expect(testLayoutChildren).toBeInTheDocument();
    })
})