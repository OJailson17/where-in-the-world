import { useTheme } from 'next-themes';
import { BsMoon, BsMoonFill } from 'react-icons/bs';
import styles from './styles.module.scss';

export function Header() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <header className={styles.container}>
      <nav>
        <h1>Where in the World?</h1>
        <button onClick={changeTheme}>
          {theme === 'dark' ? (
            <BsMoonFill fontSize={17} />
          ) : (
            <BsMoon fontSize={17} />
          )}{' '}
          Dark Mode
        </button>
      </nav>
    </header>
  );
}
