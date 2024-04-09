import { Demo } from '@/types';

export const PageService = {

    getPages() {
        return fetch('/demo/data/pages.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as Demo.Product[]);
    }

};
