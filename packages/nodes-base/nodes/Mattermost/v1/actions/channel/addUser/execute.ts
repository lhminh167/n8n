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

export async function addUser(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const channelId = this.getNodeParameter('channelId', index) as string;

	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = `channels/${channelId}/members`;

	body.user_id = this.getNodeParameter('userId', index) as string;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData);
}