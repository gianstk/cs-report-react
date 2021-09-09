export const initState = null;

export const reducer = (state, action) => {
  
  if (action.type === "USER") {
    console.log("ACTION", action, state);
    return action.payload
  }
  return state;
}