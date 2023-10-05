import styles from './shared-ui.module.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUi!</h1>
      <div>  Hello I am shared ui in react monorepo</div>
    </div>
  );
}

export default SharedUi;
