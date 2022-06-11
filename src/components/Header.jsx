import styles from './Header.module.css'

import ingiteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ingiteLogo} alt="logo" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  );
}