import React from 'react'
import PropTypes from 'prop-types'

function ActionPage({ page, children }) {
  return (
    <div className={`${page}__action`}>
      {children}
    </div>
  )
}

ActionPage.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default ActionPage
