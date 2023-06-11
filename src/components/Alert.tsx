import { ReactNode } from "react";

interface Props {
  children: ReactNode; // the props names need to be children and ReactNode need to be imported
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
