import { AxiosRequestConfig } from "axios";
import axios from "axios";

const config = {
  baseURL: "//drcareunion.com/admin",
  timeout: 10000,
};
const http = axios.create(config);

type Response = { error: null | Error; result: null | any };

export default function useHttp() {
  let fn = {
    get: <T = any>(
      url: string,
      config?: AxiosRequestConfig<T>
    ): Promise<Response> => {
      return new Promise((success) => {
        let res = { error: null, result: null };
        http
          .get(url, config)
          .then(({ data }) => (res.result = data))
          .catch((err) => (res.error = err))
          .finally(() => success(res));
      });
    },
    post: <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<T>
    ): Promise<Response> => {
      return new Promise((success) => {
        let res = { error: null, result: null };
        http
          .post(url, data, config)
          .then(({ data }) => (res.result = data))
          .catch((err) => (res.error = err))
          .finally(() => success(res));
      });
    },
    put: <T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig<T>
    ): Promise<Response> => {
      return new Promise((success) => {
        let res = { error: null, result: null };
        http
          .put(url, data, config)
          .then(({ data }) => (res.result = data))
          .catch((err) => (res.error = err))
          .finally(() => success(res));
      });
    },
    delete: <T = any>(
      url: string,
      config?: AxiosRequestConfig<T>
    ): Promise<Response> => {
      return new Promise((success) => {
        let res = { error: null, result: null };
        http
          .delete(url, config)
          .then(({ data }) => (res.result = data))
          .catch((err) => (res.error = err))
          .finally(() => success(res));
      });
    },
  };

  return fn;
}
