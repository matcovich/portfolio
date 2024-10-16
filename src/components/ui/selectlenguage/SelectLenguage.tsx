import { Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';

import { useTranslations } from 'next-intl';
export const SelectLenguage = () => {
    const t = useTranslations("Menu");
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
            <DropdownMenu  disabledKeys={["edit", "delete"]}>
                <DropdownItem key="es" href='/es'>{t('es')}</DropdownItem>
                <DropdownItem key="edit" href='/en'>{t('en')}</DropdownItem>
                <DropdownItem key="edit">{t('zc')}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
