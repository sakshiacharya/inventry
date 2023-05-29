export const fetchProduct = () => {
    return async (dispatch) => {
        

        const response = await fetch("https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json");
        const json = await response.json();
        const products = json 

        console.log("first", products)

        dispatch({
            type : 'FETCH_PRODUCT_SUCCESS',
            payload: {
                products,
            }
        })
    }
}