import React, { useEffect, useState } from "react";
import { BiUpload } from "react-icons/bi";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./product.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, createBrand } from "../../actions/brandAction";
import { CREATE_BRAND_SUCCESS } from "../../constants/brandConstants";

const CreateBrand = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newBrand);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [productCate, setProductCate] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Thêm nhà cung cấp thành công");
      history.push("/admin/brands");
      dispatch({ type: CREATE_BRAND_SUCCESS });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("address", address);
    myForm.set("productCate", productCate);

    dispatch(createBrand(myForm));
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm nhà cung cấp mới</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  onSubmit={createProductSubmitHandler}
                >
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Nhà cung cấp</label>
                        <Form.Control
                          // value={price}
                          placeholder="Nhập tên nhà cung cấp"
                          required
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Địa chỉ</label>
                        <Form.Control
                          // value={Stock}
                          placeholder="Địa chỉ"
                          type="text"
                          required
                          onChange={(e) => setAddress(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Loại sản phẩm</label>
                        <Form.Control
                          placeholder="Nhập loại sản phẩm"
                          type="text"
                          onChange={(e) => setProductCate(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right buttonCreate"
                    type="submit"
                    variant="info"
                    disabled={loading ? true : false}
                  >
                    Tạo sản phẩm
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateBrand;
