"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'https://cisev5-g8w8.vercel.app/',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Accept',
        credentials: true,
    });
    dotenv.config();
    const PORT = process.env.PORT || 8000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map