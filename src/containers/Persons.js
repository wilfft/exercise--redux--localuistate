import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";
class Persons extends Component {
  state = {
    name: "",
    age: "",
  };

  /*  personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }*/
  nameChangeHandler(e) {
    this.setState({ name: e, age: this.state.age });
  }
  ageChangeHandler(e) {
    this.setState({ name: this.state.name, age: e });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.nameChangeHandler(e.target.value)}
          type="text"
        ></input>

        <input
          type="text"
          value={this.state.age}
          onChange={(e) => this.ageChangeHandler(e.target.value)}
        ></input>
        <AddPerson
          personAdded={() =>
            this.props.onAddPerson(this.state.name, this.state.age)
          }
        />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    prs: state.persons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (name, age) =>
      dispatch({ type: "ADD", personData: { name: name, age: age } }),
    onRemovePerson: (personId) => dispatch({ type: "REMOVE", id: personId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
