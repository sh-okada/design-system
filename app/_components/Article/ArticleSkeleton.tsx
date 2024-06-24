const ArticleSkeleton = () => {
  return (
    <div
      role="status"
      className="p-4 col-span-12 animate-pulse flex flex-col gap-1"
    >
      <div className="w-28 h-5 bg-gray-200"></div>
      <div className="w-full h-5 bg-gray-200"></div>
      <div className="w-full h-5 bg-gray-200"></div>
    </div>
  );
};

export { ArticleSkeleton };
