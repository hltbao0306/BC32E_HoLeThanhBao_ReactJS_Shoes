import React, { Component } from 'react'
import ChiTietSP from './ChiTietSP';

export default class Shoe extends Component {
    render() {
    const { data, showDetail } = this.props
        return (
            <div className="row">
                {data.map(sanPham => {
                return <div className="col-xl-4 col-md-6 mb-3" key={sanPham.id}>
                    <ChiTietSP item={sanPham} showDetail={showDetail} />
                </div>
                })}
            </div>
          );
    }
}