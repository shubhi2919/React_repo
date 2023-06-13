// <!-- Hello world with react -->
// const heading = React.createElement("h1",{},"Hello from React");
//object
// const heading = React.createElement("h1",
// {id:"heading1"},"Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

//nested elements with react
/**
 * suppose we want
 * <div>
 *     <div>
 *          <h1></h1>
 *     </div>
 * </div> 
 * * */

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello I am h1"),React.createElement("h2",{},"Hello I am h2")
    ]
       )
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)