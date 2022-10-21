import { Factory, Faker } from "@mikro-orm/seeder";
import { SchoolEntity } from "../../src/modules/school/entities/school.entity";

export class SchoolFactory extends Factory<SchoolEntity> {
    model = SchoolEntity;

    protected definition(faker: Faker): Partial<SchoolEntity> {
        return {
            name: `School ${faker.name.fullName()} ${faker.name.lastName()}`,
        }
    }
    
}