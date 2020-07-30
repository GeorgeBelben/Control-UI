import React from 'react';

export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={(e) => props.onClick(e)}>{props.children}</button>
    )
}