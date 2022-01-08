import React, { useState } from 'react'

const Update = ({initialList}) => {
    const [list, setList] = useState(initialList);
    const handleChangeCheckbox = id => {
        setList(
          list.map(item => {
            if (item.id === id) {
              return { ...item, complete: !item.complete };
            } else {
              return item;
            }
          })
        );
      };

    return (
        <div>
            <p>welcome updatelist</p>
            <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleChangeCheckbox(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
        </div>
    )
}

export default Update;