import React from "react";

import { Info } from "lucide-react";
import InputPadrao from "../input";

const BankSlip: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex  items-center gap-5 p-7 w-125 border-1 border-red-400 text-red-400">
        <Info size={20} />
        <p className="text-sm font-medium">
          O boleto bancário vence em 3 dias úteis. Após o pagamento, a
          compensação pode levar até 3 dias úteis.
        </p>
      </div>
      <InputPadrao
        title="CPF"
        placeholderInput="000.000.000-00"
        typeInput="text"
        colorText="text-gray-500"
        icon={null}
      />
      <InputPadrao
        title="Nome Completo"
        placeholderInput="Nome completo do pagador"
        typeInput="text"
        colorText="text-gray-500"
        icon={null}
      />
    </div>
  );
};

export default BankSlip;
