import express, { Request, Response } from 'express';
import * as pricePerSquareMeterService from './pricesPerSquareMeters.service';
import {
  BasePricePerSquareMeter,
  PricePerSquareMeter,
} from './pricePerSquareMeter.interface';

export const pricesPerSquareMetersRouter = express.Router();

pricesPerSquareMetersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const items: PricePerSquareMeter[] =
      await pricePerSquareMeterService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

pricesPerSquareMetersRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: PricePerSquareMeter = await pricePerSquareMeterService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send('item not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});

pricesPerSquareMetersRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: PricePerSquareMeter = req.body;

    const existingItem: PricePerSquareMeter =
      await pricePerSquareMeterService.find(id);

    if (existingItem) {
      const updatedItem = await pricePerSquareMeterService.update(
        id,
        itemUpdate,
      );
      return res.status(200).json(updatedItem);
    }

    res.status(404).send('item not found');
  } catch (e) {
    res.status(500).send(e.message);
  }
});
