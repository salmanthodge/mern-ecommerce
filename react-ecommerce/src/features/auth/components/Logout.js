import React, { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(signOutAsync());
  });

  //but useEffect runs after render, so we have to delay naviagte part

  return <>{!user && <Navigate to="/login" replace={true} />}</>;
};

export default Logout;
