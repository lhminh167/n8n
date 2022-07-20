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

export async function wufooApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = await this.getCredentials('wufooApi');

	let options: OptionsWithUri = {
		auth: {
			username: credentials!.apiKey as string,
			password: '',
		},
		method,
		form: body,
		body,
		qs,
		uri: `https://${credentials!.subdomain}.wufoo.com/api/v3/${resource}`,
		json: true,
	};

	options = Object.assign({}, options, option);
	if (Object.keys(options.body).length === 0 || method === 'PUT') {
		delete options.body;
	}

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
