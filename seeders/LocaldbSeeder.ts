import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SchoolSeeder } from './SchoolSeeder';
import { UserSeeder } from './UserSeeder';

export class LocaldbSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    return this.call(em, [
      UserSeeder,
      SchoolSeeder,
    ]);
  }

}
