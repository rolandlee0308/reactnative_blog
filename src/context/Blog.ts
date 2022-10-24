import createDataContext from "./createDataContext";

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: "do something" }];

    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
