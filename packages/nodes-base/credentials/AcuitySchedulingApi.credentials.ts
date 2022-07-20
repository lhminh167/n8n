import {
    ICredentialType,
    INodeProperties
} from '@lhminh167/n8n-workflow';

export class AcuitySchedulingApi implements ICredentialType {
	name = 'acuitySchedulingApi';
	displayName = 'Acuity Scheduling API';
	documentationUrl = 'acuityScheduling';
	properties: INodeProperties[] = [
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
}
