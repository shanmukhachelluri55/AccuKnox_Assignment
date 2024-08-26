import '../styles/DashboardHeader.css'

function DashboardHeader(props) {
  return (
    <>
        <div className="row dashboardHeader">
            <div className="col text-start left-menu">
                <span>
                    <b>CNAPP Dashboard</b>
                </span>
            </div>
            <div className="col text-end right-menu">
                <button className="iconButton btn btn-light mx-2" onClick={() => props.setAddingWidgets(true)}>
                    <span>
                        Add Widget
                    </span>
                    <i className="fa fa-add"></i>
                </button>
                <button className="iconButton btn btn-light mx-2">
                    <i className="fa fa-refresh"></i>
                </button>
                <button className="iconButton btn btn-light mx-2">
                    <i className="fas fa-ellipsis-vertical"></i>
                </button>
                <button className="iconButton blueIconButton btn btn-light mx-2">
                    <i className="fas fa-clock"></i>
                    <span className="seperator"></span>
                    <span>
                        Last 2 days
                    </span>
                    <i className="fas fa-angle-down"></i>
                </button>
            </div>
        </div>
    </>
  );
}

export default DashboardHeader;