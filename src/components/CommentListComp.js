import React from 'react';
import user from "../Images/user.jpeg";

function CommentListComp({comments}) {
   console.log("//////////////////////",comments)
    return (
       <div>
        {
            Object.values(comments).map((comment)=>{
                return <div className='flex items-center p-1 m-2 bg-gray-100 rounded-md'>
                    <img src={user} className='w-10 h-10' />
                    <div className='px-2'>
                        <h3>{comment.name}</h3>
                        <p>{comment.text}</p>
                    </div>
                    <div>
                    {Object.values(comment.reply).map((comment)=>{
                        return <CommentListComp comments={comment}/>
                    })}
                </div>
                    </div>
            })
        }
        {/* {
            comments&&comments.map((comment)=>{
                return  <div className='flex items-center p-1 m-2 bg-gray-100 rounded-md'>
                <img src={user} className='w-10 h-10' />
                <div className='px-2'>
                    <h3 className='font-bold'>{comment.name}</h3>
                    <p>{comment.text}</p>
                </div>
                <div>
                    {comment.reply.map((comment)=>{
                        return <CommentListComp comments={comment} />
                    })}
                </div>
            </div>
            })
        } */}
       </div>
    );
}

export default CommentListComp;