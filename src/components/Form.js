import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: '', user: 1};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleC = this.handleC.bind(this);

  }

  handleChange(e) {
    this.setState({ 
      value: e.target.value,
      user: this.state.user
    });
  };

  handleC(e) {
    if(e.target.value === "TATSUMAKI") {
      this.setState({
        value: this.state.value,
        user: 0
      })
    }
    else {
      this.setState({
        value: this.state.value,
        user: 1
      })
    }
    
    console.log(this.state.user);

  };

  handleSubmit(event) {
    console.log('Ready to send: ' + this.state);
    event.preventDefault();
    this.props.addNewLine(this.state.value, this.state.user)
    this.setState({ value: '' });
  }



  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} autocomplete="off">
        <label className="label_form">
          <input
            type="text"
            className="text_field"
            name="text_field"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input className="btn btn_submit" type="submit" value="SEND" />

        <label className="btn btn_self">
          <input 
            type="checkbox" 
            value="TATSUMAKI" 
            checked={!this.state.user}
            onChange={this.handleC}
          />
          <div>TATSUMAKI</div>
        </label>

        <label className="btn btn_self">
          <input 
            type="checkbox" 
            value="FUBUKI" 
            checked={this.state.user}
            onChange={this.handleC}
          />
          <div>FUBUKI</div>
        </label>

  
  
      </form>
    );
  }
  
}

export default Form;