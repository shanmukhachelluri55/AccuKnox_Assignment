import '../styles/AddWidget.css';
import React, { useContext, useState, useEffect } from 'react';
import { Box, Tabs, Tab, Button } from '@mui/material';
import DashboardContext from '../contexts/DashboardProvider'

const AddWidget = () => {
  const { dashboardData, setDashboardData, addingWidgets, setAddingWidgets } = useContext(DashboardContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    if (dashboardData) {
      setLocalData(dashboardData);
    }
  }, [dashboardData]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCancel = () => {
    setAddingWidgets(false);
  };

  const handleConfirm = () => {
    setDashboardData(localData);
    setAddingWidgets(false);
  };

  const checkboxStateChange = (widgetCategory, widgetIndex) => {
    const updatedData = localData.map(category => {
      if (category.widgetCategoryShortName === widgetCategory) {
        const updatedList = category.list.map((widget, index) =>
          index === widgetIndex
            ? { ...widget, isActive: !widget.isActive }
            : widget
        );
        return { ...category, list: updatedList };
      }
      return category;
    });

    setLocalData(updatedData);
  };

  return (
    <>
      {addingWidgets && (
        <div className="addWidgetContainer">
          <div className="addWidgetHeader">
            <div className="container-fluid">
              <div className="row">
                <div className="col text-start">
                  <span>
                    <b>Add Widget</b>
                  </span>
                </div>
                <div className="col text-end">
                  <i
                    className="fas fa-close"
                    onClick={handleCancel}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="addWidgetHeadline">
            Personalize your dashboard by adding the following widget
          </div>
          {localData && (
            <>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange}>
                  {localData.map((item, index) => (
                    <Tab key={index} label={item.widgetCategoryShortName} />
                  ))}
                </Tabs>
              </Box>
              <div role="tabpanel">
                {localData[selectedTab] &&
                  localData[selectedTab].list.map((item, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        checked={item.isActive}
                        onChange={() => checkboxStateChange(localData[selectedTab].widgetCategoryShortName, index)}
                      />
                      {item.widgetName}
                    </div>
                  ))}
              </div>
            </>
          )}
          <div className='buttons'>
            <Button variant="contained" onClick={handleConfirm}>
              Confirm
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddWidget;