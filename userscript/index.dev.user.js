// ==UserScript==
// @name userscript-typescript-template
// @version 1.1.1
// @namespace http://tampermonkey.net/
// @description Template repo using Webpack and TypeScript to build your userscript for Tampermonkey and more extensions.
// @author pboymt
// @homepage https://github.com/pboymt/userscript-typescript-template#readme
// @license https://opensource.org/licenses/MIT
// @match https://github.com/*
// @match https://www.baidu.com/*
// @require https://cdn.jsdelivr.net/npm/@trim21/gm-fetch@0.1.13
// @require https://cdn.jsdelivr.net/npm/axios@1.3.6
// @connect github.com
// @grant GM.xmlHttpRequest
// ==/UserScript==

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter.ts":
/*!************************!*\
  !*** ./src/adapter.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst gm_fetch_1 = __importDefault(__webpack_require__(/*! @trim21/gm-fetch */ \"@trim21/gm-fetch\"));\nfunction fetchAdapter(config) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const request = createRequest(config);\n        try {\n            const response = yield createResponse(request, config);\n            return response;\n        }\n        catch (error) {\n            throw error;\n        }\n    });\n}\nexports[\"default\"] = fetchAdapter;\nfunction createRequest(config) {\n    var _a, _b;\n    let { method: cMethod, auth: cAuth, data: cData, headers: cHeaders, withCredentials } = config;\n    const headers = new Headers(Object.entries(cHeaders !== null && cHeaders !== void 0 ? cHeaders : {}).map(([key, value]) => [key, value.toString()]));\n    if (cAuth) {\n        const { username = '', password = '' } = cAuth;\n        const token = window.btoa(`${username}:${decodeURI(encodeURIComponent(password))}`);\n        headers.set('Authorization', `Basic ${token}`);\n    }\n    const method = (_a = cMethod === null || cMethod === void 0 ? void 0 : cMethod.toUpperCase()) !== null && _a !== void 0 ? _a : 'GET';\n    let options = {\n        method,\n        headers,\n    };\n    if (method !== 'GET' && method !== 'HEAD') {\n        options.body = cData;\n        if (cData instanceof FormData) {\n            headers.delete('Content-Type');\n        }\n    }\n    if (typeof withCredentials === 'boolean') {\n        options.credentials = withCredentials ? 'include' : 'omit';\n    }\n    const url = new URL((_b = config.url) !== null && _b !== void 0 ? _b : '', config.baseURL);\n    if (config.params) {\n        for (const [key, value] of Object.entries(config.params)) {\n            url.searchParams.set(key, String(value));\n        }\n    }\n    return new Request(url.toString(), options);\n}\nfunction createResponse(request, config) {\n    return __awaiter(this, void 0, void 0, function* () {\n        let res;\n        try {\n            res = yield (0, gm_fetch_1.default)(request);\n        }\n        catch (e) {\n            throw e;\n        }\n        const { status, statusText, headers: rHeaders } = res;\n        const response = {\n            status,\n            statusText,\n            headers: Object.fromEntries(rHeaders.entries()),\n            config,\n            request,\n        };\n        if (status >= 200 && status !== 204) {\n            switch (config.responseType) {\n                case 'arraybuffer':\n                    response.data = yield res.arrayBuffer();\n                    break;\n                case 'blob':\n                    response.data = yield res.blob();\n                    break;\n                case 'document':\n                    response.data = yield res.text();\n                    break;\n                case 'json':\n                    response.data = yield res.json();\n                    break;\n                case 'text':\n                    response.data = yield res.text();\n                    break;\n                case 'stream':\n                    response.data = res.body;\n                    break;\n                default:\n                    response.data = yield res.text();\n            }\n        }\n        return response;\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRhcHRlci50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQ0FBbUMsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBZTtBQUNmO0FBQ0E7QUFDQSxVQUFVLGdGQUFnRjtBQUMxRix1R0FBdUc7QUFDdkc7QUFDQSxnQkFBZ0IsK0JBQStCO0FBQy9DLHFDQUFxQyxTQUFTLEdBQUcsd0NBQXdDO0FBQ3pGLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0NBQXdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Vyc2NyaXB0LXR5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvYWRhcHRlci50cz9lNjRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBnbV9mZXRjaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAdHJpbTIxL2dtLWZldGNoXCIpKTtcbmZ1bmN0aW9uIGZldGNoQWRhcHRlcihjb25maWcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdChjb25maWcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjcmVhdGVSZXNwb25zZShyZXF1ZXN0LCBjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGZldGNoQWRhcHRlcjtcbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3QoY29uZmlnKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBsZXQgeyBtZXRob2Q6IGNNZXRob2QsIGF1dGg6IGNBdXRoLCBkYXRhOiBjRGF0YSwgaGVhZGVyczogY0hlYWRlcnMsIHdpdGhDcmVkZW50aWFscyB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhPYmplY3QuZW50cmllcyhjSGVhZGVycyAhPT0gbnVsbCAmJiBjSGVhZGVycyAhPT0gdm9pZCAwID8gY0hlYWRlcnMgOiB7fSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIHZhbHVlLnRvU3RyaW5nKCldKSk7XG4gICAgaWYgKGNBdXRoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUgPSAnJywgcGFzc3dvcmQgPSAnJyB9ID0gY0F1dGg7XG4gICAgICAgIGNvbnN0IHRva2VuID0gd2luZG93LmJ0b2EoYCR7dXNlcm5hbWV9OiR7ZGVjb2RlVVJJKGVuY29kZVVSSUNvbXBvbmVudChwYXNzd29yZCkpfWApO1xuICAgICAgICBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCYXNpYyAke3Rva2VufWApO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSAoX2EgPSBjTWV0aG9kID09PSBudWxsIHx8IGNNZXRob2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNNZXRob2QudG9VcHBlckNhc2UoKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ0dFVCc7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgIT09ICdHRVQnICYmIG1ldGhvZCAhPT0gJ0hFQUQnKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IGNEYXRhO1xuICAgICAgICBpZiAoY0RhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgaGVhZGVycy5kZWxldGUoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2l0aENyZWRlbnRpYWxzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5jcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdvbWl0JztcbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCgoX2IgPSBjb25maWcudXJsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJywgY29uZmlnLmJhc2VVUkwpO1xuICAgIGlmIChjb25maWcucGFyYW1zKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5wYXJhbXMpKSB7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChrZXksIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVxdWVzdCh1cmwudG9TdHJpbmcoKSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZXNwb25zZShyZXF1ZXN0LCBjb25maWcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzID0geWllbGQgKDAsIGdtX2ZldGNoXzEuZGVmYXVsdCkocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQsIGhlYWRlcnM6IHJIZWFkZXJzIH0gPSByZXM7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIGhlYWRlcnM6IE9iamVjdC5mcm9tRW50cmllcyhySGVhZGVycy5lbnRyaWVzKCkpLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzICE9PSAyMDQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FycmF5YnVmZmVyJzpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHlpZWxkIHJlcy5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdibG9iJzpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHlpZWxkIHJlcy5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHlpZWxkIHJlcy50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0geWllbGQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSB5aWVsZCByZXMudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJlYW0nOlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVzLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSB5aWVsZCByZXMudGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/adapter.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst adapter_1 = __importDefault(__webpack_require__(/*! ./adapter */ \"./src/adapter.ts\"));\naxios_1.default.defaults.adapter = adapter_1.default;\nfunction main() {\n    return __awaiter(this, void 0, void 0, function* () {\n        console.log('Hello, world!');\n        const result = yield axios_1.default.get('https://github.com/pboymt/userscript-typescript-template');\n        console.log(`Status: ${result.status}`);\n        console.log(`Content Length: ${result.data.length}`);\n    });\n}\nmain();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0NBQWdDLG1CQUFPLENBQUMsb0JBQU87QUFDL0Msa0NBQWtDLG1CQUFPLENBQUMsbUNBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDLHVDQUF1QyxtQkFBbUI7QUFDMUQsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Vyc2NyaXB0LXR5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvaW5kZXgudHM/ZTk0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xuY29uc3QgYWRhcHRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FkYXB0ZXJcIikpO1xuYXhpb3NfMS5kZWZhdWx0LmRlZmF1bHRzLmFkYXB0ZXIgPSBhZGFwdGVyXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0hlbGxvLCB3b3JsZCEnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgYXhpb3NfMS5kZWZhdWx0LmdldCgnaHR0cHM6Ly9naXRodWIuY29tL3Bib3ltdC91c2Vyc2NyaXB0LXR5cGVzY3JpcHQtdGVtcGxhdGUnKTtcbiAgICAgICAgY29uc29sZS5sb2coYFN0YXR1czogJHtyZXN1bHQuc3RhdHVzfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udGVudCBMZW5ndGg6ICR7cmVzdWx0LmRhdGEubGVuZ3RofWApO1xuICAgIH0pO1xufVxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "@trim21/gm-fetch":
/*!***************************!*\
  !*** external "GM_fetch" ***!
  \***************************/
/***/ ((module) => {

module.exports = GM_fetch;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = axios;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;