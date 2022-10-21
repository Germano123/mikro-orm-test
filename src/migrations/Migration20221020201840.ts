import { Migration } from '@mikro-orm/migrations';

export class Migration20221020201840 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "Users" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "firstname" varchar(255) not null, "lastname" varchar(255) null, "role" text check ("role" in (\'Super Admin\', \'School Admin\', \'Supervisor\', \'User\')) not null, constraint "Users_pkey" primary key ("id"));');

    this.addSql('create table "SchoolAdmins" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "firstname" varchar(255) not null, "lastname" varchar(255) null, "role" text check ("role" in (\'Super Admin\', \'School Admin\', \'Supervisor\', \'User\')) not null, constraint "SchoolAdmins_pkey" primary key ("id"));');

    this.addSql('create table "Schools" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "adminstrator_id" uuid not null, constraint "Schools_pkey" primary key ("id"));');
    this.addSql('alter table "Schools" add constraint "Schools_adminstrator_id_unique" unique ("adminstrator_id");');

    this.addSql('create table "SuperAdmins" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "firstname" varchar(255) not null, "lastname" varchar(255) null, "role" text check ("role" in (\'Super Admin\', \'School Admin\', \'Supervisor\', \'User\')) not null, constraint "SuperAdmins_pkey" primary key ("id"));');

    this.addSql('create table "Supervisors" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "firstname" varchar(255) not null, "lastname" varchar(255) null, "role" text check ("role" in (\'Super Admin\', \'School Admin\', \'Supervisor\', \'User\')) not null, constraint "Supervisors_pkey" primary key ("id"));');

    this.addSql('create table "schools_supervisors" ("school_entity_id" uuid not null, "supervisor_entity_id" uuid not null, constraint "schools_supervisors_pkey" primary key ("school_entity_id", "supervisor_entity_id"));');

    this.addSql('create table "user_entity" ("id" uuid not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "firstname" varchar(255) not null, "lastname" varchar(255) null, "role" text check ("role" in (\'Super Admin\', \'School Admin\', \'Supervisor\', \'User\')) not null, constraint "user_entity_pkey" primary key ("id"));');

    this.addSql('alter table "Schools" add constraint "Schools_adminstrator_id_foreign" foreign key ("adminstrator_id") references "SchoolAdmins" ("id") on update cascade;');

    this.addSql('alter table "schools_supervisors" add constraint "schools_supervisors_school_entity_id_foreign" foreign key ("school_entity_id") references "Schools" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "schools_supervisors" add constraint "schools_supervisors_supervisor_entity_id_foreign" foreign key ("supervisor_entity_id") references "Supervisors" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "Schools" drop constraint "Schools_adminstrator_id_foreign";');

    this.addSql('alter table "schools_supervisors" drop constraint "schools_supervisors_school_entity_id_foreign";');

    this.addSql('alter table "schools_supervisors" drop constraint "schools_supervisors_supervisor_entity_id_foreign";');

    this.addSql('drop table if exists "Users" cascade;');

    this.addSql('drop table if exists "SchoolAdmins" cascade;');

    this.addSql('drop table if exists "Schools" cascade;');

    this.addSql('drop table if exists "SuperAdmins" cascade;');

    this.addSql('drop table if exists "Supervisors" cascade;');

    this.addSql('drop table if exists "schools_supervisors" cascade;');

    this.addSql('drop table if exists "user_entity" cascade;');
  }

}
