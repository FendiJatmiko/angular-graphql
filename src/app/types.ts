export type Question = {
    question: string;
}

export type Query = {
    quest: Question;
}

export default class Auth{
    public iduser: string = '';
    public username: string;
    public password: string;
    public phonenumber: string;
    public idmerchan: string = '';

};