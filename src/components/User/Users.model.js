export const parseFetchData = data => {
  return data.data.user;
};

// TODO: return just what's needed
export const transformUpdateData = (currentUser, formData) => {
  return formData;
};

// TODO: check whats needed
export const parseUpdateData = data => ({
  ...data
});
