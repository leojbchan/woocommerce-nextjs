import { GetStaticProps } from "next";
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";
import { ProductGrid } from "../features";
import { NavLayout } from "../layout";

// declare types for the functional component props //
interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  // console.log("--WooCommerce Products: ", products);

  return (
    <NavLayout title="Menu" description="Menu page">
      <ProductGrid products={products} />
    </NavLayout>
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
