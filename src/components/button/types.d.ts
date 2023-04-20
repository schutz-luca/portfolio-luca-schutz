export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
  outlined?: boolean;
}
