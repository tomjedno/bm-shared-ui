import React from "react";

export function Modal({ open, title, onClose, children, footer, className = "" }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal-panel ${className}`.trim()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          {onClose && (
            <button className="btn btn-ghost btn-sm modal-close" onClick={onClose} aria-label="Zavřít">
              ×
            </button>
          )}
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
