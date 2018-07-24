import React, { Component } from 'react';
import InstructorItem from './InstructorItem'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    }

    setTimeout(() => {
      const randInst = Math.floor(
        Math.random() * 
        this.state.instructors.length
      )

      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.instructors[randInst].length
      )

      const instructors = this.state.instructors.map((inst, i) => {
        // if index is equal to the instructor we want to modify
        if(i === randInst){
          // Make a copy of instructors hobby array
          // const hobbies = [inst.hobbies.slice()]       or
          const hobbies = [...inst.hobbies]
          // With new copy we use splice to get rid of the hobby we dont want
          hobbies.splice(hobbyIndex, 1)
          // return new object of this instructor + modified hobbylist array
          return {
            ...inst,
            hobbies
          }
        }
        // if not the instructor we want just return as is 
        return inst
      })
      //////////////////    ALTERNATIVE WAY   ////////////////////
      ////////////////   COPY INSTRUCTORS ARRAY    ///////////////
      ///////////////   COPY INSTRUCTOR OBJECT  //////////////////
      ///////////////   COPY HOBBYLIST ARRAY  ////////////////////
      /////  USE SPLICE TO GET RID OF HOBBY WE DONT WANT  ////////
      /////////////////      SET NEW STATE    ////////////////////

      
      // const instructors = this.state.instructors.slice()
      // instructors[randInst] = Object.assign({}, instructors[randInst])
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice()
      // instructors[randInst].hobbies.splice(hobbyIndex, 1)
        this.setState({instructors})
    }, 5000)
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ))
    return (
      <div className="App">
        <ul>{instructors}</ul>
      </div>
    );
  }
}

export default App;
