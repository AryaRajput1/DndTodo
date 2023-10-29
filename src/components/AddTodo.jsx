import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addSingleTodo = () => {
    dispatch(
      addTodo({ title: title, description: description, status: "PENDING" })
    );
  };

  return (
    <div className="max-w-6xl flex items-center justify-center flex-col md:flex-row gap-3 mx-auto">
      <input
        value={title}
        type="text"
        placeholder="Title"
        className="bg-white border-2 p-3 w-4/5 md:w-1/5 lg:w-1/5 text-black placeholder-gray-500 border-gray-300 outline-none rounded-md"
        onChange={onChangeTitle}
      />

      <input
        value={description}
        type="text"
        placeholder="Description"
        className="bg-white border-2 p-3  w-4/5 md:w-2/5 lg:w-2/5 text-black placeholder-gray-500 border-gray-300 outline-none rounded-md"
        onChange={onChangeDescription}
      />

      <button
        onClick={addSingleTodo}
        className="w-4/5 md:w-1/5 lg:w-1/5 text-center bg-violet-500 p-3 rounded-md text-white text-lg border hover:border-violet-500 hover:bg-white hover:text-violet-500 "
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
