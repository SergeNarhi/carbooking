import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.create(createVehicleDto);
  }

  findAll() {
    return this.vehicleRepository.find();
  }

  findOne(id: number) {
    return this.vehicleRepository.find({ id });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleRepository.update({ id }, updateVehicleDto);
  }

  remove(id: number) {
    return this.vehicleRepository.delete({ id });
  }
}
