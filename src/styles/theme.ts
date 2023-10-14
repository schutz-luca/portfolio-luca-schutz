const colors = {
  blue: '#00dbff',
  purple: '#b25bff',
  orange: '#ff8b56',
  white: '#ffffff',
  black: '#181818',
  darkGray: '#2b2b2b'
};

const fonts = {
  bold: 500,
  bolder: 700,
  medium: 400,
  primary: '"Unbounded", Roboto, sans-serif',
  secondary: '"Montserrat", Roboto, sans-serif'
};

const gradient = {
  primary: `
  linear-gradient(-45deg, #d1235a, #6B1CA9, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  `,
  rainbow: `
  linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 400% 400%;
  `
};

const dark = {
  id: 'dark',
  background: '#101010',
  backgroundSoft: '#1e1e1e90',
  text: '#ffffff',
  progress: gradient.primary
};

const light = {
  id: 'light',
  background: '#ffffff',
  backgroundSoft: '#efefef90',
  text: colors.darkGray,
  primary: '#00b3ce',
  progress: colors.darkGray
};

const colorful = {
  id: 'colorful',
  background: gradient.primary,
  backgroundSoft: '#ffffff99',
  text: '#ffffff',
  progress: colors.white
};

const theme = {
  colors,
  fonts,
  gradient,
  transition: 'all ease-in-out 0.2s',
  primary: colors.blue,
  secondary: colors.purple
};

const themeDark = { ...theme, ...dark };
const themeLight = { ...theme, ...light };
const themeColorful = { ...theme, ...colorful };

export { themeDark, themeLight, themeColorful };