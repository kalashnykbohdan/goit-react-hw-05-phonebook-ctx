import React from 'react';
import PropTypes from 'prop-types';

function Wrapper({title, children}){
    return (
        <div>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

Wrapper.defaultProps = {
    title: '',
}

export default Wrapper;
