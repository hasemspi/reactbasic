import React, { useState } from 'react';
import { ColorPicker } from 'material-ui-color';

const paletteObj = {
    red: '#ff0000',
    blue: '#0000ff',
    green: '#00ff00',
    yellow: 'yellow',
    cyan: 'cyan',
    lime: 'lime',
    gray: 'gray',
    orange: 'orange',
    purple: 'purple',
    black: 'black',
    white: 'white',
    pink: 'pink',
    darkblue: 'darkblue',
  };

const Color = () => {
    const [color, setColor] = useState('#000000');
    console.log(color);
    return (
        <div>
            <ColorPicker
             defaultValue="transparent"
              palette={paletteObj} 
              value={color} onChange={(e) => setColor(e.target.value) }
              />
        </div>
    );
};

export default Color;