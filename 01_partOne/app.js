// Create using javaScript...............

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from javaScript"

// const root = document.getElementById("root");

// root.appendChild(heading)





// Creating it using react.................... 

const heading = React.createElement( 
       "h1", 
       {id:"heading", xyz:"hello"},
        "Hello World from React!" )
        
        console.log(heading) // its gives you an object
// it takes three parameter first one is tag name, second one is objects{here you give an attribute to your tag and also create attribute}(Propes) and last is children

// next you need to create root where react doing all the stuff 

const root  = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

// here React.createElement is create react element which is object
// and render method takes the  react element and convert into HTML for browser understanding and browser display it into webpages