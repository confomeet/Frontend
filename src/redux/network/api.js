import {
  getGeneralHeaders,
  getErrorMsgFromException,
  handleApiFinalResult,
  getFullURL,
} from "./functions";
import axios from "axios";
import { handleCode401 } from "utils";
import { store } from "../store";
import actions from "../actions";
const { loadingAction } = actions;

const baseURL = `${window.domain}/api`;

const fetchData = async ({
  endpoint,
  params,
  customHeaders,
  disableLoader,
  disableSwal,
}) => {
  const headers = { ...getGeneralHeaders(), ...customHeaders };
  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  if (!disableLoader) {
    store.dispatch(loadingAction());
  }

  return fetch(url, { method: "GET", headers })
    .then((res) => {
      if (res.status === 401) return handleCode401();
      return res.json();
    })
    .then(async (res) => {
      if (res.error || res.errors) {
        successResult = false;
        swalMessage = [getErrorMsgFromException(res)];
      }
      if (successResult) {
        successResult =
          res.statusCode?.id >= 0 ||
          res.id >= 0 ||
          Array.isArray(res) ||
          res.items; //||
        // res;
        swalMessage = res.statusCode?.message ||
          res.message || [successResult ? "Success" : "Failed!"];
      }

      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: disableSwal && successResult,
        finalResult: {
          networkSuccess: successResult,
          data: successResult ? res : null,
        },
      });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};

const postData = async ({
  endpoint,
  body,
  customHeaders,
  params,
  disableLoader,
  disableSwal,
}) => {
  let headers = {
    accept: "application/json",
    ...getGeneralHeaders(),
    ...customHeaders,
  };
  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  if (body) {
    headers["Content-Type"] = "application/json";
  }
  if (!disableLoader) {
    store.dispatch(loadingAction());
  }

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 401) return handleCode401();
      return res.json();
    })
    .then(async (res) => {
      if (res.error || res.errors) {
        successResult = false;
        swalMessage = [getErrorMsgFromException(res)];
      }

      if (successResult) {
        successResult =
          res.statusCode?.id >= 0 ||
          res.id >= 0 ||
          !!res.meetingLink ||
          Array.isArray(res) ||
          Array.isArray(res?.items);
        swalMessage = res.statusCode?.message ||
          res.message || [successResult ? "Success" : "Failed!"];
      }
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: disableSwal && successResult,
        finalResult: {
          networkSuccess: successResult,
          data: successResult ? res : null,
        },
      });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};

const putData = async ({
  endpoint,
  body,
  customHeaders,
  params,
  disableLoader,
  disableSwal,
}) => {
  let headers = {
    accept: "application/json",
    ...getGeneralHeaders(),
    ...customHeaders,
  };

  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  if (body) {
    headers["Content-Type"] = "application/json";
    headers["Cache-Control"] = "no-cache";
  }
  if (!disableLoader) {
    store.dispatch(loadingAction());
  }
  return fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 401) return handleCode401();
      return res.json();
    })
    .then(async (res) => {
      if (res.error || res.errors) {
        successResult = false;
        swalMessage = [getErrorMsgFromException(res)];
      }
      if (successResult) {
        successResult =
          res.statusCode?.id >= 0 || res.id > 0 || res.meetingLink;
        swalMessage = res.statusCode?.message ||
          res.message || [successResult ? "Success" : "Failed!"];
      }

      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: disableSwal && successResult,
        finalResult: {
          networkSuccess: successResult,
          data: successResult ? res : null,
        },
      });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};

const deleteData = async ({
  endpoint,
  body,
  customHeaders,
  params,
  disableLoader,
  disableSwal,
}) => {
  let headers = {
    accept: "application/json",
    ...getGeneralHeaders(),
    ...customHeaders,
  };
  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  if (body) {
    headers["Content-Type"] = "application/json";
  }
  if (!disableLoader) {
    store.dispatch(loadingAction());
  }

  return fetch(url, {
    method: "DELETE",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 401) return handleCode401();
      return res.json();
    })
    .then(async (res) => {
      if (res.error || res.errors) {
        successResult = false;
        swalMessage = [getErrorMsgFromException(res)];
      }
      if (successResult) {
        successResult =
          res.statusCode?.id >= 0 || res.id > 0 || res.meetingLink;
        swalMessage = res.statusCode?.message ||
          res.message || [successResult ? "Success" : "Failed!"];
      }

      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: disableSwal && successResult,
        finalResult: {
          networkSuccess: successResult,
          data: successResult ? res : null,
        },
      });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};

const postFormData = async ({
  endpoint,
  body,
  customHeaders,
  params,
  disableLoader,
  disableSwal,
}) => {
  let headers = {
    accept: "application/json",
    "Content-Type": `multipart/form-data`,
    ...getGeneralHeaders(),
    ...customHeaders,
  };
  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  return await axios
    .post(encodeURI(url), body, { headers })
    .then(async (res) => {
      const { id, message } = res.data;
      swalMessage = [...message];
      if (id < 0) {
        successResult = false;
      }
      if (res.data.id)
        return await handleApiFinalResult({
          swalMessage,
          successResult,
          disableLoader,
          disableSwal: disableSwal && successResult,
          finalResult: {
            networkSuccess: successResult,
            data: res.data,
          },
        });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};

export const getFileType = (fileType) => {
  if (!fileType) return "";
  if (fileType === "image/*") return "*";
  if (fileType === "application/pdf") return "pdf";
  return "";
};

const fetchBinaryData = async ({
  endpoint,
  params,
  customHeaders,
  disableLoader,
  disableSwal,
  method,
}) => {
  const headers = { ...getGeneralHeaders(), ...customHeaders };
  let successResult = true;
  let swalMessage = [];

  const url = getFullURL({ baseURL, endpoint, params });

  if (!disableLoader) {
    store.dispatch(loadingAction());
  }

  return fetch(url, { method: method ? method : "GET", headers })
    .then((res) => {
      if (res.status === 401) return handleCode401();
      return res.blob();
    })
    .then(async (blob) => {
      let resFiles;
      if (blob.error || blob.errors) {
        successResult = false;
        swalMessage = [getErrorMsgFromException(blob)];
      }

      if (successResult) {
        let data = new File(
          [blob],
          `${new Date().getTime()}.${getFileType(blob["type"])}`,
          { type: blob["type"] }
        );
        resFiles = data;
        swalMessage = blob.statusCode?.message ||
          blob.message || [successResult ? "Success" : "Failed!"];
      }

      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: disableSwal && successResult,
        finalResult: {
          networkSuccess: true,
          data: successResult ? resFiles : null,
        },
      });
    })
    .catch(async (e) => {
      successResult = false;
      swalMessage = ["Failed due to Error!"];
      return await handleApiFinalResult({
        swalMessage,
        successResult,
        disableLoader,
        disableSwal: true, //disableSwal && successResult,
        finalResult: { networkSuccess: false, data: null },
      });
    });
};
export {
  fetchData,
  postData,
  putData,
  deleteData,
  postFormData,
  fetchBinaryData,
};
