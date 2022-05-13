import { ApisauceInstance, create } from "apisauce"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  // @ts-ignore
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup(token?: string) {

    const baseConfigHeaders = {
      Accept: "*/*",
      "Cache-Control": "no-cache",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    }

    let authConfig = {}

    if (token) {
      authConfig = {
        Authorization: `Bearer ${token}`,
      }
    }

    const config = {
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: { ...authConfig, ...baseConfigHeaders },
    }


    // construct the apisauce instance
    this.apisauce = create(config)

  }

  uploadSetup(token: string) {

    const baseConfigHeaders = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    }

    let authConfig = {}

    if (token) {
      authConfig = {
        Authorization: `Bearer ${token}`,
      }
    }

    const config = {
      baseURL: this.config.url,
      timeout: this.config.uploadTimeout,
      headers: { ...authConfig, ...baseConfigHeaders },
      // headers: { ...baseConfigHeaders },
    }

    // construct the apisauce instance
    this.apisauce = create(config)

  }

  utilSetup() {

    const config = {
      baseURL: this.config.url,
      timeout: this.config.timeout
    }

    // construct the apisauce instance
    this.apisauce = create(config)

  }

}
