import { Shtjs, out, sum, sub, mul, div, mod  } from "./sht.js";
out("Sum " + sum(10)(5));
out("Sub " + sub(10)(5));
out("Mult " + mul(10)(5));
out("Div " + div(10)(5));
out("Mod " + mod(10)(5));

function Menu() {
    let fruits = ["mango","apple","watermelon"];
    const menuList = [
	...fruits.map(f => {
		let propsMenuItem = {
		    className: "Menu__Item"
		}
		return Shtjs.createElement("li", propsMenuItem, f)
	    }
	)
    ]
    let propsMenu = {
	className: "Menu"
    }
    return Shtjs.createElement("ul", propsMenu, ...menuList)  
}

function Greet() {
    return Shtjs.createElement("h1", null, "Hello and Welcome! this is representation of Shtjs")
}

function Foot() {
    let propsFoot = {
	className: "Footer"
    }
    return Shtjs.createElement("p", propsFoot, "Copyright (c) 2020 Alfian Hidayat")
}

function App() {
    let propsApp = {
	className: "App"
    }
    let appChildren = [Menu(), Greet(), Foot()]
    return Shtjs.createElement("div", propsApp, ...appChildren); 
}

let container = document.getElementById("root");

let styles = `
.App {
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
}
.Footer {
    padding: 10px;
    background-color: #000000;
    color: #ffffff;
}
.Menu {
    list-style-type: none;
    display: flex;
    padding: 0px;
    margin: 0px;
}
.Menu__Item {
    margin-right: 5px;
    padding: 15px;
    background-color: #000000;
    color: #ffffff;
}
`

Shtjs.injectStyle(styles)

Shtjs.render(App(), container)
