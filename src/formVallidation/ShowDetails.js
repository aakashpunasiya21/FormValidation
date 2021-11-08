import React from "react";
import Detail from "./Details";
import { render } from "react-dom";
export default class Show extends React.Component{
    constructor(){
        super();
      
    }
 render()
    {
        return(
            <>
                <p>{this.props.s.name}</p>
            </>
        )
    }
}