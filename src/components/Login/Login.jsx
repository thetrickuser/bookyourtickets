import { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = ({ onClose }) => {
  const [loginType, setLoginType] = useState("phone");
  const loginTypeHandler = () => {
    setLoginType((currentType) => {
      if (currentType === "email") return "phone";
      else return "email";
    });
  };
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
        <div className={styles["login-content"]}>
          <div className={styles["login-type"]}>
            <Button
              value={
                <>
                  <HiOutlineMail />
                  <span>
                    {loginType === "email"
                      ? "Continue with Phone"
                      : "Continue with Email"}
                  </span>
                </>
              }
              className={styles["login-type-btn"]}
              onClick={loginTypeHandler}
            />
          </div>
          <p>OR</p>
          <hr></hr>
          <form className={styles["login-form"]}>
            <div className={styles["login-form-controls"]}>
              {loginType === "phone" ? (
                <Fragment>
                  <span>+91</span>
                  <Input placeholder="Continue with mobile number" type="tel" />
                </Fragment>
              ) : (
                <Fragment>
                  <Input placeholder="Enter your email" type="email" />
                </Fragment>
              )}
            </div>
            <Button value="Login" className={styles["login-btn"]} />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
