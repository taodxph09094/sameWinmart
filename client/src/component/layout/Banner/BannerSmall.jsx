import React from "react";

const BannerSmall = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner__pic">
              <img
                src="https://dongnaiquetoi.com/uploads/webps/admin/2021-01/kinh-doanh-thuc-pham-sach-2.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner__pic">
              <img
                src="https://1.bp.blogspot.com/-_afzfCuNGgE/X2oWx0aN2VI/AAAAAAAAAhc/qr7a0kp02PUfgiItQu3EFHx3-ufd8RPWwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Thu%25CC%259B%25CC%25A3c%2Bpha%25CC%2582%25CC%2589m%2Bsa%25CC%25A3ch%2BHNH.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
