export function addEventListaener(eventName, handler, el){
    el.addEventListener(eventName, handler);
    return handler;
};

export function addEventListeners(listeners = {}, el){
   const addedListeners = {};

   Object.entries(listeners).forEach(([eventName, handler]) => {
    const listener = addEventListaener(eventName, handler, el)
    addedListeners[eventName] = listener
   });

   return addedListeners;
};

export function removeEvenListeners(listener = {}, el){
    Object.entriesI(listeners).forEach(([eventName, handler]) => {
        el.removeEvenListeners(eventName, handler);
    });
};