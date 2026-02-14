import React, { useEffect,useRef } from "react";
import Todoservices from "../../src/Services/Todoservices";
import toast from "react-hot-toast";

const DeleteTodo = ({ task, setDeletetodo, getusertask }) => {
  const id = task?._id;
  const hasRun = useRef(false);

  useEffect(() => {
    if (!id|| hasRun.current) return;
    hasRun.current = true;

    const deletetodo = async () => {
      try {
        await Todoservices.deletetodo(id);
        console.log("Deleted")
        toast.success("Todo Deleted");
        setDeletetodo(false);
        getusertask();
      } catch (error) {
        console.log(error);
        toast.error(error.message||"Can't Delete");
      }
    };

    deletetodo();
  }, [id, setDeletetodo]);

  return null;   // this component has no UI
};

export default DeleteTodo;
