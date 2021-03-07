import classnames from 'classnames';

import styles from './styles.module.css';

const buttonStatuses = {
  primary: styles.primary,
  default: styles.default,
};

export default function Button({
  type,
  children,
  status = 'default',
  handleClick,
  className,
}) {
  const customStyles = classnames(className, styles.container, buttonStatuses[status]);

  return (
    <button type={type} className={customStyles} onClick={handleClick}>
      {children}
    </button>
  );
}
