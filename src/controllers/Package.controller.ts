import { Request, Response } from 'express';
import mapStatusHTTP from '../util/mapper';
import PackageService from '../services/Package.service';

async function upDate(req: Request, res: Response) {
  const { body } = req;
  const { id } = req.params;
  const response = await PackageService.upDate(Number(id), body);
  if (response.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(response.status)).json({ message: response.message });
  }

  return res.status(mapStatusHTTP(response.status)).json(response.message);
}

async function packageDelete(req: Request, res: Response) {
  const { id } = req.params;
  const response = await PackageService.packageDelete(Number(id));
  return res.status(mapStatusHTTP(response.status)).json({ message: response.message });
}

export default {
  upDate,
  packageDelete,
};