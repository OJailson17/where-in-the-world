import { useTheme } from 'next-themes';
import { BsMoonFill } from 'react-icons/bs';
import styles from './styles.module.scss';

export function Header() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      return;
    }
  };

  return (
    <header className={styles.container}>
      <nav>
        <h1>Where in the World?</h1>
        <button onClick={changeTheme}>
          <BsMoonFill fontSize={17} /> Dark Mode
        </button>
      </nav>
    </header>
  );
}
