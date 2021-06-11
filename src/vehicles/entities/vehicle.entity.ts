import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Booking } from '../../booking/entities/booking.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;

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
