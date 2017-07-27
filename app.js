const h1 = <h1>Hello world</h1>;
// this is javascript Despite what it looks like, your code doesn't actually contain any HTML at all.
// The part that looks like HTML, <h1>Hello world</h1>, is something called JSX.
// JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
// In this case, it means that JSX is not valid JavaScript. Web browsers can't read it!
// If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
// this is called a JSX element

// Here's an example of several JSX elements being stored in an object:
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};

const navBar = <nav>I am a nav bar</nav>;

// A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:
<a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>;

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;

// You can nest JSX elements inside of other JSX elements, just like in HTML.
<a href="https://www.example.com"><h1>Click me!</h1></a>

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

const myDiv = (
  <div><h1>Hello world</h1></div>
  );

// Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can!
const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);

// NOTE There's a rule that we haven't mentioned: a JSX expression must have exactly one outermost element.
// In other words, this code will work:
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

// But this code will not work:
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);

// React applications are made out of components. A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

// A render() function must have a return statement.
// A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.
class Random extends React.Component {
  render() {

    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
