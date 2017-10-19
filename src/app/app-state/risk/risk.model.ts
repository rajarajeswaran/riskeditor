export interface Risk {
  PolicyId : string;
  Description: string;
  GUID: string;
  Insured: Insured;
  AnalysisCodes: AnalysisCode[];
  AccountYear:number;
  Currency:string;
  Underwriter: Underwriter;
  Domicile:string;
  PolicyStatus:string;
}

export interface Insured{
  InsuredId: number;
  InsuredName: string;
  InsuredType: string
}


export interface AnalysisCode{
  Code: string;
  Type: string;
  Description: string;
}


/*
{
				"Code": "LON",
				"Type": "ORIGOFF",
				"Description": "London"
}

{
				"Code": "LON",
				"Type": "INTROFFICE",
				"Description": "London"
}
{
				"Code": "NA",
				"Type": "NONLONBKR",
				"Description": "Not Applicable"
}
{
				"Code": "UK",
				"Type": "DOMICILE",
				"Description": "UNITED KINGDOM"
}
{
				"Code": "SILENT",
				"Type": "CYBER",
				"Description": "Silent"
}
 */
export interface Underwriter{
  Code:  string;
  Name:  string;
}

export interface Broker {
  BrokerPseudonym: string;
  BrokerSequenceId: number;
  BrokerNumber:  number;
  BrokerType: string;
  BrokerContactName: string;
  BrokerContactEmail: string;
  BrokerContactTelephoneNumber: string;
}

/*
{
				"BrokerPseudonym": "LMN",
				"BrokerSequenceId": 991,
				"BrokerNumber": "1235",
				"BrokerType": null,
				"BrokerContactName": "Ciara Appleford",
				"BrokerContactEmail": "Ciara.Appleford@mena.lockton.com",
				"BrokerContactTelephoneNumber": null
}
 */
