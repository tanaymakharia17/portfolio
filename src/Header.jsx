import { Link } from "react-router-dom";
import "./css/Header.css";


const Header = ({header}) => {
  return (
    <header id="Header">
      <div id="Header__name">
        <Link to="/">
          <h1>{header.name}</h1>
        </Link>
      </div>
      <div id="Header__profile-img-container">
        <img id="Header__profile-img" src={header.img} />
      </div>
      <div>
        <p>{header.description}</p>
      </div>
      <div id="Header__routes">
        <Link to="/">
          <div className="Header__routes-item">About</div>
        </Link>
        <Link to="/projects">
          <div className="Header__routes-item">Projects</div>
        </Link>
        <Link to="/skills">
          <div className="Header__routes-item">Skills</div>
        </Link>
        <Link to="/experience">
          <div className="Header__routes-item">Experience</div>
        </Link>

        <a href={header.resume_link} target="_blank" rel="noreferrer">
          <div className="Header__routes-item">Resume</div>
        </a>
      </div>
      <div id="Header__apply-note">
        {header.messageToRecruiter}
      </div>
      <div id="Header__profile-links">
        { 
          header.mailLink && 
          <a href={header.mailLink}>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
          </a>
        }
        {
          header.linkedinLink &&
          <a href={header.linkedinLink} target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />
          </a>
        }
        {
          header.githubLink &&
          <a href={header.githubLink} target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" />
          </a>
        }
        {
          header.codeforcesLink &&
          <a href={header.codeforcesLink} target="_blank">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--N2_RJe5R--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg" />
          </a>
        }
        {
          header.codechefLink &&
          <a href={header.codechefLink} target="_blank">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb" />
          </a>
        }
      </div>
    </header>
  );
};

export default Header;
