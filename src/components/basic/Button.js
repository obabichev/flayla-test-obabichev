import React from 'react';
import './Button.css';

export const Button = (props) => {
    // const className = `core-button ${green ? 'core-button-green' : ''} ${blue ? 'core-button-blue' : ''}`;

    // const onClickInternal = (event) => {
    //     event.stopPropagation();
    //     if (onClick) {
    //         onClick();
    //     }
    // };
    console.log('[obabichev] props', props);

    return <button className="button-basic"
                   {...props}>
    </button>;
};
