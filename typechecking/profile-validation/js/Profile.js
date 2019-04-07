'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const urlPropType = (props, propName, componentName) => {
  const url = props[propName];
  const isUrl = (typeof url === 'string') && (/^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(url));
    
  if (!isUrl) {
    return new Error (`Неверный формат параметра ${propName} в компоненте ${componentName}: необходимо указать корректный url`);
  }

  return null;
};

const birthdayPropType = (props, propName, componentName) => {
  const birthdayValue = props[propName];
  const isBirthdayCorrect = new Date(birthdayValue) > new Date();
  const isBirthdayValue = (typeof birthdayValue === 'string') && (/^\d{4}\-\d{2}\-\d{2}$/).test(birthdayValue);
  
  if (!isBirthdayValue) {
    return new Error (`Неверный формат параметра ${propName} в компоненте ${componentName}: необходимо указать дату рождения в формате ГГГГ-ММ-ДД`);
  };
  if (isBirthdayCorrect) {
    return new Error (`Неверно указан параметр ${propName} в компоненте ${componentName}: дата рождения не должна быть большей текущей даты`);
  }

  return null;
}

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  url: urlPropType,
  birthday: birthdayPropType
}

Profile.defaultProps = {
  img: './images/profile.jpg',
  birthday: '1988-03-21'
}

