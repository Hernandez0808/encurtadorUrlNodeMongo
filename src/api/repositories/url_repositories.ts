import mongoose from 'mongoose';
import { Url } from '../models/url_model';
// import ConexaoDB from './conxao_global_repositories';


class UrlRepository {

  constructor() { }
  Urls = mongoose.model('Urls');

  async getUrlEncurtadaByHash(hash:string): Promise<any> {
    const result = await this.Urls.find({hash:hash});
    return result[0];
  }

  async createUrl(data:Url):Promise<any>{
    let url = await new this.Urls(data);
    await url.save();
    return data.url_encurtada;
  }
}

export default UrlRepository;



