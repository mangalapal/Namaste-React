// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React!"
// const root = document.getElementById("root")
// root.appendChild(heading)

// Using React
const heading = React.createElement(
    "h1", {id: "heading", xyz: "abc"}, "Hello World from React !"); // It takes three data first is tag second is object where you will give attribute to you tag, and third is what inside the tag

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
console.log(heading);


const parents = React.createElement(
    "div", {id: "parent"},[React.createElement("div",{id: "child"}, [
        React.createElement("h1", {}, "Hi this is heading !"),
        React.createElement("h2", {}, "Hi this is h2 heading !")
        ]),
         React.createElement("div",{id: "child2"}, [
        React.createElement("h1", {}, "Hi this is heading !"),
        React.createElement("h2", {}, "Hi this is h2 heading !")
        ])

    
    ]);
    root.render(parents)
