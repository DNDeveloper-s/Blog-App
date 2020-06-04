const removeQueryFromUrl = (searchQuery, queryToBeRemoved) => {
    let query = searchQuery;
    query = query.slice(1);
    let queryArr = query.split('&');
    let deletedQuery = queryArr.filter(q => !q.includes(queryToBeRemoved));
    return `?${deletedQuery.join('&')}`;
};

export default removeQueryFromUrl;