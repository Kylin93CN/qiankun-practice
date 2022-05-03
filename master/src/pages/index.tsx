import styles from './index.less';

export default function IndexPage() {
  window.a = 'index';
  return (
    <div className="index-wrap">
      <div className={styles.title}>
        <h1> Page index</h1>
        <h1>window.a====>{window.a}</h1>
      </div>
    </div>
  );
}
