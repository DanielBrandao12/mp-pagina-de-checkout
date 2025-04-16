import React from 'react';
import { CreditCard, CircleDollarSign, ScanQrCode } from 'lucide-react';

interface NavProps {
    selected:number,
  onSelect: (index:number) => void; 
}

const NavPag: React.FC<NavProps> = ({  selected, onSelect }) => {
  const listOptions = [
    { title: 'Cartão de crédito', icon: <CreditCard size={20} /> },
    { title: 'Boleto', icon: <CircleDollarSign size={20} /> },
    { title: 'Pix', icon: <ScanQrCode size={20} /> },
  ];

  return (
    <div className="bg-gray-100 flex justify-evenly items-center gap-10 w-125 h-10 rounded">
      {listOptions.map((item, index) => (
        <div
          key={index}
          onClick={()=>onSelect(index)} 
          className={`inline-flex items-center gap-2  text-base cursor-pointer px-2 py-1 pr-5 rounded
            ${selected === index ? 'text-black bg-white' : 'hover:text-black hover:bg-white text-gray-500'}`}
        >
          {item.icon}
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default NavPag;
