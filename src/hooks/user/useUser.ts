import { User } from "../../types/user";
import http from "../http-common";

class UseUser {
  getUserList() {
    return http.get<User[]>("/users");
  }

  addUser(req: User) {
    return http.post<User>("/users", req);
  }
}

export default new UseUser();
