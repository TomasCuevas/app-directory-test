import { IData } from "@/interfaces/user.interfaces";

//! GET USER SERVICE *//
export const getUserService = async (id: string) => {
  const body = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await body.json();

  return data as IData;
};
