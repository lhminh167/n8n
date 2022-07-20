import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class OneSimpleApi implements ICredentialType {
	name = 'oneSimpleApi';
	displayName = 'One Simple API';
	documentationUrl = 'oneSimpleApi';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			default: '',
		},
	];
}
