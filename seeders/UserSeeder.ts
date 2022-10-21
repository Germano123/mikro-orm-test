import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { CommonUserFactory } from './factories/common-user.factory';
import { SchoolAdminFactory } from './factories/school-admin-user.factory';
import { SuperAdminFactory } from './factories/super-admin-user.factory';
import { SupervisorFactory } from './factories/supervisor-user.factory';

export class UserSeeder extends Seeder {

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    // common users
    context.users = [];
    context.users = new CommonUserFactory(em).make(8);

    // supervisors
    // context.supervisors = [];
    // context.supervisors = new SupervisorFactory(em).make(4);

    // school admin
    // context.schooladmins = [];
    // context.schooladmins = new SchoolAdminFactory(em).make(3);

    // super admin
    context.superadmins = [];
    context.superadmins = new SuperAdminFactory(em).make(2);
  }

}
