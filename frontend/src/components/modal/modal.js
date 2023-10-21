import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './modal.css'

const Modal = (props) => {
  return (
    <div className={`modal-container ${props.rootClassName} `}>
      <div>
        <DangerousHTML
          html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  rootClassName: '',
}

Modal.propTypes = {
  rootClassName: PropTypes.string,
}

export default Modal
