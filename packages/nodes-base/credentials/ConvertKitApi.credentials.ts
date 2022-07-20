import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';


export class ConvertKitApi implements ICredentialType {
	name = 'convertKitApi';
	displayName = 'ConvertKit API';
	documentationUrl = 'convertKit';
	properties: INodeProperties[] = [
		{
			displayName: 'API Secret',
			name: 'apiSecret',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];
}
