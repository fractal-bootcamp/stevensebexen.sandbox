import './NavItem.css';

interface NavItemProps {
  onClick: (viewName: string) => void;
  viewName: string;
  currentView: string;
}
export function NavItem(props: NavItemProps) {
  return (
    <div className={['nav-item', props.currentView === props.viewName ? ' active' : ''].join('')} onClick={() => props.onClick(props.viewName)}>
      <p className='nav-item-text'>{props.viewName}</p>
    </div>
  );
}
