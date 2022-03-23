import React from 'react';
import { Routes, BrowserRouter, Route, RouteProps } from 'react-router-dom';



export type RouteInterface = RouteProps & {
    key: string;
    page: () => JSX.Element;
    layout?: (props: { children: React.ReactNode }) => JSX.Element;
};

interface RouterInterface {
    routes: RouteInterface[];
}

const Router = ({ routes }: RouterInterface): JSX.Element => (
    <BrowserRouter>
        <Routes>
            {routes.map(({ key, page: Page, layout: Layout, ...routeArg }: RouteInterface): JSX.Element => {
                return (
                    <Route
                        key={key}
                        {...routeArg}
                        element={
                            <>{
                                Layout ?
                                    <Layout>
                                        <Page />
                                    </Layout>
                                    : <Page />
                            }</>
                        }
                    />
                );
            })}
        </Routes>
    </BrowserRouter>
)

export default Router;