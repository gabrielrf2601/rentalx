import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificantionsRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificantionsRepository,
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
);

export { createSpecificationController };
