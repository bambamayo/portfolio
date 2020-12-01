import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon() {
  return <FontAwesomeIcon className={iconClass} icon={type} />
}

Icon.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  iconClass: PropTypes.string,
}
