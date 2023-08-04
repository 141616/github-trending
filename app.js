function App() {
  const [total, setTotal] = React.useState(0);
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [params, setParams] = React.useState({
    page: 1,
    language: getLanguageFromUrl(window.location.search),
  });
  const [error, setError] = React.useState(null);

  const reposStorageMap = React.useRef({})

  React.useEffect(() => {
    fetchRepos(params.language, params.page);
  }, []);

  const updateReposStorageMap = (items, lang) => {
    reposStorageMap.current[lang] = items;
  }

  const fetchRepos = (language, page) => {
    setLoading(true);
    setError(null);
    const url = generateUrl(language, page);
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        if (page === 1) {
          setRepos(data.items);
          updateReposStorageMap(data.items, language);
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
      language: val,
      page: 1,
    });
    setError(null);
    const storageRepos = reposStorageMap.current && (reposStorageMap.current[val] || []);
    if (storageRepos && storageRepos.length > 0) {
      setRepos(storageRepos);
    } else {
      setRepos([]);
      fetchRepos(val, 1);
    }
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
            const newPage = params.page + 1;
            setParams({
              ...params,
              page: newPage,
            });
            fetchRepos(params.language, newPage);
          }}
        />
      )}
    </div>
  );
}
