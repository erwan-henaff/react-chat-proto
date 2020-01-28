const initialState = {
  comments : [
                { 
                    text : "何時か?",
                    user : 1,
                    id : 1578569468679
                },
                { 
                    text : "それはいい考えだ",
                    user : 0,
                    id : 1578569468680
                },
                { 
                    text : "買い物 行くか?",
                    user : 1,
                    id : 1578569468681
                }
            ]
};

const chatReducer = (state = initialState, action) => {
  if (action.type === 'ADD_COMMENT') {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    console.log(action.payload);

    const newLine = [{
          text: action.payload.text,
          user: action.payload.user,
          id: new Date().getTime()
        }];
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

    let newArr = state.comments;
    let fin= newLine.concat(newArr);

    console.log(fin)
    
    return Object.assign({}, {comments: fin});

    
    
  }

//   if (action.type === 'ADD_TODO') {
// //     const newItem = {
// //       status: false,
// //       _id: new Date().getTime(),
// //       text: action.payload,
// //       date: '2020-01-26T20:52:04.184Z',
// //       __v: 0
// //     };

// //     state.items.push(newItem);
// //     return Object.assign({}, state);
// //   }
//       return state
// //   return { ...state };
//   }
  return { ...state };
};

export default chatReducer;