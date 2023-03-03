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
    'is-active': context.index === index,
    'is-opened': openMenu,
    'is-vertical': context.mode === 'vertical'
  })
  /* 点击展开菜单 */
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenu(!openMenu)
  }
  /* 鼠标移入展开菜单 */
  let timer:any = undefined;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(()=> {
      setMenu(toggle)
    }, 300)
  }
  /* 纵向菜单只响应点击事件 */
  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}
  /* 横向菜单只响应hover事件 */
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  }: {}
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
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
