import { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useError = (path, errorArray) => {
  const history = useHistory();

  const workAround = useCallback(() => {
    errorArray.forEach((error) => {
      if (error) {
        history.push(path);
        return;
      }
    });
  }, [errorArray, history, path]);

  useEffect(() => {
    workAround();
  }, [workAround]);
};
