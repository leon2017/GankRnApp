/*
 * http request
 * @Author: LeonWang
 * @Date: 2017-09-15 11:13:10 
 */

export default class HttpUtils {
  // GET请求
  static get(url) {
    let isOk;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET'
      })
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((responseData) => {
          if (isOk) {
            resolve(responseData);
          } else {
            reject(responseData);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // POST请求
  static post(url, params) {
    let isOk;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((responseData) => {
          if (isOk) {
            resolve(responseData);
          } else {
            reject(responseData);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
