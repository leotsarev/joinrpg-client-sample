import axios, { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";
import * as qs from "qs";
import * as AxiosLogger from "axios-logger";

AxiosLogger.setGlobalConfig({headers: true});

const axios_instance: AxiosInstance = axios.create();
axios_instance.interceptors.request.use(AxiosLogger.requestLogger);

const body: any = {
    grant_type: "password",
    username: "keltur@mail.ru",
    password: "xxxxxxxxxx"
};

const options: AxiosRequestConfig = {
    method: "POST",
    url: "https://joinrpg.ru/x-api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(body)
  };



async function main(): Promise<void> {
    let result: AxiosPromise<any> = axios_instance(options);
    result.catch(reason => console.log(reason.response.data));
    result.then(reason => console.log(reason));
  }
  main();