// Exemplo usando fetch para retornar dados fictícios

export const fetchItems = async () => {
    // Simulação de dados
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'Item 1', description: 'Descrição do Item 1' },
                { id: 2, title: 'Item 2', description: 'Descrição do Item 2' },
                { id: 3, title: 'Item 3', description: 'Descrição do Item 3' },
            ]);
        }, 1000);
    });
};
