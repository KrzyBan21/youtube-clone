export const updateObject = (oldObject, objectProperties) => {
  return {
    ...oldObject,
    ...objectProperties,
  };
};

export const updateArray = (oldArray, arrayProperties) => {
  return [...oldArray, ...arrayProperties];
};
