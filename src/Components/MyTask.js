import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import { AuthContext } from "../UserContext/UseContext";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { toast } from "react-hot-toast";

const MyTask = () => {
  const { user } = useContext(AuthContext);

  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/task?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  //   delete
  const deleteButton = (event) => {
    const agree = window.confirm(`Are you sure to delete ${event.title}`);
    if (agree) {
      fetch(`http://localhost:5000/delete/${event._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`Successfully Deleted ${event.title}`);
          refetch();
        })

        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  // complete button
  const updateButton = (event) => {
    fetch(`http://localhost:5000/update/${event._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application.json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("updated");
        refetch();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //  update
  const update = (event) => {};

  return (
    <div className="">
      <h1 className="text-sm md:text-3xl font-bold text-center my-10 text-green-400">
        {user?.displayName} Task
      </h1>
      {tasks?.map((task) => (
        <div
          key={task._id}
          className="shadow-xl  hover:border-0 hover:duration-500 duration-500 hover:shadow-2xl bg-base-100 rounded p-4 my-10"
        >
          <div className="flex justify-between my-4">
            <div>
              <h1 className="text-3xl font-bold">{task.title}</h1>
              {task?.picture ? (
                <PhotoProvider>
                  <PhotoView src={task.picture}>
                    <img className="w-8 h-8" src={task.picture} alt="" />
                  </PhotoView>
                </PhotoProvider>
              ) : (
                ""
              )}
            </div>

            <div className="flex justify-center items-center">
              <Link
                onClick={() => updateButton(task)}
                title="Press to Complete Task"
                className="btn  hover:shadow-xl  p-2 rounded mr-2"
              >
                Pending
              </Link>
              <Link
                to={`/update/${task._id}`}
                title="Press to Update"
                className="btn  p-2 hover:shadow-xl rounded mr-2"
              >
                <GrDocumentUpdate />
              </Link>
              <Link
                onClick={() => deleteButton(task)}
                title="Press to Delete"
                className="btn  p-2 hover:shadow-xl rounded mr-2"
              >
                <FaTrashAlt></FaTrashAlt>
              </Link>
            </div>
          </div>
          <h3 className="text-sm md:text-xl font-medium">{task?.task}</h3>
          <h1>Added: {task?.time}</h1>
        </div>
      ))}
    </div>
  );
};

export default MyTask;
