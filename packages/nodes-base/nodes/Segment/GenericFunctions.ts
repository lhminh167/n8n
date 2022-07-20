import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    IHookFunctions,
    ILoadOptionsFunctions,
    IWebhookFunctions
} from '@lhminh167/n8n-core';
import { IDataObject, NodeApiError } from '@lhminh167/n8n-workflow';
import { OptionsWithUri } from 'request';

export async function segmentApiRequest(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IWebhookFunctions, method: string, resource: string, body: any = {}, qs: IDataObject = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = await this.getCredentials('segmentApi');
	const base64Key =  Buffer.from(`${credentials.writekey}:`).toString('base64');
	const options: OptionsWithUri = {
		headers: {
			Authorization: `Basic ${base64Key}`,
			'Content-Type': 'application/json',
		},
		method,
		qs,
		body,
		uri: uri ||`https://api.segment.io/v1${resource}`,
		json: true,
	};
	if (!Object.keys(body).length) {
		delete options.body;
	}
	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
