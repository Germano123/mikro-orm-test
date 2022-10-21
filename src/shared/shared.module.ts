import { Module } from "@nestjs/common";
import { ApiConfigService } from "./services/api-config.service";

const providers = [
    ApiConfigService,
];

@Module({
    imports: [],
    controllers: [],
    providers,
    exports: [ ...providers ],
})
export class SharedModule {}