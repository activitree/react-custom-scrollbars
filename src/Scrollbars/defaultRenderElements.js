import React from 'react';
/* eslint-disable react/prop-types */

export function renderViewDefault(props) {
    return <div {...props}/>;
}

export function renderTrackHorizontalDefault({ style, ...props }) {
    const finalStyle = {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3,
        ...style
    };
    return <div style={finalStyle} {...props} />;
}

export function renderTrackVerticalDefault({ style, ...props }) {
    const finalStyle = {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3,
        ...style,
    };
    return <div style={finalStyle} {...props} />;
}

export function renderThumbHorizontalDefault({ style, ...props }) {
    const finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)',
        ...style,
    };
    return <div style={finalStyle} {...props} />;
}

export function renderThumbVerticalDefault({ style, ...props }) {
    const finalStyle = {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)',
        ...style
    };
    return <div style={finalStyle} {...props} />;
}
