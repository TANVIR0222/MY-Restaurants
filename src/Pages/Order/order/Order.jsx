import { Helmet } from "react-helmet-async";
import order from "../../../assets/shop/order.jpg";
import Cover from "../../shared/Cover";
import OrderMenu from "../orderCategory/OrderMenu";

const Order = () => {
  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Cover img={order} title={"order now"}></Cover>
      <OrderMenu/>
    </div>
  );
};

export default Order;
 