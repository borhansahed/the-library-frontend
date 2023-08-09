const user = () => {
  const verifiedUser = localStorage.getItem("user");

  return JSON.parse(verifiedUser!);
};

export default user;
