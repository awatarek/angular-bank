export class IndividualUser {
    public guid: string;
    public firstName: string;
    public lastName: string;
    public accounts: Account[];
}

export class Account{
    public owner_guid: string[];
    public IBAN: string;
    public IBAN_COUNTRY: string;
    public current_balance: number;
    public account_type: AccountType;
    public transation_history: TransationHistory[];
}

export enum AccountType{
    Individual,
    Business,
    Saving,
    Investing
}

export class TransationHistory{
    public tid: string;
    public ammount: number;
    public IBAN_from: string;
    public IBAN_to: string;
    public transaction_type: TransationType;
}

export enum TransationType{
    invoice,
    expense
}