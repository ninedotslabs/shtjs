/*!
 * ShtJS 
 * Shit/Shortcut JS
 * Copyright Alfian Hidayat.
 * there's must be only one parameters!
 * This is a module, please learn how to use it ok?
 */

// debug
export const out = a => console.log(a);
// basic arithmetic
export const sum = a => b => a+b
export const sub = a => b => a-b
export const mul = a => b => a*b
export const div = a => b => a/b
export const mod = a => b => a%b
// fetch api wrap
export const fetcher = url => opts => fetch(url,{opts}).then(x => x.json());
