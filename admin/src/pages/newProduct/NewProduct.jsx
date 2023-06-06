import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


export default function NewProduct() {
  const [file , setFile] = useState(null);
  const [cat , setCat] = useState([]);  // null array
  const [input , setInput] = useState({});  // object
  const dispatch = useDispatch();
  
  const handleChange = (e) =>{
    setInput(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleCat = (e) =>{
    setCat(e.target.value.split(","));
  }

  // console.log(cat);

  const handleClick = (e) =>{
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {...input, img:downloadURL, category: cat};
          // console.log(product)
          addProducts(product, dispatch);
        });

      }
    );
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input name="img" type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Aquaguard Reviva..." onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="description..." onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="price" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input type="text" placeholder="water_purifier..." onChange={handleCat}/>
        </div>
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
