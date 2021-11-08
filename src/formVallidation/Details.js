import React from 'react'
import User from './Parent'
import Show from './ShowDetails'
export default class Detail extends React.Component{
  constructor(){
    super()
    this.state={
      showdetails:false,
      name:"",
      email:"",
      city:"",
      mobile:"",
      
    }
  }
  
  onChange=(i)=>{
    this.setState({
      name:i.target.value,
      email:i.target.value,
      city:i.target.value,
      mobile:i.target.value,
    })
    let a=document.getElementById('name').value;
    let b=document.getElementById('email').value;
    //console.log(a,b)
  }
    render(){
      return (
          <>
            <User click={this.state} chnge={this.onChange} />
            <Show s={this.state}/>
          </>
      )
    }
};