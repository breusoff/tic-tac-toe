import React from "react";
import {Navigate, Route, HashRouter as Router, Routes} from "react-router-dom";
import routes from "src/routes";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {Object.entries(routes).map(
                    ([key, route]) =>
                        route.page && (
                            <Route
                                path={route.url(":id")}
                                key={key}
                                element={route.page}
                            />
                        ),
                )}
                <Route
                    path="*"
                    element={<Navigate to={routes.main.url()} replace />}
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
