import '../styles/WidgetsRow.css';
import Widget from './Widget';

function WidgetsRow(props) {
  const activeWidgets = props.data.list.filter(widget => widget.isActive);
  const totalSlots = 3;
  const placeholders = totalSlots - activeWidgets.length;

  return (
    <div className='widgetsRow container'>
      <div className='widgetCategory'>
        <b>{props.data.widgetCategory}</b>
      </div>
      <div className='widgets row'>
        {activeWidgets.map((widget, index) => (
          <div className='col-4' key={index}>
            <Widget data={widget} setAddingWidgets={props.setAddingWidgets} />
          </div>
        ))}
        {Array.from({ length: placeholders }).map((_, index) => (
          <div className='col-4' key={`placeholder-${index}`}>
            <Widget data={{ isActive: false }} setAddingWidgets={props.setAddingWidgets} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WidgetsRow;
