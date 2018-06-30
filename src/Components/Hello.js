import React from 'react';

class Hello extends React.Component{
    state = {
        color: "rgb(0, 0, 0)",
    };

    clickHandler = () => {
        this.setState({color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})` });
        
    }
    render() {
        return (
            <h1 style={{color:this.state.color}} onClick = {this.clickHandler}>Hello World</h1>
        );
    }
       
    
}
export default Hello;