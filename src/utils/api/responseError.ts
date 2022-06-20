class ResponseError extends Error {
  public response: Response;
  public code?: string;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

export default ResponseError;
