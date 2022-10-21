import { v4 } from 'uuid';
import { t, PrimaryKey, Property } from "@mikro-orm/core";

export abstract class AbstractEntity {
    @PrimaryKey({ name: 'id', type: t.uuid })
    id = v4();

    @Property()
    createdAt: Date = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}