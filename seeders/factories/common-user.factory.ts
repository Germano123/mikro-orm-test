import { Factory, Faker } from "@mikro-orm/seeder";
import { ERoleType } from "../../src/constants/role-type.enum";
import { CommonUserEntity } from "../../src/modules/user/entities/common-user.entity";

export class CommonUserFactory extends Factory<CommonUserEntity> {
    model = CommonUserEntity;

    protected definition(faker: Faker): Partial<CommonUserEntity> {
        return {
            firstname: faker.name.fullName(),
            role: ERoleType.USER
        }
    }

}