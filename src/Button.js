import PropTypes from "prop-types";
import styles from "./Button.module.css";
//css값을 styles라는 js obj로 변환시켜줌

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
//css를 styles로 활용하기(분할정복 방법) - 파일명은 꼭 "파일명.module.css"라고 사용해야함

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
