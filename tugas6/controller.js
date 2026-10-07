import users from "./data.js";

const index = () => {
  return users.map((user) => user);
};
const store = (user) => {
  users.push(...user);
};
const destroy = () => {
  const userIndex = users.findIndex((user) => user.nama === "data1");
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
  }
};

export { index, store, destroy };
