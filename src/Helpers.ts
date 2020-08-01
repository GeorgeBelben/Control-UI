import { tuple } from '@Utils';

const Themes = tuple( 'light', 'dark' );
export type Theme = typeof Themes[number];

export type ControlUIOptions = {
  defaultTheme?: Theme
}

const lightCssVars = `
  body:not(.control-ui-dark) {
    --theme-primary: #0072c6;
    --background-color-0: #ffffff;

    background-color: var(--background-color-0);
  }
`;

const darkCssVars = `
  body.control-ui-dark {
    --theme-primary: #0072c6;
    --background-color-0: #32383C;

    background-color: var(--background-color-0);
  }
`;

export const InitControlUI = (options: ControlUIOptions ) => {

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(lightCssVars));
  style.appendChild(document.createTextNode(darkCssVars));

  if ( options.defaultTheme && options.defaultTheme === 'dark' ) {
    setDarkTheme('dark');
  }

  document.body.classList.add('🎛️');


}

export const setDarkTheme = (theme: Theme) => {
  const bodyClasses = document.body.classList;
  if ( theme === 'dark' ) {
    if ( ! bodyClasses.contains('🎛️-dark') ) {
      bodyClasses.add('🎛️-dark');
    }
  } else {
    if ( bodyClasses.contains('🎛️-dark') ) {
      bodyClasses.remove('🎛️-dark');
    }
  }
}

export const toggleDarkTheme = () => {
  const bodyClasses = document.body.classList;
  if ( ! bodyClasses.contains('🎛️-dark') ) {
    bodyClasses.add('🎛️-dark');
  } else {
    bodyClasses.remove('🎛️-dark');
  }
}