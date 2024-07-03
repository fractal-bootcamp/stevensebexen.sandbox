import { useState } from 'react'
import './App.css'
import { NavItem } from './components/NavItem'
import { EditableTextView } from './views/EditableTextView'

const views: Record<string, (props?: any) => JSX.Element> = {
  'Editable Text': EditableTextView
}

function App() {
  const [view, setView] = useState<string>('none');

  const CurrentView = views[view] ?? undefined;

  return (
    <>
      <div className='nav-bar'>
        {Object.entries(views).map(record => <NavItem key={record[0]} viewName={record[0]} onClick={setView} currentView={view} />)}
        {CurrentView && <CurrentView />}
      </div>
    </>
  )
}

export default App
