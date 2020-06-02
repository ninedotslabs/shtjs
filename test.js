import { Shtjs, out, sum, sub, mul, div, mod  } from "./sht.js";

function Menu() {
    let url = "http://devufi.io/myapi/get_latest_courses";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    let res = JSON.parse(xhttp.response)
	    let y = [];
	    let fruits = [];
	    for (let i=0; i < res.data.length; i++) {
		fruits.push(res.data[i].title)
	    }
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
		className: "Menu",
		suspend: 0,
		placeholder: "Loading"
	    }
	    return Shtjs.render(Shtjs.createElement("ul", propsMenu, ...menuList), document.getElementById("app"))
	}
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    return {type: "menu", state: "undefined", container: "app"}
}

function Greet() {
    let propsGreet = {
	className: "Greet"
    }
    return Shtjs.createElement("h1", propsGreet, "Hello and Welcome! this is representation of Shtjs")
}

function Foot() {
    let propsFoot = {
	className: "Footer"
    }
    return Shtjs.createElement("p", propsFoot, "Copyright (c) 2020 Alfian Hidayat")
}

function App() {
    let propsApp = {
	className: "App",
	id: "app"
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
