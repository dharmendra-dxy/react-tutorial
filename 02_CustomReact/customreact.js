
function customRender(Element, Container){

    // Creating a DOM element
    const domElement = document.createElement(Element.type);

    /*
    // setting attributes
    domElement.setAttribute("href", Element.props.href);
    domElement.setAttribute("target", Element.props.target);
    */
    

    // Problem with above code: we will face difficulty in setting multiple attributes
    // SOL : Using loops
    for (const prop in Element.props) {
        domElement.setAttribute(prop, Element.props[prop]); 
    }

    // Setting InnerHTML
    domElement.innerHTML = Element.children;
    

    // Adding DOM elements to the Container
    Container.appendChild(domElement);

}


const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : "Click me to visit Google",
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)
// reactElement => Elements that needs to be injected
// mainContainer => Where the elements needs to be injected