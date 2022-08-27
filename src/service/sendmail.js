import { sendMailUrl } from "../base/index";

export const registerUser = async (data) => {
    const response = await sendMailUrl.post("/sendmail", data);
    return response;
  };