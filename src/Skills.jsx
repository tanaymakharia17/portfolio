import "./css/Skills.css";


const Skill = (props) => {
  const { img, name } = props;
  return (
    <div className="Skills__Skill">
      <div className="Skills__img-wrapper">
        <img className="Skills__img" src={img} />
      </div>
      <div><b>{name}</b></div>
    </div>
  );
};

const Skills = ({skills}) => {
  return (
    <div id="Skills">
      <h1>Skills</h1>
      <div id="Skills__list">
        {skills.map((item, key) => {
          return <Skill key={key} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
