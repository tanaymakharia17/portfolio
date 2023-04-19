import './css/Projects.css';

const Project = (props) => {
  const { projectName, video, discription, githubLink, img } = props;

  return (
    <div className='Projects__project'>
      <h2>{projectName}</h2>
      {
        video ? <video className='Projects__video' controls>
          <source src={video} />
          Sorry, your browser doesn't support videos.
        </video> :
          (img && <img className="Projects__video" src={img} />)
        
      }
      <div className='Projects__description'>
        <p>{discription.paragraph}</p>
        <ul>
          {discription.points.map((text, key) => {
            return <li key={key}>{text}</li>;
          })}
        </ul>
      </div>
      <div>
        <a className='Projects__a' href={githubLink} target="_blank" rel="noreferrer">
          <div className="fa fa-github" /> Code Link
        </a>
      </div>
    </div>
  );
};

const Projects = ({projects}) => {
  return (
    <div id="Projects">
      <h1>Projects</h1>
      {projects.map((item, key) => {
        return (
          <>
            <Project key={key} {...item} />
            {key + 1 !== projects.length ? <hr /> : null}
          </>
        );
      })}
    </div>
  );
};

export default Projects;
