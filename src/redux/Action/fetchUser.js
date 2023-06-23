export const fetchUser = () => {
    return async (dispatch) => {
        

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const json = await response.json();
        const users = json 
      


        dispatch({
            type : 'FETCH_USER_SUCCESS',
            payload: {
                users,
            }
        })
    }
}