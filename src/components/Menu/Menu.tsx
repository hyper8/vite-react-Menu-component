import React, { createContext, CSSProperties, useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizon' | 'vertical'
type SelectedCallback = (selectedIndex: number) => void

interface IMenuContext {
  index: number;
  mode ?: MenuMode;
  onSelect ?: SelectedCallback;
  defaultOpenSubMenus ?: string[];
  children ?: React.ReactNode;
}

export interface MenuProps {
  defaultIndex ?: number;
  className ?: string;
  mode ?: MenuMode;
  style ?: CSSProperties;
  children ?: React.ReactNode;
  onSelect ?: SelectedCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props: any) => {
  const { defaultIndex, className, mode, style, children, onSelect } = props;
  const [ currentActive, setActive ] = useState(defaultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical' : mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) onSelect(index)
  }
  const passedContent: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect : handleClick
  }
  return(
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContent}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizon'
}

export default Menu