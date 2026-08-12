import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("index");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Navigation */}
      <nav>
        <button onClick={() => setPage("index")}>Index</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("course")}>Course</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>

      {/* Index Page */}
      {page === "index" && (
        <div className="container">
          <h2> BLDEA's College Jmakhandi</h2>
          <h2>Started year 1963</h2>
          <h3>located in Jamkahndi</h3>
          
        </div>
      )}

      {/* About Page */}
      {page === "about" && (
        <div className="container">
          <h1>About</h1>
          <p>The inspiring story of BLDEA
BLDEA was established on October 23, 1910, by Vachana Pitamaha Dr. P. G. Halakatti, a towering literary figure and a social reformer who dedicated his life for spreading the ideals of Shiva Sharanas.</p>
        </div>
      )}

      {/* Course Page */}
      {page === "course" && (
        <div className="container">
          <h1>Courses</h1>
          <ul>
            <li>IT</li>
            <li>PBI</li>
            <li>MAD</li>
            <li>SE</li>
          </ul>
        </div>
      )}

      {/* Contact Page */}
      {page === "contact" && (
        <div className="container">
          <h1>Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

           

            <button type="submit">Submit</button>
          </form>

          {/* Display entered information */}
          {submitted && (
            <div className="result">
              <h2>Your Information</h2>

              <p>
                <b>Name:</b> {name}
              </p>

              <p>
                <b>Email:</b> {email}
              </p>

             
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;