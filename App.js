/*
- HMR - Hot Module Replacement
- FIle Watcher Algorithm(written in C++)
- Bundling
- Minify
- Cleaning our code
- Dev & Production build
- Super Fast Build Algorithm
- Image optimization
- Caching while development
- Compression
- Compatible with older version of browsers
- HTTPS on Dev
- Port Number
- Consistent Hashing Algorithm
- Zero Config
- Tree Shaking - Removing unwanted codes

- Transitive Dependency
*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {
        id: "title",
        className: "class",
        key: "h1"
    }, 
    "Namaste Everyone!"
);

console.log(heading);

//React.createElement => Object => HTML DOM

const heading2 = (
    <h2 id="title" key="h2">
        Namaste Abhijoy
    </h2>
);

const Heading3 = () => (
    <h2 id="title" key="h2">
        Namaste East Bengal
    </h2>
);

//Functional Component
// const heading2 = () => (
//     <h2 id="title" key="h2">
//         Namaste Abhijoy
//     </h2>
// );

const container = React.createElement("div", {
    id: "container"
}, [heading,heading2]);

let a=10;

const HeaderComponent = () => {
    return (
        <div>
            {heading2}
            {Heading3()} 
            {/* same as <Heading3/> */}
            {console.log(a)}
            <h1>Namaste Functional Component</h1>
            <h2>H2 tag</h2>
        </div>
    );
}

//same as above syntax
// const HeaderComponent2 = () => (
//     <div>
//         <h1>Namaste Functional Component 2</h1>
//         <h2>H2 tag 2</h2>
//     </div>
// );

//const HeaderComponent2 = () => <div><h1>Namaste Functional Component 2</h1><h2>H2 tag 2</h2></div>;

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react element inside root
//root.render(heading2);

//passing a react component inside root
root.render(<HeaderComponent />);