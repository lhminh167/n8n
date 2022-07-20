import {
    IExecuteFunctions
} from '@lhminh167/n8n-core';

import {
    INodeExecutionData, NodeApiError
} from '@lhminh167/n8n-workflow';

import * as contact from './contact';
import * as customer from './customer';
import * as rmm from './rmm';
import * as ticket from './ticket';

import { SyncroMsp } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<SyncroMsp>('resource', i);
		let operation = this.getNodeParameter('operation', i);
		if (operation === 'del') {
			operation = 'delete';
		}

		const syncroMsp = {
			resource,
			operation,
		} as SyncroMsp;

		try {
			if (syncroMsp.resource === 'customer') {
				operationResult.push(...await customer[syncroMsp.operation].execute.call(this, i));
			} else if (syncroMsp.resource === 'ticket') {
				operationResult.push(...await ticket[syncroMsp.operation].execute.call(this, i));
			} else if (syncroMsp.resource === 'contact') {
				operationResult.push(...await contact[syncroMsp.operation].execute.call(this, i));
			} else if (syncroMsp.resource === 'rmm') {
				operationResult.push(...await rmm[syncroMsp.operation].execute.call(this, i));
			}
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				throw new NodeApiError(this.getNode(), err);
			}
		}
	}

	return [operationResult];
}
