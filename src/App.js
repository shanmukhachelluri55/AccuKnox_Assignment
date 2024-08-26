import './App.css';
import DashboardPage from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { DashboardProvider } from './contexts/DashboardProvider'

const App = () => (
    <div className="App">
      <DashboardProvider>
        <DashboardPage />
      </DashboardProvider>
    </div>
)

export default App;
