import { IsDate, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsDate()
  dateStart: string;

  @IsDate()
  dateEnd: string;

  @IsNumber()
  plan: number;

  @IsNumber()
  vehicle: number;
}
