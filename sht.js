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
export function render(element, container) {
  if (typeof element.type === "function") element = element.type();
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });
  element.props.children?.forEach(child => render(child, dom));
  container.appendChild(dom);
}
export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
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
