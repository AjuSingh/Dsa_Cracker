import React from 'react'
import "./notes.css"
// import all images from images folder
import OS from "./Images/OS.jpg";
import Dbms from "./Images/Dbms.jpg";
import CN from "./Images/CN.png";
import Sql from "./Images/Sql.jpg";

function Notes() {
    return (
        <div className="card-container">
            <div className="cards-notes">
                <div class="card-notes">
                    <img class="card-img-top" src={Dbms} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">DBMS</h5>
                        <p class="card-text">It provides a systematic method of creating, updating, retrieving, and storing information in a database. </p>
                        <a href="/dbms" class="btn btn-dark">Read🚀</a>
                    </div>
                </div>

                <div class="card-notes">
                    <img class="card-img-top" src={OS} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Operating System</h5>
                        <p class="card-text">Operating Systems is core subject of Computer Science, it has many applications in dealing with computer system to make it more easier to use.</p>
                        <a href="/os" class="btn btn-dark">Read🚀</a>
                    </div>
                </div>

                <div class="card-notes">
                    <img class="card-img-top" src={CN} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Computer Network</h5>
                        <p class="card-text">Computer network is one of the core subjects of Computer Science which deals with networking.</p>
                        <a href="/cn" class="btn btn-dark">Read🚀</a>
                    </div>
                </div>


                <div class="card-notes">
                    <img class="card-img-top" src={Sql} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">SQL</h5>
                        <p class="card-text">SQL programming skills are highly desirable and required in the market, as there is a massive use of DBMS in almost every software application</p>
                        <a href="/sql" class="btn btn-dark">Read🚀</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes;