import React from 'react';
import { Link } from "react-router-dom";

function Home(){
    return (
          <div>
             <h1>Welcome to Student Page</h1>
             <Link to={"/students"}>Student Lists</Link>
          </div>
    );
}

export default Home;