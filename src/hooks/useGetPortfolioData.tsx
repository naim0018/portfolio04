import { useMemo } from "react";
import { useGetSinglePortfolioQuery } from "@/store/Api/PortfolioApi";

const useGetPortfolioData = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useGetSinglePortfolioQuery(id, {
    skip: !id,
  });
  const portfolioData = data?.data;

  const profile = useMemo(
    () => ({
      id: portfolioData?._id,
      name: portfolioData?.name,
      email: portfolioData?.email,
      role: portfolioData?.role,
      shortDescription: portfolioData?.shortDescription,
      longDescription: portfolioData?.longDescription,
      profilePicture: portfolioData?.profilePicture,
      resume: portfolioData?.resume,
      status: portfolioData?.status,
      selectedTemplate: portfolioData?.selectedTemplate,
      profileViews: portfolioData?.profileViews,
      resumeDownloads: portfolioData?.resumeDownloads,
      isTrackingEnabled: portfolioData?.isTrackingEnabled,
      createdAt: portfolioData?.createdAt,
      updatedAt: portfolioData?.updatedAt,
      userId: portfolioData?.userId,
    }),
    [portfolioData]
  );

  const skills = useMemo(() => portfolioData?.skills ?? [], [portfolioData]);
  const experience = useMemo(() => portfolioData?.experience ?? [], [portfolioData]);
  const education = useMemo(() => portfolioData?.education ?? [], [portfolioData]);
  const projects = useMemo(() => portfolioData?.projects ?? [], [portfolioData]);
  const socialLinks = useMemo(() => portfolioData?.socialLinks ?? [], [portfolioData]);

  return {
    data: portfolioData,
    profile,
    skills,
    experience,
    education,
    projects,
    socialLinks,
    isLoading,
    error,
  };
};

export default useGetPortfolioData;
