import React from 'react';

export const Icon = ({icon, width = 16, height = 16}) => <div style={{width, height}}>
    <img alt="icon"
         width={width} height={height}
         src={`/icons/${icon}.png`}/>
</div>;
