import React from 'react';
import List from './List'
import Form from './Form'


class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments : [
                { 
                    text : "買い物 行くか?",
                    user : 1,
                    id : 1578569468679
                }
            ]
        };
    }

    handleAddNewLine = (value,user1) => {
        const newLine = {
          text: value,
          user: user1,
          id: new Date().getTime()
        };
        console.log("3333");
        console.log(newLine);
        let bla = this.state.comments;
        bla.unshift(newLine)
        console.log(bla);
        this.setState({comments: bla});
        console.log("---")
        console.log(this.state.comments);

    };

    render () {
        return (
            <div className="main">
                <List list={this.state.comments}></List>
                <Form addNewLine={this.handleAddNewLine}></Form>
            </div>
        );
    }
  
}

export default Main;