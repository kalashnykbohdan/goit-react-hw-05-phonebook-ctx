import React from 'react';

export const themeConfig = {
    light: {
        headerBg: '#F7B30C',
        fontColor: 'black',
        bodybg: 'white',

    },
    dark: {
        headerBg: '#626262',
        fontColor: 'white',
        bodybg: '#3c3c3c',

    }
};
const ThemeContext = React.createContext(themeConfig.light);
export default ThemeContext;