import React from 'react';

function Comment(props) {
    let url_self ="https://vignette.wikia.nocookie.net/onepunchman/images/d/d2/Tatsumaki_Manga.png/revision/latest?cb=20190907232753";

    let classDistinction = 'comment classdistinction' + props.user;
    let timestamp = '' + new Date(props.id).toLocaleTimeString();

    if (props.user === 1) url_self = 'https://66.media.tumblr.com/6e01500d78ced2b83b8147b674d72871/tumblr_psf6weMmZ51ucpcboo1_400.png'
    

    return (
        <div className="comment" className={classDistinction}>
            <div className="commentText">{props.text}</div>
            <div className="commentImg">
                <img src={url_self} alt="here you should see an image" />
            </div>
            <div className="commentTime"><span>{timestamp}</span></div>
        </div>
    );
}

export default Comment;