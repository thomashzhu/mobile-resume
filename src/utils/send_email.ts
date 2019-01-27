import { Linking } from 'react-native';
import qs from 'qs';

export const sendEmail = async ({ to, subject, body }: { to: string, subject: string, body: string }) => {
    let url = `mailto:${to}`;

    const query = qs.stringify({ subject, body });

    if (query.length) url += `?${query}`;
    return Linking.openURL(url);
};
