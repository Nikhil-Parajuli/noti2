import React from 'react';
import { ArrowLeft, Gift } from 'lucide-react';

interface AirdropPanelProps {
  onClose: () => void;
}

const AirdropPanel: React.FC<AirdropPanelProps> = ({ onClose }) => {
  const airdrops = [
    {
      id: 1,
      protocol: 'Example Protocol',
      amount: '1000 XYZ',
      endDate: '2024-03-31',
      status: 'active'
    },
    {
      id: 2,
      protocol: 'New DeFi Project',
      amount: '500 ABC',
      endDate: '2024-04-15',
      status: 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <button onClick={onClose} className="mr-2 p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">Available Airdrops</h2>
      </div>

      <div className="space-y-4">
        {airdrops.map((airdrop) => (
          <div key={airdrop.id} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">{airdrop.protocol}</h3>
                  <p className="text-sm text-gray-600">Amount: {airdrop.amount}</p>
                  <p className="text-sm text-gray-600">Ends: {airdrop.endDate}</p>
                </div>
              </div>
              <span className={`text-sm px-2 py-1 rounded-full ${
                airdrop.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {airdrop.status}
              </span>
            </div>
            <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Claim Airdrop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirdropPanel;