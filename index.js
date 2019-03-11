import React, { Component } from "react"; // import from react

import {
  render,
  Window,
  App,
  Box,
  Button,
  TextInput,
  Text,
  Dialog
} from "proton-native"; // import the proton-native components

let displayDefault = "";
class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: displayDefault
    };
  }
  _appendToCalc = value => {
    let newCalc;
    if (this.state.display === displayDefault) {
      newCalc = value;
    } else {
      newCalc = this.state.display + value;
    }
    this.setState({ display: newCalc });
  };

  _calculate = () => {
    try {
      let calculation = eval(this.state.display);
      this.setState({ display: calculation });
    } catch (e) {
      Dialog("you enterd a ill-formmated equation, please start over");
    }
  };
  _clearAll = () => {
    this.setState({ display: displayDefault });
  };
  render() {
    // all Components must have a render method
    return (
      <App>
        {" "}
        // you must always include App around everything
        <Window
          title="Proton Native Rocks!"
          size={{ w: 300, h: 300 }}
          menuBar={false}
        >
          <Box>
            <Text>{this.state.display}</Text>
            <Button onClick={this._appendToCalc}>0</Button>
            <Button onClick={this._appendToCalc}>1</Button>
            <Button onClick={this._appendToCalc}>2</Button>
            <Button onClick={this._appendToCalc}>3</Button>
            <Button onClick={this._appendToCalc}>4</Button>
            <Button onClick={this._appendToCalc}>5</Button>
            <Button onClick={this._appendToCalc}>6</Button>
            <Button onClick={this._appendToCalc}>7</Button>
            <Button onClick={this._appendToCalc}>8</Button>
            <Button onClick={this._appendToCalc}>9</Button>
            <Button onClick={this._appendToCalc}>+</Button>
            <Button onClick={this._appendToCalc}>-</Button>
            <Button onClick={this._appendToCalc}>*</Button>
            <Button onClick={this._appendToCalc}>/</Button>
            <Button onClick={this._appendToCalc}>(</Button>
            <Button onClick={this._appendToCalc}>)</Button>
            <Button onClick={this._calculate}>=</Button>
            <Button onClick={this._clearAll}>Clear all</Button>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
