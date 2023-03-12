import productApi from 'api/productApi';
import { PRODUCT_LIST } from 'constants/route';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function useProductDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const product = await productApi.get(id);
        setProduct(product);
      } catch (error) {
        console.log('Failed to fetch product detail:', error);
        navigate(PRODUCT_LIST);
      }
      setLoading(false);
    })();
  }, [id, navigate]);
  return { product, loading };
}

export default useProductDetail;
