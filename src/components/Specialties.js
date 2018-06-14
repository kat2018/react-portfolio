import React, { Component } from "react"
import Specialty from "./Specialty";

class Specialties extends Component {
    render (){
        return <div>
            <h1>I specialize in ...</h1>
            <Specialty />
            <Specialty />
            <Specialty />
          </div>;
    }
}
export default Specialties