import { Paper } from '@mui/material';
import DOMPurify from 'dompurify';

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product?.description);
  return (
    <Paper elevation={0} sx={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
