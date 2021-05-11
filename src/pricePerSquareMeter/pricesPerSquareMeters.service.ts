import {
  BasePricePerSquareMeter,
  PricePerSquareMeter,
} from './pricePerSquareMeter.interface';
import { PricesPerSquareMeters } from './pricesPerSquareMeters.interface';

let pricesPerSquareMeters: PricesPerSquareMeters = {
  1: {
    id: 1,
    name: 'Preço por Metro Quadrado',
    price: 599,
    description: 'preço por metro quadrado na cidade de Videira',
  },
};

export const findAll = async (): Promise<PricePerSquareMeter[]> =>
  Object.values(pricesPerSquareMeters);

export const find = async (id: number): Promise<PricePerSquareMeter> =>
  pricesPerSquareMeters[id];

export const update = async (
  id: number,
  itemUpdate: BasePricePerSquareMeter
): Promise<PricePerSquareMeter | null> => {
  const pricePerSqrMeter = await find(id);

  if (!pricePerSqrMeter) {
    return null;
  }

  pricesPerSquareMeters[id] = { id, ...itemUpdate };

  return pricesPerSquareMeters[id];
};
