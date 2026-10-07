import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("data users", index());

  const user = [
    {
      nama: "data10",
      umur: 21,
      alamat: "alamat10",
      email: "email@user10",
    },
    {
      nama: "data11",
      umur: 22,
      alamat: "alamat11",
      email: "email@user11",
    },
  ];
  store(user);
  console.log("menambahkan 2 data baru", index());

  destroy();
  console.log("menghapus data1 ", index());
};

main();
