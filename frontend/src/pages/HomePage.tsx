import { Link } from "react-router-dom"
import "./../styles/home.css"

export function HomePage(){
    return (<><div className="homepage">
      <main>
        <section id="image">
                <img src="home.jpg" alt="Library Image"/>
        </section>

        </main>
      
        <h1>Library Management System</h1>
        <h4>Established 1982.</h4>

        <p>Library Management System is a web application which provides an easy way to manage the books and the users in the library. It provides a user-friendly interface to the librarian to add, update and delete the books and the users.
</p>
        <div id="additional-text">
        <p>It also provides a user-friendly interface to the users to check the books they have borrowed and to return the books.</p>
        </div>
        <br></br>
        <Link className="button" to={"/books"}>Start Browsing Books</Link>
        </div>
                <footer>&copy; Library Management System</footer>
                </>
        )
}