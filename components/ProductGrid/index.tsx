import styled from "styled-components";
import { Product } from "../../utils/wooCommerceTypes";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
}

const ProductGrid = (props: Props) => {
  const { products } = props;

  return (
    <Grid>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;
