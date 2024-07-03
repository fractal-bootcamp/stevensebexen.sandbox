import { useState } from "react";
import { EditableText } from "../components/EditableText";
import './EditableTextView.css';

const DEFAULT_FIELDS = {
  'first': 'Howdy partner!',
  '2nd': 'You can edit this text...',
  'variable3': 'And the result will be saved.'
}

export function EditableTextView() {
  const [fields, setFields] = useState<Record<string, string>>(DEFAULT_FIELDS);
  const [result, setResult] = useState<string>('');

  function setField(key: string, newValue: string) {
    const fields0 = {...fields};
    fields0[key] = newValue;
    setFields(fields0);
  }

  function done() {
    const result0 = JSON.stringify(fields);
    setResult(result0);
  }
  return (
    <div className="editable-form">
      {Object.entries(fields).map(record => 
        <EditableText key={record[0]} value={record[1]} label={record[0]} onChange={newValue => setField(record[0], newValue)}/>
      )}
      <button className="submit-button" onClick={done}>Submit</button>
      {result && <p className="result">JSON: {result}</p>}
    </div>
  )
}