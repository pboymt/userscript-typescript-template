import GM_fetch from '@trim21/gm-fetch';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default async function fetchAdapter(config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    const request = createRequest(config);
    try {
        const response = await createResponse(request, config);
        return response;
    } catch (error) {
        throw error;
    }
}

function createRequest(config: AxiosRequestConfig): Request {
    let { method: cMethod, auth: cAuth, data: cData, headers: cHeaders, withCredentials } = config;
    const headers = new Headers(Object.entries(cHeaders ?? {}).map(([key, value]) => [key, value.toString()] satisfies [string, string]));

    if (cAuth) {
        const { username = '', password = '' } = cAuth;
        const token = window.btoa(`${username}:${decodeURI(encodeURIComponent(password))}`);
        headers.set('Authorization', `Basic ${token}`);
    }

    const method = cMethod?.toUpperCase() ?? 'GET';

    let options = {
        method,
        headers,
    } as RequestInit;

    if (method !== 'GET' && method !== 'HEAD') {
        options.body = cData;
        if (cData instanceof FormData) {
            headers.delete('Content-Type');
        }
    }

    if (typeof withCredentials === 'boolean') {
        options.credentials = withCredentials ? 'include' : 'omit';
    }

    const url = new URL(config.url ?? '', config.baseURL);
    if (config.params) {
        for (const [key, value] of Object.entries(config.params)) {
            url.searchParams.set(key, String(value));
        }
    }

    return new Request(url.toString(), options);
}

async function createResponse(request: Request, config: AxiosRequestConfig) {
    let res: Response;
    try {
        res = await GM_fetch(request);
    } catch (e) {
        throw e;
    }
    const { status, statusText, headers: rHeaders } = res;
    const response = {
        status,
        statusText,
        headers: Object.fromEntries(rHeaders.entries()),
        config,
        request,
    } as AxiosResponse;

    if (status >= 200 && status !== 204) {
        switch (config.responseType) {
            case 'arraybuffer':
                response.data = await res.arrayBuffer();
                break;
            case 'blob':
                response.data = await res.blob();
                break;
            case 'document':
                response.data = await res.text();
                break;
            case 'json':
                response.data = await res.json();
                break;
            case 'text':
                response.data = await res.text();
                break;
            case 'stream':
                response.data = res.body;
                break;
            default:
                response.data = await res.text();
        }
    }

    return response;
}