import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import Header from './Header'

export default function ProductList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await fetch("http://localhost:8000/api/listproduct");
            result = await result.json();
            setData(result);
        }
        fetchData();
    }, [])

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <Table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                    </tr>
                </thead>
                {
                    data.map((item,i) =>
                        <tbody  key={i}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img src={"http://localhost:8000/"+item.file_path} /></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    )
}
