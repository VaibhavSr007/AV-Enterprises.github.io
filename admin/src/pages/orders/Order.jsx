import { useEffect, useState } from "react";
import "../../components/widgetLg/widgetLg.css";
import { userRequest } from "../../requestMethod";
import { format } from "timeago.js";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const [orders, setOrders]  = useState([]);

  useEffect(() =>{
    const getOrders = async ()=>{
    try{
      const res = await userRequest.get("orders");
      setOrders(res.data);
    }
    catch{}
  }
  getOrders();
  },[]);

  return (
    
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Orders</h3>
      <table className="widgetLgTable">
        

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Address</th>
          <th className="widgetLgTh">Products</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {orders.map (order =>(
        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <span className="widgetLgName">{order.UserOrderId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">₹{order.amount}</td>
          <td className="widgetLgAmount">{order.address}</td>
          <td className="widgetLgAmount">
            {order.products.map(product =>(
                <span>Product Id: {product.productId} <br />
                Quantity: {product.quantity} <br /> </span>
            ))}
          </td>

          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
        ))}
        
      </table>
    </div>
  );
}
