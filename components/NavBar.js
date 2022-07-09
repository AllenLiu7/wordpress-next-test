import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavBar() {
    const { locale, locales, asPath } = useRouter();

    return (
        <>
            <div>NavBar</div>
            <ul>
                {locales.map((locale) => {
                    return (
                        <div key={locale}>
                            <Link href={asPath} locale={locale}>
                            {locale.toUpperCase()}</Link>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}
