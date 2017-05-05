export const transformBookData = results => {
  const data = results.GoodreadsResponse.search[0].results[0].work;

  return data.map(({
    best_book,
    original_publication_year,
    average_rating,
    selected
  }) => {
    return {
      title: best_book[0].title[0],
      author: best_book[0].author[0].name[0],
      imageUrl: best_book[0].small_image_url[0],
      publishDate: original_publication_year[0]._,
      rating: average_rating[0],
      selected
    };
  });
};
