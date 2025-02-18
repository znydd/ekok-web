export function setAttributes(el, attrs){
    const { class: className, style, ...ohterAttrs } = attrs;

    if (className){
        setClass(el, className)
    };

    if (style){
        Object.entries(style).forEach(([prompt, value]) => {
            setStyle(el, prompt, value)
        })
    };

    for (const [name, value] of Object.entries(ohterAttrs)){
        setAttributes(el, name, value);
    };
};

function setClass(el, className){
    el.className = '';

    if (typeof className === 'string'){
        el.className = className;
    }

    if (Array.isArray(className)){
        el.classList.add(...className);
    }
};


export function setStyle(el, name, value){
    el.style[name] = value;
};

export function removeStyle(el, name){
    el.style[name] = null;
};

export function setAttributes(el, name, value){
    if(value == null){
        removeAttribute(el, name)
    } else if (name.startsWith('data-')){
        el.setAttributes(name, value);
    }else{
        el[name] = value;
    } 
}

export function removeAttribute(el, name){
    el[name] = null;
    el.removeAttribute(name);
}