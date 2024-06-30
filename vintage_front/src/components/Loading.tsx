import { CircularProgress } from "@nextui-org/progress";

const Loading = () => {
  return (
    <div className="h-full w-full text-4xl flex items-center justify-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </div>
  );
};

export default Loading;
