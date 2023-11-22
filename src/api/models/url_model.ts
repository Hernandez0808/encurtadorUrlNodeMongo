import mongoose from 'mongoose'; // Importe mongoose corretamente

const Schema = mongoose.Schema;

const schema = new Schema({
   url_encurtada:String,
   url_original:String,
   dt_criacao:String,
   hash:String,
});

export interface Url {
   url_encurtada:string,
   url_original:string,
   dt_criacao:string,
   hash:string
}

exports.module = mongoose.model('Urls', schema);