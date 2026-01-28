import {
  Body,
  Delete,
  Get,
  Module,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
