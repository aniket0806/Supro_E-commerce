import React, {  useEffect, useState} from "react";
import { add ,addWishList } from '../store/cartSlice'
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct, STATUSES } from "../store/productSlice";
import Pagination from "../components/Pagination";
import { FaRegHeart,  FaHeart } from "react-icons/fa";
import Silder from "../components/Silder";

const Home = () => {

  const dispatch = useDispatch();
  const {data: products,status} = useSelector((state => state.product))

  useEffect(() => {
  //   const fetchproduct = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setproduct(data);
  //   };
  //   fetchproduct();
    dispatch(fetchproduct());  
}, []);

const [search, setSearch] =useState('')
const [filteredProducts, setFilteredProducts] =useState([]);
  const[pageNo, setPageNo] = useState(1);
  const itemsPerPage = 8;
useEffect(() =>{
  setFilteredProducts(
    products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
  );
  setPageNo(1)
}, [search,products])


const [wishList,setWishList] =useState([])
  const handleadd=(products)=>{
    dispatch(add(products))
  }

  if(status === STATUSES.Loading){
    return<h2 className="font-extrabold text-center"> Loading...</h2>
  }



  const startIndex =(pageNo-1) * itemsPerPage;
  const endIndex =startIndex + itemsPerPage;
  const paginationProducts = filteredProducts.slice(startIndex,endIndex)

  
  const handleAddToWishList = (product) =>{
    if (wishList.includes(product.id)){
      setWishList(wishList.filter(id => id !== product.id))
    }
  else {
    setWishList([...wishList, product.id])
  }
    dispatch(addWishList(product))
  }

  return (
    <>
  <Silder/>
    <div className="mt-10 gap-4 flex-wrap flex justify-center items-center  ">
      
        <div className="w-full flex justify-center mb-8 " >
      <div className='flex '>
        
        <input
        type="text" 
        placeholder='Search' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded-l-md"
        />
        <button
          onClick= {(e) => console.log("search for:", search)}
        className='ml-2 p-2 bg-purple-600 text-white rounded-md' >Search</button>
        </div>
        </div>
      {paginationProducts.map((product) => (
        <div key={product.id} className="w-80 h-96 p-2 bg-white rounded-xl flex flex-col justify-between m-4 shadow-xl">
          <div className="flex justify-center items-center h-40">
            <img
              className="h-full object-contain rounded-xl"
              src={product.image}
              alt=""
            />
          </div>
          <div className="p-2 flex-1 flex flex-col justify-between">
            <h4 className="font-bold text-lg mb-2">{product.title}</h4>
            <h5 className="text-xl font-semibold text-gray-600">$ {product.price}</h5>
          </div>
          <div className="m-2 content-center flex justify-between ">
            <button 
            onClick={()=> handleadd(product)}
            className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
              Add to cart
            </button>
            <button onClick={() => handleAddToWishList(product)}>
              {wishList.includes(product.id) ?
             <FaHeart className="text-3xl text-red-600" /> :
      < FaRegHeart className="text-3xl"  />  }  </button>
          </div>
        </div>
       

      ))}
       <Pagination pageNo={pageNo} setPageNo={setPageNo} totalItems ={filteredProducts.length} itemsPerPage={itemsPerPage} />
</div>
</>
  );
};

export default Home;


