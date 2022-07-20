import {
    OptionsWithUri
} from 'request';

import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    IHookFunctions,
    ILoadOptionsFunctions
} from '@lhminh167/n8n-core';

import {
    IDataObject, NodeApiError
} from '@lhminh167/n8n-workflow';

export async function circleciApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = await this.getCredentials('circleCiApi');
	let options: OptionsWithUri = {
		headers: {
			'Circle-Token': credentials.apiKey,
			'Accept': 'application/json',
		},
		method,
		qs,
		body,
		uri: uri ||`https://circleci.com/api/v2${resource}`,
		json: true,
	};
	options = Object.assign({}, options, option);
	if (Object.keys(options.body).length === 0) {
		delete options.body;
	}
	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

/**
 * Make an API request to paginated CircleCI endpoint
 * and return all results
 */
export async function circleciApiRequestAllItems(this: IHookFunctions | IExecuteFunctions| ILoadOptionsFunctions, propertyName: string, method: string, resource: string, body: any = {}, query: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any

	const returnData: IDataObject[] = [];

	let responseData;

	do {
		responseData = await circleciApiRequest.call(this, method, resource, body, query);
		returnData.push.apply(returnData, responseData[propertyName]);
		query['page-token'] = responseData.next_page_token;
	} while (
		responseData.next_page_token !== undefined &&
		responseData.next_page_token !== null
	);
	return returnData;
}
