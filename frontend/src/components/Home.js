import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

import MetaData from './layouts/MetaData'
import Product from './product/Product'
import Loader from './layouts/Loader'

// useSelector => because I want to select from the state
// with this I will bring all the products with the getProducts function to the home page
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert';

// find the range of the price =>  minimum price and maximum price
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range)

const Home = ({ match }) => {

  const  [currentPage, setCurrentPage] = useState(1); // default the value is 1
  const [price, setPrice] = useState([1, 10000]);
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState(0)

  // the categories of the site
  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
  ]

  const alert = useAlert();
  const dispatch = useDispatch();

  // we select those mentioned in {} with useSelector from the products => from backend
  const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

  const keyword = match.params.keyword;

  // run the components load
  useEffect(() => {

    // put the error message in the interface
    if(error) {
      return alert.error(error)
    }

    // find the product in function of keyword
    dispatch(getProducts(keyword, currentPage, price, category, rating));

  }, [dispatch, alert, error, keyword, currentPage, price, category, rating])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  let count = productsCount;
  if(keyword) {
    count = filteredProductsCount
  }

  // add the products result in homepage 
  return (
    <Fragment>
      {loading ? <Loader /> : (
        <Fragment>
          <MetaData title={'Buy Best Products Online'}/>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
              <div className="row">

                {/* filter price */}
                {keyword ? (
                  <Fragment>
                    <div className="col-6 col-md-3 mt-5 mb-5">
                        <div className="px-5">
                          <Range 
                              marks={{
                                1 : `$1`,
                                10000 : `$10000`                            
                              }} 
                              min ={1}
                              max={10000}
                              defaultValue={[1, 10000]}
                              tipFormatter={value => `$${value}`}
                              tipProps={{
                                placement: "top",
                                visible: true
                              }}
                              value={price}
                              onChange={price => setPrice(price)}
                          />

                          {/* filter by the category */}
                          <hr className="my-5" />
                          <div className="mt-5">
                            <h4 className="mb-3">
                              Categories
                            </h4>
                              
                            <ul className="pl-0">
                              {categories.map(category => (
                                <li
                                  style={{
                                    cursor: 'pointer',
                                    listStyleType: 'none'
                                }}
                                  key={category}
                                  onClick={() => setCategory(category)}
                                >
                                  {category}
                                </li>
                              ))}  
                            </ul> 
                          </div>    
                          
                          {/* here is filter by the rating */}
                          <hr className="my-3" />
                          <div className="mt-5">
                            <h4 className="mb-3">
                              Ratings
                            </h4>
                              
                            <ul className="pl-0">
                              {[5, 4, 3, 2, 1].map(star => (
                                <li
                                  style={{
                                    cursor: 'pointer',
                                    listStyleType: 'none'
                                }}
                                  key={star}
                                  onClick={() => setRating(star)}
                                >
                                  <div className="rating-outer">
                                      <div className="rating-inner"

                                        style={{
                                          width: `${star * 20}%`
                                        }}
                                      
                                      >

                                      </div>
                                  </div>
                                </li>
                              ))}  
                            </ul> 

                          </div>   

                        </div>
                    </div>

                    <div className="col-6 col-md-9">
                      <div className="row">
                        {
                          products.map(product => (
                            <Product key={product._id} product={product}
                            col={4} />
                          ))
                        }
                      </div>
                    </div>
                  </Fragment>
                ) : (
                  products && products.map(product => (
                    <Product key={product._id} product={product} col={3} />
                  ))
                )}

                
                
              </div>
            </section>

            {resPerPage <= count && (
                  <div className="d-flex justify-content-center mt-5">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText={'Next'}
                      prevPageText={'Prev'}
                      firstPageText={'First'}
                      lastPageText={'Last'}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
            )}
            

        </Fragment>
      )}
      
    </Fragment>
  )
}

export default Home
