import express from 'express';
export declare class MVCContext {
    request: express.Request;
    response: express.Response;
    constructor(request: express.Request, response: express.Response);
    hasQueryParam(name: string): boolean;
    isJson(): boolean;
    isPost(): boolean;
    isFormData(): boolean;
    isAjax(): boolean;
    getBody(): any;
    writeJson(data: any): void;
    downloadFile(fileName: string, filePath: string): void;
    redirect(url: string): void;
    notFound(): void;
    internalServerError(): void;
    unauthorized(): void;
    forbidden(): void;
    badRequest(): void;
    ok(): void;
    created(): void;
    noContent(): void;
    setContentType(contentType: string): void;
    setContentLength(contentLength: number): void;
}
