import { Package } from '../types/Package';
import PackageModel, { PackageImputOptional } from '../database/models/Package.model';
import { ServiceResponse } from '../types/Response';

async function upDate(id: number, body: PackageImputOptional): Promise<ServiceResponse<Package>> {
  const [affectedCount] = await PackageModel
    .update(body, { where: { id } });

  if (affectedCount === 0) {
    return { status: 'NOT_FOUND', message: 'Pacote não encontrado!' };
  }

  return { status: 'SUCCESSFUL', message: { id, ...body } };
}

async function packageDelete(id: number): Promise<ServiceResponse<string>> {
  const affectedCount = await PackageModel.destroy({ where: { id } });
  
  if (affectedCount === 0) {
    return { status: 'NOT_FOUND', message: 'Pacote não encontrado!' };
  }
  return { status: 'DELETED', message: 'package deleted' };
}

export default {
  upDate,
  packageDelete,
};
