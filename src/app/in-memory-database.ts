import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: "Moradia", description: "Pagamentos de contas da casa" },
            { id: 2, name: "Saúde", description: "Plano de saúde e remédios" },
            { id: 3, name: "Lazer", description: "cinema, parque, praia" },
            { id: 4, name: "Salário", description: "Recebimento de salário" }
        ];

        const entries: Entry[] = [
            { id: 1, name: "Gás de cozinha", description: "teste", type: "expensive", amount: "70,00", date: "10/01/2019", paid: true, categoryId: categories[0].id, category: categories[0] } as Entry

        ];

        return { categories, entries };
    }
}
