"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MVCContext = void 0;
class MVCContext {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    hasQueryParam(name) {
        return this.request.query[name] !== undefined;
    }
    isJson() {
        return this.request.is('json') !== undefined;
    }
    isPost() {
        return this.request.method === 'POST';
    }
    isFormData() {
        return this.request.is('multipart/form-data') !== undefined;
    }
    isAjax() {
        return this.request.headers['x-requested-with'] === 'XMLHttpRequest';
    }
    getBody() {
        return this.request.body;
    }
    writeJson(data) {
        this.response.json(data);
    }
    downloadFile(fileName, filePath) {
        this.response.download(filePath, fileName);
    }
    redirect(url) {
        this.response.redirect(url);
    }
    notFound() {
        this.response.status(404);
    }
    internalServerError() {
        this.response.status(500);
    }
    unauthorized() {
        this.response.status(401);
    }
    forbidden() {
        this.response.status(403);
    }
    badRequest() {
        this.response.status(400);
    }
    ok() {
        this.response.status(200);
    }
    created() {
        this.response.status(201);
    }
    noContent() {
        this.response.status(204);
    }
    setContentType(contentType) {
        this.response.type(contentType);
    }
    setContentLength(contentLength) {
        this.response.set('Content-Length', contentLength.toString());
    }
}
exports.MVCContext = MVCContext;
//# sourceMappingURL=MVCContext.js.map