import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../utils/types/wooCommerceTypes";
import { useAppDispatch } from "../../store/hooks";
import { addLineItem } from "../../store/slices/cartSlice";
import { ProductCardInfo } from "../../components";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const lineItem = {
    name: product.name,
    product_id: product.id,
    quantity: 1,
    price: product.regular_price,
  };

  const handleIncrement = () => {
    dispatch(addLineItem(lineItem));
  };

  return (
    <Card>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <ProductCardInfo
        name={product.name}
        price={product.price}
        onClickFunction={handleIncrement}
      />
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  padding-bottom: 100%; /* forces square aspect ratio */
`;
