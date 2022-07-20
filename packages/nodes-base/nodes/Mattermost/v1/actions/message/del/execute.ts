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

export async function del(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const postId = this.getNodeParameter('postId', index) as string;

	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'DELETE';
	const endpoint = `posts/${postId}`;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}