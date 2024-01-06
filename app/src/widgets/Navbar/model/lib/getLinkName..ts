export function getLinkName(str:string): string {
    if (str === '/') {
        return 'Дашборд: Анализ заявок компании';
    }
    if (str === '/my_bid') {
        return 'Мои заявки';
    }
    if (str === '/new_bid') {
        return 'Новая заявка';
    }
    if (str === '/approve_bid') {
        return 'Согласованные заявки';
    }
    if (str === '/rejected_bid') {
        return 'Отклоненные заявки';
    }
    return '';
}
