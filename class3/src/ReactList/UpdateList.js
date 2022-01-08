import React from 'react'
import Update from './Test/Update';

const initialList = [
    { id: 'a', name: 'Learn React', complete: false },
    { id: 'b', name: 'Learn Firebase', complete: false },
    { id: 'c', name: 'Learn GraphQL', complete: false },
  ];


const UpdateList = () => {
    return (
        <div>
            <Update initialList={initialList}/>
        </div>
    )
}

export default UpdateList;