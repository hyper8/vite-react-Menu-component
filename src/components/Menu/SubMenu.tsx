import React, {FunctionComponentElement, useContext, useState} from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem';

export interface ISubmenuProps {
  index ?: number;
  className ?: string;
  title : string;
  children ?: React.ReactNode
}

const SubMenu: React.FC<ISubmenuProps> = ({index, className, title, children}) => {
  const [openMenu, setMenu] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenu(!openMenu)
  }

  /* 渲染下拉菜单里的内容 */
  const renderChildren = () => {
    const toggleClass = classNames('viking-submenu', className, {
      'menu-open': openMenu
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu'){
        return React.cloneElement(childElement, {index})
      }else{
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    return(
      <ul className={toggleClass}>
        {childrenComponent}
      </ul>
    )
  }
  return(
    <li key={index} className={classes}>
      <div className="submenu-title" onClick={handleClick}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
