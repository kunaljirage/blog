import { IoPerson } from 'react-icons/io5';

const Profile = props => {
  const { source, classes } = props;
  return source ? (
    <img
      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
      alt=""
      className={`profile-image ${classes}`}
    />
  ) : (
    <span className={`profile-icon ${classes}`}>
      <IoPerson size="24" />
    </span>
  );
};

export default Profile;
