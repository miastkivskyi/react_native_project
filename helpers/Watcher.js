import { useEffect } from "react";
import { Alert } from "react-native";
import { refresh } from "../redux/auth/operations";
import { useSelector, useDispatch } from "react-redux";
import { getPermissions } from "./ImagePicker";
import { selectError } from "../redux/initialState/selectors";

export const Watcher = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    error && Alert.alert(error);
  }, [error]);

  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
};

export default Watcher;
