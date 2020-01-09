import React from 'react';
import Comment from './Comment'

function List(props) {
    const data = props.list;
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

export default List;

// class List extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             data:"",
//         };
//     }
    

//     render () {
//                 const data = this.props.list;

//                 const comments = data.map(el => {
//                     return (
//                         <Comment 
//                             key={el.id}
//                             text={el.text}
//                             user={el.user}
//                         ></Comment>
//                         // <ToDoItem
//                         //   key={el.id}
//                         //   data={el}
//                         //   handleUpdate={this.updateItem}
//                         // ></ToDoItem>
//                     );
//                 });

//         return (
//             <div className="list">
//                 {comments}

//                 {/* <Comment></Comment>
//                 <Comment></Comment>
//                 <Comment></Comment>
//                 <Comment></Comment>
//                 <Comment></Comment>
//                 <Comment></Comment>
//                 <Comment></Comment> */}
//             </div>
//         );
//     }
  
// }
