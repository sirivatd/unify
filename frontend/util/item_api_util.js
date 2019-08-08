export const fetchItems = userId => {
  return $.ajax({
    url: `/api/user/items`,
    method: "GET"
  });
};

export const createItem = item => {
  return $.ajax({
    url: `/api/user/items`,
    method: "POST",
    data: { item: item }
  });
};

export const deleteItem = (userId, itemId) => {
  return $.ajax({
    url: `/api/user/items/${itemId}`,
    method: "DELETE"
  });
};