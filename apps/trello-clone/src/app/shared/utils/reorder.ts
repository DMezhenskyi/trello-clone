import { Update } from '@ngrx/entity';

import { Entity } from './../entity/entity.model';
import { Reordable } from './../entity/reordable.model';

export function reorderStoreEntities<T extends Entity & Reordable>(
  entities: T[]
): Update<Pick<T, 'order'>>[] {
  return entities.map(({ id }, order) => ({ id, changes: { order } }));
}
