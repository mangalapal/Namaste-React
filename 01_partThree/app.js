// creating sibling in react
//  to create a sibling use []
// its ctructure is given below
/*
<div id="parent">
    <div id="child1">
        <h1>I am the h1 tag</h1>
        <h2>I am the h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am the h1 tag</h1>
        <h2>I am the h2 tag</h2>
    </div>
</div>

*/

const parent = React.createElement( 
    "div", 
    {id:"parent"}, 
    [React.createElement("div", {id:"child1"}, 
    [React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
]),
React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")])
])


const root = ReactDOM.createRoot(document.getElementById("root"))
    
root.render(parent)

// what we have passing the root.render it geting replace, what is there exixting inside the root
// it means all control of root id is render method 
// if you create element underneath of the root id, it will not replaceable it works 
// same as upper of the id root
// suppose you have to multiple children then you have to pass it as an array 
