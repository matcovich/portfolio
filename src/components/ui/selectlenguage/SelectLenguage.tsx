'use client'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export const SelectLenguage = () => {
    const t = useTranslations('Menu');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    className='text-white lg:text-lg bg-transparent hover:text-orange-200'
                    variant="light"
                >
                    {t('idioma')}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                selectedKeys={[locale]}
                selectionMode="single"
                onAction={(key) => handleLocaleChange(key as string)}
            >
                <DropdownItem key="es">{t('es')}</DropdownItem>
                <DropdownItem key="en">{t('en')}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
