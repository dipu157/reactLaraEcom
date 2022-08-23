import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

export default function AddProduct() {

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [file,setFile] = useState("");
  const history = useNavigate();

  async function addProduct()
  {
    
    console.warn(name,description,price,file);
    const formData = new FormData();
    formData.append('file',file);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('name',name);

    let result = await fetch("http://localhost:8000/api/addproduct",{
      method: 'POST',
      body: formData
    });
    alert("Data Save Successfully");
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      <Header />
      <h1>Add Product</h1> 
          <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" /> <br />
          <input type="text" onChange={(e) => setDescription(e.target.value)}  className="form-control" placeholder="Description" /> <br />
          <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Price" /> <br />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" placeholder="photo" /> <br />
          <button onClick={addProduct} className='btn btn-primary'>ADD Product</button>
    </div>
  )
}
