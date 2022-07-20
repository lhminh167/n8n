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

export async function demioApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	try {
		const credentials = await this.getCredentials('demioApi');
		let options: OptionsWithUri = {
			headers: {
				'Api-Key': credentials.apiKey,
				'Api-Secret': credentials.apiSecret,
			},
			method,
			qs,
			body,
			uri: uri || `https://my.demio.com/api/v1${resource}`,
			json: true,
		};

		options = Object.assign({}, options, option);

		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
