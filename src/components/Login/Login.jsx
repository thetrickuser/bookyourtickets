import Modal from "../UI/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = ({ onClose }) => {
  return (
    <Modal>
      <div className={styles["login"]}>
        <div className={styles["login-header"]}>
          <p className={styles["login-header-title"]}>Get Started</p>
          <AiFillCloseCircle
            onClick={onClose}
            className={styles["login-close-btn"]}
          />
        </div>
        <div>
          <form className={styles["login-form"]}>
            <div className={styles["login-form-controls"]}>
              <span>+91</span>
              <Input placeholder="Continue with mobile number" type="tel" />
            </div>
            <Button value="Login" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
