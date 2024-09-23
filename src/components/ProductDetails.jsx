import { useSearchParams } from 'react-router-dom';

function ProductDetails() {
  const [searchParams] = useSearchParams();
  const pid = searchParams.get('pid');

  // Validate the pid to allow only digits
  if (!/^\d+$/.test(pid)) {
    return <div>Invalid Product ID</div>;
  }

  return (
    <div>
      <h1>Product Details for ID: {pid}</h1>
      {/* Display the product details for the given `pid` */}
    </div>
  );
}

export default ProductDetails;
