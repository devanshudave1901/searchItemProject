import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [searchWord, setWord] = useState();
  const [resultElement, setResultElement] = useState(false);
  const [itemResult, setItemResult] = useState([]);
  const [emptyArray, setEmptyArray] = useState(false);

  let item = ["Milk2", "Milk1", "Chocolate", "Mango", "Grapes", "Moco"];
  let itemList;
  let empty;
  useEffect(() => {
    // setItemResult([]);
    let variable = typeof searchWord === "undefined";

    if (searchWord != "" && variable == false) {
      for (let i = 0; i < item.length; i++) {
        let itemElement = [item[i].split("").toString()];

        let searchItem = [searchWord.split("").toString()];

        for (let k = 0; k <= searchItem.length; k++) {
          for (let j = 0; j <= itemElement.length; j++) {
            if (itemElement[j].includes(searchItem[k])) {
              if (!itemResult.includes(item[i])) {
                console.log(itemResult);
                setResultElement(true);
                itemResult.push(item[i]);
              }
            } else if (searchWord == item[i]) {
              setResultElement(true);
              itemResult.push(item[i]);
            } else {
              setResultElement(true);
              setItemResult([]);
            }
            break;
          }
        }
      }
      console.log(itemResult);
    } else {
      setResultElement(false);
      setItemResult([]);
    }
  }, [searchWord]);
  function ListItem({ item }) {
    return <li>{item}</li>;
  }
  return (
    <>
      <div className=" rounded-lg bg-slate-800	p-20 m-20">
        <h6 className="my-5">Search Items</h6>
        <div className="pointer-events-none absolute  inset-y-5 left-0 flex items-center pl-3"></div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Any Food Items"
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
      {resultElement && (
        <div className="border-5 bg-slate-800 rounded-lg  shadow-xl ring ring-green-500 shadow-green-500/80 m-5 bg-blend-exclusion	 ring-lime-950	hover:shadow-indigo-500/40">
          <h2 className="text-base antialiased line-clamp-4	text-centre	text-lime-500	truncate text-wrap indent-8	">
            {itemResult.length === 0 ? (
              <p>No items available</p>
            ) : (
              itemResult.map((item, index) => (
                <ul>
                  {" "}
                  <ListItem key={index} item={item} />
                </ul>
              ))
            )}
          </h2>
        </div>
      )}
    </>
  );
}

export default App;
