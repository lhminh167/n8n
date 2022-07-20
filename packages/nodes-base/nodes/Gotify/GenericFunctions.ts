import {
    OptionsWithUri
} from 'request';

import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    ILoadOptionsFunctions
} from '@lhminh167/n8n-core';

import {
    IDataObject, NodeApiError
} from '@lhminh167/n8n-workflow';

export async function gotifyApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, path: string, body: any = {}, qs: IDataObject = {}, uri?: string | undefined, option = {}): Promise<any> { // tslint:disable-line:no-any

	const credentials = await this.getCredentials('gotifyApi');

	const options: OptionsWithUri = {
		method,
		headers: {
			'X-Gotify-Key': (method === 'POST') ? credentials.appApiToken : credentials.clientApiToken,
			accept: 'application/json',
		},
		body,
		qs,
		uri: uri || `${credentials.url}${path}`,
		json: true,
	};
	try {
		if (Object.keys(body).length === 0) {
			delete options.body;
		}

		//@ts-ignore
		return await this.helpers.request.call(this, options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function gotifyApiRequestAllItems(this: IExecuteFunctions | ILoadOptionsFunctions, propertyName: string, method: string, endpoint: string, body: any = {}, query: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any

	const returnData: IDataObject[] = [];

	let responseData;
	let uri: string | undefined;
	query.limit = 100;
	do {
		responseData = await gotifyApiRequest.call(this, method, endpoint, body, query, uri);
		if (responseData.paging.next) {
			uri = responseData.paging.next;
		}
		returnData.push.apply(returnData, responseData[propertyName]);
	} while (
		responseData.paging.next
	);

	return returnData;
}
