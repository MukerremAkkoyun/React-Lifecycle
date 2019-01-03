import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
 
   constructor(props){
       super(props);
       console.log("child 1 constructor")
   }

   componentWillMount = () => {
     console.log("child 2 componentWillMount")
   }
   componentDidMount = () => {
    console.log("child 3  componentDidMount")
   }
   
 
   componentWillReceiveProps = (nextProps) => {
     console.log("componentWillReceiveProps", nextProps);
   }

   
    render() {

        console.log("Child 4 render")

    return (
      <div>
        Child
      </div>
    )
  }
}
