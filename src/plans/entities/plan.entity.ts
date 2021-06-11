import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Booking } from '../../booking/entities/booking.entity';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;

  @Column()
  maxDistance: number;

  @Column()
  price: string;

  @OneToMany(() => Booking, (booking) => booking.plan)
  bookings: Booking[];
}
