class App extends React.Component {
    render() {
        const products = [
            {
                product_name: "Mobile",
                price: 500,
                quantity:5
            },
            {
                product_name: "Book",
                price: 20,
                quantity:15
            },
            {
                product_name: "Laptop",
                price: 4000,
                quantity:13
            },
            {
              
              product_name:"LED",
              price: 35,
              quantity:18
            }
        ]
          
             
            
            return (<React.Fragment>
                    <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>NAME</th>
                                  <th>PRICE</th>
                                  <th>QUANTITY</th>
                             </tr>
                         </thead>
                         <tbody>
                              {employees.map(products => {
                                     return (<tr>
                                             <td>{products.name}</td>
                                             <td>{products.price}</td>
                                             <td>{products.quantity}</td>
                                     </tr>)
                             })
                             }
                         </tbody>
                    </table>
            </React.Fragment>)  
    }
}
export default user;
