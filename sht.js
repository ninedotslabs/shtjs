/*!
 * ShtJS
 * Shit/Shortcut JS
 * Copyright Alfian Hidayat.
 * there's must be only one parameters!
 * This is a module, please learn how to use it ok?
 * Good artist copy, great artist STEAL
 */

// debug
export const out = a => console.log(a);
// basic arithmetic
export const sum = a => b => a + b;
export const sub = a => b => a - b;
export const mul = a => b => a * b;
export const div = a => b => a / b;
export const mod = a => b => a % b;
// fetch api wrap
//export const fetcher = url => opts => fetch(url, { opts }).then(x => x.json()); deprecated, useless
// dom manipulation
export const grabId = a => document.getElementById(a);
export const elQry = a => document.querySelector(a);
export const elQryAll = a => document.querySelectorAll(a);
export const elInrTxt = el => txt => (el.innerText = inner);
export const elInHtml = el => html => (el.innerHTML = html);
export const elGetAtr = el => atr => el.elGetAtr(atr);
export const elSetAtr = el => atr => a => el.setAttribute(atr, a);
export const elDelAtr = el => atr => el.deleteAttribute(atr);
export const elTxt = el => txt => (el.text = txt);
let renderProccess = "true";
let renderObj = "true";
let renderChild = "true";
let firstTime = "true";
export function render(element, container) {
    switch(element.state) {
    case "undefined": 
	break;
    default:
	if (renderProccess === "true") {
	    if (typeof element.type === "function") element = element.type();
	    const dom =
		element.type === "TEXT_ELEMENT"
		? document.createTextNode("")
		: document.createElement(element.type);
	    const isProperty = key => key !== "children";
	    Object.keys(element.props)
		.filter(isProperty)
		    .forEach((name,i,arr) => {
			if (element.props.children.length > 0) {
			    dom[name] = element.props[name];
			} else {
			    dom[name] = "Loading...";
			    setTimeout(() => {
				dom[name] = element.props[name];
			    }, element.props.suspend*2)
			}
	    });

	    if (element.props.children.length > 0) {
		    if (element.props.suspend > 0) {
			dom.append(element.props.placeholder)
			    setTimeout(() => {
				element.props.children.forEach((child,i,arr) => {
					render(child, dom)
				});
				dom.removeChild(dom.firstChild)
			    }, element.props.suspend)
		    } else {
			element.props.children.forEach((child,i,arr) => {
			    render(child, dom)
			});
		    }
	    }
	    container.appendChild(dom);
	}
	break;
    }
}
export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
	nodeValue: text.value,
	suspend: text.suspend,
	children: []
    }
  };
}
export function createElement(type, props, ...children) {
  return {
    type,
    suspend: props.suspend,
    props: {
      ...props,
	children: children.map(child =>
			       typeof child === "object" ? child : createTextElement({value: child, suspend: props.suspend})
      )
    }
  };
}
export function injectStyle(style) {
    let styleCont = document.createElement("style")
    styleCont.append(style)
    return document.body.append(styleCont)
}
// unique
export const setTitle = t => elTxt(elQry("title"))(t);

export const Shtjs = { render, createElement, createTextElement, injectStyle }
