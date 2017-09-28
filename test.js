//Components in React are JavaSCript classes that inherit from the React.Component base class.
// Components are written in UpperCamel classes
//Every Component needs a render function()
//React was built to solve one problem: building large applications with data that changes over time.
//In React , we write apps in terms of Components
// We use JavaScript classes when declaring React Components.
//Components must extend the React.Component class and must contain a render() method.
//We call the ReactDOM components to a web page
// HTML elements are written in lowercase : eg <div>foo</div> not <Div>foo</Div>
// React componets are written in UpperCamelCase eg. ReactDOM.render (<<StoryBox>)
// JSX stands for javascript XML.
//'Props': React components recieve arguments and they are called Props they look like Html ATTRIBUTES.
// Arguments passed to components can be accessed using 'this.props' object.
// specifing a unique key when creating multiple components of the same type can help improve performance. key={comment.id}




//CodeSchool: http://campus.codeschool.com/courses/powering-up-with-react/level/1/section/2/unders3tanding-jsx

// we use JavaScript class when declaring React Components
 class StoryBox extends React.Component {
   render() {       // Component must extend the React.Component class and must contain a render method
     return (<div>Story Box</div>);
   }
 }

//ReactDOM to render components to our HTML page as it reads output from suppled React Component and addds it to the DOM.
// contains two arguemts one is to invocke the class story box. Second is target container where component will be rendered.
 ReactDOM.render(
   <StoryBoxy/>, document.getElementById('story-app')
 ); // this method function renders component to page //ReactDOM.render()




// JSX uses className(p tag in code below) rather than simple class as in regualr JavaScript
// any code that is written in {} braces is interpreted as literl JavaScript so {now.toTimeString()}
class StoryBox React.Component {
  render() {

const now = new Date();

    return (
      <div>
        <h3>Stories App</h3>
        <p className="lead">
        Current time: {now.toTimeString()}</p>
        </div>
    );
  }
}



// Map function
// This code returns an array of topicList on the screeen in a list with what is in the list
class StoryBox React.Component() {
  render() {
    const topicList = ['HTML', 'JavaScript', 'React'];

    return (
      <div>
      <ul>
        {topicList.map(topic = => <li>{topic}</li>)}
      </ul>
      </div>
    );
  }
}

// example 2
class RobotItems extends React.Component{
  render() {
    const topics = ['foo','blah','what u want'];
    return (
      <div>
        <ul>
          {{topics.map(topics => <li>{topics}</li>)}}
        </ul>
      </div>
    );
  }
}

//JSX stands for JavaScript XML
// JSX markup look similar to HTML but ultimately gets transpiled to JavaScript function calls, which React will know how to render to the page.
// Code written in curly braces is interpreted as literal JavaScript
// it is a common pattrn to map arrays to JSX elements



//Pattern for adding new Components.
// steps to write a compoent syntax wise:

//always add a new class(NewComponent)
                          //Inherit from React.Component class.
class NewComponent extends React.Component {
  render () { //return JSX render function
    return ();
  }
}



// Child component and parent below this is an example of how to use multiple components within each other.
// also we will use 'props' as arguemnts for components.
class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
                                      // components can be accessed using 'this.props object'
        <p className="comment-header">{this.props.author}</p> // we had text here and in the body section so we know pass data through props.
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-footer">
        <a href="#" className="commnet-footer-delete">
           Delete comment
        </a>
      </div>
    </div>
  );
 }
}

//Parent component
class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box">
      <h3>Comments</h3>
      <h4 className="comment-count">2 comments</h4>
      <div className="comment-list">
        <Comment
        author="morgan bank" body="Great picture!"/> //we are passing the author arguments to the commment/component. we are passing "Props"
        <Comment
        author="Bending bending" body="Excellent stuff"/> //These comment components are the parent and the comment tag here is from the child code in above example.(reusuable componetns) main component and sub compnents withitn them
      </div>
      </div>
    );
  }
}


//dynamic props 2.8
// typically when we consume data from API servers , we are returned Object arrays
// We can use JavasCript map function to crearte an array with COMMENT components.
 const commentList = [
{id:1, author: 'Morgan blah', boyd: 'cool pic'},
{id:2, author: 'Bend it like beckham', body: 'excellent stuff'}
];

