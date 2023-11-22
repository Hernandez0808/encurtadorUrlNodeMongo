import { Request, Response, NextFunction } from 'express';
import UrlRepository from '../repositories/url_repositories';
import ValidationContract from '../../validator';
import UrlService from '../services/url_service';


const repository = new UrlRepository();
class ProdutosController {

    UrlService: UrlService
    constructor() {
        this.UrlService = new UrlService();
    }

    getUrlByHash = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hash = req.params.hash;

            const objUrl = await repository.getUrlEncurtadaByHash(hash);

            return res.redirect(301, objUrl.url_original)

        } catch (error) {
            console.log(error)
            return res.status(500).send({
                message: 'Erro ao buscar urls.',
                error: error
            });
        }
    }
    
    postUrl = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const url_original: string = req.body.url_original;

            const contract = new ValidationContract();

            await contract.clear();

            await contract.isRequired(url_original, 'url_original é obrigatório');

            await contract.isString(url_original, 'url_original dever ser uma string');

            await contract.isUrl(url_original, 'url_original deve ser uma url válida');

            const baseUrl = `${req.protocol}://${req.get('host')}`;

            if (!contract.isValid()) {
                return res.status(400).send(contract.errorList());
            }

            const objUrl = await this.UrlService.montaObjUrlEncurtada(baseUrl, url_original);

            const url_encurtada = await repository.createUrl(objUrl);
            // console.log(url_original);
            return res.status(201).json(url_encurtada);
        } catch (error) {
            // console.log(error)
            // return res.status(500).send({
            //     message: 'Erro ao buscar urls.',
            //     error: error
            // });
        }
    }
}

export default new ProdutosController();