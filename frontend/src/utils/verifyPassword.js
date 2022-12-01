import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import validator from 'validator';
export const DisplayPassword = ({ setShowPassword, showPassword, style }) => {
  return (
    <span
      onClick={() => setShowPassword((prevState) => !prevState)}
      // className="view-password"
    >
      {showPassword ? (
        <span
          style={{
            color: 'black',
            postition: 'absolute',
            right: '230px',
            top: '265px',
            backgroundColor: 'red',
          }}
        >
          <FaRegEye />
        </span>
      ) : (
        <FaRegEyeSlash
          style={{
            color: 'black',
            postition: 'absolute',
            right: '230px',
            top: '265px',
          }}
        />
      )}
    </span>
  );
};
// const eyeStyle = {
//   color: 'black',
//   position: 'absolute',
// };

export const passwordStrengthChecker = (input) => {
  if (
    validator.isStrongPassword(input, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    })
  ) {
    return <span className="stable-password"> strong password </span>;
  } else {
    return <span className="unstable-password"> weak password </span>;
  }
};

export const passwordChecker = (input) => {
  // let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;

  // To check password between 7-15 characters which contain at least one numeric digit and a  special character
  let password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{7,15}$/;

  // let password =
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*\s).{8,15}$/;

  return password.test(input);

  // if (input.value.match(password)) {
  //     return true;
  // } else {
  //     return false;
  // }
};
