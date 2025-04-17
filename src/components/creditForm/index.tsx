import InputPadrao from "../input";
import React from "react";
import { CreditCard, LockKeyhole } from "lucide-react";

const CreditForm: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <InputPadrao
        title="Número do cartão"
        placeholderInput="0000 0000 0000 0000"
        typeInput="text"
        colorText="text-gray-500"
        icon={<CreditCard />}
      />
      <InputPadrao
        title="Nome do cartão"
        placeholderInput="Nome como está no cartão"
        typeInput="text"
        colorText="text-gray-500"
        icon={null}
      />
      <div className="flex flex-row justify-between">
        <InputPadrao
          title="Validade"
          placeholderInput="MM/AA"
          typeInput="text"
          colorText="text-gray-500"
          icon={null}
        />
        <InputPadrao
          title="CVV"
          placeholderInput="123"
          typeInput="text"
          colorText="text-gray-500"
          icon={null}
        />
      </div>
      <label className="font-medium">Parcelas</label>
      <select className="border-1 border-solid border-gray-300  rounded-xs h-10 p-2">
        <option value={""} disabled>
          Escolha uma opção
        </option>
        <option value={""}>1 x de R$:299,90 (sem juros)</option>
        <option value={""}>2 x de R$:149,95 (sem juros)</option>
      </select>
      <label className="font-medium inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 text-black accent-black border-2 border-black rounded"
        />
        <span className="text-black text-sm">
          Salvar cartão para compras futuras
        </span>
      </label>
      <div className="flex items-center justify-center  gap-3 font-medium text-sm  text-gray-400 mt-3">
        <LockKeyhole size={18} />
        <span>Seus dados estão protegidos com criptografia SSL</span>
      </div>
    </div>
  );
};

export default CreditForm;
