export const toThaiDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
}