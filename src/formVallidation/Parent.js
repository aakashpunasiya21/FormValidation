import React from 'react';
import Detail from './Details';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default class User extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.click,this.props.chnge)
        
    };
    submit(){
        if(this.props.click.name.length<6 && !(this.props.click.email.includes("@"))&&(!isNaN(this.props.click.mobile))){
         
        }
        else{
          alert(this.props.click.name,"Form Success")
          
        }
      } 
  render(){
        return (
            <>
            
            <Form onSubmit={()=>{this.submit()}}>
              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" id="name" onChange={this.props.chnge}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" id="email" onChange={this.props.chnge} />
              </Form.Group>
              <Form.Group className="mb-3" >
               <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" id="city" onChange={this.props.chnge} />
              </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile" id="mob" onChange={this.props.chnge} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

             {/* <Form onSubmit ={this.handleSubmit}>
                 <Form.Group className="mb-1" controlId ="exampleform">
                     <Form.Label>Name :</Form.Label><br/>
                     <Form.Control type ="name" value={this.state.Name} 
                 </Form.Group>
             </Form> */}
            
            
            </>
        )
    }
}
/*
 Validation Form 
 
import React from "react";

export class Form extends React.Component{
  constructor(){
    super()
    this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:""
    }
  }
  valid(){
    if(!this.state.name.includes("@")&& this.state.password.length<5){
      this.setState({nameError:"Invalid",passwordError:"length not less thab 5"})
    }
  }
  submit(){
    if(this.valid()){
      alert("Form Success")
    }
    
  }
  render(){
    return (
      <>
        
        <label>
          Name:
          <input type="text" name="name" onChange={(e)=>{this.setState({name:e.target.value})}} />
          <p>{this.state.nameError}</p>
        </label><br></br>
        <label>
          Password:
          <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} />
          <p>{this.state.passwordError}</p>
        </label><br></br>
        <button onClick={()=>this.submit()}>Submit</button>
     
        
      </>
    )
  }
}

}*/
