export interface ThemeProps {
  colors: {
    black: string;
    white: string;
    green: string;
    red: string;
    blue: string;

    inputBgColor: string;
    borderColor: string;
  };
}

export const theme: ThemeProps = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    green: '#008000',
    red: '#ff0000',
    blue: '#6666ff',

    inputBgColor: '#fef5da',
    borderColor: '#436795',
  },
};
