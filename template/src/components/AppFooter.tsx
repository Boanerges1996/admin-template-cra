import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://boanerges.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boanerges UI
        </a>
        <span className="ms-1">&copy; 2022 Luxstek</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://luxstek.com" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
