import React, { useState } from 'react';
import NavPag from '../navPag';


const OptionPay: React.FC= () => {
    const [verifySelected, setVerifySelected] = useState<number>(0);



  return (
    <div className="flex flex-col gap-10 ">
        <div>
             <h1 className='text-5xl font-bold'>Finalizar Compra</h1>
             <h2 className='text-xl text-gray-500'>Escolha seu método de pagamento preferido</h2>
        </div>
        <NavPag selected={verifySelected} onSelect={setVerifySelected} />
    </div>
  );
};

export default OptionPay;
