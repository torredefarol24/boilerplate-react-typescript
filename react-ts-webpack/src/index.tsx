import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello'

var appRoot = document.getElementById("app-root")
var AppIndex = <Hello message="TypeScript Fan"></Hello>


ReactDOM.render(AppIndex, appRoot);