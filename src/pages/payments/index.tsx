import React from 'react';
import Card from '../../components/card';
import Button from '../../components/button';

import OptionPay from '../../components/optionPay';
import { CreditCard } from 'lucide-react';
import CreditForm from '../../components/creditForm';

const Payments: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center gap-5 bg-gray-100 ">
            <Card>
                <OptionPay/>
            
                <CreditForm/>
                <Button title='Finalizar pagamento'/>
            </Card>
            <Card>
            <h2 className="text-lg font-bold">Título do Card</h2>
            <p>Esse é o conteúdo dentro do card.</p>
            </Card>
        </div>
    );
};

export default Payments;
