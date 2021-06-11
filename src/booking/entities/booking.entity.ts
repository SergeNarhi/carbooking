import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Plan } from '../../plans/entities/plan.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;

  @Column({ type: 'timestamp' })
  dateStart: string;

  @Column({ type: 'timestamp' })
  dateEnd: string;

  @ManyToOne(() => Plan, (plan) => plan.bookings)
  plan: Plan;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.bookings)
  vehicle: Vehicle;
}
