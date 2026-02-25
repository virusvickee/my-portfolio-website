import React from 'react'
import { event } from '../utils/analytics'

const AnalyticsWrapper = ({ children }) => {
  // Track button clicks
  const trackClick = (elementName) => {
    event({
      action: 'click',
      category: 'engagement',
      label: elementName
    })
  }

  // Track form submissions
  const trackFormSubmit = (formName) => {
    event({
      action: 'submit',
      category: 'form',
      label: formName
    })
  }

  // Track downloads
  const trackDownload = (fileName) => {
    event({
      action: 'download',
      category: 'file',
      label: fileName
    })
  }

  // Track external links
  const trackExternalLink = (url) => {
    event({
      action: 'click',
      category: 'external_link',
      label: url
    })
  }

  return <>{children}</>
}

export { AnalyticsWrapper, event }