//_getComments method uses an underscore to help distinguish custom methods from react methods.
// the method _getComments will return array of JSX elements dynamically. to do so we use the map.array fucntion in the commentList array.
// // specifing a unique key when creating  multiple components of the same type like comment.author, comment.body example below can help improve performance. key={comment.id}
// this example we learned how to pass dynamic props using
// leanred how to map object arrays to JSX arrays for display purposes
// learned used JavasCript to handle plural case on the title

 class CommentBox extends React.Component {
   _getComments() {

  const commentList = [
    {id:1, author: 'Morgan blah', boyd: 'cool pic'},
    {id:2, author: 'Bend it like beckham', body: 'excellent stuff'}
     ];
     return commentList.map((comment)) => {
       return (
         <Comment
          author={comment.author} body={comment.body} key={comment.id}/>); // notice we pass two properties authoer and body.
     });
   }
 }

// this displays a variable of arrays but the issue is eveyrtime your comments box list a comment it has it has comments pluaral becaue its taking it from the parent.
class CommentBox extends React.Component {
    render() {
      const comments = this _getComments();
      return (
        <div className="comment-box">
        <h3>Comments<h3>
        <h4 className="comment-count">{this._getComments(comments.length)}</h4>
        <div className="comment-list">
          {comments}
        </div>
      );
    }
    // this method allows us to have a diffent name for our commentbox and comments it makes no sense to have a comment box say 'comments     _getComments(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount == 1) {
        return '1 comment';
      }else {
        return `${commentCount} comments`;
      }
    }
}



//whole code for an example of dynamic data with props and an image tag
//chld component
class CommentBox extends React.Component {

  render() {
    const comments = this._getComments() || [];
    return (
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className-="comment-count">{this._getCommentsTitle(comment.length)}</h4>
        <div className="comment-list">
        {comments}
        </div>
        </div>
    );
  }

  _getComments() {
    const commentList = [
      {id:1, author: 'Morgan blah', boyd: 'cool pic'},
      {id:2, author: 'Bend it like beckham', body: 'excellent stuff'}
    ];
      return commentList.map((comment)) => {
        return (<Comment author={comment.author} body={comment.body} avatarUrl{comment.avatarUrl} key={comment.id} />);
        ));
      }
  }


