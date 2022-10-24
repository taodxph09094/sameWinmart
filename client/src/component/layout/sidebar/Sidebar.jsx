import React, { useState, Fragment } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Sidebar = ({ history, match }) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                {/* <i className="fa fa-bars" /> */}
                <Link to="/products">
                  <span>Tất cả sản phẩm</span>
                </Link>
              </div>
              <ul>
                <li>
                  <Link to="#">Hàng tươi giá tốt</Link>
                </li>
                <li>
                  <Link to="#">Đang khuyến mãi</Link>
                </li>
                <li>
                  <Link to="#">Rau - củ</Link>
                </li>
                <li>
                  <Link to="#">Trái cây</Link>
                </li>
                <li>
                  <Link to="#">Thịt - Trứng - Hải sản</Link>
                </li>
                <li>
                  <Link to="#">Thực phẩm chế biến</Link>
                </li>
                <li>
                  <Link to="#">Thực phẩm đông lạnh</Link>
                </li>
                <li>
                  <Link to="#">Thực phẩm khô - gia vị</Link>
                </li>
                <li>
                  <Link to="#">Bánh kẹo - Đồ ăn vặt</Link>
                </li>

                <li>
                  <Link to="#">Sữa - Sản phẩm từ sữa</Link>
                </li>
                <li>
                  <Link to="#">Đồ uống giải khát</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            {/* search */}
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#" onSubmit={searchSubmitHandler}>
                  <input
                    type="text"
                    placeholder="Bạn muốn tìm gì ?"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="site-btn" value="Search">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="hero__search__phone__text">
                  <h5>+84 321 321 321</h5>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <Banner />
            {/* banner */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
