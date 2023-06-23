export const detailData = (data, id) => {
    return async (dispatch) => {
        

        const response = await fetch(`https://services.odata.org/V2/Northwind/Northwind.svc/Products(${id})?$format=json`);
        const json = await response.json();
        const details = json  
        console.log("fetchProductReducer", details)

        dispatch({
            type : 'FETCH_DETAIL_SUCCESS',
            payload: {
                details,
            }
        })
    }
}