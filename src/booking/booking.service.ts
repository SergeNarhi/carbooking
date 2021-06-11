import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { MoreThan } from 'typeorm/browser';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepository.create(createBookingDto);
  }

  findAll() {
    return this.bookingRepository.find();
  }

  findOne(id: number) {
    return this.bookingRepository.find({ id });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepository.update({ id }, updateBookingDto);
  }

  remove(id: number) {
    return this.bookingRepository.delete({ id });
  }

  async checkAvailability(
    createBookingDto: CreateBookingDto,
  ): Promise<boolean> {
    const startDate = new Date(createBookingDto.dateStart);
    const endDate = new Date(createBookingDto.dateEnd);

    const startDayOfWeek = startDate.getDay();
    const endDayOfWeek = endDate.getDay();

    if (
      startDayOfWeek === 1 ||
      startDayOfWeek === 6 ||
      endDayOfWeek === 1 ||
      endDayOfWeek === 6
    ) {
      return false;
    }
    // не выходной
    // 3 дня от ближайшего бронирования
    const bookings = await this.bookingRepository.find({
      where: [
        {
          dateEnd: MoreThan(startDate.setDate(startDate.getDate() - 3)),
          dateStart: LessThan(startDate.setDate(startDate.getDate() - 3)),
        },
        {
          dateEnd: MoreThan(startDate.setDate(startDate.getDate() + 3)),
          dateStart: LessThan(startDate.setDate(startDate.getDate() + 3)),
        },
      ],
    });

    return !bookings.length;
  }

  async estimate(createBookingDto: CreateBookingDto) {
    const available = await this.checkAvailability(createBookingDto);
    if (!available) {
      return { available };
    }
    // todo
    //    check aviability
    //    get plan
    //    get days
    //    calculate sale
    return this.bookingRepository.create(createBookingDto);
  }
}
