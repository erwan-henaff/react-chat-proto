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

    const newLine = [{
          text: action.payload.text,
          user: action.payload.user,
          id: new Date().getTime()
        }];

    let newArr = state.comments;
    let fin= newLine.concat(newArr);

    return {comments:fin}

    
    
  }

  return { ...state };
};

export default chatReducer;