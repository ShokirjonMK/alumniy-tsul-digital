import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = (): React.JSX.Element => {

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5 grid grid-cols-3 gap-6">
          <div className="card col-span-3 bg-blue-600/20 h-48"></div>
          <div className="card rounded-3xl h-18">asd</div>
          <div className="card rounded-3xl h-18"></div>
          <div className="card rounded-3xl h-18"></div>
        </div>
        <div className="col-span-2 card">

        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 h-120 mt-6">
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Dashboard;