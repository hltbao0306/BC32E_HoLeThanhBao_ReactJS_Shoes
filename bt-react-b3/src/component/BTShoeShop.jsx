import React, { Component } from 'react'
import ModalDeltail from './ModalDeltail'
import Shoe from './Shoe'
import data from './data.json'


export default class BTShoeShop extends Component {
    state = {
        shoesDetail: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "./img/adidas-prophere.png"
        }
    }

    showDetail = (product) => {
        this.setState({
            shoesDetail: product,
        });
        // console.log(product);
    };

    render() {
        return (
        <div className='py-3'>
            <h1 className='text-center p-3 text-light'>Shoes Shop</h1>
            <div className='row container-fluid'>
                <div className='col-sm-2 text-light'>
                    <h4 className='bg-dark'>Home</h4>
                    <h4>Nike</h4>
                    <h4>Adidas</h4>
                    <h4>Puma</h4>
                    <h4>Thượng đỉnh</h4>
                </div>
                
                <div className="col-sm-10">
                    <div className='row'>
                        <Shoe data={data}  showDetail={this.showDetail}/>
                    </div>
                </div>
                <ModalDeltail content={this.state.shoesDetail} />
            </div>
        </div>
        )
    }
}
