import {Module} from "@nestjs/common";
import {InfrastructureModule} from "../infrastructure/infrastructure.module";
import {Brand} from "../domain/entity/brand.entity";
import {RegisterBrandService} from "./register.brand.service";
import {RegisterCategoryService} from "./register.category.service";
import {RegisterProviderService} from "./register.provider.service";
import {SearchBrandService} from "./search.brand.service";
import {SearchCategoryService} from "./search.category.service";
import { SearchProviderService } from './search.provider.service';
import {RegisterProductService} from "./register.product.service";
import {RegisterProductInputService} from "./register.product.input.service";
import {RegisterProductOutputService} from "./register.product.output.service";
import {SearchProductService} from "./search.product.service";
import {UpdateProductService} from "./update.product.service";
import { UpdateCategoryService } from './update.category.service';
import { UpdateBrandService } from './update.brand.service';
import {RegisterClientService} from "./register.client.service";

@Module({
    imports: [
        Brand,
        InfrastructureModule,
        RegisterBrandService,
        RegisterCategoryService,
        RegisterProviderService,
        RegisterProductService,
        RegisterProductInputService,
        RegisterProductOutputService,
        RegisterClientService,
        SearchBrandService,
        SearchCategoryService,
        SearchProviderService,
        SearchProductService,
        UpdateProductService,
        UpdateCategoryService
    ],
    exports:[
        RegisterBrandService,
        RegisterCategoryService,
        RegisterProviderService,
        RegisterProductService,
        RegisterProductInputService,
        RegisterProductOutputService,
        RegisterClientService,
        SearchBrandService,
        SearchCategoryService,
        SearchProviderService,
        SearchProductService,
        UpdateProductService,
        UpdateCategoryService
    ]
})
export class ApplicationModule{}