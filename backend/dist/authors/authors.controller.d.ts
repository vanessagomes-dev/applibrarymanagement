import { AuthorsService } from './authors.service';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(authorData: any): Promise<import("./author.entity").Author>;
    findAll(): Promise<import("./author.entity").Author[]>;
    findOne(id: number): Promise<import("./author.entity").Author>;
    update(id: number, updateData: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
