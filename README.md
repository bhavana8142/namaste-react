# Namaste React

# parcel

- Dev build
- local server
- automatically refresh
- hmr - Hot Module Replacement
- File Watching Alogorithm - written in c++
- caching - Faster builds
- image optimiztion
- minification our file in production
- bundling
- compress
- consisting hashing
- code spliting
- Differential Bundling - support older browssers
- diagnostics
- Error Handling
- host in https
- tree shaking - remove unused code for you
- different dev and prod bundles

# react element and reat component

React Element => React elemennt(javascript object) => HTML(render)
const heading = React.createElement('h1', { id: "heading" }, 'Namste React')

jsx => babel transpiles to react.createElement => React element(javascript object) => HTML(render)
const jsxheading = <h1 id="heading">Namste React!!</h1>
both are same
const jsxheading2 = (<h1 id="heading2">
Namste React!!

</h1>);
const root = ReactDOM.createRoot(document.getElementById('root'));

Ract components are two types - Functional and Class based
class based component - old way of writing components
function based component - new way of writing components
React functional component - just a java script function
feuntion returns a react element or jsx is react functional component
const Heading = function () {
return <h1>Namste React</h1>
}
both are same
const fn = () => true;
const Heading2 = () => <h1>Namste React</h1>
const Jsxheading2 = () => (<h1 id="heading2">

    Namste React!!

</h1>

);
component composition - composing components inside another component.
const Jsxheading3 = () => (

<div>
<Jsxheading2 />
<h1 id="heading2">Namste React!!!</h1>
{Heading()}
<Heading></Heading>
<Heading2 />
</div>

);

const head = (

    <div>
        <h1>Hello</h1>
        <Jsxheading3 />
    </div>

);

root.render(head);

# Namaste Food

- Header
- -logo
- -navItames
- Body
- -search
- -restaurantContaier
-       -resturent cards
-           -Images
-           - Name of resturent
-           - rating
-           - cusine
-           - delivery time
-
- Footer
- -copyrights
- -links
- -address
- -contact

Two Types of Exports/Import

- Default Export/import
  export default <component/variable>
  import <component/variable> from ourfilepath

- Named Export/Import
  export const component/variable
  import {component/variable} from ourfile path

# React Hooks

    -{ normal  js utlity(Node_modeules) functions}
      - 2 types of react hooks
          - useState() - genarate  superpowerful  state variables in react
          - useEffect()

# Redux Toolkit

    -Install librariries
        - Install @redux/toolkit and react-redux
        - Build our store
        -connect  our store to  our app
        - slice(cartSlice)
        -dispatch(action)
        - selector

# types of ttesting (developer)

    - Unit Testing
    - Integretion Testing
    - End to End Testing - e2e testing

# setting up testing in our app

    - Install testing library
    - Install jest
    - Install  babel dependecies
    - configure babel
    - congigure parcel   config file to disabale default babel transpilation
    - jest - npx just --init
    -Install jsdom  library
    - Install @babel/preset-react - to make jsx work in test cases
    - include @babel/preset-react  inside my bable config
    - Install @testing-Library/jest-dom
