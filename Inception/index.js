// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React!"
// const root = document.getElementById("root")
// root.appendChild(heading)

// Using React
const heading = React.createElement("h1", {}, "Hello World from React !"); // It takes three data first is tag second is object and third is what inside the tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
