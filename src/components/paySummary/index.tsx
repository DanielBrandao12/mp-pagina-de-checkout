import React from "react";

import { ShoppingBag } from "lucide-react";

const PaySummary: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-bold">Resumo do Pedido</h1>
        <h2 className="text-2xl text-gray-500">Detalhes da sua compra</h2>
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center p-8 bg-gray-100 ">
          <ShoppingBag size={35} color="gray" />
        </div>

        <div>
          <div className="flex items-end gap-5">
            <h1 className="text-2xl font-bold">Produto Premium</h1>
            <h1 className="text-2xl font-bold">R$279,90</h1>
          </div>
          <h2 className="text-xl text-gray-500">Quantidade: 1</h2>
        </div>

      </div>

      <div className="border-1 border-gray-100" />

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-medium">Subtotal</span>
          <span className="font-medium">R$ 279,90</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-medium">Frete</span>
          <span className="font-medium">R$ 9,90</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 font-medium">Desconto</span>
          <span className="font-medium text-green-700">R$ 9,90</span>
        </div>
      </div>

      <div className="border-1 border-gray-100" />
      
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Total</span>
          <span className="text-2xl font-bold">R$279,90</span>
        </div>

        <div className="flex flex-col text-sm gap-3">
          <span className="text-gray-400 font-medium">
            * Frete calculado para CEP: 01000-000
          </span>
          <span className="text-gray-400 font-medium">
            * Entrega estimada: 3-5 dias úteis
          </span>
        </div>
        <div className="flex flex-col  gap-3">
          <span className="text-2xl font-bold">
            Métodos de pagamento aceitos:
          </span>
          <div className="flex gap-5 text-sm">
            <span className="bg-gray-100 py-1 px-2 rounded">Visa</span>
            <span className="bg-gray-100 py-1 px-2 rounded">Mastercard</span>
            <span className="bg-gray-100 py-1 px-2 rounded">Elo</span>
            <span className="bg-gray-100 py-1 px-2 rounded">Boleto</span>
            <span className="bg-gray-100 py-1 px-2 rounded">Pix</span>
          </div>
        </div>
    </div>
  );
};

export default PaySummary;
