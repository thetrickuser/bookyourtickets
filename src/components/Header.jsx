import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-title']}>Book Your Tickets</div>
      <input type='text' className={styles.search} placeholder='Search for Movies...'/>
      <div className={styles['header-nav']}>
        <a className={styles['home-link']}>Home</a>
        <button className={styles['login-btn']}>Sign In</button>
      </div>
    </header>
  )
}

export default Header