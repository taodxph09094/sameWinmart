import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { formatCurrency } from "../../../utils/helper";
const Menu = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="./">
                <img
                  // className="logoSrc"
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/308006485_3420605758172135_2954199013677683100_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=r6KH4tAmq64AX9PwnY3&tn=3mYoT_b2B_0QA-bD&_nc_ht=scontent.fhan17-1.fna&oh=03_AVLFlJ1e4IGnunIYKSxr6LhSdDaw6s9TfVdBXlgPRp6X_Q&oe=63633057"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <Link to="/news">Tin tức</Link>
                </li>
                <li>
                  <Link to="#">Kiểm tra đơn</Link>
                  <ul class="header__menu__dropdown">
                    <li>
                      <Link to="/orders">Thanh toán Online</Link>
                    </li>
                    <li>
                      <Link to="./ordersSys">Thanh toán tiền mặt</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link to="/orders">Kiểm tra đơn </Link>
                </li> */}
                <li>
                  <Link to="./contact">Liên hệ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-heart" /> <span>1</span>
                  </Link>
                </li>
                <li>
                  <a href="/cart">
                    <i className="fa fa-shopping-bag" />{" "}
                    <span>{cartItems.length}</span>
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                Tổng tiền:{" "}
                <span>
                  {formatCurrency(
                    `${cartItems.reduce(
                      (acc, item) =>
                        acc +
                        item.quantity * item.price -
                        (item.price * item.promotion) / 100,
                      0
                    )}`
                  )}{" "}
                  đ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </>
  );
};

export default Menu;
