import { useEffect, useState } from "react";

const RandomDogPage = () => {
  const [disable, setDisable] = useState(false);
  const [img, setImg] = useState("");

  async function f() {
    try {
      const res = await fetch("https://random.dog/");
      const data = await res.text();

      setImg(await matchImg(data));
      
    } catch (e) {
      console.error(e);
    }
    blockClick();
  }

  async function matchImg(data) {
    const regExp = /<img id="dog-img" src="(.*)"/;
    return data.match(regExp)[1];
  }

  function blockClick() {
    setDisable(true);

    setTimeout(() => {
      setDisable(false);
    }, 1000);
  }

  return (
    <div>
      <input type="button" value="refresh" onClick={f} disabled={disable} />
      <div style={{ width: "100%", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {!!img && (
          <img
            style={{ width: "80%" }}
            src={`https://random.dog/${img}`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default RandomDogPage;
