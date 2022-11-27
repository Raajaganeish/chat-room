import React, { useState } from "react";
import { CheckMark } from "../images/Image";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Register.scss";
import { auth as configuredAuth, db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

// Create a root reference

const Register = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const [
      { value: displayName },
      { value: email },
      { value: password },
      // {
      //   files: [{ file: { name : inputFileName } }],
      // },
    ] = e.target;
    console.log(displayName);
    let response = null;
    try {
      response = await createUserWithEmailAndPassword(
        configuredAuth,
        email,
        password
      );
      console.log(response);
      setStatus(true);
      const avatarRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(avatarRef, file);
      uploadTask.on(
        (error) => {
          console.error(error);
          setStatus(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
            const updatedProfileResponse = await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log("Updated Response");
            console.log(updatedProfileResponse);

            console.log("Updating in db");
            await setDoc(doc(db, "users", response.user.uid), {
              userId: response.user.uid,
              email,
              displayName,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      const { code, message } = error?.customData?._tokenResponse?.error;
      setStatus(false);
      console.error(error);
      setErrorMessage(`${message}`);
    }
  };

  const onChangeHandler = (e) => {
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile);
    setFile(uploadedFile);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Room</span>
        <span className="title">Register</span>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            type="file"
            id="file-upload"
            accept="*.jpg,*.svg,*.png"
            onChange={onChangeHandler}
          />
          {!file ? (
            <label htmlFor="file-upload">
              <img
                src="upload-svgrepo-com.svg"
                alt=""
                width={"20px"}
                height={"20px"}
              />
              <span>Upload a file</span>
            </label>
          ) : (
            <div className="uploadedImageDetails">
              <CheckMark />
              <span>{file.name}</span>
            </div>
          )}
          <button type="submit">Register</button>
        </form>
        {status === true && <p>Registered Successfully!</p>}
        {status === false && <p>{errorMessage}</p>}
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
