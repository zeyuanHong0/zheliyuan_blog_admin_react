import { GET, POST } from "./axios";
import api from "./api";

export function login(data, callback) {
  POST(api.login, data, callback);
}

export function getOrdersEchartData(callback) {
  GET(api.getOrdersEchartData, callback);
}
 
export function getAdminUserList(data,callback) { //页码通过data传过来
  GET(`${api.getAdminUserList}?page=${data.page}`, callback);
}

export function addCreateAdminUser(data, callback) {
  POST(api.addCreateAdminUser, data, callback);
}

export function updateAdminUser(data, callback) {
  POST(api.updateAdminUser, data, callback);
}

export function delAdminUser(data, callback) {
  GET(`${api.delAdminUser}?id=${data.id}`, callback);
}

export function usersList(data, callback) {
  POST(api.usersList, data, callback);
}
