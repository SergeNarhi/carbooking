import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  vin: string;

  @Column()
  code: string;

  @OneToMany(() => Booking, (booking) => booking.plan)
  bookings: Booking[];
}
