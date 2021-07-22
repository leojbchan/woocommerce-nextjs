import styled from "styled-components";
import Image from "next/image";
import { Product } from "../../utils/types/wooCommerceTypes";
import { createOrderApi } from "../../utils/customApi";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  const handleClick = async () => {
    // hard coded data for dev purposes
    // TODO this handleClick function will add product to cart rather than create an order
    const data = {
      payment_method: "cash",
      payment_method_title: "cash",
      set_paid: false,
      line_items: [
        {
          product_id: product.id,
          quantity: 2,
        },
      ],
    };

    await createOrderApi(data).catch((error) => console.error(error.message));
  };

  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Details>
        <span>{product.name}</span>
        <span>--</span>
        <span>
          <strong>£{product.regular_price}</strong>
        </span>
      </Details>
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

const Details = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 5%;
  padding-bottom: 7%;
  display: flex;
  justify-content: center;
  gap: 12px;
`;
