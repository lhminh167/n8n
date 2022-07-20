import {
    IDataObject
} from '@lhminh167/n8n-workflow';

export interface IData {
	data: [
		{
			id: string,
		},
	];
}

export interface IRelation {
	data: [
		{
			relationships: {
				identities: IData,
				member: IData,
			},
		},
	];
	included: IDataObject[];
}
