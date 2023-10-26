import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [userDetails, setUserDetails] = useState<any>([]);
  const [imagePreviews, setImagePreviews] = useState<any>({});


  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteRecord = (id: number) => {
    axios.delete(`http://localhost:3001/users/${id}`).then((res) => {
      alert(`record no. ${id} deleted`);
      getData();
    });
  };


  return (
    <div className="container">
      <table className="table centered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th colSpan={2}>Action(s)</th>
          </tr>
        </thead>

        <tbody>
          {userDetails ? (
            userDetails.map((user: any) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/users/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Link
                    to={`/user/edit/${user.id}`}
                    state={user}
                    className="btn btn-small orange waves-effect waves-light"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  {/* <Link to={`/user/delete/${user.id}`} className="btn btn-small red waves-effect waves-light">delete</Link> */}
                  <button
                    onClick={() => deleteRecord(user.id)}
                    className="btn btn-small red waves-effect waves-light"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>
                <div className="preloader-wrapper active center-align">
                  <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left ">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
