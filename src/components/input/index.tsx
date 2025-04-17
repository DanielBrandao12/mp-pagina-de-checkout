import React, { ReactNode } from 'react';


interface InputProps {
   typeInput: string,
   placeholderInput: string,
    title: string,
    icon:ReactNode,
    colorText:string;
}

const InputPadrao: React.FC<InputProps> = ( { title, placeholderInput, typeInput, colorText, icon}) => {

    return(
      
            <div className='flex flex-col gap-5 font-medium'>
                <label >{title}</label>
                <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {icon}
          </span>
        )}
        <input
          type={typeInput}
          placeholder={placeholderInput}
          className={`w-full border border-gray-300 rounded px-3 py-2 ${icon ? 'pl-10' : ''} ${colorText}`}
        />
      </div>
            </div>
      
    )
}


export default InputPadrao;