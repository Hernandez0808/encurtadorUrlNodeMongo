import UrlRepository from "../repositories/url_repositories";
import { Url } from "../models/url_model";
import * as crypto from 'crypto-js';

class UrlService {
  UrlRepository = new UrlRepository();

  async montaObjUrlEncurtada(url_req:string, url_original:string):Promise<Url> {
    let objUrl = {} as Url;
    const md5Hash = crypto.MD5(url_original).toString();
    const dt_criacao = new Date();

    objUrl.url_original = url_original;
    objUrl.url_encurtada = url_req + '/' + md5Hash;
    objUrl.dt_criacao = dt_criacao.toISOString().slice(0, 19).replace('T', ' ');
    objUrl.hash = md5Hash;

    return objUrl;
  }
}


export default UrlService;
