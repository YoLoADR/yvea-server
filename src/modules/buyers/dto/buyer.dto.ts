import { ApiProperty } from '@nestjs/swagger';
import { Buyer } from '../entities';

export class BuyerDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  address: string;

  @ApiProperty({ name: 'postal_code' })
  postalCode: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  constructor(entity: Buyer) {
    this.id = entity.id;
    this.name = entity.name;
    this.email = entity.email;
    this.phone = entity.phone;
    this.address = entity.address;
    this.postalCode = entity.postalCode;
    this.city = entity.city;
    this.country = entity.country;
  }
}
