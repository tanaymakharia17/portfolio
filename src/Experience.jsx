import "./css/Experience.css";

const Block = (props) => {

  const { img, companyName, description, position } = props;
  return (
    <div className="Experience__block">
      <div className="Experience__upper-section">
        <div className="Experience__left-section">
          <img className="Experience__company-img" src={img} />
        </div>
        <div className="Experience__middle-section">
          <b>
            {companyName}
            <br />
            {position}
          </b>
        </div>
        <div className="Experience__right-section">
          <b>{description.time}</b>
        </div>
      </div>
      <div className="Experience__lower-section">
        <ul>
          {description.points.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const Experience = ({experience}) => {
  console.log(experience);
  return (
    <div id="Experience">
      <h1>Experience</h1>
      {experience.map((item, key) => {
        return (
          <>
            <Block key={key} {...item} />
            {key + 1 !== experience.length ? <hr /> : null}
          </>
        );
      })}
    </div>
  );
};

export default Experience;
