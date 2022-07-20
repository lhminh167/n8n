import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class OuraApi implements ICredentialType {
	name = 'ouraApi';
	displayName = 'Oura API';
	documentationUrl = 'oura';
	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
