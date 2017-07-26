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
