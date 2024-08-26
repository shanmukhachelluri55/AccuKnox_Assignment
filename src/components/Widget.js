import '../styles/Widget.css'

function Widget(props) {
    return (
      <>
        <div className='widget'>
            {
                props.data.isActive &&
                <>
                    <div className='widgetName'>
                        <b>
                            {props.data.widgetName}
                        </b>
                    </div>
                    <div className='widgetBody'></div>
                </>
            }
            {
                !props.data.isActive &&
                <>
                    <div className='addWidget d-flex justify-content-center align-items-center'>
                        <button className="iconButton btn btn-light mx-2" onClick={() => props.setAddingWidgets(true)}>
                            <i className="fa fa-add"></i>
                            <span>
                                Add Widget
                            </span>
                        </button>
                    </div>
                </>
            }
        </div>
      </>
  );
}

export default Widget;