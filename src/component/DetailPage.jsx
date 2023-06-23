// import React, { useEffect, useState, useMemo } from 'react'
// import { useDispatch } from 'react-redux'
// import { detailData } from '../redux/Action/detailData';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// export const DetailPage = () => {

//     const navigate = useNavigate();

//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const productDetail = useSelector(state => state?.detailReducer?.details?.details?.d);

//     const memoizedProductDetail = useMemo(() => productDetail, [productDetail]);



//     useEffect(() => {
//         dispatch(detailData(id));
//     }, [id, dispatch]);

//     return (

//         <>
//             <h1 className="header" >Product Detail</h1>
            
//             <div className='details'>

//                 <div>
//                     <label for="product-id">Product ID:</label>
//                     <input id="product-id" placeholder="Product ID" type="text" value={memoizedProductDetail?.ProductID} disabled />
//                 </div>

//                 <div>
//                     <label for="product-name">Product Name:</label>
//                     <input id="product-name" placeholder="Product Name" type="text" value={memoizedProductDetail?.ProductName} disabled />
//                 </div>

//                 <div>
//                     <label for="supplier-id">Supplier ID:</label>
//                     <input id="supplier-id" placeholder="Supplier ID" type="text" value={memoizedProductDetail?.SupplierID} disabled />
//                 </div>

//                 <div>
//                     <label for="category-id">Category ID:</label>
//                     <input id="category-id" placeholder="Category ID" type="text" value={memoizedProductDetail?.CategoryID} disabled />
//                 </div>

//                 <div>
//                     <label for="quantity-per-unit">Quantity Per Unit:</label>
//                     <input id="quantity-per-unit" placeholder="Quantity Per Unit" type="text" value={memoizedProductDetail?.QuantityPerUnit} disabled />
//                 </div>

//                 <div>
//                     <label for="unit-price">Unit Price:</label>
//                     <input id="unit-price" placeholder="Unit Price" type="text" value={memoizedProductDetail?.UnitPrice} disabled />
//                 </div>

//                 <div>
//                     <label for="units-in-stock">Units In Stock:</label>
//                     <input id="units-in-stock" placeholder="Units In Stock" type="text" value={memoizedProductDetail?.UnitsInStock} disabled />
//                 </div>

//                 <div>
//                     <label for="units-on-order">Units On Order:</label>
//                     <input id="units-on-order" placeholder="Units On Order" type="text" value={memoizedProductDetail?.UnitsOnOrder} disabled />
//                 </div>

//                 <div>
//                     <label for="reorder-level">Reorder Level:</label>
//                     <input id="reorder-level" placeholder="Reorder Level" type="text" value={memoizedProductDetail?.ReorderLevel} disabled />
//                 </div>

//                 <div>
//                     <label for="discontinued">Discontinued:</label>
//                     <input id="discontinued" placeholder="Discontinued" type="text" value={memoizedProductDetail?.ProductID} disabled />
//                 </div>

//             </div>
//             <div className='text-center'>
//                 <div className="back-button">
//                     <button onClick={() => navigate(-1)}>

//                         Back</button>
//                 </div>
//             </div>

//         </>
//     )
// }
