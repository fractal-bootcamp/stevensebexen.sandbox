import { ChangeEvent } from "react"
import './EditableText.css';

interface EditableTextProps {
  onChange: (value: string) => void;
  value: string;
  label: string;
}
export function EditableText(props: EditableTextProps) {
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value);
  }

  return (
    <div className="editable-text-row">
      <p className="editable-text-label">{props.label}</p>
      <input className="editable-text" value={props.value} onChange={onChange} />
    </div>
  )
}