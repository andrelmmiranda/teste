import { useEffect, useState } from "react";
import { Pagination, Typography } from "@mui/material";

const RandomUser = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  async function f() {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=3&seed=abc`
    );
    const result = await res.json();
    setData(result.results);
  }

  const handleChange = (e, value) => {
    setPage(value);
    f();
  };

  useEffect(() => {
    f();
  }, [page]);


  console.log(data);

  return (
    <div>
      {data.map((i) => (
        <div>
          <p>
            {i.name.first} {i.name.last}
          </p>
          <p>{i.email}</p>
          <p>{i.login.username}</p>
          <img src={i.picture.medium} alt="" />
        </div>
      ))}
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
    // <div>{data.map(i => console.log(i))}</div>
  );
};

export default RandomUser;
