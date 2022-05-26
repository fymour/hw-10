import React from 'react'
import { useEffect, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,deleteProduct } from '../../store/action';
import { Button } from 'antd'

function Products({setEditProduct, setDeleteProduct}) {
    const dispatch = useDispatch();
    const products = useSelector((store => store.products));
    const isFetching = useSelector((store => store.productsFetching));

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])
    const compare = (a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
    }
    const handleDelete =(id)=>{
        dispatch(deleteProduct(id))
    }
    const sorted = products.sort(compare);
    return (
        <div>
            <h1>Products</h1>
            {isFetching && <div>Loading...</div>}
            {!isFetching && <div>
                {sorted.map(product => (
                    <div key={product.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <Button
                            type="ghost"
                            onClick={() => setEditProduct(product)}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={()=> handleDelete(product.id)}
                        >
                            X
                        </Button>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Products