const htmlString = 
`<div id="app">
    <h1>TODOs</h1>
    <input type="text" placeholder="What needs to be done?">
    <ul>
        <li>
            <input type="checkbox">
            <label>Buy milk</label>
            <button>Remove</button>
        </li>
        <li>
            <input type="checkbox">
            <label>Buy eggs</label>
            <button>Remove</button>
        </li>
    </ul>
</div>`

const vdom = {
    type: 'element',
    tag: 'div',
    props: {id: 'app'},
    children: [
        {
            type: 'element',
            tag: 'h1',
            props: {} ,
            children: [
                {
                    type: 'text',
                    value: 'TODOs'
                }
                // That's how we do the rest
                
            ]
        
        },
        {},
        {}
    ]
}