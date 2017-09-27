//Components in React are JavaSCript classes that inherit from the React.Component base class.

 class StoryBox extends React.Component {
   render() {
     return (<div>Story Box</div>);
   }
 }

 class People extends React.Component {
   render)() {
     return (<h1>Title<h1>);
   }
 }





//example 1

var HellowWorld = React.createClass({
render: function() {
  <div>
  HellowWorld !
  </div>
}
});

ReactDOM.render(<HellowWorld>), document.getElementById('app'));
// HellowWorld is the Object
// createClass takes in an object(essentialy its the constructor)
//render()method: were passing this method to the object through the createClass.
//Every component is required to have a render method. render is essentially the template of our component
//ReactDOM.render takes two arguments. First is the component you want to rener. Second is the DOM node wehre you want to render the component
//So were telling REACT to take HellowWorld component and render it to an element with an ID="app"
//Also the HTML written in the above code example isnt actually considered HTML its REACT calling "JSX"
//JSX allows us to wtire HTML like syntax which gets transformed to lightweight JavaSCript objects.
// REACT then takes these JavaSCript objects and from them Form "virtual DOM"(or a JavaScript representation of the actual DOM)
//layman’s terms, because manipulating the actual DOM is slow, React is able to minimize manipulations to the actual DOM by keeping track of a virtual DOM and only updating the real DOM when necessary and with only the necessary changes
//UI’s have lots of state which makes managing state difficult. By re-rendering the virtual DOM every time any state change occurs, React makes it easier to think about what state your application is in.

//JSX — Allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects.

//Virtual DOM — A JavaScript representation of the actual DOM.

//React.createClass — The way in which you create a new component.

//render (method) — What we would like our HTML Template to look like.

//ReactDOM.render — Renders a React component to a DOM node.






//example 2
//multi component hierarchy, a common parent
//component should manage the state and pass it down to its children components via props.


var HelloUser = React.createClass({
  getIniitialState: function() {
    return {
      username: '@tyler@gmail.com'
    }
  },
  //getIniitialState method is how you set the state of your component.
  //getIniitialState in other words returns an object which contains data(state) of our component or sets the inital data of our component.
  // Our object HelloUser has data called username so getIniitialState is our data.
  //getIniitialState: is a setter of our data for our object
// state is teh data of the object.

  render: function() {
    return
    <div>
     Hello {this.state.username}
     </div>
  }
});

//username can now be used inside our component by {this.state.username},
//which is exactly what we do in our render method.
//




//example 3
var HelloUser = React.createClass){
  getIniitialState: function() {
    return {
      username:'@gmail.com'
    }
  },
  handleChange: function(e) {
    this.setState {
      username.e.target.value
    });
  };
  render: function() {
    return (
      <div>
      Hello{this.state.username} <br>
      Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
    )
  }
});


}
