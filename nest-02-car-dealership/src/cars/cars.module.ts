import { Get, Module, Param } from '@nestjs/common';
import { CarsController } from './cars.controller';

@Module({
  controllers: [CarsController],
})
export class CarsModule {
  private cars = ['Toyota', 'Honda', 'Jeep'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.cars[id];
  }
}
