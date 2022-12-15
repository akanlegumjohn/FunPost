import './avatar.css'
const Avatar = ({ firstName, lastName }) => {
  return (
    <div className="avatar--container">
      <span>{firstName && lastName && `${firstName[0]} ${lastName[0]}`}</span>
    </div>
  );
};

export default Avatar;
