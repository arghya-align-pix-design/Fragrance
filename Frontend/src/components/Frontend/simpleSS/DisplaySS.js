import { useEffect, useState } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzVy8sg2HdEaCTNxF9wucryr-7Hg4FfRirMEYkg6szLyKzAsQxJk1Jb6X6jVp77i_KBtA/exec")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  },);

  return (
    <ul>
      {data.length > 1 ? (
        data.slice(1).map((row, index) => (
          <li key={index}>{row.join(" | ")}</li>
        ))
      ) : (
        <li>No Items Available</li>
      )}
    </ul>
  );
};


export default DisplayData;
