import { BasePricePerSquareMeter } from '../pricePerSquareMeter.interface';
import * as pricePerSquareMeterService from '../pricesPerSquareMeters.service';

describe('Price Per Square Meter Service', () => {
  it('should return the prices per square meter', async () => {
    const response = await pricePerSquareMeterService.findAll();
    expect(response).toEqual([
      {
        description: 'preço por metro quadrado na cidade de Videira',
        id: 1,
        name: 'Preço por Metro Quadrado',
        price: 2,
      },
    ]);
  });
  it('should return an updated price per square meter', async () => {
    const updateValues: BasePricePerSquareMeter = {
      name: 'Test Run',
      description: 'Test Description',
      price: 666,
    };

    const response = await pricePerSquareMeterService.update(1, updateValues);

    expect(response).toMatchObject(updateValues);
  });
});
