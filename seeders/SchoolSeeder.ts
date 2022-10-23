import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SchoolFactory } from './factories/school.factory';
import { SchoolAdminFactory } from './factories/school-admin-user.factory';
import { SupervisorFactory } from './factories/supervisor-user.factory';

export class SchoolSeeder extends Seeder {

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.schools = [];
    context.schools = new SchoolFactory(em).each(school => {
      school.adminstrator = new SchoolAdminFactory(em).makeOne().id;
      school.supervisors.set(new SupervisorFactory(em).make(3));
    }).make(2);
  }
}
