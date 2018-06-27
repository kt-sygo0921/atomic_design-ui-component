import React from 'react';

export const TrashCanIcon = ({
    height = 20,
    width = 20,
    onClick,
    className="",
    ...props,
}) => {
    if(onClick) className += 'clickable';
    return <div>
        <img src="/icons/trash-can.svg" 
        alt="" 
        height={height} 
        width={width} 
        className={className}
        onClick = {onClick}
        {...props} 
        />
        <style jsx>{`
            .clickable {
                cursor: pointer;
            }
        `}
        </style>
    </div>
};

