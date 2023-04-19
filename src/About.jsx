import "./css/About.css";


const About = ({about}) => {
  return (
    <div id="About">
      <h1>{about.name}</h1>
      {
        about.intro.map((item, key) => {
          return(
            <>
            <p key={key}>
              {item}
            </p>
            </>
          );
        })
      }
      <hr />
      <div id="About__education">
        <h1>Education</h1>
        {
          about.education.map(  (item, key) => {
            const { name, degree, courseWork, year, img} = item;
            return (
              <>
                <div key={key} className="About__education-school">
                  <div className="About__education-school-img-wrapper">
                    <img className="About__education-school-img" src={img} />
                  </div>
                  <div className="About__education-school-desc">
                    <b>{name}</b>
                    <br />
                    {degree}
                    <br />
                    Relevant Coursework: {courseWork}
                  </div>
                  <div className="About__education-school-year">{year}</div>
                </div>
                {key + 1 !== about.education.length ? <hr /> : null}
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default About;
