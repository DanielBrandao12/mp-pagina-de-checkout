import React, { useState } from "react";
import Card from "../../components/card";
import Button from "../../components/button";

import CreditForm from "../../components/creditForm";
import NavPag from "../../components/navPag";

import BankSlip from "../../components/bankSlip";
import Pix from "../../components/pix";
import PaySummary from "../../components/paySummary";

const Payments: React.FC = () => {

  const [verifySelected, setVerifySelected] = useState<number>(0);

  return (
    <div className="min-h-screen w-full flex justify-center items-start gap-5 bg-gray-100 py-10">
      <Card>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">Finalizar Compra</h1>
          <h2 className="text-xl text-gray-500">
            Escolha seu método de pagamento preferido
          </h2>
        </div>
        <NavPag selected={verifySelected} onSelect={setVerifySelected} />
        {verifySelected === 0 ? (
          <CreditForm />
        ) : verifySelected === 1 ? (
          <BankSlip />
        ) : (
          verifySelected === 2 && <Pix />
        )}

        <Button title="Finalizar pagamento" />
      </Card>
      <Card>
        <PaySummary/>
      </Card>
    </div>
  );
};

export default Payments;
