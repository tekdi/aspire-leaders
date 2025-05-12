import styles from './index.module.css';

export function dashboard() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome learner-app Dashboard 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
