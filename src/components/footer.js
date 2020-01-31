import React, {Component} from 'react';

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
        const animal = ['cat', 'dog', 'horse'];
        return <React.Fragment> 
            <h1>This my footer.</h1>
        <div>
        {animal.map(animal => {
            return (
                <div key={animal}>
                    <h1>{animal}</h1>
                </div>
            );
        })}
    </div>    
    
    </React.Fragment>
    }
}
export default Footer;