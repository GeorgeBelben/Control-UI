import React from 'react';
import { omit, tuple, classNames } from '@Utils';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'text');
export type ButtonType = typeof ButtonTypes[number];

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: ButtonType,
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ( props ) => {

  const baseButtonProps = omit(props, [ 'buttonType', 'loading', 'className' ]);


  const baseClassName = '🎛️-button';
  let componentClassName: string;


  switch( props.buttonType ) {

    case 'primary': componentClassName = baseClassName + '--primary';
      break;

    case 'ghost': componentClassName = baseClassName + '--ghost';
      break;

    case 'text': componentClassName = baseClassName + '--text';
      break;

    default: componentClassName = baseClassName;
      break;

  }

  const loadingClassModifier: string = props.loading ? 'is-loading' : '';

  const classnames = classNames([ componentClassName, props.className, loadingClassModifier ]);

  return (
    <button {...baseButtonProps} className={ classnames }>
      { props.children }
      <div className="🎛️-button__loading-indicator">Loading</div>
    </button>
  );

}