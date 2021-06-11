import {
  Column,
  Entity, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId
} from "typeorm";
import { Plan } from '../../plans/entities/plan.entity';
import { Vehicle } from "../../vehicles/entities/vehicle.entity";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateStart: string;

  @Column()
  dateEnd: string;

  @ManyToOne(() => Plan, (plan) => plan.bookings)
  plan: Plan;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.bookings)
  vehicle: Vehicle;
}
