const colors = {
  blue: '#00dbff',
  purple: '#7848a0',
  white: '#ffffff'
}

const dark = {
  id: 'dark',
  background: '#181818',
  text: '#ffffff'
}

const light = {
  id: 'light',
  background: '#ffffff',
  text: '#2b2b2b',
  primary: '#00b3ce'
}

const colorful = {
  id: 'colorful',
  background: `
  linear-gradient(-45deg, #181818, #d1235a, #6B1CA9, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  `,
  text: '#ffffff'
}

const fonts = {
  bold: 500,
  bolder: 700,
  medium: 400,
  primary: '"Montserrat", Roboto, sans-serif'
}

const gradient = {
  rainbow: `
  linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 400% 400%;
  
  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
    animation: rainbow 18s ease infinite;
  
  @-webkit-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-moz-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @-o-keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  @keyframes rainbow { 
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
  }
  `
}

const theme = {
  colors,
  fonts,
  gradient,
  transition: 'all ease-in-out 0.2s',
  primary: colors.blue,
  secondary: colors.purple
}

const themeDark = { ...theme, ...dark }
const themeLight = { ...theme, ...light }
const themeColorful = { ...theme, ...colorful }

export { themeDark, themeLight, themeColorful }