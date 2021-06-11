import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import { CreatePlanDto } from './dto/create-plan.dto';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,
  ) {}

  create(createPlanDto: CreatePlanDto) {
    return this.planRepository.create(createPlanDto);
  }

  findAll() {
    return this.planRepository.find();
  }

  findOne(id: number) {
    return this.planRepository.find({ id });
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.planRepository.update({ id }, updatePlanDto);
  }

  remove(id: number) {
    return this.planRepository.delete({ id });
  }
}
