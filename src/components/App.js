import React from 'react';
import { connect } from "react-redux"

import Nav from './Nav';
import ListNotes from './ListNotes';
import NewNote from './NoteForm';
import AlertInfo from './AlertInfo';
class App extends React.Component {

  dislayNewFormNote = () => {
    if (this.props.isEdit) {
      return (<NewNote />)
    }
  }


  render() {

    return (
      <div className="App">
        <Nav />
        <AlertInfo />
        <div className="container">
          <div className="row mt-3">
            <ListNotes />
            {this.dislayNewFormNote()}
          </div></div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,

  }
}
export default connect(mapStateToProps)(App)

