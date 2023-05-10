import React, { useRef } from 'react'
import { getBEMClasses } from '../shared/utils'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const SideBar = (props) => {
  const { additionalClassName, onClose, footer, children } = props
  const content = useRef(null)
  const documentRoot = document.body

  return ReactDOM.createPortal(
    <div className={getBEMClasses('sidebar', {}, additionalClassName)} ref={content}>
      <div className='sidebar__content' >
        <div className='sidebar__close' onClick={onClose} >X</div>
        <div className='sidebar__children'>{children}</div>
        <div className='sidebar__footer'>{footer}</div>
      </div>
    </div>,
    documentRoot
  )
}

SideBar.defaultProps = {
  onClose : () => {}
}

SideBar.propTypes = {
  additionalClassName: PropTypes.string,
  onClose: PropTypes.func,
  footer: PropTypes.node
}

export  default SideBar