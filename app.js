function App() {
  const [total, setTotal] = React.useState(0);
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [params, setParams] = React.useState({
    page: 1,
    language: getLanguageFromUrl(window.location.search),
  });
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchRepos(params.language, params.page);
  }, [params]);

  const fetchRepos = (language, page) => {
    setLoading(true);
    setError(null);
    const url = generateUrl(language, page);
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (page === 1) {
          setRepos(data.items);
        } else {
          setRepos([...repos, ...data.items]);
        }
        setTotal(data.total_count);
      })
      .catch((error) => {
        error.json().then((err) => {
          setError(err.message || "Something went wrong");
        });
      })
      .finally(() => setLoading(false));
  };

  const handleLanguageChange = (val) => {
    setParams({
      ...params,
      language: val,
      page: 1,
    });
    window.history.replaceState({}, "", generatePushUrl(val));
  };

  return (
    <div className="max-w-[1024px] mx-auto px-4 py-8">
      <LanguageTabs
        language={params.language}
        onChange={handleLanguageChange}
      />
      {error ? (
        <div className="text-red-600 flex items-center justify-center my-10">
          <MyIcon name="error" />
          <p className="text-center font-sm ml-2">{error}</p>
        </div>
      ) : (
        <RepoCards
          loading={loading}
          repos={repos}
          total={total}
          onLoadMore={() => {
            if (loading) {
              return;
            }
            setParams({
              ...params,
              page: params.page + 1,
            });
          }}
        />
      )}
    </div>
  );
}
