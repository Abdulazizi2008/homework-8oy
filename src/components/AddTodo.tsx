import React, { useState, FormEvent, ChangeEvent } from "react";
import { Plus } from "lucide-react";
import Input from "./Input";
import Button from "./Button";
import { ADD_TODO, useTodo } from "../store/context";

const AddTodo: React.FC = () => {
  const { dispatch } = useTodo();
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <Input
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo"
        className="flex-grow"
      />
      <Button type="submit">
        <Plus size={16} />
      </Button>
    </form>
  );
};

export default AddTodo;
