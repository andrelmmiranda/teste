import { useEffect, useState } from 'react';
import styles from './catsPage.module.scss'

const CatsPage = () => {
  const statusList = [
    100, 101, 102, 200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304,
    305, 306, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
    413, 414, 415, 416, 417, 500, 501, 502, 503, 504, 505,
  ];

  const [status, setStatus] = useState("");
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    statusList.includes(Number(value))
      ? setStatus(Number(value))
      : value == ""
      ? setStatus("")
      : setStatus(404);
  };

  return (
    <div >
      <form action="" className={styles.form}>
        <div>
          <input type="text" onChange={handleValue} value={value}  className={styles.form__input}/>
          <button onClick={handleClick} className={styles.form__button}>botão</button>
        </div>
      </form>
      {!!(status !== "") && <img src={`https://http.cat/${status}`}  className={styles.img}/>}
    </div>
  );
};

export default CatsPage;