import {
    IExecuteFunctions,
    IExecuteSingleFunctions,
    ILoadOptionsFunctions
} from '@lhminh167/n8n-core';
import { IDataObject } from '@lhminh167/n8n-workflow';
import { IForm } from './FormInterface';
import { cockpitApiRequest } from './GenericFunctions';

export async function submitForm(this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, resourceName: string, form: IDataObject) {
	const body: IForm = {
		form,
	};

	return cockpitApiRequest.call(this, 'post', `/forms/submit/${resourceName}`, body);
}
