import { IDataObject } from '@lhminh167/n8n-workflow';

export interface ITables {
	[key: string]: {
		[key: string]: IDataObject[];
	};
}
