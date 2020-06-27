export class Authres {
  access_token: string;
  expires_in: number;
  token_type: string;
  account:{
    company: string;
    country: string;
    email: string
    id: number;
    keep_updated: boolean;
    name: string;
    phone: string;
    score: number;
    title: string;
  }
}
