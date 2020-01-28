import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';


function List(props) {
    const data = props.comments;
    console.log("aaaaaa____________________________-");
    console.log(data);
    const comments = data.map(el => {
        return (
            <Comment 
                key={el.id}
                text={el.text}
                user={el.user}
                id={el.id}
            ></Comment>
        );
    });
  return (
    <div className="list">
        {comments}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(List);

