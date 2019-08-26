export const fetchAllItems = () => {
  return $.ajax({
    url: `/api/items`,
    method: "GET"
  });
};

export const fetchListedItems = () => {
  return $.ajax({
    url: `/api/user/listed_items`,
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