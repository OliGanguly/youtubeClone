import React from 'react';
import Button from './Button';

function ButtonList() {
    const list=["All","Gaming","Songs","Live","News","Soccer","Cricket","Photography","Cooking","Wedding","Dance","Computer Scrience"]
    return (
        <div className='flex'>
              {
                list.map((item,i)=>{
                    return <Button obj={item} key={i} />;
                })
            }
        
        </div>
    );
}

export default ButtonList;