import { withoutNulls } from './utils/arrays';


// There are three types of nodes in virtula DOM
export const DOM_TYPES = {
    TEXT: 'text',
    ELEMENT: 'element',
    FRAGMENT: 'fragment'
};

// This function will return a Vdom obj
export function h(tag, props = {}, children = []){
return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
};
};

function mapTextNodes(children){
    return children.map((child) =>
        typeof child === 'string' ? hString(child) : child
    );
};

export function hString(str){
    return { type: DOM_TYPES.TEXT, value: str };
};

export function hFragment(vNode){
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(withoutNulls(vNode)),
    }
};