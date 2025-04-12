// frontend/src/pages/ProductDetail.js

/**
 * @fileOverview Trang chi tiết sản phẩm.
 * Hiển thị thông tin chi tiết của sản phẩm, các hình ảnh và cho phép người dùng thêm vào giỏ hoặc mua ngay.
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import api from '../api';
import '../index.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnails = [0, 1, 2, 3, 4];

  useEffect(() => {
    api.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error("Lỗi tải sản phẩm:", err);
        toast.error("Không tìm thấy sản phẩm!");
        navigate("/", { replace: true });
      });
  }, [id, navigate]);

  if (!product) return <div>Loading...</div>;

  const getFallbackImage = (index) => {
    return (product.images && product.images[index]) ? product.images[index] : "/images_tree/default.jpg";
  };

  const localImageUrl = (index) => {
    return `${process.env.PUBLIC_URL}/images_tree/${product.ten_cay}_${index + 1}.jpg`;
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: Number(quantity) });
    toast.success("Sản phẩm đã được thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    navigate("/payment", { state: { product, quantity: Number(quantity) } });
  };

  return (
    <div className="product-main">
      <div className="product-detail">
        <div className="detail-container">
          <div>
            <div className="main-image">
              <img 
                src={localImageUrl(selectedImage)}
                alt={`${product.ten_cay} main`} 
                onError={(e) => {
                  e.currentTarget.src = getFallbackImage(selectedImage);
                }}
              />
            </div>
            <div className="thumbnail-container">
              {thumbnails.map((index) => (
                <img
                  key={index}
                  src={localImageUrl(index)}
                  alt={`${product.ten_cay} thumbnail ${index + 1}`}
                  style={{ 
                    border: selectedImage === index ? '3px solid #007bff' : '1px solid #ccc',
                    opacity: selectedImage === index ? 1 : 0.6,
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedImage(index)}
                  onError={(e) => {
                    e.currentTarget.src = getFallbackImage(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="info">
            <div>
              <h1>{product.ten_cay}</h1>
              <p><strong>Tên khoa học:</strong><br /> {product.ten_khoa_hoc}</p>
              <p><strong>Đặc điểm:</strong><br /> {product.dac_diem}</p>
              <p><strong>Ý nghĩa phong thủy:</strong><br /> {product.y_nghia_phong_thuy}</p>
              <p><strong>Lợi ích:</strong><br /> {product.loi_ich}</p>
              <div className="price">
                <p>Giá:</p> 
                <div className="price_vnd">{Number(product.gia).toLocaleString()}đ</div>
              </div>
              <div>
                <label htmlFor="quantity"><strong>Số lượng:</strong></label>
                <input 
                  id="quantity"
                  type="number" 
                  min="1"
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                />
              </div>
            </div>
            <div className="buttons">
              <button onClick={handleBuyNow} className="btn btn-buy-now">
                Mua ngay
              </button>
              <button onClick={handleAddToCart} className="btn btn-add-cart-now">
                <div className="cart-icon-wrapper">
                  <FaShoppingCart size={20} />
                  <span className="plus-icon">+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
