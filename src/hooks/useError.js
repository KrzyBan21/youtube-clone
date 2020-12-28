import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useError = (path, errorArray) => {
  const history = useHistory();

  useEffect(() => {
    errorArray.forEach((error) => {
      if (error) {
        history.push(path);
        return;
      }
    });
  });
};
