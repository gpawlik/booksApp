export const parseFetchData = ({ data }) => {
  if(!data.user) {
    throw new Error();
  }
  return data.user;
};

// TODO: return just what's needed
export const transformUpdateData = (currentUser, formData) => {
  return {
    id: currentUser._id,
    data: formData
  };
};

// TODO: check whats needed
export const parseUpdateData = ({ data }) => {
  if(!data.user) {
    throw new Error(data.message);
  }
  return data.user;
};
