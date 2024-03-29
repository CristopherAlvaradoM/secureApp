import { MouseEventHandler } from 'react';

const Button = ({ onClick, label }: {onClick : MouseEventHandler<HTMLButtonElement>, label: string}) => {

  return (
    <button 
      onClick={onClick} 
      className="flex w-full justify-center rounded-md bg-buttonPrimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      {label}
    </button>
  );
};

export default Button;