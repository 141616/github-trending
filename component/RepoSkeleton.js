function RepoCardListSkeletonItem() {
  return (
    <div className="flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2">
      <div
        style={{
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.11)",
          height: "313px",
          width: "100%",
          animation:
            "1.5s ease-in-out 0.5s infinite normal none running animation-skeleton",
        }}
      ></div>
    </div>
  );
}

function RepoCardListSkeleton() {
  return (
    <div className="flex items-center justify-around flex-wrap -mx-2">
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
      <RepoCardListSkeletonItem />
    </div>
  );
}
