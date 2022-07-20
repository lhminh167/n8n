import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    ILoadOptionsFunctions
} from '@lhminh167/n8n-core';
import { IDataObject, NodeApiError } from '@lhminh167/n8n-workflow';
import { OptionsWithUri } from 'request';

export async function cockpitApiRequest(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, method: string, resource: string, body: any = {}, uri?: string, option: IDataObject = {}): Promise<any> { // tslint:disable-line:no-any
	const credentials = await this.getCredentials('cockpitApi');
	let options: OptionsWithUri = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method,
		qs: {
			token: credentials!.accessToken,
		},
		body,
		uri: uri || `${credentials!.url}/api${resource}`,
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

export function createDataFromParameters(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, itemIndex: number): IDataObject {
	const dataFieldsAreJson = this.getNodeParameter('jsonDataFields', itemIndex) as boolean;

	if (dataFieldsAreJson) {
		// Parameters are defined as JSON
		return JSON.parse(this.getNodeParameter('dataFieldsJson', itemIndex, '{}') as string);
	}

	// Parameters are defined in UI
	const uiDataFields = this.getNodeParameter('dataFieldsUi', itemIndex, {}) as IDataObject;
	const unpacked: IDataObject = {};

	if (uiDataFields.field === undefined) {
		return unpacked;
	}

	for (const field of uiDataFields!.field as IDataObject[]) {
		unpacked[field!.name as string] = field!.value;
	}

	return unpacked;
}
