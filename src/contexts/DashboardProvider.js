import React, { createContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState([]);
  const [addingWidgets, setAddingWidgets] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
        setDashboardData,
        addingWidgets,
        setAddingWidgets,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;