import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const submitTheHandle = () => {
    if (inputText.trim() === "") return;
    let obj = { id: Math.random(), name: inputText, edit: false };
    setTodoList([...todoList, obj]);
    setInputText("");
  };
  const changeHandelar = (id, value) => {
    const change = todoList.map((item) =>
      item.id === id ? { ...item, name: value } : item
    );
    setTodoList(change);
  };

  const delteHanle = (id) => {
    const del = todoList.filter((item) => item.id !== id);
    setTodoList(del);
  };
  const editHandle = (id) => {
    const edit = todoList.map((item) =>
      item.id === id ? { ...item, edit: true } : item
    );
    setTodoList(edit);
  };
  const updateHadler = (id) => {
    const update = todoList.map((item) =>
      item.id === id ? { ...item, edit: false } : item
    );
    setTodoList(update);
  };

  let filterTodoList = todoList;
  if (searchQuery.length >= 3) {
    filterTodoList = todoList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="w-1/2 m-auto">
      <input
        className="border p-2 m-4 rounded-lg border-cyan-700   w-[100%]"
        type="text"
        placeholder="search Notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <br />
      <input
        className=" border    rounded-lg m-2 p-2 ring-1  border-cyan-700 w-[100%]"
        type="text"
        placeholder="write your notes"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className=" border  rounded-xl p-2  bg-green-600 w-[100%]  text-white"
        onClick={submitTheHandle}
      >
        Add
      </button>
      {filterTodoList.map((item) => (
        <div key={item.id}>
          {item.edit ? (
            <input
              type="text"
              className=" border p-2 rounded-lg border-cyan-700  "
              placeholder="Update Todo"
              value={item.name}
              onChange={(e) => changeHandelar(item.id, e.target.value)}
            />
          ) : (
            <div className=" absolute text-2xl ">
              
              <h1 className="mt-4">{item.name}</h1>
              
            </div>
          )}
          <div className="flex  relative  ml-28  justify-center">
            {item.edit ? (
              <button
                className="border rounded-xl bg-green-600 p-2 ms-2 text-fuchsia-50"
                onClick={() => updateHadler(item.id)}
              >
                update
              </button>
            ) : (
              <button
                className="border rounded-xl bg-green-600 p-4 m-2 text-fuchsia-50  hover:bg-yellow-400"
                onClick={() => editHandle(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </button>
            )}
            <button
              className="border p-2 bg-red-500 rounded-xl m-2  text-fuchsia-50"
              onClick={() => delteHanle(item.id)}
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
          <hr className="  border  bg-green-300" />
        </div>
      ))}
    </div>
  );
}

export default App;
