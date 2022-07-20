import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class ChargebeeApi implements ICredentialType {
	name = 'chargebeeApi';
	displayName = 'Chargebee API';
	documentationUrl = 'chargebee';
	properties: INodeProperties[] = [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Api Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
