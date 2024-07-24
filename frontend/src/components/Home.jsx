import React from 'react';
import img1 from "../assets/full_stack.jpeg";
import img2 from "../assets/sql.png";
import img3 from "../assets/java.jpeg";
import img4 from "../assets/cpp.jpeg";
import img5 from "../assets/services_cpp.jpg";
import img6 from "../assets/services_full.jpg";
import img7 from "../assets/node.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";





const Home = () => {
  
  return (
    <>
      {/* home first part starts */}
      <div id="home">
        <div className="home-container">
          <main>

          </main>
        </div>
        <div className="text-container">
          <h4>Hi! Myself  </h4>
          <h1>ANIMESH CHOUDHURY</h1>
          <p>coding enthusiast,Biker,Gamer,Full Stack Developer</p>

        </div>
        <div className="img-container">

        </div>

      </div>

      {/* home first part ends */}


      {/* home Skills start */}


      <div className="skills-container" id="skills">
        <h1>SKILLS</h1>
        <div className="skills">
          <div className="full_stack">
            <img src={img1} className="card-img-top" alt="item1" />
            <div className="card-body">
              <p className="card-text">Skilled in both front-end and back-end development, capable of building complete web applications from scratch.</p>
            </div>
          </div>

          <div className="cpp">
            <img src={img4} className="card-img-top" alt="item2" />
            <div className="card-body">
              <p className="card-text">Proficient in C++ programming, specializing in performance-critical applications and system-level software.</p>
            </div>
          </div>

          <div className="java">
            <img src={img3} className="card-img-top" alt="item3" />
            <div className="card-body">
              <p className="card-text">Experienced in Java for developing scalable, high-performance applications across various platforms.</p>
            </div>
          </div>

          <div className="sql">
            <img src={img2} className="card-img-top" alt="item4" />
            <div className="card-body">
              <p className="card-text">Expertise in MySQL for designing, managing, and optimizing relational databases..</p>
            </div>
          </div>


        </div>

      </div>




      {/* home Skills end */}


      {/* home about us starts*/}
      <div className="home3" id="about">
        <div>
          <h1>Who I am?</h1>
          <p>
            My name is Animesh Choudhury, and I am a proficient software developer
            with a robust skill set in C++, Java, and Full Stack Development. My
            journey in programming began with C++, where I honed my skills in
            creating efficient and high-performance applications. This language
            has given me a strong foundation in systems programming and resource management.
            With Java, I have developed a deep understanding of object-oriented
            principles and design patterns, allowing me to build robust and
            maintainable applications. My experience spans various Java
            frameworks and tools, enabling me to tackle complex problems
            and deliver sophisticated solutions. As a Full Stack Developer, I
            possess a comprehensive understanding of both front-end and back-end
            technologies. I am adept at working with modern front-end
            frameworks like React and Angular, crafting user-friendly interfaces
            and ensuring seamless user experiences. On the back-end, my knowledge
            includes server-side languages, databases, and API integration, allowing
            me to create dynamic and responsive web applications.
            My versatility and dedication to continuous learning make me a valuable asset
            in the tech industry. I pride myself on bridging the gap between front-end
            aesthetics and back-end functionality, ensuring that I deliver complete and cohesive software projects.
          </p>
        </div>
      </div>
      {/* home about us ends*/}





      {/* home Services  ends*/}



      <div className="home4" id="services">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          interval={1000}
          style={{ width: "100%", height: "95vh" }}
        >
          <div>
            <img src={img5} alt="Item1" style={{ width: "100%", height: "100vh" }} />
            <button className="legend" style={{ cursor: "pointer" }} >
              <a href="#contact" >Click to Hire a C++ developer</a>
            </button>
          </div>
          <div>
            <img src={img6} alt="Item1" style={{ width: "100%", height: "100vh" }} />
            <button className="legend" style={{ cursor: "pointer" }} >
              <a href="#contact" >Click to Hire a Full Stack developer</a>
            </button>
          </div>
          <div>
            <img src={img7} alt="Item1" style={{ width: "100%", height: "95vh" }} />
            <button className="legend" style={{ cursor: "pointer" }} >
              <a href="#contact" >Click to Hire a Backend developer</a>
            </button>
          </div>
        </Carousel>
      </div>

      {/* home Services  ends*/}



      {/* home Conatct end */}

      <div className="contact" id="contact">
        <main>
          <h1>Contact Us</h1>

          <form action='/post' method='post'>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="Abc" name='name' />
            </div>

            <div>
              <label>Email</label>
              <input type="email" required placeholder="Abc@xyz.com" name='email' />
            </div>
            <div>
              <label>Message</label>
              <input
                type="text"
                required
                placeholder="Tell us about your query..."
                name='message'
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </main>
      </div>

      {/* home Contact end */}







      {/* home Footer end */}
      <footer>
        <div>
          <h1>DODO</h1>
          <p>@all right reserved</p>
        </div>

        <div>
          <h5>Follow Us</h5>
          <div>
            <a href="https://www.linkedin.com/in/animesh-choudhury-71a122234/" target={"blank"}>
              Linkdein
            </a>
            <a href="https://www.instagram.com/animesh_ch0udhury/?hl=en" target={"blank"}>
              Instagram
            </a>
            <a href="https://github.com/Darkdodo004" target={"blank"}>
              Github
            </a>
          </div>
        </div>
      </footer>
      {/* home Footer end */}







    </>
  )
}

export default Home;