import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import Button from "react-bootstrap/esm/Button";
import { formatCurrency } from "../../utils/helper";
import "./orderDetail.css";
import {
  clearErrors,
  getOrderSysDetails,
  updateOrderSystem,
} from "../../actions/orderSysAction";
import { UPDATE_ORDER_RESET } from "../../constants/orderSysConstants";
const OrderDetailCash = ({ history, match }) => {
  const { order, error, loading } = useSelector(
    (state) => state.orderSystemDetails
  );
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.orderSystem
  );
  const [status, setStatus] = useState("");
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrderSystem(match.params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Cập nhật trạng thái đơn thành công");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderSysDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id, isUpdated, updateError]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography>Thông tin giao hàng</Typography>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Tên người nhân:</p>
                  <span>{order.name}</span>
                </div>
                <div>
                  <p>Số điện thoại:</p>
                  <span>{order.phone}</span>
                </div>
                <div>
                  <p>Địa chỉ:</p>
                  <span>{order.address}</span>
                </div>
              </div>
              <Typography>Trạng thái đơn hàng</Typography>
              <div>
                <div className="confirmshippingAreaBox">
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Đã giao hàng"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <Typography>Sản phẩm trong giỏ:</Typography>
              <div className="confirmCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X{" "}
                        {formatCurrency(item.price + "", 0, 3, ",", ".")} đ ={" "}
                        <b>
                          {formatCurrency(
                            item.price * item.quantity + "",
                            0,
                            3,
                            ",",
                            "."
                          )}{" "}
                          đ
                        </b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className="orderSummary">
              <Typography>Thông tin hóa đơn</Typography>
              <div>
                <div>
                  <p>Tổng tiền :</p>
                  <span>
                    {formatCurrency(order.totalPrice + "", 0, 3, ",", ".")} đ
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display:
                  order.orderStatus === "Đã giao hàng" ? "none" : "block",
              }}
            >
              <form
                className="updateOrderForm"
                onSubmit={updateOrderSubmitHandler}
              >
                <h3>Cập nhật đơn hàng</h3>
                <div>
                  <AccountTreeIcon />
                  <select onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Chọn trạng thái</option>
                    {order.orderStatus === "Đang xử lý" && (
                      <option value="Đang giao hàng">Đang giao hàng</option>
                    )}

                    {order.orderStatus === "Đang giao hàng" && (
                      <option value="Đã giao hàng">Đã giao hàng</option>
                    )}
                  </select>
                </div>

                <Button
                  id="createProductBtn"
                  type="submit"
                  disabled={
                    loading ? true : false || status === "" ? true : false
                  }
                >
                  Thực hiện
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetailCash;
