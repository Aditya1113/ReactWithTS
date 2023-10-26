// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Menu = () => {
//   const [role, setRole] = useState<string | null>("");

//     const route = useLocation()
//     const navigate = useNavigate()

//   useEffect(() => {
//     let myrole: string | null = sessionStorage.getItem("role");
//     setRole(myrole);
//   },[route.pathname]);

//   const logout=()=>{
//         sessionStorage.removeItem('role')
//         alert('logout successfully')
//         navigate('/login')
//   }

//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Link to="#" className="brand-logo">
//           K O E N I G
//         </Link>
//         <ul id="nav-mobile" className="right hide-on-med-and-down">
//           {role === "admin" || role === "guest" ? (
//             <>
//               <li>
//                 <Link to="/home">Home</Link>
//               </li>
//               {role === "admin" && (
//                 <>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/users">Users</Link>
//                 </li>
//                 </>
//               )}
//               <li>
//                 <button className="orange darken-4 waves-effect btn btn-small" onClick={logout}>Logout</button>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Menu;

import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const [role, setRole] = useState<string | null>("");

  const route = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    let myrole: string | null = sessionStorage.getItem("role");

    setRole(myrole);
  }, [route.pathname]);

  const logout = () => {
    sessionStorage.removeItem("role");

    alert("logout successfully");

    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="#" className="brand-logo">
          K O E N I G
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {role === "admin" || role === "guest" ? (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>

              {role === "admin" && (
                <>
                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/users">Users</Link>
                  </li>

                  <li>
                    <Link to="/user/create">AddUser</Link>
                  </li>
                </>
              )}

              <li>
                <button
                  className="orange darken-4 waves-effect btn btn-small"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
