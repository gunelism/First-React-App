import React from 'react';
import imageLoadersrc from './../../assets/loader.gif';

const Loader = props => (
    <div>
        <img style={{width: 75 }}
        alt = "Loading..."
        src   = {imageLoadersrc} />
    </div>
)

export default Loader;