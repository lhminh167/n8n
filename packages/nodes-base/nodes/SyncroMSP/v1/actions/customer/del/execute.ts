import {
    IExecuteFunctions
} from '@lhminh167/n8n-core';

import {
    IDataObject,
    INodeExecutionData
} from '@lhminh167/n8n-workflow';

import {
    apiRequest
} from '../../../transport';


export async function deleteCustomer(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('customerId', index) as string;

	const qs = {} as IDataObject;
	const requestMethod = 'DELETE';
	const endpoint = `customers/${id}`;
	const body = {} as IDataObject;

	let responseData;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(responseData);
}