// Parent Component
  class Comment extend React.Component {
    render() {
      return (
        <div className="comment">
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`}
        <p className="comment-heaer">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
      </div>
    </div>
  );
 }
}


//Component States CodeSchool level3: Handling Data Changes with States
//Add a buttton to a page that allow users to toggle the comments.
//Different ways to Manipulate the DOM 1) Direct DOM manipulation(jQuery, backbone etc) 2) Indirect DOM Manipulation with React
//Indirect DOM Manipulation (might also be called virtual DOM not sure though)
// In React we dont modify the DOM directly , Instead we modify a component 'state' object in response to user events and let React handle updates to the DOM.
//example : Events ...> Update state ......> DOM updates      the user codes the Update state.

//example of show / hide in react *different than jQuery
//Display logic is wrapped into a if statement.

render() {
  if (this.state.showComments) {
    // code displaying comments
  } else {
    // code hiding comments
  }
}


// State- JavaSCript object that lives inside each component. We can access it via..... this.state
// let commonNodes is part of conitional statments syntax in react.
class CommentBox extends React.Component {

  render() {
    const comments = this._getComments();
    let commentNodes;
      //Create List of comments if stat is true.
    if (this.state.showComments) {
    commonNodes = <div className="comment-list">{comments}</div>

    }
    return (
      <div className="comment-box">
        <h4 className="h4">{this._getCommentsTitle(comments.length)}</h4>
        </div>
    );
  }
}

// this code shows comments but we have to set up a constructor to hide are component.
//class constructor.
//super() always called in our constructor
class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false  // setting our inital state to false to hide comments which is our desired behaviour.
    };
  }
 render() {
   .....
 }
  ......
}

class Comment extends React.Component {
  constructor() {
    super();
    this.state={
      isClicked: true
    });
  }






// above example shows how we can set intial state but how do we UPDATE a components state? We do so by calling setState
// this.setState({showComments:true})
// setState will only replace the properties that were passed as an arugment and not replace the entire state object.
// State Changes are usually triggered by user interactions with our app. \
// examples of things that could cause state to change: button clicks, link clicks, form submissions , AJAX requests, etc.

//Handling Clck Events
//A togle the showComments state when a click even is fired.

class CommentBox extends React.Components {
  render () {
    .....
    return (
      .....
      <button onClick={this._handleClick.bind(this)}> Show Comments</button>
      ....
    );
  }

_handleClick() {
  this.setState({
    showComments: !this.state.showComments
  });
}



//Button text Logic baded on state
//We can switch the button text base on components tate.

class CommentBox extends React.Component {
  render() {
    ......
    let buttonText = 'show comments';

    if(this.state.showComments) {
      buttonText = 'Hide comments'; // if comments show the text displays hide comments. the buttonText below renders button with accroding text.
      .....
    }
    return (
      ...
      <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
      ...
    )
  }
}
// Recap of state.
// the state is a vital part of react apps , making user interfaces interactive.
// State represents data that changes over time.
//We Decalare an inital stae in the components constructor.
//We update state by calling this.setState(). // calling setState() causes our component to re-render.

//more examples: After the variable declaration, add an if statement to check whether the isAbusive property of the state object has a falsy value. If isAbusive is falsy, then assign the body prop to the commentBody variable.

class Comment extends React.Component {
  render() {
    let commentBody;
    if(!this.state.isAbusive) {
      commentBody = this.props.body;
    }
  }
}

// more example: declare a new method in the Comment component called _toggleAbuse , make it receive one arguemnt called event and call event.preventDefault()

class Comment extends React.Component {
  _toggleAbuse(event) {
    event.preventDefault();
  }
}

// Full answer: code thus far from above
class CommentBox extends React.Components {

  render() {
    const comments = this._getComments() || [];

    return(
      <div className="comment-box">
      <h3>Comments</h3>
      {this._getPopularMessage(comments.length)}
      <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
      <div className="comment-list">
        {{comments}}
      </div>
      </div>
    );
  }
}

_getPopularMessage(commentCount) {
  const POPULAR_COUNT = 10;
  if(commentCount > POPULAR_COUNT) {
    return (
      <div>this post is getting really popular, dont miss out</div>
    );
  }
}

_getComments() {
  const comment-list = [
    {id: 1, author: 'clu', body: 'just say no', avatarUrl: 'images/default-avatar.png'},
    id: 2, author: 'clu', body: 'just say no', avatarUrl: 'images/default-avatar.png'},

  ];

  return commentList.map((comment)) => {
    return (<Comment author={comment.author} body={comment.body} avatarUrl={comment.avatarUrl} key={comment.id});
  }
}

_getCommentsTitle(commentCount) {
  if(commentCount === 0) {
    return 'no Comments';

  }elsfe if (commentCount ===1) {

  }else {
    return `${commentCount} comments `;
  }
 }
}

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

render() {
  let commentBody;
  if(this.state.isAbusive) {
    commentBody = <em>Content marked as abusive</em>
  }

return (
  <div className="comment">

  <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture'`} />

  <p className="comment-header">{this.props.author}</p>
  <p className="comment-body">
  {{commentBody}}
  </p>
  <div className="comment-actions">
  <a href="#">Delete comment</a>
  <a href="" onClick={this._toggleAbuse.bind(this)}>Report as abuse</a>
 </div>
</div>
);
}

_toggleAbuse(event) {
  event.preventDefault();

  this.setstate ({
    isAbusive: !this.state.isAbusive
  });
 }
}







//CodeSchool examples
class RobotBox extends React.Component {
  render() {
    return <div>Hello From React</div>;
  }
}

let target = document.getElementById('robot-app');

ReactDOM.render(<RobotBox/>, target);







//https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/
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


//Synthetic Events capturing user Actions: Section 4.
// Adding new feature: Let users add a new comment.
// CommentForm is a new component that will allow users to add comments to our app.

