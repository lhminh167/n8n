import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class PostmarkApi implements ICredentialType {
	name = 'postmarkApi';
	displayName = 'Postmark API';
	documentationUrl = 'postmark';
	properties: INodeProperties[] = [
		{
			displayName: 'Server API Token',
			name: 'serverToken',
			type: 'string',
			default: '',
		},
	];
}
