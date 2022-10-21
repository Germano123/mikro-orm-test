import { Factory, Faker } from "@mikro-orm/seeder";
import { ERoleType } from "../../src/constants/role-type.enum";
import { SupervisorEntity } from "../../src/modules/user/entities/supervisor.entity";

export class SupervisorFactory extends Factory<SupervisorEntity> {
    model = SupervisorEntity;

    protected definition(faker: Faker): Partial<SupervisorEntity> {
        return {
            firstname: faker.name.fullName(),
            role: ERoleType.SUPERVISOR
        }
    }

}