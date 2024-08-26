import '../styles/Dashboard.css';
import React, {useState, useEffect, useContext} from 'react'
import Loader from '../components/Loader'
import WidgetsRow from '../components/WidgetsRow'
import NotificationModal from '../components/NotificationModal'
import axios from 'axios'
import urls from '../utils/apiConfig'
import DashboardHeader from '../components/DashboardHeader'
import AddWidget from '../components/AddWidget'
import DashboardContext from '../contexts/DashboardProvider'

const DashboardPage = () => {
    const [isLoading,setIsLoading] = useState(false)

    const [notificationOpen,setNotificationOpen] = useState(false)
    const [notificationMssg,setNotificationMssg] = useState("")

    const { dashboardData, setDashboardData, addingWidgets, setAddingWidgets } = useContext(DashboardContext);
  
    const fetchDashboardData = async () => {
        setIsLoading(true);
        try {
        const response = await axios.get(urls.getDashboardData);
        console.log(response.data)
        setDashboardData(response.data);
        } catch (error) {
        console.error("Error loading dashboard data:", error);
        setNotificationOpen(true);
        setNotificationMssg("Error While Loading Dashboard Data!!!");
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData()
    }, []);

    return (
        <>
            <NotificationModal notificationOpen={notificationOpen} setNotificationOpen={setNotificationOpen} notificationMssg={notificationMssg} />
            <Loader isLoading={isLoading}/>
            <AddWidget />
            <div className="dashboard">
                <div className="container">
                    <DashboardHeader  setAddingWidgets={setAddingWidgets} />
                    {
                        dashboardData &&
                        dashboardData.map((dashboardRow, index) => {
                            return <WidgetsRow key={index} data={dashboardRow} setAddingWidgets={setAddingWidgets} />
                        })
                    }
                </div>
            </div>
        </>
    );

}

export default DashboardPage;