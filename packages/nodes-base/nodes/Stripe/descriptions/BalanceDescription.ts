import {
    INodeProperties
} from '@lhminh167/n8n-workflow';

export const balanceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'get',
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a balance',
				action: 'Get a balance',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'balance',
				],
			},
		},
	},
];
