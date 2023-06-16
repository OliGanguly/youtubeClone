import React from 'react';
import user from "../Images/user.jpeg"

function Comments(props) {
    // comments can be nested
    //reply is again the same object name,text and reply
    const commentsData = [
        {
            name: "Comment1",
            text: "comment 1 content",
            reply: [
                {
                    name: "Comment 1 reply",
                    text: "Comment 1 reply description",
                    reply: [
                        {
                            name: "Comment 1 nested reply",
                            text: "Comment 1 nested reply description",
                            reply: []
                        },
                        {
                            name: "Comment 1 nested reply",
                            text: "Comment 1 nested reply description",
                            reply: []
                        },
                        {
                            name: "Comment 1 nested reply",
                            text: "Comment 1 nested reply description",
                            reply: []
                        },
                        {
                            name: "Comment 1 nested reply",
                            text: "Comment 1 nested reply description",
                            reply: []
                        }
                    ]
                },
                {
                    name: "Comment 1 second reply",
                    text: "Comment 1 second reply description",
                    reply: [
                        {
                            name: "Comment 1 second nested reply",
                            text: "Comment 1 second nested reply description",
                            reply: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Comment2",
            text: "comment 2 content",
            reply: [
                {
                    name: "Comment 2 reply",
                    text: "Comment 2 reply description",
                    reply: [
                        {
                            name: "Comment 2 nested reply",
                            text: "Comment 2 nested reply description",
                            reply: [
                                {
                                    name: "Comment 2 nested reply",
                                    text: "Comment 2 nested reply description",
                                    reply: []
                                },
                                {
                                    name: "Comment 2 nested reply",
                                    text: "Comment 2 nested reply description",
                                    reply: []
                                }]
                        }
                    ]
                },
                {
                    name: "Comment 2 second reply",
                    text: "Comment 2 second reply description",
                    reply: [
                        {
                            name: "Comment 2 second nested reply",
                            text: "Comment 2 second nested reply description",
                            reply: [
                                {
                                    name: "Comment 2 second nested reply",
                                    text: "Comment 2 second nested reply",
                                    reply: [
                                        {
                                            name: "Comment 2 second nested reply",
                                            text: "Comment 2 second nested reply",
                                            reply: []
                                        }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Comment3",
            text: "comment 3 content",
            reply: [
                {
                    name: "Comment 3 reply",
                    text: "Comment 3 reply description",
                    reply: [
                        {
                            name: "Comment 3 nested reply",
                            text: "Comment 3 nested reply description",
                            reply: []
                        }
                    ]
                },
                {
                    name: "Comment 3 second reply",
                    text: "Comment 3 second reply description",
                    reply: [
                        {
                            name: "Comment 3 second nested reply",
                            text: "Comment 3 second nested reply description",
                            reply: []
                        }
                    ]
                }
            ]
        },]


    //We have created one comment, i have to loop it to create more comments
    const Comment = ({ data }) => {
        const { name, text, reply } = data;
        return <div className='flex items-center p-1 m-2 bg-gray-100 rounded-md'>
            <img src={user} className='w-10 h-10' />
            <div className='px-2'>
                <h3 className='font-bold'>{name}</h3>
                <p>{text}</p>
            </div>
        </div>
    }

    const CommentList = ({ comments, i }) => {
        return comments.map((comment) => (
            <>
                <Comment key={i} data={comment} />
                <div className='pl-5 ml-5 border border-l-gray-400'>
                 <CommentList key={i} comments={comment.reply} />
                </div>
            </>
        ))
    }
    // const CommentReply=({reply})=>{
    // return <div>
    //     <h1>{reply.name}</h1>
    //     <p>{reply.text}</p>
    // </div>
    // }
    return (
        <div>
            <h1 className='text-gray-400 mb-2'>Nested Comments Like Reddit</h1>
            {/* <Comment data={commentsData[0]}/> */}
            <CommentList comments={commentsData} />
            
             {/* {commentsData.map((comments)=>{
                return <div className='flex'>
                    <h1>{comments.name}</h1>
                    <p>{comments.text}</p>
                    <div className='pl-2 ml-2 border border-lime-100'>
                        {comments.reply.map((reply)=>{
                            return <CommentReply reply={reply}/>
                        })}
                    </div>
                </div>
             })} */}

        </div>
    );
}

export default Comments;