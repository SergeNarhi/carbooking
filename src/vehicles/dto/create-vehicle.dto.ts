import { IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  vin: string;

  @IsString()
  code: string;
}
