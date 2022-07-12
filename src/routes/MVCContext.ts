import express from 'express';

/**
 * @class MVCContext
 */

export class MVCContext {
    /**
     * @type {express.Request}
     */
    public request: express.Request;

    /**
     * @type {express.Response}
     * @memberof MVCContext
     * @description the response object
     */
    public response: express.Response;

    // constructor initializes the request and response objects
    constructor(request: express.Request, response: express.Response) {
        this.request = request;
        this.response = response;
    }

    // this method return true if query paramer exists
    public hasQueryParam(name: string): boolean {
        return this.request.query[name] !== undefined;
    }

    // this method return true if the body is a application/json object
    public isJson(): boolean {
        return this.request.is('json') !== undefined;
    }

    // this method return true if the request is a post request
    public isPost(): boolean {
        return this.request.method === 'POST';
    }

    // this method return true if the request is a form multipart/form-data request
    public isFormData(): boolean {
        return this.request.is('multipart/form-data') !== undefined;
    }

    // return if is Ajax request
    public isAjax(): boolean {
        return this.request.headers['x-requested-with'] === 'XMLHttpRequest';
    }

    // this method return body as a json object
    public getBody(): any {
        return this.request.body;
    }

    // this method write json response
    public writeJson(data: any): void {
        this.response.json(data);
    }

    // download a file
    public downloadFile(fileName: string, filePath: string): void {
        this.response.download(filePath, fileName);
    }

    // redirect to a url
    public redirect(url: string): void {
        this.response.redirect(url);
    }

    // set not found response
    public notFound(): void {
        this.response.status(404);
    }

    // set internal server error response
    public internalServerError(): void {
        this.response.status(500);
    }

    // set unauthorized response
    public unauthorized(): void {
        this.response.status(401);
    }

    // set forbidden response
    public forbidden(): void {
        this.response.status(403);
    }

    // set bad request response
    public badRequest(): void {
        this.response.status(400);
    }

    // set ok response
    public ok(): void {
        this.response.status(200);
    }

    // set created response
    public created(): void {
        this.response.status(201);
    }

    // set no content response
    public noContent(): void {
        this.response.status(204);
    }

    // set content type response
    public setContentType(contentType: string): void {
        this.response.type(contentType);
    }

    // set content length response
    public setContentLength(contentLength: number): void {
        this.response.set('Content-Length', contentLength.toString());
    }
}
