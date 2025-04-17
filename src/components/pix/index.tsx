import React from "react";

import { ScanQrCode, RefreshCcw } from "lucide-react";
import InputPadrao from "../input";
const Pix: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex  items-center gap-5 px-3 py-2 w-125 border-1 border-green-700 text-green-700">
        <ScanQrCode size={20} />
        <p className="text-xs font-medium">
          Pagamento instantâneo! Após o pagamento via PIX, a confirmação é
          imediata.
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center items-center p-5 border-1 border-gray-100 rounded">
          <div className="flex justify-center items-center p-8 bg-gray-100 ">
            <ScanQrCode size={90} />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center p-2 border-1 border-gray-100 hover:bg-gray-100 cursor-pointer">
          <RefreshCcw size={15} />
          <span className="font-medium text-sm">Atualizar QR code</span>
        </div>
      </div>
      <InputPadrao
        title="Ou copie e cole o código PIX:"
        placeholderInput="00020126580014BR.GOV.BCB.PIX0136a629534e-7e14-rrrerererrffdffa1-..."
        typeInput="text"
        colorText="text-black"
        icon={null}
      />
      <div className="flex w-125">
        <p className="text-gray-400 text-sm font-medium text-center px-2">
          Abra o aplicativo do seu banco, escolha a opção PIX e escaneie o QR
          code ou cole o código acima para realizar o pagamento.
        </p>
      </div>
    </div>
  );
};

export default Pix;
