import { getCookie } from "cookies-next";
import fetchApi from "./fetchApi";

class Http {
  static get token() {
    return getCookie("token");
  }

  static handleError(error) {
    if (error instanceof Error) {
      return Promise.reject(JSON.parse(error.message));
    }
    return Promise.reject(error);
  }

  static async handleResponse(response) {
    if (response.ok) {
      const data = await response.json();
      return Promise.resolve(data);
    }
    throw new Error(await response.text());
  }

  static async get({ endpoint }) {
    try {
      const response = await fetchApi(endpoint, {
        method: "GET",
      });
      return Http.handleResponse(response);
    } catch (error) {
      return Http.handleError(error);
    }
  }

  static async post({ endpoint, body }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: "POST",
      });

      return Http.handleResponse(response);
    } catch (error) {
      return error;
    }
  }

  static async put({ endpoint, body }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: "PUT",
      });

      return Http.handleResponse(response);
    } catch (error) {
      return error;
    }
  }

  static async patch({ endpoint, body, config }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: "PATCH",
        ...config,
      });
      return Http.handleResponse(response);
    } catch (error) {
      return Http.handleError(error);
    }
  }

  static async patchMultipart({ endpoint, body }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
        {
          body: body,
          headers: {
            Authorization: `Bearer ${Http.token}`,
          },
          method: "PATCH",
        }
      );

      return Http.handleResponse(response);
    } catch (error) {
      return Http.handleError(error);
    }
  }

  static async delete({ endpoint, body }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: "DELETE",
      });
      return Http.handleResponse(response);
    } catch (error) {
      return Http.handleError(error);
    }
  }
}

export default Http;
