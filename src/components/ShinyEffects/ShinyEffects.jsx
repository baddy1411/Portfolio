import React from 'react';

const ShinyEffect = ({ left, right, top, size = 500 }) => {
    const positionStyles = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1,
        position: 'absolute',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
    };

    if (left !== undefined) {
        positionStyles.left = `${left}px`;
    }

    if (right !== undefined) {
        positionStyles.right = `${right}px`;
    }

    return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
