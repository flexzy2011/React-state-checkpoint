import React from "react";
import "./App.css";
import Counter from "./Counter";

//Transform the App.js into a class-based component.
class App extends React.Component {

  //Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
  state = {
    fullName: "Felix Akinloye",
    bio: "My name is Felix, I'm a Frontend developer and i love coding!",
    imgSrc: "https://avatars.githubusercontent.com/u/112817528?v=4",
    profession: "Frontend Developer",
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="flexzy" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )}
        <button onClick={this.handleShow}>
          {!this.state.show ? "show" : "hide"}
        </button>
        <>
          <h1>Show the count</h1>
          <Counter />
        </>
      </div>
    );
  }
}

export default App;