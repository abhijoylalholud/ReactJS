const heading = React.createElement("h1", {
    id: "title",
    className: "class"
}, "Namaste Everyone!");

const heading2 = React.createElement("h1", {
    id: "title"
}, "Heading 2!");

const container = React.createElement("div", {
    id: "container"
}, [heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing a react element inside root
root.render(container);