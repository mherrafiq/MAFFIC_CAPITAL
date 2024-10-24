import React from 'react';

const FundsTable = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row justify-between items-start h-auto mt-24">
      {/* Table Section */}
      <div className="w-full md:w-1/2 shadow-md">
        <table className="min-w-full text-left">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-6 py-3">MEFIC Funds</th>
              <th className="px-6 py-3">Unit Price</th>
              <th className="px-6 py-3">YTD Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {/* Fund Row */}
            <tr className="border-b">
              <td className="px-6 py-4">SAR MURABAHA Fund</td>
              <td className="px-6 py-4">100.5836</td>
              <td className="px-6 py-4 text-red-500">5.972</td>
            </tr>
            {/* Highlighted Fund Row */}
            <tr className="bg-orange-400 text-white border-b">
              <td className="px-6 py-4">Saudi Freestyle Equity Fund</td>
              <td className="px-6 py-4">253.6258</td>
              <td className="px-6 py-4">2.74</td>
            </tr>
            {/* More Fund Rows */}
            <tr className="border-b">
              <td className="px-6 py-4">SAR MURABAHA Fund</td>
              <td className="px-6 py-4">100.5836</td>
              <td className="px-6 py-4 text-red-500">5.972</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4">Saudi Freestyle Equity Fund</td>
              <td className="px-6 py-4">253.6258</td>
              <td className="px-6 py-4 text-red-500">2.74</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Side - Call to Action */}
      <div className="w-full md:w-1/3 mt-12 md:mt-0 md:ml-8 text-left md:text-left flex flex-col items-center md:items-start">
        <div className="bg-gray-200 px-4 py-2 inline-block text-gray-800 font-semibold" style={{ background: '#E7E7E7' }}>
          MEFIC FUNDS
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mt-8 text-center md:text-left">
          To <span className="text-black">Find</span> The Best{' '}
          <span className="text-orange-500">MEFIC</span> Funds?
        </h2>
        <p className="text-gray-500 my-4 text-center md:text-left">
          Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically maintain visualize customer directed convergence without revolutionary ROI.
        </p>
        <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 mt-4 rounded">
          Book a Consultant
        </button>
      </div>
    </div>
  );
};

export default FundsTable;
