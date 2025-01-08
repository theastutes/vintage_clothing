import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../../action/action";

const fetch = ({ productId }: { productId: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () =>
      await getProduct({
        productId,
      }),
    queryKey: ["item"], //Array according to Documentation
  });
  console.log(data?.title);
  return { isLoading, isError, data };
};

export default fetch;
