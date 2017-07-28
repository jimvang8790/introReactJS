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

// conditional statement inside of a render() function
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);

// The word this gets used in React a lot! You are especially likely to see this inside of the body of a component class declaration
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
// The simple answer is that this refers to an instance of IceCreamGuy. The less simple answer is that this refers to the object on which this's enclosing method, in this case .render(), is called.

// another exmaple
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'whatever-your-name-is-goes-here';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

// Render functions often contain event listeners. Here's an example of an event listener in a render function:
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}

// In React, you define event handlers as methods on a component class. Like this:
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>;
    );
  }
}

// Another oneimport React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
<Button />
document.getElementById('app')
);

// Every component has something called props.
// A component's props is an object. It holds information about that component.
// To see a component's props object, you use the expression this.props
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
 // another example
 import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
<PropsDisplayer />
document.getElementById('app'));

// NOTE message pass information to a component. You can use any name you want.
<Example message="This is some top secret info." />

// If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:
<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

// another example
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(
<PropsDisplayer myProp="Hello" />
document.getElementById('app'));
