//how to create a nested div structure to it 
/***\
 * * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *      </div>
 * </div>
 * *
 * *
 * *
 * *
 * *
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);
/***\
 * * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * *
 
 * 
 */
//for sibblings
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);
/***\
 * * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div> M
    *  <div id="child2">
    *          <h1>I am h1 tag</h1>
    *          <h2>I am h2 tag</h2>
    *      </div>
 * </div>
 * *
 
 * 
 */
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

/*------MAIN CODE------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const heading = React.createElement("h1", {id: "heading"}, "Hello World from React"); //createElement takes 3 arguments : tag, object(attributes to a tag), what is needed inside tag

console.log(heading); //not an html element but an object i.e a react element i.e javascript object, it has props = children that go inside the h1 tag, like we mentioned id in above object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent3); //here basically we are passing a javascript ekement we named heading, to take this object and create the html element that browser understands, this is the html tag