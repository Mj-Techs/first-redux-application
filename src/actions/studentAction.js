export const addStudent = (data) => {
  return {
    type: "ADD_STUDENT",
    payload: data,
  };
};
export const removeStudent = (id) => {
  return {
    type: "REMOVE_STUDENT",
    payload: id,
  };
};
export const editStudent = ({ id, student }) => {
  return {
    type: "EDIT_STUDENT",
    payload: {
      id,
      student,
    },
  };
};
