import Head from "next/head";
import { GetStaticProps } from "next";
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/wooCommerceTypes";
import styled from "styled-components";
import ProductGrid from "../components/ProductGrid";

// declare types for the functional component props //
interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  console.log("--WooCommerce Products: ", products);

  return (
    <div>
      <Head>
        <title>Headless WooCommerce with Next.js</title>
        <meta
          name="description"
          content="Headless WordPress demo with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledH1>The Candy Shop</StyledH1>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};

const StyledH1 = styled.h1`
  font-family: ${(props) => props.theme.font.heading};
  text-align: center;
`;
