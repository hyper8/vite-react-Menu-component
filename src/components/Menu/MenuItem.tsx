import React, { CSSProperties, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index : number;
  style ?: CSSProperties;
  disabled ?: boolean;
  className ?: string;
  children ?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props: any) => {
  const { index, disabled, style, className, children } = props;
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, { 
    'is-disabled': disabled, 
    'is-active': context.index === index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return(
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem