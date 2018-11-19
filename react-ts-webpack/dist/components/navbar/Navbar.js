"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Hello_1 = require("../hello/Hello");
var Navbar = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
                React.createElement(react_router_dom_1.NavLink, { className: "navbar-brand", to: "/" }, "RCT-TS-WBP"),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("ul", { className: "navbar-nav mr-auto" },
                        React.createElement("li", { className: "nav-item active" },
                            React.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/" }, "Home ")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/users" }, "Users"))))),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: function () { return React.createElement(Hello_1.Hello, { message: "TypeScript Fan" }); } }))));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map