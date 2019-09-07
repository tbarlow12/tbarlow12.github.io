import axios from "axios";

export class RestService {

  protected constructor(private baseUrl: string) { }

  protected async get(relativeUrl: string) {
    const response = await axios({
      url: `${this.baseUrl}${relativeUrl}`,
      method: "get"
    });
    return response.data;
  } 
}