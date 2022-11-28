import React  from 'react'
class Image extends React.Component{

    State={
        Name:"RealmeC21Y(Black Gross,32GB)",
        Image:"https://www.flipkart.com/realme-c21y-cross-black-32-gb/p/itm2a2e4f7554a21?pid=MOBG5ZGKG2HRSQB8&lid=LSTMOBG5ZGKG2HRSQB8CLMLWW&marketplace=FLIPKART&q=realmec21&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=17ca4401-0ab6-4b07-90b5-88a36bc3a56b.MOBG5ZGKG2HRSQB8.SEARCH&ppt=pp&ppn=pp&ssid=xylfvq280w0000001669611052606&qH=0117f580e0a242c8",
        qty:"1",
        Price:"9,499"
        
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty + 1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty - 1})
    }
    render(){
        return <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table-table-hover'>
                        <thead>
                            <tr>
                                <th>Image_Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.state.Image_Name}</td>
                                <td><img src={this.state.image} alt="" height="60px"/></td>

                                <td>{this.state.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Price * this.state.qty}</td>
</tr>

                            </tbody>
                        
                    </table>
                </div>
            </div>
        </div>


    }
}
export default Image