import { Api } from "../services/api"

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  constructor() {
    // create each service
    this.api = new Api()
  }

  async setup() {
    // allow each service to setup
    await this.api.setup(null)
  }

  async addAuth(token: string) {
    await this.api.setup(token)
    await this.uploadApi.uploadSetup(token)
  }

  async removeAuth() {
    await this.api.setup(null)
    await this.uploadApi.uploadSetup(null)
  }


  /**
   * Our api.
   */
  api: Api

  /**
   * Our api.
   */
  noAuth: Api

  /**
   * Our api.
   */
  uploadApi: Api

  utilApi: Api

}
