function RepoCard(props) {
  const item = props.data;
  return (
    <div
      className="flex-1 lg:w-[25%] lg:max-w-[25%] lg:min-w-[25%] md:w-[33.3%] md:max-w-[33.3%] md:min-w-[33.3%] w-[50%] max-w-[50%] min-w-[50%] p-2"
      key={item.id}
    >
      <div className="bg-[rgba(235,235,235,1)] py-4 ">
        <div className="px-4 mb-2 text-center">#{props.indexKey}</div>
        <div className="mb-4">
          <Avatar url={item.owner.avatar_url} />
        </div>

        <div className="px-4">
          <div className="mb-4 flex items-center justify-center">
            <a
              href={item.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red-500 text-center text-sm truncate hover:text-purple-600"
              title={item.name}
            >
              {item.name}
            </a>
          </div>
          <div className="flex items-center mb-2">
            <MyIcon name="user" className="text-orange-400" />
            <div className="ml-2 flex-auto text-xs truncate">
              {item.owner.login}
            </div>
          </div>
          <div className="flex items-center mb-2">
            <MyIcon name="star" className="text-yellow-400" />
            <div className="ml-2 flex-auto text-xs truncate">
              <span className="font-bold mr-1">{item.stargazers_count}</span>
              stars
            </div>
          </div>
          <div className="flex items-center mb-2">
            <MyIcon name="fork" className="text-blue-400" />
            <div className="ml-2 flex-auto text-xs truncate">
              <span className="font-bold mr-1">{item.forks_count}</span>
              forks
            </div>
          </div>
          <div className="flex items-center">
            <MyIcon name="danger" className="text-red-400" />
            <div className="ml-2 flex-auto text-xs truncate">
              <span className="font-bold mr-1">{item.open_issues}</span>
              open issues
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
