"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var appRoot = document.getElementById("app-root");
var AppIndex = React.createElement(Hello_1.Hello, { message: "TypeScript Fan" });
ReactDOM.render(AppIndex, appRoot);
//# sourceMappingURL=index.js.map