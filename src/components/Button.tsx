interface Props {
  children: string;
  // optional value and protecting invalid value
  // only these values are allowed for the color
  btnType?: 'primary' | 'secondary' | 'info';
  onClick: () => void;
}

const Button = ({ children, btnType = 'primary', onClick }: Props) => {
  // btnType = "btn btn-" + btnType; // this is another approach to color the btn

  return (
    <button type="button" className={'btn btn-' + btnType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
