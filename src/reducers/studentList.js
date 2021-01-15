const studentReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      return [...state, action.payload];
    }
    case "REMOVE_STUDENT": {
      return state.filter((student) => {
        return student.id !== action.payload;
      });
    }
    case "EDIT_STUDENT": {
      return state.map((student) => {
        if (student.id === action.payload.id) {
          return { ...student, ...action.payload.student };
        } else {
          return { ...student };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};
export default studentReducer;
