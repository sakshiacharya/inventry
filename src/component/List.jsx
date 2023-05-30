import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/Action/fetchProduct';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
export const List = () => {

  const productList = useSelector(state => state.fetchProductReducer.products.products?.d?.results)

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [addItem, setAddItem] = useState(false);
  const [userData, setUserData] = useState({
    productId: '',
    productName: '',
    SupplierID: '',
    CategoryID: '',
    QuantityPerUnit: '',
    UnitPrice: '',
    UnitsInStock: '',
    UnitsOnOrder: '',
    ReorderLevel: '',
    Discontinued: '',
  });

  const addProduct = (event) => {
    event.preventDefault()
    setAddItem(true);
    setTimeout(() => {
      closeModal()
    }, 2000)

  }



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct())

  }, [])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px',
      // overflowY: 'scroll',
      // height: '80%'

    },
  };


  Modal.setAppElement('#root');


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    setAddItem(false)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  function closeModal(e) {
    setIsOpen(false);
  }

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setUserData({ ...userData, Discontinued: selectedValue });
  };



  return (
    <React.Fragment>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="add product">
          <>
            {
              addItem ? <div className='thankyou'>Data is submitted Successfully..</div> :

                <div >
                  <h1 className="header" >Add New Product</h1>
                  <form className='details' onSubmit={(event) => addProduct(event)}>
                    <div>
                      <label for="product-id">Product ID:</label>
                      <input id="product-id" placeholder="Product ID" onChange={(e) => { setUserData({ ...userData, productId: e.target.value }) }} type="number" required />
                    </div>

                    <div>
                      <label for="product-name">Product Name:</label>
                      <input id="product-name" placeholder="Product Name" type="text" onChange={(e) => { setUserData({ ...userData, productName: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="supplier-id">Supplier ID:</label>
                      <input id="supplier-id" placeholder="Supplier ID" type="number" onChange={(e) => { setUserData({ ...userData, SupplierID: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="category-id">Category ID:</label>
                      <input id="category-id" placeholder="Category ID" type="number" onChange={(e) => { setUserData({ ...userData, CategoryID: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="quantity-per-unit">Quantity Per Unit:</label>
                      <input id="quantity-per-unit" placeholder="Quantity Per Unit" type="text" onChange={(e) => { setUserData({ ...userData, QuantityPerUnit: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="unit-price">Unit Price:</label>
                      <input id="unit-price" placeholder="Unit Price" type="number" onChange={(e) => { setUserData({ ...userData, UnitPrice: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="units-in-stock">Units In Stock:</label>
                      <input id="units-in-stock" placeholder="Units In Stock" type="number" onChange={(e) => { setUserData({ ...userData, UnitsInStock: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="units-on-order">Units On Order:</label>
                      <input id="units-on-order" placeholder="Units On Order" type="number" onChange={(e) => { setUserData({ ...userData, UnitsOnOrder: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="reorder-level">Reorder Level:</label>
                      <input id="reorder-level" placeholder="Reorder Level" type="number" onChange={(e) => { setUserData({ ...userData, ReorderLevel: e.target.value }) }} required />
                    </div>

                    <div>
                      <label for="discontinued">Discontinued:</label>
                      <select name="discontinued" id="discontinued" onChange={handleSelectChange}>  
                        <option value="true">No</option> 
                        <option value="false">Yes</option>

                      </select> 
                    </div>
                    <div className='text-center' >
                      <div className="back-button" style={{ display: 'flex', flexDirection: 'row' }}>
                        <button type='submit'>

                          Save</button>
                        <button onClick={() => closeModal()} >

                          Close</button>
                      </div>
                    </div>
                  </form>



                </div>
            }

          </>



        </Modal>
      </div>







      <div className='main'>
        <h1>Inventary System</h1>
        <div className='table-data'>
          <div className='head' >
            <span className='product'>Products</span>
            <button onClick={openModal} >+ Add Product</button>
          </div>
          <div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Supplier ID</th>
                  <th>Category ID</th>
                  <th>Quantity Per Unit</th>
                  <th>Unit Price</th>
                  <th>Units In Stock</th>
                  <th>Units On Order</th>
                  <th>Reorder Level</th>
                  <th>Discontinued</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    addItem &&
                    <>
                      <td>{userData.productId}</td>
                      <td>{userData.productName}</td>
                      <td>{userData.SupplierID}</td>
                      <td>{userData.CategoryID}</td>
                      <td>{userData.QuantityPerUnit}</td>
                      <td>{userData.UnitPrice}</td>
                      <td>{userData.UnitsInStock}</td>
                      <td>{userData.UnitsOnOrder}</td>
                      <td>{userData.ReorderLevel}</td>
                      <td>{userData.Discontinued ? 'Yes' : 'No'}</td>
                      <td>{userData.ProductID}</td>
                    </>

                  }
                </tr>
                {currentItems?.map((data, index) => (
                  <tr key={index} >



                    <td>{data.ProductID}</td>
                    <td>{data.ProductName}</td>
                    <td>{data.SupplierID}</td>
                    <td>{data.CategoryID}</td>
                    <td>{data.QuantityPerUnit}</td>
                    <td>{data.UnitPrice}</td>
                    <td>{data.UnitsInStock}</td>
                    <td>{data.UnitsOnOrder}</td>
                    <td>{data.ReorderLevel}</td>
                    <td>{data.Discontinued ? 'Yes' : 'No'}</td>
                    <td><Link to={`${data.ProductID}`}>View</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-center'>

          <div className='pagination'>
            {productList?.length > itemsPerPage &&
              Array(Math.ceil(productList?.length / itemsPerPage))
                .fill()
                .map((_, i) => (
                  <a className={i + 1 == currentPage && 'active'} key={i} id={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </a>
                ))}
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}
