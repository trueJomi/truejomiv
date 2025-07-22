export function formatPhoneNumber(phone: string): string {
    const country = phone.split('+51')[1] || phone;
    const cleaned = country.replace(/\D/g, '');
    const spaced = cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    return `+51 ${spaced}`;

}