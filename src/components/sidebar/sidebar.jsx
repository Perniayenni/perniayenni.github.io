import React, { useRef, useEffect } from 'react'
import { getBEMClasses } from '../shared/utils'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const SideBar = (props) => {
  const { additionalClassName, onClose, footer, children, onClickOutside } = props
  const refBox = useRef(null);
  const content = useRef(null)
  const documentRoot = document.body

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refBox.current && !refBox.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);

  return ReactDOM.createPortal(
    <div className={getBEMClasses('sidebar', {}, additionalClassName)} ref={content}>
      <div className='sidebar__content' ref={refBox} >
        <div className='sidebar__close' onClick={onClose} >X</div>
        <div className='sidebar__children'>{children}</div>
        <div className='sidebar__footer'>{footer}</div>
      </div>
    </div>,
    documentRoot
  )
}

SideBar.defaultProps = {
  onClose : () => {},
  onClickOutside: () => {}
}

SideBar.propTypes = {
  additionalClassName: PropTypes.string,
  onClose: PropTypes.func,
  onClickOutside: PropTypes.func,
  footer: PropTypes.node
}

export  default SideBar