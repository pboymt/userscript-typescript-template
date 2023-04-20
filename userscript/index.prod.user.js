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
// @require https://cdn.jsdelivr.net/npm/axios@0.27.2
// @connect github.com
// @grant GM.xmlHttpRequest
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 346:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const gm_fetch_1 = __importDefault(__webpack_require__(568));
function fetchAdapter(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = createRequest(config);
        try {
            const response = yield createResponse(request, config);
            return response;
        }
        catch (error) {
            throw error;
        }
    });
}
exports["default"] = fetchAdapter;
function createRequest(config) {
    var _a, _b;
    let { method: cMethod, auth: cAuth, data: cData, headers: cHeaders, withCredentials } = config;
    const headers = new Headers(Object.entries(cHeaders !== null && cHeaders !== void 0 ? cHeaders : {}).map(([key, value]) => [key, value.toString()]));
    if (cAuth) {
        const { username = '', password = '' } = cAuth;
        const token = window.btoa(`${username}:${decodeURI(encodeURIComponent(password))}`);
        headers.set('Authorization', `Basic ${token}`);
    }
    const method = (_a = cMethod === null || cMethod === void 0 ? void 0 : cMethod.toUpperCase()) !== null && _a !== void 0 ? _a : 'GET';
    let options = {
        method,
        headers,
    };
    if (method !== 'GET' && method !== 'HEAD') {
        options.body = cData;
        if (cData instanceof FormData) {
            headers.delete('Content-Type');
        }
    }
    if (typeof withCredentials === 'boolean') {
        options.credentials = withCredentials ? 'include' : 'omit';
    }
    const url = new URL((_b = config.url) !== null && _b !== void 0 ? _b : '', config.baseURL);
    if (config.params) {
        for (const [key, value] of Object.entries(config.params)) {
            url.searchParams.set(key, String(value));
        }
    }
    return new Request(url.toString(), options);
}
function createResponse(request, config) {
    return __awaiter(this, void 0, void 0, function* () {
        let res;
        try {
            res = yield (0, gm_fetch_1.default)(request);
        }
        catch (e) {
            throw e;
        }
        const { status, statusText, headers: rHeaders } = res;
        const response = {
            status,
            statusText,
            headers: Object.fromEntries(rHeaders.entries()),
            config,
            request,
        };
        if (status >= 200 && status !== 204) {
            switch (config.responseType) {
                case 'arraybuffer':
                    response.data = yield res.arrayBuffer();
                    break;
                case 'blob':
                    response.data = yield res.blob();
                    break;
                case 'document':
                    response.data = yield res.text();
                    break;
                case 'json':
                    response.data = yield res.json();
                    break;
                case 'text':
                    response.data = yield res.text();
                    break;
                case 'stream':
                    response.data = res.body;
                    break;
                default:
                    response.data = yield res.text();
            }
        }
        return response;
    });
}


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __importDefault(__webpack_require__(467));
const adapter_1 = __importDefault(__webpack_require__(346));
axios_1.default.defaults.adapter = adapter_1.default;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Hello, world!');
        const result = yield axios_1.default.get('https://github.com/pboymt/userscript-typescript-template');
        console.log(`Status: ${result.status}`);
        console.log(`Content Length: ${result.data.length}`);
    });
}
main();


/***/ }),

/***/ 568:
/***/ ((module) => {

module.exports = GM_fetch;

/***/ }),

/***/ 467:
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
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	
/******/ })()
;