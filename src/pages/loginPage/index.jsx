import { useEffect, useState } from "react";
import Button from "../../components/Button";
import styles from "./loginPage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [check, setcheck] = useState(false);
  const [obj, setObj] = useState({});
  const [blink, setBlink] = useState(false);
  const [type, setType] = useState("password");

  const ob = { login: "", password: "" };

  const handleValue = (e, setter) => {
    setter(e.target.value);
  };

  const handleCheck = (e) => {
    setcheck(e.target.checked);

    console.log(check);
  };

  const handleClick = () => {
    ob.login = login;
    ob.password = password;
    setObj(ob);

    console.log(check);
    console.log(obj);
  };

  const handleBlink = (e) => {
    e.preventDefault();
    setBlink(!blink);
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Ex.: m3u_logiN"
          onChange={(e) => handleValue(e, setLogin)}
          value={login}
        />
        <div className={styles.form__div}>
          <input
            className={styles.form__input}
            type={type}
            placeholder="Ex.: 123"
            onChange={(e) => handleValue(e, setPassword)}
            value={password}
          />
          <button onClick={handleBlink} className={styles.form__div__blink}>
            {blink ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>

        <Button
          style={styles.form__button}
          value="login"
          onclick={handleClick}
        />

        <div className={styles.label}>
          <input
            type="checkbox"
            name="remeber"
            id="remember"
            checked={check}
            onChange={handleCheck}
          />
          <label className={styles.label__label} htmlFor="remember">
            Me lembre
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