//this example is good but we need to add an event listner to the form, we use onSubmit prop and pass a handler to it.
class CommentForm extends React.Component {
  render() {
    <form className="comment-form">
     <label> Join the discussion</label>
     <div className="comment-form-fileds">
      <input placeholder="Name:" />
      <textarea placeholder="Comment:"></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit" >
          Post comment
        </button>
      </div>
    </form>
  };
 }
}



// example 2: adding eventlistner onSubmit Prop, Keyword Prop
// 3 steps to adding event listner. 1 add the button on the form with 'this'.  2:bind. 3. logic of event below code block
class CommentFrom extends React.Component {
  rendoer() {
    return {                         // 1-Adds an event listener to the submit event. 2.bind  //Decalare event handler lister at bottom.
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}
        .....
          <input placeholder="Name:" />
          <textarea placehlder="Comment:"><textarea>
          ....
      </form>
    };
  }
  // 3. Declare event handler
  // how do we take the information from the input and textarea though?
  // To access form data from a handler we can use 'refs' too assign form values to properties on the components object.
  // example of what code we will ad to the above input and text area
  // <input placeholder="Name:" ref={(input) => this._author = input}/>
  // <textarea placeholder="Comment:" ref={(textarea} => this._body = textarea}>
  _handleSubmit(event) {
    event.preventDefault();
  }
}


//Example 3 add Refs to input and textarea and passing the user input to the commentbox via the handle event declaration

class CommentForm extends React.Components {
  render() {
    ...
    <input placeholder=-"Name:" ref={(input) => this._author = input}/>
    <textarea placeholder="Comment:" ref{(textarea) => this._body = textarea}>
    ...
  };
}
_handleSubmit(event) {
  event.preventDefault();

  // Populated Refs in the input and textarea.
  let author = this._author;
  let body = this._body;
  // addComment method has been passed as an arguement. // because there within elements we call the .Value method
  this.props.addComment(author.value, body.value);
}


// Passing data from paretn to child?  Comment ......CommentBox.........CommentForm

// so our CommentBox is our parent: it has the comments array in its state.
// CommentForm the child of the commentBox has new comment Data. So how to we pass back the new comment data back to the commentBox(parent)?
// JavaScript allows for arguemtns to be passed back and fourth.
//Fucntions in JavaSCript are first-class citizens se we can pass them as props to other components.
//Answer: So to pass information from child(commentForm) back up to parent(commentBox) we add the method _addComment to the parent component(commentBox) that method which was created in the child.

//example of commentBox with child method.

class CommentBox extends React.Components {
  render () {
    <div className="comment-box">
    // using newly created commonForm Component
    <CommentForm addComment={this._addComment.bind(this)}/>
                  // and passin git a callback prop.
    ....
    </div>
  };
}
// this addComment gets triggred by commentForm method(child)
// know we have to add a new comment Object.
_addComment(author, body) {
  // new comment object.
  const comment = {
    id: this.state.comments.length + 1,
    author,
    body
  };
  // setState updates state when fucntion is called by adding new comment.
  this.setState({ comments: this.state.comments.concat([comment]) });
 }
}



//Moving comments to the 'State', since comment siwll change over time, they should be part of the components state.

class CommentBox extend React.Component {

  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: 'clu', body: 'just say no', avatarUrl: 'images/default-avatar.png'},
        id: 2, author: 'clu', body: 'just say no', avatarUrl: 'images/default-avatar.png'}
        // know part of components state.
      ]
    };

  }
}


class CommentBox extends React.Component {
  ....

  _getComments() {
    // Reading from the componets state.
    return this.state.comments.map((comment) => {
      return (
        <Comment author = {comment.author} body={comment.body} key={comment.id} />
      );
    });
  }
}

// REVEIW: Event Handling in React
// in order to ensure events have consistent properties across different browsers react wraps the browsers native events
// into synthetic events, consolidating browser behaviors into one api.
//Synthetic events offer cross-browser wrapper arund the browsers native event system.
//onSubmit is the synthetic event we capture during submissions.

