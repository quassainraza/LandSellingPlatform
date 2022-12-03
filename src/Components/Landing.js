import React from "react";
import { Thumbnail } from 'react-bootstrap';
import grass from '../img/grass.png'


class Landing extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (<div className="text-center landing" >
        <h3>Blockchain Project</h3>
        <p >Login or Sign up to continue</p>
       
   
      </div>);
    }
}


  export default Landing;