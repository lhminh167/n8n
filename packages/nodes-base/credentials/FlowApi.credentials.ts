import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class FlowApi implements ICredentialType {
	name = 'flowApi';
	displayName = 'Flow API';
	documentationUrl = 'flow';
	properties: INodeProperties[] = [
		{
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'number',
			default: 0,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
