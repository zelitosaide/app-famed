export default function MenuItem({ icon, title, action, isActive = null, disabled = null}) {
  return (
    <button
      className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
      disabled={disabled}
    >
      <i className={`ri-${icon}`} />
    </button>
  );
}