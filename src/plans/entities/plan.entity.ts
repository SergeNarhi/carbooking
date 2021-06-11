import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maxDistance: number;

  @Column()
  price: string;

  @OneToMany(() => Booking, (booking) => booking.plan)
  bookings: Booking[];
}
