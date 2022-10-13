import React from 'react';

const PostError = ({error,setError}) => {
    return (
        <div className='posterror'>
            <div className='error_text'>{error}</div>
            <button className='blue_btn' onClick={()=>setError("")}>Try Again</button>
        </div>
    );
};

export default PostError;