//Quick recap
//We use Reacts event system to caputre user input , including form submissions and button clicks.
// 'REFS' allow us to reference DOM elements in our code after the component has been rendererd.
// parent components can pass callback functions as 'Props' to child components to allow tow-way communication.
//Synthetic events are a cross-browser wrapper aroudnt he browsers native event system.




// Section 5
//5.1 Using Lifecycle methods to load comments.

//talking to remote servers using reacts Lifecycle methods.  using an API to retrive comments.

//example set the initial state of commment sas an empty array so we can later oppulate it with data from API servers
// Adding jQuery as a dependency will help us make ajax requests.
class CommentBox extends React.Component {
  consturctor () {
    super();

    this.state= {
      showComments: false,
      comments: []   // initalized to an empty array. so we can later populate it from a data from a remote server.
    };
  }
}

//wrie a calss method that will make Ajax requests in the CommentBox component with a fetch and get requests
//example:
class CommentBox extends React.Components {
  .....

  _fetchComments() {
    jQuery.ajax({
    method: 'Get',
    url: '/api/comments',  // makes call to remote sever.
    // when the ajax request is complete we call 'setState' method
    success: (comments) => { // => functon preserves the this binding to our class.
      // 'this' referes to commentBox
      this.setState({comments})
    }

  });
  }
// Decidnig Where to call _fetchComments() ...Cant call it from render method. So do call the _fetchComments method we have to do so
//before the render method. This is where Lifecycle methods come into play.

//Lifecycle method. : are React functions that get called while the component is rendered for the first time or about to be removed from the DOM.
// 3 Lifecycle methods. side note mounting meands rendering for the first time.
//1 componentWillMount()
//.....constructor()......> coomponentWillMount() .......> render()....componentDidMount()..........componentWillUnMount()
//componentWillMount: called before the component is rendered, then renderMethod is called and it will mount.
//componentDidMount: When the component is done getting rendred the componentDidMount will get called.
//componentDidMountWillUnmount: When component will get removed from the DOM.
// 'polling ' getting periodic updates in order to check eathr new comments are added, we can periodically check the server for updates.
//

class CommentBox extends React.Component {
  ....
  componentWillMount() {  // fetch comments from server before componend is rendred.
    _fetchComments();
  }

  _fetchComments() {
    jQuery.ajax ({
      method: 'Get',
      url: '/api/comments',
      success: (comments) => {
        this.setState({comments})
      }
    });

    // the ComponentDidMount method is called after the componeont is rendered to the page
    componentDidMount() {
      setInterval(() = > this._fetchComments(), 500); // pulling the server every 5 seconds.
    }

  }

}

// Preventing Memory Leaks
// Each component is responsible for removing any timers it has created. We will rmeove the time on the componentWillUnMount method.

class CommentBox extend React.Component {
  ...

  componentDidMount() {
    // store timer as object property
    this._timer = setInterval(
      () => this._fetchComments(),
      500
    );
  }
  // remove the timer from the the component.
  componentWillUnMount () {
    clearInterval(this._timer);
  }
}

// Review of Lifecycle methods.
// 1.componentWillMount() is called
//2. render() is called and CommentBox is mounted.
//3. Component waits for the API response and when it is receviced, setState() is called, causinig render() to be called agian.
//4. componentDidMount() is called , casing this._fetchComments() to be triggered every five seconds.
//5.  componentWillUnMount() is called when the componetn is about to be removed from the DOM and clears the fetchComments timeout.

// Review continued.
//Lifecycle methods in React are functions that get called during certain phases that components go thorugh.
//componentWillMount() is called before the component is rendered.
//componentDidMount() is called after the component is rendered.
//componentWillUnMount() is called immediately beofre the component is removed from the DOM.

// 5.6 Deleting comments from a server

// new method in CommentBox


class commentBox extends React.Component {

  _deleteComment(comment) {
    jQuery.ajax({
      method: 'DELETE',
      url: `/api/comments/${comment.id}`
    });

//We will not wiat for the API request to be finsihed before updating the components state. We will give our immediate visual feedback, whihc is know as an optimistic update.
  const comments = [..this.state.comments];
  const commentIndex = comments.indexOf(comment);
  comments.splice(commentIndex, 1);

  this.setState({comments});

  }
}


// coontue lesson 5.7
