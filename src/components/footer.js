import React, {Component} from 'react';
import {CnxtConsumer} from '../index';

class Footer extends Component{
    state = {
        name: ""
    }
    changed = (evt) => {
        this.setState({name:evt.target.value});
        console.log(this.state.name);
    }
    componentDidMount()
    {
        this.setState({name:"shubham"});
    }
    render(){
        return(
            <CnxtConsumer>
                {(context) => (
                    <div>
                        {context.animals.map(animal => {
                            return (
                                <div key = {animal}>
                                    <h1>{animal}</h1>
                                </div>
                            );
                        })}
                    </div>
             )}
            </CnxtConsumer>
        )
    }

}
export default Footer;