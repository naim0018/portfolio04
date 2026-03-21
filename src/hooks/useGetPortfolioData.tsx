import { useGetSinglePortfolioQuery } from "@/store/Api/PortfolioApi";

const useGetPortfolioData = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useGetSinglePortfolioQuery(id, {
    skip: !id,
  });

  console.log(data);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetPortfolioData;
